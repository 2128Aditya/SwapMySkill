import React from "react";
import MainLayout from "../layouts/MainLayout";

function Home() {
  return (
    <MainLayout>

      {/* HERO SECTION */}
      <section className="bg-gradient-to-r from-purple-100 to-indigo-100 py-20">

        <div className="container flex flex-col md:flex-row items-center gap-10">

          {/* LEFT */}
          <div className="flex-1">

            <h1 className="text-5xl font-bold leading-tight">
              Swap Skills.
              <span className="text-purple-600"> Learn Anything.</span>
            </h1>

            <p className="mt-6 text-gray-600 text-lg">
              Teach what you know and learn what you want from people around the world.
            </p>

            <div className="flex gap-4 mt-8">

              <button className="bg-purple-600 text-white px-6 py-3 rounded-lg hover:bg-purple-700">
                Start Swapping
              </button>

              <button className="border border-gray-300 px-6 py-3 rounded-lg hover:bg-gray-100">
                Explore Skills
              </button>

            </div>

          </div>

          {/* RIGHT IMAGE */}
          <div className="flex-1">
            <img
              src="https://illustrations.popsy.co/gray/work-from-home.svg"
              alt="hero"
              className="w-full"
            />
          </div>

        </div>

      </section>

      {/* FEATURES */}
      <section className="container py-20">

        <h2 className="text-3xl font-bold text-center mb-12">
          How SwapMySkill Works
        </h2>

        <div className="grid md:grid-cols-3 gap-8">

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-600">
              Create Profile
            </h3>

            <p className="text-gray-600 mt-2">
              Add the skills you can teach and what you want to learn.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-600">
              Find Skill Match
            </h3>

            <p className="text-gray-600 mt-2">
              Discover people who can exchange skills with you.
            </p>
          </div>

          <div className="bg-white p-6 rounded-xl shadow">
            <h3 className="text-xl font-semibold text-purple-600">
              Start Learning
            </h3>

            <p className="text-gray-600 mt-2">
              Join a learning session with video call and notes.
            </p>
          </div>

        </div>

      </section>

      {/* STATS */}
      <section className="bg-purple-600 text-white py-16">

        <div className="container flex justify-around text-center">

          <div>
            <h3 className="text-3xl font-bold">5000+</h3>
            <p>Users</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">300+</h3>
            <p>Skills</p>
          </div>

          <div>
            <h3 className="text-3xl font-bold">2000+</h3>
            <p>Sessions</p>
          </div>

        </div>

      </section>

    </MainLayout>
  );
}

export default Home;