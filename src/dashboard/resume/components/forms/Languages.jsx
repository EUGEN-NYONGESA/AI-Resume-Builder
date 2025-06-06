import { LoaderCircle } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input"; // Add this import
import { useParams } from "react-router-dom";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";

function Languages() {
  const [langaugeList, setLanguageList] = useState([
    {
      // Initialize with empty array
      name: "",
      fluency: "",
    },
  ]);
  const params = useParams();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false); // Changed to boolean

  const handleChange = (event, index) => {
    const newEntries = [...langaugeList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setLanguageList(newEntries);
  };

  const AddNewLanguage = () => {
    setLanguageList([
      ...langaugeList,
      {
        name: "",
        fluency: "",
      },
    ]);
  };

  const RemoveLangauge = () => {
    setLanguageList((prev) => prev.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        languages: langaugeList,
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast("Languages updated!");
      })
      .catch(() => {
        setLoading(false);
        toast("Server Error, Please try again!");
      });
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      languages: langaugeList,
    });
  }, [langaugeList]);

  return (
    <div>
      <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
        <h2 className="font-bold text-lg">Languages</h2>
        <p>Add your Langauges you speak</p>

        <div>
          {langaugeList.map((item, index) => (
            <div key={index} className="gap-3 border p-3 my-5">
              <div className="flex justify-between">
                <div>
                  <label>Name</label>
                  <Input
                    name="name"
                    value={item.name}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
                <div>
                  <label>Fluency</label>
                  <Input
                    name="fluency"
                    value={item.fluency}
                    onChange={(e) => handleChange(e, index)}
                  />
                </div>
              </div>
            </div>
          ))}
        </div>
        <div className="flex justify-between">
          <div className="flex gap-2">
            <Button
              variant="outline"
              onClick={AddNewLanguage}
              className="text-primary"
            >
              + Add Language
            </Button>
            <Button
              variant="outline"
              onClick={RemoveLangauge}
              className="text-primary"
              disabled={langaugeList.length <= 1}
            >
              - Remove
            </Button>
          </div>
          <div className="mt-3 flex justify-end">
            <Button type="submit" disabled={loading} onClick={() => onSave()}>
              {loading ? <LoaderCircle className="animate-spin" /> : "Save"}
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}

export default Languages;
