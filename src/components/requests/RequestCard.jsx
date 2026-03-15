import React from "react";
import Button from "../common/Button";

function RequestCard({ request }) {
  return (
    <div className="bg-white p-4 rounded-lg shadow">
      <h3 className="font-semibold">{request.name}</h3>

      <p className="text-sm text-gray-500">
        Teaches: {request.teaches}
      </p>

      <p className="text-sm text-gray-500">
        Wants: {request.wants}
      </p>

      <div className="flex gap-3 mt-3">
        <Button>Accept</Button>
        <Button className="bg-gray-400 hover:bg-gray-500">
          Reject
        </Button>
      </div>
    </div>
  );
}

export default RequestCard;