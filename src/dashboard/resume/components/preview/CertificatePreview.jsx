import React from "react";

function CertificatePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Certifications
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.certifications.map((certifications, index) => (
        <div className="mt-3" key={index}>
          <h2
            className="text-sm font-bold"
            style={{
              color: resumeInfo?.themeColor,
            }}
          >
            {certifications?.title}
          </h2>
          <div className="flex justify-between">
            <h2 className="text-xs font-bold">{certifications?.issuer}</h2>
            <h2 className="text-xs">{certifications?.year}</h2>
          </div>
        </div>
      ))}
    </div>
  );
}
export default CertificatePreview;
