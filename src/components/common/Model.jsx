import React from "react";

function Modal({ isOpen, onClose, children }) {
  if (!isOpen) return null;

  return (
    <div className="fixed inset-0 flex items-center justify-center bg-black bg-opacity-40">
      <div className="bg-white p-6 rounded-xl shadow-lg w-[400px]">
        {children}

        <button
          onClick={onClose}
          className="mt-4 text-sm text-purple-600 hover:underline"
        >
          Close
        </button>
      </div>
    </div>
  );
}

export default Modal;