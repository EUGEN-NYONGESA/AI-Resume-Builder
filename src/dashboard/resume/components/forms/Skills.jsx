import React, { useContext, useEffect, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { Rating } from "@smastrom/react-rating";

import "@smastrom/react-rating/style.css";
import { Button } from "../../../../components/ui/button";
import { LoaderCircle } from "lucide-react";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";

function Skills() {
  const [loading, setLoading] = useState();
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const { resumeId } = useParams();
  const [sKillsList, setSKillsList] = useState([
    {
      name: "",
      rating: "",
    },
  ]);

  const handleChange = (index, name, value) => {
    const newEntries = sKillsList.slice();
    newEntries[index][name] = value;
    setSKillsList(newEntries);
  };

  const AddNewSkill = () => {
    setSKillsList([
      ...sKillsList,
      {
        name: "",
        rating: 0,
      },
    ]);
  };

  const RemoveSkill = () => {
    setSKillsList((sKillsList) => sKillsList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        skills: sKillsList,
      },
    };

    GlobalApi.UpdateResumeDetail(resumeId, data)
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
      skills: sKillsList,
    });
  }, [sKillsList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Skills</h2>
      <p>Add your top professional Key Skills</p>

      <div>
        {sKillsList.map((item, index) => (
          <div className="flex justify-between mb-2 border round-lg p-3">
            <div>
              <label className="text-xs">Name</label>
              <Input
                className="w-full"
                onChange={(e) => handleChange(index, "name", e.target.value)}
              />
            </div>
            <Rating
              style={{ maxWidth: 120 }}
              value={item.rating}
              onChange={(v) => handleChange(index, "rating", v)}
            />
          </div>
        ))}
      </div>
      <div className="flex gap-2">
        <Button
          variant="outline"
          onClick={AddNewSkill}
          className="text-primary"
        >
          + Add Skill
        </Button>
        <Button
          variant="outline"
          onClick={RemoveSkill}
          className="text-primary"
          disabled={sKillsList.length <= 1}
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
  );
}

export default Skills;
