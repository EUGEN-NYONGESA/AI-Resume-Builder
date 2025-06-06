import React from "react";

function ExperiencePreview({ resumeInfo }) {
  return (
    <div className="my-6 mt-1">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Professional Experience
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />

      {resumeInfo?.experience?.map((experience, index) => (
        <div className="mt-1" key={index}>
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {experience?.title}
          </h2>
          <h2 className="text-sm font-bold">{experience?.companyName}</h2>
          <h2 className="text-xs flex justify-between">
            {experience?.city}, {experience?.county}
            <span>
              {experience?.startDate} {" - "}
              {experience?.currentlyWorking ? "Present" : experience?.endDate}
            </span>
          </h2>

          {/* Render HTML content safely with proper list styling */}
          <div
            className="mt-2 text-xs list-inside prose prose-sm"
            dangerouslySetInnerHTML={{ __html: experience?.workSummary }}
          />
        </div>
      ))}
    </div>
  );
}

export default ExperiencePreview;
