"use client";

import { FaReact, FaNodeJs, FaJava, FaFigma } from "react-icons/fa";
import { SiNextdotjs, SiFlutter, SiAdobe, SiMongodb, SiMysql, SiHtml5, SiCss3, SiJavascript, SiTypescript } from "react-icons/si";

const skills = [
  {
    category: "Frontend",
    skills: [
      { name: "React.js", icon: <FaReact /> },
      { name: "Next.js", icon: <SiNextdotjs /> },
      { name: "HTML", icon: <SiHtml5 /> },
      { name: "CSS", icon: <SiCss3 /> },
      { name: "JavaScript", icon: <SiJavascript /> },
      { name: "TypeScript", icon: <SiTypescript /> },
    ],
  },
  {
    category: "Backend",
    skills: [
      { name: "Spring Boot", icon: <FaJava /> },
      { name: "Node.js", icon: <FaNodeJs /> },
      { name: "Express.js", icon: <FaNodeJs /> },
      { name: "MongoDB", icon: <SiMongodb /> },
      { name: "MySQL", icon: <SiMysql /> },
    ],
  },
  {
    category: "Mobile Development",
    skills: [
      { name: "Flutter", icon: <SiFlutter /> }
    ],
  },
  {
    category: "UI/UX & Design",
    skills: [
      { name: "Figma", icon: <FaFigma /> },
      { name: "Adobe XD", icon: <SiAdobe /> },
      { name: "Sketch", icon: <SiAdobe /> },
      { name: "Wireframing", icon: <FaFigma /> },
      { name: "Prototyping", icon: <FaFigma /> },
    ],
  },
];

const Skills = () => {
  return (
    <section className="bg-gradient-to-r from-[#2e2f34] via-[#3c3d44] to-[#2e2f34] text-white py-16 relative">
      {/* Animated background pattern */}
      <div className="absolute top-0 left-0 w-full h-full bg-opacity-20 pointer-events-none">
        <div className="w-full h-full bg-fixed bg-[url('/path-to-pattern.svg')] opacity-10"></div>
      </div>

      <div className="container mx-auto px-4 relative z-10">
        {/* Section Title */}
        <div className="text-center mb-12">
          <h2 className="text-[#f0dba6] text-lg md:text-xl font-sans text-center tracking-wide">
            Skills
          </h2>
          <p className="text-xl font-serif mt-4">
            A diverse set of skills for crafting modern web, mobile, and design projects.
          </p>
        </div>

        {/* Skills Grid */}
        <div className="grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-4 gap-12">
          {skills.map((skillGroup, index) => (
            <div
              key={index}
              className="bg-[#3C3D44] p-8 rounded-xl shadow-lg hover:shadow-2xl transition-transform duration-300 transform hover:-translate-y-2"
            >
              <h3 className="text-2xl font-bold mb-6 text-[#CEB67D] text-center">
                {skillGroup.category}
              </h3>
              <ul className="space-y-4 text-center">
                {skillGroup.skills.map((skill, idx) => (
                  <li
                    key={idx}
                    className="text-white hover:text-[#CEB67D] flex items-center justify-center space-x-2 transition duration-300"
                  >
                    <span className="text-xl">{skill.icon}</span>
                    <span>{skill.name}</span>
                  </li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
