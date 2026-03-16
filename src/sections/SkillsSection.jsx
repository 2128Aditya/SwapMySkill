import React from "react";
import {
  Code,
  Palette,
  Video,
  Database,
  Camera,
  PenTool,
  BarChart3,
  Cpu,
  Globe,
  Smartphone,
  Music,
  Brain
} from "lucide-react";

const skills = [
  { name: "React Development", icon: Code },
  { name: "Python Programming", icon: Cpu },
  { name: "UI / UX Design", icon: Palette },
  { name: "Video Editing", icon: Video },
  { name: "Data Analysis", icon: BarChart3 },
  { name: "Photography", icon: Camera },
  { name: "Graphic Design", icon: PenTool },
  { name: "Web Development", icon: Globe },
  { name: "Mobile App Development", icon: Smartphone },
  {name: "Advance Excel" , icon: BarChart3},
  { name: "Music Production", icon: Music },
  { name: "Machine Learning", icon: Brain },
  { name: "Database Management", icon: Database }
];

function SkillsSection() {
  return (
    <section className="w-full py-24 bg-sky-100">

      <div className="w-full px-8">

        <h2 className="text-4xl font-bold text-center text-gray-900 mb-4">
          Popular Skills
        </h2>

        <p className="text-gray-600 text-center mb-14">
          Learn and exchange skills with talented students around the world
        </p>

        <div className="grid grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-8">

          {skills.map((skill, index) => {
            const Icon = skill.icon;

            return (
              <div
                key={index}
                className="bg-white p-8 rounded-2xl shadow-md hover:shadow-xl hover:-translate-y-2 transition duration-300 flex flex-col items-center text-center"
              >
                <div className="w-14 h-14 flex items-center justify-center rounded-xl bg-sky-200 text-sky-700 mb-4">
                  <Icon size={28} />
                </div>

                <h3 className="font-semibold text-gray-800">
                  {skill.name}
                </h3>

              </div>
            );
          })}

        </div>

      </div>

    </section>
  );
}

export default SkillsSection;