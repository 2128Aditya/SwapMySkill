import React from "react";
import MainLayout from "../layouts/MainLayout";

function Chat() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Messages</h2>

      <div className="bg-white p-6 rounded-lg shadow">
        <p>No messages yet</p>
      </div>
    </MainLayout>
  );
}

export default Chat;