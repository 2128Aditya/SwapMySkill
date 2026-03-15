import React from "react";
import MainLayout from "../layouts/MainLayout";

function LearningRoom() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Learning Room</h2>

      <div className="bg-white p-6 rounded-lg shadow">
        <p>Video session will appear here.</p>
      </div>
    </MainLayout>
  );
}

export default LearningRoom;