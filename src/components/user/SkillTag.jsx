import React from "react";

function SkillTag({ text }) {
  return (
    <span className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm">
      {text}
    </span>
  );
}

export default SkillTag;