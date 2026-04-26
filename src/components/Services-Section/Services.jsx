import { motion, useReducedMotion } from "framer-motion";
import { Code2, LayoutDashboard, Rocket } from "lucide-react";

const services = [
  {
    title: "Web Application Development",
    description:
      "I build responsive, fast, and maintainable web apps with clean architecture and modern UI patterns.",
    icon: Code2,
  },
  {
    title: "UI/UX Implementation",
    description:
      "From wireframes to polished interfaces, I convert product ideas into intuitive user journeys and visuals.",
    icon: LayoutDashboard,
  },
  {
    title: "Launch & Optimization",
    description:
      "I help ship production-ready experiences with performance tuning, SEO foundations, and quality assurance.",
    icon: Rocket,
  },
];

const Services = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="services"
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
          What I Can Help With
        </motion.h2>

        <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          Practical services focused on building and improving digital products.
        </p>

        <div className="mt-8 grid gap-5 md:grid-cols-3">
          {services.map((service) => {
            const Icon = service.icon;

            return (
              <motion.article
                key={service.title}
                initial={reduceMotion ? false : { opacity: 0, y: 16 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
                className="group rounded-2xl border border-gray-200 bg-white p-6 shadow-sm transition hover:-translate-y-1 hover:border-[#4ca771]/70 hover:shadow-md dark:border-gray-800 dark:bg-[#060606]"
              >
                <Icon className="h-8 w-8 text-[#4ca771]" aria-hidden="true" />
                <h3 className="mt-4 text-lg font-bold text-black dark:text-white">
                  {service.title}
                </h3>
                <p className="mt-2 text-sm leading-relaxed text-gray-600 dark:text-gray-300">
                  {service.description}
                </p>
              </motion.article>
            );
          })}
        </div>
      </div>
    </section>
  );
};

export default Services;
