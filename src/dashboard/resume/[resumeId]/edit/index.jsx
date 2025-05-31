import React, { useEffect, useState } from "react";
import FormSection from "../../components/FormSection";
import { useParams } from "react-router-dom";
import ResumePreview from "../../components/ResumePreview";
import { ResumeInfoContext } from "../../../../context/ResumeInfoContext";
import dummyData from "../../../data/dummy";

function EditResume() {
  const params = useParams();
  const [resumeInfo, setResumeInfo] = useState();

  useEffect(() => {
    setResumeInfo(dummyData);
  }, []);

  return (
    <ResumeInfoContext.Provider value={{resumeInfo, setResumeInfo}}>
      <div className="grid grid-cols-1 md:grid-cols-2 p-10 gap-10">
        {/* Form Section */}
        <FormSection />
        {/* Preview Section*/}
        <ResumePreview />
      </div>
    </ResumeInfoContext.Provider>
  );
}

export default EditResume;
