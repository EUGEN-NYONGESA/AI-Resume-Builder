import React from "react";

function EducationPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Education
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.education.map((education, index) => (
        <div className="mt-1" key={index}>
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {education?.universityName}
          </h2>
          <h2 className="text-xs font-bold">{education?.major}</h2>
          <h2 className="text-xs flex justify-between">
            {education?.degree}
            <span>
              {education?.startDate}{" - "}
              {education?.currentlyWorking ? "Present" : education?.endDate}
            </span>
          </h2>
          <p className="text-xs my-2">{education?.description}</p>
        </div>
      ))}
    </div>
  );
}
export default EducationPreview;
