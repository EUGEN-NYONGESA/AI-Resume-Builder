import { LoaderCircle, Phone } from "lucide-react";
import React, { useContext, useEffect, useState } from "react";
import { useParams } from "react-router-dom";
import GlobalApi from "../../../../../service/GlobalApi";
import { toast } from "sonner";
import { Button } from "../../../../components/ui/button";
import { Input } from "../../../../components/ui/input";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";

function Referee() {
  const [loading, setLoading] = useState(false);
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const params = useParams();
  const [refereesList, setRefereesList] = useState([
    {
      name: "",
      company: "",
      position: "",
      email: "",
      phone: "",
    },
  ]);

  const handleChange = (event, index) => {
    const newEntries = refereesList.slice();
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setRefereesList(newEntries);
  };

  const AddNewReferee = () => {
    setRefereesList([
      ...refereesList,
      {
        name: "",
        company: "",
        position: "",
        email: "",
        phone: "",
      },
    ]);
  };

  const RemoveReferee = () => {
    setRefereesList((refereesList) => refereesList.slice(0, -1));
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        referees: refereesList,
      },
    };

    GlobalApi.UpdateResumeDetail(params.resumeId, data)
      .then((resp) => {
        console.log(resp);
        setLoading(false);
        toast("Referee added!");
      })
      .catch(() => {
        setLoading(false);
        toast("Server Error, Please try again!");
      });
  };

  useEffect(() => {
    setResumeInfo({
      ...resumeInfo,
      referees: refereesList,
    });
  }, [refereesList]);
  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Referess</h2>
      <p>Add Referees</p>

      <div>
        {refereesList.map((item, index) => (
          <div>
            <div className="grid gap-3 border p-3 my-5">
              <div>
                <label>Name</label>
                <Input name="name" onChange={(e) => handleChange(e, index)} />
              </div>
              <div>
                <label>Company</label>
                <Input
                  name="company"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Position</label>
                <Input
                  name="position"
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Email</label>
                <Input name="email" onChange={(e) => handleChange(e, index)} />
              </div>
              <div>
                <label>Phone</label>
                <Input name="phone" onChange={(e) => handleChange(e, index)} />
              </div>
            </div>
          </div>
        ))}
      </div>
      <div className="flex justify-between">
        <div className="flex gap-2">
          <Button
            variant="outline"
            onClick={AddNewReferee}
            className="text-primary"
          >
            + Add Referee
          </Button>
          <Button
            variant="outline"
            onClick={RemoveReferee}
            className="text-primary"
            disabled={refereesList.length <= 1}
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

export default Referee;
