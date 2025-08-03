import { useMemo } from "react";
import { motion } from "framer-motion";
import ProjectCard from "./ProjectCard";

const containerVariants = {
  hidden: {},
  show: {
    transition: {
      staggerChildren: 0.2,
    },
  },
};

const Projects = ({theme}) => {



 const projectData = useMemo(() => {
  const isDarkMode = theme === 'dark';

  return [
  
    {
      title: "Portfolio – Tlotlo_Pilane",
      description: "An animated and responsive portfolio that highlights my best work, skills, and passion for web development.",
      techStack: ["React", "Tailwind CSS", "Framer Motion"],
      image: "/Portfolio.png"
    },

  ];
}, [theme]);


  return (
    <motion.section
      id="projects"
      className="py-20 px-4 sm:px-6 lg:px-8 bg-gray-100 text-black dark:bg-black dark:text-white transition-colors duration-500"
      initial="hidden"
      whileInView="show"
      viewport={{ once: true, amount: 0.2 }}
      variants={containerVariants}
    >
      <div className="max-w-6xl mx-auto px-4">
        <motion.h1
          className="text-5xl font-bold text-left mb-6"
          initial={{ opacity: 0, x: -50 }}
          whileInView={{ opacity: 1, x: 0 }}
          exit={{ opacity: 0, x: -50 }}
          transition={{ duration: 0.6, ease: "easeOut" }}
          viewport={{ once: false, amount: 0.5 }}
        >
          <span className="text-gray-900 dark:text-gray-100">Pro</span>
          <span className="text-[#4ca771]">jects</span>
        </motion.h1>
      </div>

    {/* Project Cards */}
      <motion.div
        className="space-y-12 max-w-7xl mx-auto"
        variants={containerVariants}
      >
        {projectData.map((project, index) => (
          <ProjectCard key={index} {...project} reverse={index % 2 !== 0} />
        ))}
      </motion.div>
    </motion.section>
  );
};

export default Projects;
