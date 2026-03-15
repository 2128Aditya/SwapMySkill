import React from "react";
import heroVideo from "../assets/hero.mp4";

function HeroSection() {
  return (
    <section className="relative w-full min-h-screen flex items-center justify-center text-white overflow-hidden">

      {/* Background Video */}
      <video
        autoPlay
        loop
        muted
        playsInline
        className="absolute top-0 left-0 w-full h-full object-cover"
      >
        <source src={heroVideo} type="video/mp4" />
      </video>

      {/* Dark Overlay */}
      <div className="absolute inset-0 bg-black/60"></div>

      {/* Content */}
      <div className="relative z-10 w-full px-6 md:px-12 lg:px-24 text-center max-w-4xl">

        <h1 className="text-4xl md:text-5xl lg:text-6xl font-bold leading-tight">
          Unlock Your Potential Through
          <span className="block text-purple-400">
            Collaborative Learning
          </span>
        </h1>

        <p className="mt-6 text-lg md:text-xl text-gray-200">
          SwapMySkill connects students to share knowledge, exchange skills,
          and learn interactively. Join our growing community and start
          learning together.
        </p>

        <div className="flex flex-col sm:flex-row gap-4 justify-center mt-10">

          <button className="bg-purple-600 hover:bg-purple-700 px-8 py-3 rounded-xl font-semibold shadow-lg transition">
            Start Swapping
          </button>

          <button className="border border-white/40 backdrop-blur-md px-8 py-3 rounded-xl font-semibold hover:bg-white/10 transition">
            Explore Skills
          </button>

        </div>

      </div>
    </section>
  );
}

export default HeroSection;