import { motion, useReducedMotion } from "framer-motion";

const timelineItems = [
  {
    period: "2024",
    title: "Network Administration Intern",
    organization: "MiSec Technologies",
    summary:
      "Supported network setup and maintenance, troubleshooting, and day-to-day technical operations.",
    highlights: [
      "Assisted with network support and configuration tasks",
      "Improved documentation and issue-response workflow",
    ],
  },
  {
    period: "2019 - 2024",
    title: "BSc Mobile and Web Technologies",
    organization: "Botswana Accountancy College (BAC)",
    summary:
      "Completed a practical degree focused on modern web, mobile, and user-centered software development.",
    highlights: [
      "Built projects with frontend and backend technologies",
      "Collaborated in teams on end-to-end product delivery",
    ],
  },
  {
    period: "2017 - 2018",
    title: "IGCSE",
    organization: "Okavango International School",
    summary:
      "Established strong foundations in communication, mathematics, and technology.",
    highlights: [
      "Selected as prefect in final year",
      "Focused on ICT and problem-solving subjects",
    ],
  },
];

const Experience = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="experience"
      className="scroll-mt-24 bg-gray-100 px-4 py-16 transition-colors duration-500 dark:bg-black sm:px-6 lg:px-20"
    >
      <div className="mx-auto max-w-7xl">
        <motion.h2
          initial={reduceMotion ? false : { opacity: 0, y: 20 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, amount: 0.2 }}
          transition={{ duration: 0.4 }}
          className="text-3xl font-extrabold tracking-tight text-black dark:text-white sm:text-4xl"
        >
          Experience & Education
        </motion.h2>

        <div className="mt-8 space-y-6">
          {timelineItems.map((item) => (
            <motion.article
              key={`${item.period}-${item.title}`}
              initial={reduceMotion ? false : { opacity: 0, y: 14 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, amount: 0.2 }}
              transition={{ duration: 0.4 }}
              className="rounded-2xl border border-gray-200 bg-white p-6 shadow-sm dark:border-gray-800 dark:bg-[#060606]"
            >
              <p className="text-xs font-semibold uppercase tracking-wide text-[#4ca771]">
                {item.period}
              </p>
              <h3 className="mt-1 text-xl font-bold text-black dark:text-white">
                {item.title}
              </h3>
              <p className="text-sm font-medium text-gray-700 dark:text-gray-300">
                {item.organization}
              </p>
              <p className="mt-3 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                {item.summary}
              </p>
              <ul className="mt-4 list-disc space-y-1 pl-5 text-sm text-gray-600 dark:text-gray-300">
                {item.highlights.map((highlight) => (
                  <li key={highlight}>{highlight}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Experience;
