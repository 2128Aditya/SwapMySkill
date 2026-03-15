import React from "react";

function Footer() {
  return (
    <footer className="bg-white border-t border-purple-200 mt-10">
      <div className="container py-6 text-center text-gray-500">
        © {new Date().getFullYear()} SwapMySkill. All rights reserved.
      </div>
    </footer>
  );
}

export default Footer;