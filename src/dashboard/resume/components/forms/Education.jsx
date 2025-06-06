import React, { useContext, useEffect, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Textarea } from "../../../../components/ui/textarea";
import { LoaderCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";

function Education() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [educationList, setEducationList] = useState([
    {
      universityName: "",
      major: "",
      degree: "",
      startDate: "",
      endDate: "",
      description: "",
    },
  ]);

  const handleChange = (event, index) => {
    const newEntries = educationList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setEducationList(newEntries);
  };

  const AddNewEducation = () => {
    setEducationList([
      ...educationList,
      {
        universityName: "",
        major: "",
        degree: "",
        startDate: "",
        endDate: "",
        description: "",
      },
    ]);
  };

  const RemoveEducation = () => {
    setEducationList((educationList) => educationList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        education: educationList,
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast("Details updated!");
      })
      .catch(() => {
        setLoading(false);
        toast("Server Error, Please try again!");
      });
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      education: educationList,
    });
  }, [educationList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Education</h2>
      <p>Add your Education details</p>

      {/*  Render EducationList */}
      <div>
        {educationList.map((item, index) => (
          <div>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5">
              <div className="col-span-2">
                <label>University Name</label>
                <Input
                  name="universityName"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Major</label>
                <Input name="major" onChange={(e) => handleChange(e, index)} />
              </div>
              <div>
                <label>Degree</label>
                <Input name="degree" onChange={(e) => handleChange(e, index)} />
              </div>
              <div>
                <label>start Date</label>
                <Input
                  name="startDate"
                  type="date"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>End Date</label>
                <Input
                  name="endDate"
                  type="date"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div className="col-span-2">
                <label>Description</label>
                <Textarea
                  name="description"
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
            onClick={AddNewEducation}
            className="text-primary"
          >
            + Add More Education
          </Button>
          <Button
            variant="outline"
            onClick={RemoveEducation}
            className="text-primary"
            disabled={educationList.length <= 1}
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
  );
}

export default Education;
