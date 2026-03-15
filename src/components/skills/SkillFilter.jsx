import React from "react";

function SkillFilter({ categories }) {
  return (
    <div className="flex gap-3 mb-6">
      {categories.map((cat, index) => (
        <button
          key={index}
          className="bg-purple-100 text-purple-700 px-3 py-1 rounded-full text-sm"
        >
          {cat}
        </button>
      ))}
    </div>
  );
}

export default SkillFilter;