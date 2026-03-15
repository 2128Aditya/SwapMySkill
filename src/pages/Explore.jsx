import React from "react";
import MainLayout from "../layouts/MainLayout";

function Explore() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Explore Skills</h2>

      <div className="grid grid-cols-3 gap-6">
        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Rahul</h3>
          <p className="text-sm text-gray-500">Teaches: React</p>
          <p className="text-sm text-gray-500">Wants: UI Design</p>
        </div>

        <div className="bg-white p-4 rounded-lg shadow">
          <h3 className="font-semibold">Priya</h3>
          <p className="text-sm text-gray-500">Teaches: Figma</p>
          <p className="text-sm text-gray-500">Wants: JavaScript</p>
        </div>
      </div>
    </MainLayout>
  );
}

export default Explore;