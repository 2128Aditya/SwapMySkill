import React from "react";

function SkillCard({ skill }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">{skill.name}</h3>
      <p className="text-sm text-gray-500">{skill.category}</p>
    </div>
  );
}

export default SkillCard;