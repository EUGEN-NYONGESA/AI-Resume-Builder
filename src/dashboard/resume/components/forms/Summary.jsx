import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Textarea } from "../../../../components/ui/textarea";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { Brain, LoaderCircle } from "lucide-react";
import { generateContent } from "../../../../../service/AiModel";

const prompt = `Given the Job Title: "{jobTitle}", return a JSON with the structure:
{
  "experienceLevel": "Fresher" | "Mid-Level" | "Experienced",
  "summary": "A short 4-5 line summary tailored to the job title"
}`;

function Summary({ enabledNext }) {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [summary, setSummary] = useState(resumeInfo?.summary || "");
  const [loading, setLoading] = useState(false);
  const [aiLoading, setAiLoading] = useState(false);
  const [aiGeneratedSummaryList, setAiGeneratedSummaryList] = useState([]);
  const params = useParams();

  useEffect(() => {
    if (summary) {
      setResumeInfo({
        ...resumeInfo,
        summary: summary,
      });
    }
  }, [summary]);

  const GenerateSummaryFromAI = async () => {
    if (!resumeInfo?.jobTitle) {
      toast.error("Please enter a job title first");
      return;
    }

    setAiLoading(true);
    try {
      const PROMPT = prompt.replace("{jobTitle}", resumeInfo.jobTitle);
      const result = await generateContent(PROMPT);

      // Ensure the response is in correct format
      if (!result || typeof result !== "object") {
        throw new Error("Invalid response format from AI");
      }

      setAiGeneratedSummaryList((prev) => [...prev, result]);
      setSummary(result.summary);
      toast.success("AI summary generated");
    } catch (error) {
      console.error("AI generation failed:", error);
      toast.error(
        error.message.includes("API key")
          ? "API key not configured. Please contact support."
          : error.message.includes("Invalid response")
          ? "Received unexpected format from AI"
          : "Failed to generate summary. Please try again."
      );
    } finally {
      setAiLoading(false);
    }
  };

  const onSave = (e) => {
    e.preventDefault();
    if (!summary.trim()) {
      toast.error("Summary cannot be empty");
      return;
    }

    setLoading(true);
    const data = {
      data: {
        summary: summary,
      },
    };

    GlobalApi.UpdateResumeDetail(params?.resumeId, data)
      .then((resp) => {
        enabledNext(true);
        toast.success("Summary updated successfully");
      })
      .catch((error) => {
        console.error("Update failed:", error);
        toast.error("Failed to update summary");
      })
      .finally(() => setLoading(false));
  };

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Professional Summary</h2>
        <p>Add Summary for your job title</p>

        <form className="mt-7" onSubmit={onSave}>
          <div className="flex justify-between items-end">
            <label>Add Summary</label>
            <Button
              variant="outline"
              onClick={GenerateSummaryFromAI}
              type="button"
              size="sm"
              className="border-primary text-primary flex gap-2"
              disabled={aiLoading || !resumeInfo?.jobTitle}
            >
              {aiLoading ? (
                <LoaderCircle className="w-4 h-4 animate-spin" />
              ) : (
                <>
                  <Brain className="w-4 h-4" />
                  Generate from AI
                </>
              )}
            </Button>
          </div>
          <Textarea
            className="mt-5"
            required
            value={summary}
            onChange={(e) => setSummary(e.target.value)}
            placeholder="Enter your professional summary"
          />
          <div className="mt-2 flex justify-end">
            <Button type="submit" disabled={loading || !summary.trim()}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </form>
      </div>

      {aiGeneratedSummaryList.length > 0 && (
        <div className="mt-6 p-5 bg-gray-50 rounded-lg">
          <h2 className="font-bold text-lg mb-3">AI Suggestions</h2>
          {aiGeneratedSummaryList.map((item, index) => (
            <div
              key={index}
              className="mb-4 p-3 border rounded-lg hover:bg-gray-100"
            >
              <div className="flex justify-between items-center mb-2">
                <span className="font-medium text-sm bg-blue-100 text-blue-800 px-2 py-1 rounded">
                  {item?.experienceLevel || "Not specified"}
                </span>
                <Button
                  variant="ghost"
                  size="sm"
                  onClick={() => setSummary(item.summary)}
                >
                  Use This
                </Button>
              </div>
              <p className="text-gray-700">{item?.summary}</p>
            </div>
          ))}
        </div>
      )}
    </div>
  );
}

export default Summary;
