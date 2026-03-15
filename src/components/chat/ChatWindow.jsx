import React from "react";
import MessageBubble from "./MessageBubble";

function ChatWindow({ messages }) {
  return (
    <div className="flex-1 p-4">
      {messages.map((msg, index) => (
        <MessageBubble key={index} message={msg} />
      ))}
    </div>
  );
}

export default ChatWindow;