import React from "react";
import Input from "../../components/common/Input";
import Button from "../../components/common/Button";

function Signup() {
  return (
    <div className="flex items-center justify-center min-h-screen">
      <div className="bg-white p-6 rounded-lg shadow w-[350px]">
        <h2 className="text-2xl font-bold mb-4">Signup</h2>

        <Input placeholder="Name" />
        <div className="mt-3"></div>

        <Input placeholder="Email" />
        <div className="mt-3"></div>

        <Input type="password" placeholder="Password" />

        <div className="mt-4">
          <Button className="w-full">Create Account</Button>
        </div>
      </div>
    </div>
  );
}

export default Signup;