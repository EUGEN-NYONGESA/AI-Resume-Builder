import React, { useContext, useEffect, useState } from "react";
import { Button } from "../../../../components/ui/button";
import { LoaderCircle } from "lucide-react";
import GlobalApi from "../../../../../service/GlobalApi";
import { useParams } from "react-router-dom";
import { toast } from "sonner";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import { Input } from "../../../../components/ui/input";

function Certifications() {
  const { resumeInfo, setResumeInfo } = useContext(ResumeInfoContext);
  const [loading, setLoading] = useState(false);
  const params = useParams();
  const [certificateList, setCertificateList] = useState([
    {
      title: "",
      issuer: "",
      year: "",
    },
  ]);

  const AddNewCertificate = () => {
    setCertificateList([
      ...certificateList,
      {
        title: "",
        issuer: "",
        year: "",
      },
    ]);
  };

  const RemoveCertificate = () => {
    setCertificateList((prev) => prev.slice(0, -1));
  };

  const handleChange = (event, index) => {
    const newEntries = [...certificateList];
    const { name, value } = event.target;
    newEntries[index][name] = value;
    setCertificateList(newEntries);
  };

  const onSave = () => {
    setLoading(true);
    const data = {
      data: {
        certifications: certificateList,
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
      certifications: certificateList,
    });
  }, [certificateList]);

  return (
    <div className="p-5 shadow-lg rounded-lg border-t-primary border-t-4 mt-10">
      <h2 className="font-bold text-lg">Certifications</h2>
      <p>Add your Certification papers</p>

      <div>
        {certificateList.map((item, index) => (
          <div key={index}>
            {" "}
            {/* Added key prop for React */}
            <div className="grid grid-cols-2 gap-3 border p-3 my-5">
              <div className="col-span-2">
                <label>Certificate Title</label>
                <Input
                  name="title"
                  value={item.title}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Issuer</label>
                <Input
                  name="issuer"
                  value={item.issuer}
                  onChange={(e) => handleChange(e, index)}
                />
              </div>
              <div>
                <label>Year</label>
                <Input
                  name="year"
                  type="date"
                  value={item.year}
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
            onClick={AddNewCertificate}
            className="text-primary"
          >
            + Add another Certificate
          </Button>
          <Button
            variant="outline"
            onClick={RemoveCertificate}
            className="text-primary"
            disabled={certificateList.length <= 1}
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

export default Certifications;
