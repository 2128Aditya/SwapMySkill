import React from "react";
import MainLayout from "../layouts/MainLayout";

function Requests() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Swap Requests</h2>

      <div className="bg-white p-6 rounded-lg shadow">
        <p>No requests yet</p>
      </div>
    </MainLayout>
  );
}

export default Requests;