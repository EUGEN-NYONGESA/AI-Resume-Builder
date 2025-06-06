import React from "react";

function SocialsPreview({ resumeInfo }) {
  return (
    <div className="my-6">
      <h2
        className="text-center text-xs font-bold mt-2"
        style={{
          color: resumeInfo?.themeColor,
        }}
      >
        Social Profiles
      </h2>
      <hr
        style={{
          borderColor: resumeInfo?.themeColor,
        }}
      />
      {resumeInfo?.socialProfiles.map((social, index) => (
        <div className="mt-2 flex justify-between" key={index}>
          <a
            href={social.url}
            target="_blank"
            rel="noopener noreferrer"
            className="text-xs font-bold hover:underline hover:text-blue-500"
          >
            {social.platform}
          </a>
        </div>
      ))}
    </div>
  );
}

export default SocialsPreview;
