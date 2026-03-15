import React from "react";

function ProfileHeader({ name, rating }) {
  return (
    <div className="flex items-center gap-4 bg-white p-6 rounded-lg shadow">
      <img
        src="/images/avatar.png"
        alt="avatar"
        className="w-20 h-20 rounded-full"
      />

      <div>
        <h2 className="text-2xl font-bold">{name}</h2>
        <p className="text-gray-500">Rating ⭐ {rating}</p>
      </div>
    </div>
  );
}

export default ProfileHeader;