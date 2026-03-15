import React, { useState } from "react";
import { Link } from "react-router-dom";
import { Moon, Menu, X } from "lucide-react";

function Navbar() {

  const user = false;
  const [menuOpen, setMenuOpen] = useState(false);

  return (
    <nav className="w-full bg-[#243246] text-white">

      <div className="flex items-center justify-between w-full px-4 py-4">

        {/* LOGO */}
        <Link to="/" className="flex items-center gap-2 text-xl font-semibold">
          <div className="w-6 h-6 bg-gradient-to-tr from-cyan-400 to-blue-500 rotate-45"></div>
          SwapMySkill
        </Link>

        {/* DESKTOP MENU */}
        <div className="hidden md:flex gap-8 text-gray-300 font-medium">

          <Link to="/" className="hover:text-white transition">How It Works</Link>
          <Link to="/" className="hover:text-white transition">Testimonials</Link>
          <Link to="/explore" className="hover:text-white transition">Skills</Link>
          <Link to="/" className="hover:text-white transition">Mentors</Link>

        </div>

        {/* RIGHT SIDE */}
        <div className="hidden md:flex items-center gap-4">

          <Moon size={20} className="cursor-pointer hover:text-cyan-400" />

          {!user ? (
            <>
              <Link
                to="/login"
                className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 font-medium hover:bg-gray-300"
              >
                Log In
              </Link>

              <Link
                to="/signup"
                className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 font-semibold hover:opacity-90"
              >
                Sign Up
              </Link>
            </>
          ) : (
            <Link
              to="/profile"
              className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500"
            >
              Profile
            </Link>
          )}

        </div>

        {/* MOBILE MENU BUTTON */}
        <div className="md:hidden">
          <button onClick={() => setMenuOpen(!menuOpen)}>
            {menuOpen ? <X size={26} /> : <Menu size={26} />}
          </button>
        </div>

      </div>

      {/* MOBILE MENU */}
      {menuOpen && (
        <div className="md:hidden w-full bg-[#243246] px-4 pb-6 flex flex-col gap-4 text-gray-300">

          <Link to="/" onClick={()=>setMenuOpen(false)}>How It Works</Link>
          <Link to="/" onClick={()=>setMenuOpen(false)}>Testimonials</Link>
          <Link to="/explore" onClick={()=>setMenuOpen(false)}>Skills</Link>
          <Link to="/" onClick={()=>setMenuOpen(false)}>Mentors</Link>

          <hr className="border-gray-600"/>

          <Link
            to="/login"
            className="px-4 py-2 rounded-lg bg-gray-200 text-gray-800 text-center"
          >
            Log In
          </Link>

          <Link
            to="/signup"
            className="px-4 py-2 rounded-lg bg-gradient-to-r from-cyan-500 to-blue-500 text-center"
          >
            Sign Up
          </Link>

        </div>
      )}

    </nav>
  );
}

export default Navbar;