import React from "react";
import Button from "../common/Button";

function UserCard({ user }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <img
        src="/images/avatar.png"
        alt="avatar"
        className="w-16 h-16 rounded-full mb-3"
      />

      <h3 className="font-semibold text-lg">{user.name}</h3>

      <p className="text-sm text-gray-500">
        Teaches: {user.teaches}
      </p>

      <p className="text-sm text-gray-500">
        Wants: {user.wants}
      </p>

      <div className="mt-3">
        <Button>View Profile</Button>
      </div>
    </div>
  );
}

export default UserCard;