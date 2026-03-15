import React from "react";
import { UserPlus, Search, Video } from "lucide-react";

const steps = [
  {
    title: "Create Profile",
    description:
      "Sign up and add the skills you can teach and the ones you want to learn.",
    icon: UserPlus,
  },
  {
    title: "Find Skill Match",
    description:
      "Explore students and connect with someone who can exchange skills with you.",
    icon: Search,
  },
  {
    title: "Start Learning",
    description:
      "Join sessions via chat or video and start learning together.",
    icon: Video,
  },
];

function HowItWorks() {
  return (
    <section className="w-full py-24 bg-sky-100">

      <div className="w-full px-6">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          How Skill Exchange Works
        </h2>

        <p className="text-gray-600 text-center mb-16">
          A simple way to learn new skills by exchanging knowledge
        </p>

        <div className="grid md:grid-cols-3 gap-12 items-center">

          {steps.map((step, index) => {
            const Icon = step.icon;

            return (
              <div
                key={index}
                className="relative bg-white p-10 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 text-center"
              >

                {/* ICON */}
                <div className="w-16 h-16 flex items-center justify-center bg-sky-200 text-sky-700 rounded-xl mx-auto mb-6">
                  <Icon size={30} />
                </div>

                <h3 className="text-xl font-semibold mb-3">
                  {step.title}
                </h3>

                <p className="text-gray-600 text-sm">
                  {step.description}
                </p>

                {/* ARROW CONNECTOR */}
                {index !== steps.length - 1 && (
                  <div className="hidden md:block absolute top-1/2 -right-10 transform -translate-y-1/2 text-sky-400">
                    <svg width="60" height="20" viewBox="0 0 60 20">
                      <path
                        d="M0 10 H50"
                        stroke="currentColor"
                        strokeWidth="2"
                        strokeDasharray="4 4"
                      />
                      <polygon
                        points="50,5 60,10 50,15"
                        fill="currentColor"
                      />
                    </svg>
                  </div>
                )}

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default HowItWorks;