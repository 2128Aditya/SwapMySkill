import React from "react";

function Button({ children, onClick, className = "" }) {
  return (
    <button
      onClick={onClick}
      className={`bg-purple-600 hover:bg-purple-700 text-white px-4 py-2 rounded-lg transition ${className}`}
    >
      {children}
    </button>
  );
}

export default Button;