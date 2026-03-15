import React from "react";

function MessageBubble({ message }) {
  return (
    <div className="mb-3">
      <div className="bg-purple-100 p-2 rounded inline-block">
        {message.text}
      </div>
    </div>
  );
}

export default MessageBubble;