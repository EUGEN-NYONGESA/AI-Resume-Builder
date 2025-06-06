import React, { useContext, useEffect, useState } from "react";
import { Input } from "../../../../components/ui/input";
import { LoaderCircle } from "lucide-react";
import { Button } from "../../../../components/ui/button";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { useParams } from "react-router-dom";

function SocialProfiles() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [socialProfileList, setSocialProfileList] = useState([
    {
      platform: "",
      url: "",
    },
  ]);

  const AddSocialMediaAccountant = () => {
    setSocialProfileList([
      ...socialProfileList,
      {
        platform: "",
        url: "",
      },
    ]);
  };

  const RemoveSocialMediaAccountant = () => {
    setSocialProfileList((prev) => prev.slice(0, -1));
  };

  const handleChange = (event, index) => {
    const newEntries = [...socialProfileList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setSocialProfileList(newEntries);
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        socialProfiles: socialProfileList,
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast("Certificates added!");
      })
      .catch(() => {
        setLoading(false);
        toast("Server Error, Please try again!");
      });
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      socialProfiles: socialProfileList,
    });
  }, [socialProfileList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Social Media Profiles</h2>
      <p>Add your social media profiles</p>

      <div>
        {socialProfileList.map((item, index) => (
          <div key={index}>
            <div className="grid grid-cols-2 gap-3 border p-3 my-5">
              <div>
                <label>Platform</label>
                <Input
                  name="platform"
                  value={item.platform}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Link</label>
                <Input
                  name="url"
                  value={item.url}
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
            onClick={AddSocialMediaAccountant}
            className="text-primary"
          >
            + Add Social Profile
          </Button>
          <Button
            variant="outline"
            onClick={RemoveSocialMediaAccountant}
            className="text-primary"
            disabled={socialProfileList.length <= 1}
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

export default SocialProfiles;
