import React, { useContext, useState } from "react";
import {
  BtnBold,
  BtnBulletList,
  BtnClearFormatting,
  BtnItalic,
  BtnLink,
  BtnNumberedList,
  BtnStrikeThrough,
  BtnStyles,
  BtnUnderline,
  Editor,
  EditorProvider,
  HtmlButton,
  Separator,
  Toolbar,
} from "react-simple-wysiwyg";
import { Button } from "../../../components/ui/button";
import { Brain, LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "../../../context/ResumeInfoContext";
import { toast } from "sonner";
import { generateContent } from "../../../../service/AiModel";

const PROMPT = `Given the position title: "{positionTitle}", return a JSON with the structure:
{
  "experienceLevel": "Fresher" | "Mid-Level" | "Experienced",
  "summary": "HTML formatted bullet points for this position (5-7 points in proper HTML list format)"
}`;

function RichTextEditor({ onRichTextEditorChange, index }) {
  const [value, setValue] = useState('<ul><li>Developed and maintained web applications using React, Node.js</li></ul>');
  const [aiLoading, setAiLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);

  const GenerateSummaryFromAi = async () => {
    if (!resumeInfo?.experience?.[index]?.title) {
      toast.error('Please Add Position Title');
      return;
    }

    setAiLoading(true);
    try {
      const prompt = PROMPT.replace('{positionTitle}', resumeInfo.experience[index].title);
      const result = await generateContent(prompt);
      
      if (result?.summary) {
        setValue(result.summary);
        // Create a synthetic event to pass to the parent
        const syntheticEvent = {
          target: {
            value: result.summary,
            name: 'workSummary'
          }
        };
        onRichTextEditorChange(syntheticEvent, 'workSummary', index);
        toast.success("AI-generated bullet points added");
      } else {
        throw new Error("No summary returned from AI");
      }
    } catch (error) {
      console.error("AI generation failed:", error);
      toast.error("Failed to generate bullet points. Please try again.");
    } finally {
      setAiLoading(false);
    }
  };

  const handleEditorChange = (e) => {
    setValue(e.target.value);
    onRichTextEditorChange(e, 'workSummary', index);
  };

  return (
    <div>
      <div className="flex justify-between my-2">
        <label className="text-xs">Work Summary</label>
        <Button
          variant="outline"
          size="sm"
          onClick={GenerateSummaryFromAi}
          className="flex gap-2 border-primary text-primary"
          disabled={aiLoading}
        >
          {aiLoading ? (
            <LoaderCircle className="h-4 w-4 animate-spin" />
          ) : (
            <>
              <Brain className="h-4 w-4" /> Generate from AI
            </>
          )}
        </Button>
      </div>
      <EditorProvider>
        <Editor
          value={value}
          onChange={handleEditorChange}
        >
          <Toolbar>
            <BtnBold />
            <Separator />
            <BtnItalic />
            <Separator />
            <BtnUnderline />
            <Separator />
            <BtnStrikeThrough />
            <Separator />
            <BtnNumberedList />
            <BtnBulletList />
            <Separator />
            <BtnLink />
            <Separator />
          </Toolbar>
        </Editor>
      </EditorProvider>
    </div>
  );
}

export default RichTextEditor;