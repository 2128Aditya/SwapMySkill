import React from "react";
import MainLayout from "../layouts/MainLayout";

function Profile() {
  return (
    <MainLayout>
      <div className="bg-white p-6 rounded-lg shadow">
        <h2 className="text-2xl font-bold">My Profile</h2>

        <p className="mt-4">Name: Aditya</p>

        <p className="mt-2">
          Skills Offered: React, JavaScript
        </p>

        <p className="mt-2">
          Skills Wanted: UI Design
        </p>
      </div>
    </MainLayout>
  );
}

export default Profile;