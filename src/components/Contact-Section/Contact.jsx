import { motion, useReducedMotion } from "framer-motion";
import { Mail, MapPin } from "lucide-react";
import { FaGithub, FaLinkedin } from "react-icons/fa";

const contactItems = [
  {
    title: "Email",
    value: "pilane243@gmail.com",
    href: "mailto:pilane243@gmail.com",
    icon: Mail,
  },
  {
    title: "LinkedIn",
    value: "linkedin.com/in/tlotlo-pilane-55972922b",
    href: "https://www.linkedin.com/in/tlotlo-pilane-55972922b/",
    icon: FaLinkedin,
  },
  {
    title: "GitHub",
    value: "github.com/tlotlo-pilane",
    href: "https://github.com/tlotlo-pilane",
    icon: FaGithub,
  },
  {
    title: "Location",
    value: "Gaborone, Botswana",
    href: "https://maps.google.com/?q=Gaborone,+Botswana",
    icon: MapPin,
  },
];

const Contact = () => {
  const reduceMotion = useReducedMotion();

  return (
    <section
      id="contact"
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
          Contact / Let&apos;s Connect
        </motion.h2>

        <p className="mt-3 max-w-2xl text-sm text-gray-600 dark:text-gray-300 sm:text-base">
          Open to collaborations, freelance opportunities, and software roles.
          Reach out through any channel below.
        </p>

        <ul className="mt-8 grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const isExternal = item.href.startsWith("http");

            return (
              <motion.li
                key={item.title}
                initial={reduceMotion ? false : { opacity: 0, y: 14 }}
                whileInView={{ opacity: 1, y: 0 }}
                viewport={{ once: true, amount: 0.2 }}
                transition={{ duration: 0.4 }}
              >
                <a
                  href={item.href}
                  target={isExternal ? "_blank" : undefined}
                  rel={isExternal ? "noopener noreferrer" : undefined}
                  className="group flex h-full min-h-28 flex-col rounded-2xl border border-gray-200 bg-white p-5 shadow-sm transition hover:-translate-y-1 hover:border-[#4ca771]/70 hover:shadow-md focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] dark:border-gray-800 dark:bg-[#060606]"
                >
                  <span className="inline-flex h-10 w-10 items-center justify-center rounded-full bg-[#4ca771]/10 text-[#4ca771]">
                    <Icon className="h-5 w-5" aria-hidden="true" />
                  </span>
                  <span className="mt-4 text-sm font-semibold uppercase tracking-wide text-gray-500">
                    {item.title}
                  </span>
                  <span className="mt-1 text-sm font-semibold text-black group-hover:text-[#4ca771] dark:text-white">
                    {item.value}
                  </span>
                </a>
              </motion.li>
            );
          })}
        </ul>
      </div>
    </section>
  );
};

export default Contact;
