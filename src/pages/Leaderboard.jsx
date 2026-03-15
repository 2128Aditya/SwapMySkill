import React from "react";
import MainLayout from "../layouts/MainLayout";

function Leaderboard() {
  return (
    <MainLayout>
      <h2 className="text-2xl font-bold mb-6">Top Mentors</h2>

      <ul className="bg-white p-6 rounded-lg shadow">
        <li>1️⃣ Rahul ⭐4.9</li>
        <li>2️⃣ Priya ⭐4.8</li>
        <li>3️⃣ Aman ⭐4.7</li>
      </ul>
    </MainLayout>
  );
}

export default Leaderboard;