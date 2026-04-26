import { motion, useReducedMotion } from "framer-motion";
import {
  FaHtml5,
  FaCss3Alt,
  FaJs,
  FaReact,
  FaFigma,
  FaGithub,
} from "react-icons/fa";
import { SiTailwindcss, SiMysql, SiPhp, SiCisco } from "react-icons/si";

const skillGroups = [
  {
    title: "Frontend",
    items: [
      { label: "HTML5", icon: FaHtml5, color: "text-orange-500" },
      { label: "CSS3", icon: FaCss3Alt, color: "text-blue-500" },
      { label: "JavaScript", icon: FaJs, color: "text-yellow-500" },
      { label: "React", icon: FaReact, color: "text-cyan-500" },
      { label: "Tailwind CSS", icon: SiTailwindcss, color: "text-sky-500" },
    ],
  },
  {
    title: "Backend & Data",
    items: [
      { label: "PHP", icon: SiPhp, color: "text-indigo-500" },
      { label: "MySQL", icon: SiMysql, color: "text-orange-500" },
      { label: "GitHub", icon: FaGithub, color: "text-gray-700 dark:text-gray-100" },
    ],
  },
  {
    title: "Tools & Networks",
    items: [
      { label: "Figma", icon: FaFigma, color: "text-pink-500" },
      { label: "Cisco", icon: SiCisco, color: "text-[#1BA0D7]" },
    ],
  },
];

const Skills = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="skills"
      className="scroll-mt-24 bg-gray-100 px-4 py-16 transition-colors duration-500 dark:bg-black sm:px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 18 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl"
        >
          Skills & Tech Stack
        </motion.h2>

        <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          Technologies I use to design, build, test, and ship production-ready
          web experiences.
        </p>

        <div className="mt-8 grid gap-5 lg:grid-cols-3">
          {skillGroups.map((group) => (
            <motion.article
              key={group.title}
              initial={reduceMotion ? false : { opacity: 0, y: 16 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#060606]"
            >
              <h3 className="text-lg font-bold text-black dark:text-white">
                {group.title}
              </h3>
              <ul className="mt-4 grid grid-cols-2 gap-3">
                {group.items.map((item) => {
                  const Icon = item.icon;
                  return (
                    <li
                      key={item.label}
                      className="flex items-center gap-2 rounded-lg border border-gray-200 px-3 py-2 text-sm font-medium text-gray-700 dark:border-gray-700 dark:text-gray-200"
                    >
                      <Icon className={item.color} aria-hidden="true" />
                      <span>{item.label}</span>
                    </li>
                  );
                })}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Skills;
