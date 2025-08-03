import { motion } from "framer-motion";

const educationData = [
  {
    year: "2019 – 2024",
    degree: "Bachelor of Science in  Mobile and Web Technologies",
    school: "Botswana Accountancy College (BAC)",
    location: "Gaborone, Botswana",
    description:
      "Major in Web and Mobile Development with a strong focus on hands-on development, and teamwork.",
    achievements: [
      "Network Admin assistant (MiSec Technologies - Internship)",
    ],
    courses: ["User Experience Design", "Mobile App Development", "Telecommunications"],
  },
  {
    year: "2017 – 2018",
    degree: "International General Certificate of Secondary Education (IGCSE)",
    school: "Okavango International School",
    location: "Maun, Botswana",
    description:
      "Globally recognized qualification for high school that prepares for further academic studies",
    achievements: [
      "Prefect (Final highschool year i was selected to be among the school leaders)",
    ],
    courses: ["Information and Communication Technology", "Mathematics", "English Language"],
  },
  
];

const Education = ({ isDarkMode }) => {
  return (
    <section id="education" className="py-16 px-4 sm:px-6 lg:px-20 bg-gray-100 dark:bg-black text-black dark:text-white transition-colors duration-500">
      <div className="container mx-auto">
        {/* Heading */}
        <motion.h2
            initial={{ opacity: 0, x: -50 }}
            whileInView={{ opacity: 1, x: 0 }}
            viewport={{ once: false, amount: 0.3 }}
            transition={{ duration: 0.6 }}
            className="text-6xl font-bold mb-6 text-center"
        >
            <span className="text-gray-900 dark:text-gray-100">Educ</span>
            <span className="text-[#4ca771]">ation</span>
        </motion.h2>

        <div className="max-w-4xl mx-auto">
          {educationData.map((edu, index) => (
            <motion.div
              key={index}
              initial={{ opacity: 0, y: 40 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: false }}
              transition={{ duration: 0.5, delay: index * 0.2 }}
              className={`relative pl-12 pb-16 border-l-2 ${
                isDarkMode ? "border-gray-700" : "border-gray-300"
              } hover:border-[#4ca771] transition-colors duration-300 group`}
            >
              <div className="absolute left-[-11px] top-0 w-5 h-5 rounded-full bg-[#4ca771] group-hover:scale-125 transition-transform duration-300"></div>

              <div className="flex flex-col md:flex-row md:items-center md:justify-between mb-4">
                <div>
                  <div className="mb-1 text-sm font-medium text-[#4ca771]">
                    {edu.year}
                  </div>
                  <h3 className="text-2xl font-bold mb-2 group-hover:text-[#4ca771] transition-colors duration-300">
                    {edu.degree}
                  </h3>
                </div>
                <div className="text-right">
                  <h4 className="text-lg font-semibold text-gray-800 dark:text-gray-200">
                    {edu.school}
                  </h4>
                  <p className="text-gray-600 dark:text-gray-400">
                    {edu.location}
                  </p>
                </div>
              </div>

              <div className="bg-white/60 dark:bg-[#1a1a1a]/50 backdrop-blur-md border border-gray-300 dark:border-gray-700 rounded-xl shadow-md p-6 transition duration-300">

                <p className="text-gray-700 dark:text-gray-400 mb-4">
                  {edu.description}
                </p>

                <div className="mb-4">
                  <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Key Achievements
                  </h5>
                  <ul className="list-disc list-inside space-y-1 text-gray-600 dark:text-gray-400">
                    {edu.achievements.map((achievement, i) => (
                      <li key={i}>{achievement}</li>
                    ))}
                  </ul>
                </div>

                <div>
                  <h5 className="font-semibold mb-2 text-gray-800 dark:text-gray-200">
                    Notable Courses
                  </h5>
                  <div className="flex flex-wrap gap-2">
                        {edu.courses.map((course, i) => (
                            <span
                            key={i}
                            className="px-3 py-1 rounded-full text-sm bg-[#c8c8c9] text-black dark:bg-[#4ca771] dark:text-black"
                            >
                            {course}
                            </span>
                        ))}
                    </div>
                </div>
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default Education;
