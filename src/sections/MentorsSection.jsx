import React from "react";

function MentorsSection() {
  return (
    <section className="container py-20">

      <h2 className="text-3xl font-bold text-center mb-12">
        Top Mentors
      </h2>

      <div className="grid md:grid-cols-3 gap-6">

        <div className="bg-white p-6 rounded-xl shadow text-center">
          Rahul
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          Priya
        </div>

        <div className="bg-white p-6 rounded-xl shadow text-center">
          Aman
        </div>

      </div>

    </section>
  );
}

export default MentorsSection;