import React from "react";

function LanguagePreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Languages
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.languages.map((languages, index) => (
        <div className="mt-1 flex justify-between" key={index}>
          <h2 className="text-xs font-bold mt-1">{languages?.name}</h2>
          <h2 className="text-xs flex justify-between mt-1">
            {languages?.fluency}
          </h2>
        </div>
      ))}
    </div>
  );
}
export default LanguagePreview;
