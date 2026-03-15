import React from "react";

function ChatList({ users }) {
  return (
    <div className="w-1/3 border-r p-4">
      {users.map((user, index) => (
        <div
          key={index}
          className="p-3 hover:bg-gray-100 cursor-pointer rounded"
        >
          {user.name}
        </div>
      ))}
    </div>
  );
}

export default ChatList;