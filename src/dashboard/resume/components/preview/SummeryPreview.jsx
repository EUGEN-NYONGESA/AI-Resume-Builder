import React from "react";

function SummeryPreview({ resumeInfo }) {
  return (
    <div className="mt-1">
      <p className="text-xs">{resumeInfo?.summary}</p>
    </div>
  );
}

export default SummeryPreview;
