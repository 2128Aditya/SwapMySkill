import React from "react";
import Navbar from "../components/common/Navbar";
import Footer from "../components/common/Footer";

function MainLayout({ children }) {
  return (
    <div className="min-h-screen flex flex-col w-full">
      <Navbar />

      <main className="flex-grow w-full">
        {children}
      </main>

      <Footer />
    </div>
  );
}

export default MainLayout;