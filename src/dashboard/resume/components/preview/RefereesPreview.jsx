import React from "react";

function RefereesPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Referees
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.referees.map((referees, index) => (
        <div className="mt-2 justify-between" key={index}>
          <h2 className="text-xs font-bold mt-1">{referees?.name}</h2>
          <h2 className="text-xs">{referees?.company}</h2>
          <h2 className="text-xs">{referees?.position}</h2>
          <h2 className="text-xs">{referees?.email}</h2>
          <h2 className="text-xs">{referees?.phone}</h2>
        </div>
      ))}
    </div>
  );
}
export default RefereesPreview;
