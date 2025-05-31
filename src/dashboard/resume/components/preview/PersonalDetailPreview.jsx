import React from "react";

function PersonalDetailPreview({ resumeInfo }) {
  return (
    <div>
      <h2
        className="font-bold text-xl text-center"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.firstName} {resumeInfo?.lastName}
      </h2>
      <h2
        className="text-center text-sm font-medium"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.jobTitle}
      </h2>
      <h2
        className="text-center text-xs font-normal"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        {resumeInfo?.address}
      </h2>
      <div className="flex justify-between mt-3">
        <h2
          className="text-center text-xs font-normal"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.phone}
        </h2>
        <h2
          className="text-center text-xs font-normal"
          style={{
            color: resumeInfo?.themeColor,
          }}
        >
          {resumeInfo?.email}
        </h2>
      </div>
      <hr
        className="text-center text-xs font-normal"
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      ></hr>
    </div>
  );
}

export default PersonalDetailPreview;
