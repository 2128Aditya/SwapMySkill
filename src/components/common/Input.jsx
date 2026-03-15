import React from "react";

function Input({ type = "text", placeholder, value, onChange }) {
  return (
    <input
      type={type}
      placeholder={placeholder}
      value={value}
      onChange={onChange}
      className="w-full border border-purple-200 px-3 py-2 rounded-lg focus:outline-none focus:ring-2 focus:ring-purple-500"
    />
  );
}

export default Input;