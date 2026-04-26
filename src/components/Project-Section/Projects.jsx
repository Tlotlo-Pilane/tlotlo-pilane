import { motion, useReducedMotion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const featuredProjects = [
  {
    title: "Baori Community Platform",
    status: "Live",
    problem:
      "The Baori community needed a professional digital hub where entrepreneurs, service providers, and partners could access programs and opportunities in one place.",
    solution:
      "I designed and launched a high-trust platform with clear navigation, bold visual storytelling, and conversion-focused calls to action.",
    highlights: [
      "Structured top-level navigation for Projects, Service Providers, Investor Portal, Governance, and Membership",
      "Strong \"Join the Community\" CTA pathway to improve engagement",
      "Refined hero messaging and section hierarchy for clearer communication",
    ],
    techStack: ["React", "Vite", "Tailwind CSS", "Supabase", "Vercel"],
    image: "/PWD.png",
    imageAlt: "Baori Community project preview",
    liveUrl: "https://baori.org",
    repoUrl: "",
  },
  {
    title: "Personal Portfolio Website",
    status: "Live",
    problem:
      "I needed a professional portfolio that clearly communicates my capabilities to clients and employers.",
    solution:
      "Built a responsive single-page site with strong visual hierarchy, featured projects, and conversion-focused contact pathways.",
    techStack: ["React", "Tailwind CSS", "Framer Motion", "Vercel"],
    image: "/Portfolio.png",
    imageAlt: "Personal portfolio project preview",
    liveUrl: "https://tlotlo-pilane.vercel.app/",
    repoUrl: "https://github.com/tlotlo-pilane/tlotlo-pilane",
  },
];

const Projects = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="projects"
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
          Featured Projects
        </motion.h2>

        <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          A curated set of projects showing how I approach product challenges,
          engineering quality, and user experience.
        </p>

        <div className="mt-8 space-y-6">
          {featuredProjects.map((project) => (
            <ProjectCard key={project.title} {...project} />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
