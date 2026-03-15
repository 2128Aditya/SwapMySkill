import React from "react";
import { Link } from "react-router-dom";

function Navbar() {

  const user = false; // later this will come from AuthContext

  return (
    <nav className="bg-white border-b border-purple-200">
      <div className="container flex justify-between items-center py-4">

        <Link to="/" className="text-xl font-bold text-purple-600">
          SwapMySkill
        </Link>

        {!user ? (
          <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/login">Login</Link>
            <Link to="/signup">Signup</Link>
          </div>
        ) : (
          <div className="flex gap-6">
            <Link to="/">Home</Link>
            <Link to="/explore">Explore</Link>
            <Link to="/chat">Messages</Link>
            <Link to="/requests">Requests</Link>
            <Link to="/leaderboard">Leaderboard</Link>
            <Link to="/profile">Profile</Link>
          </div>
        )}

      </div>
    </nav>
  );
}

export default Navbar;