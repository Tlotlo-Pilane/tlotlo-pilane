import { motion, useReducedMotion } from "framer-motion";
import { ExternalLink, Github, Lock } from "lucide-react";

const statusStyles = {
  Live: "bg-emerald-100 text-emerald-700 dark:bg-emerald-900/30 dark:text-emerald-300",
  "In Progress":
    "bg-amber-100 text-amber-700 dark:bg-amber-900/30 dark:text-amber-300",
  Private: "bg-slate-200 text-slate-700 dark:bg-slate-800 dark:text-slate-200",
};

const ProjectCard = ({
  title,
  problem,
  solution,
  highlights = [],
  techStack,
  image,
  imageAlt,
  status,
  liveUrl,
  repoUrl,
}) => {
  const reduceMotion = useReducedMotion();
  const hasLiveUrl = Boolean(liveUrl);
  const hasRepoUrl = Boolean(repoUrl);

  return (
    <motion.article
      initial={reduceMotion ? false : { opacity: 0, y: 18 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, amount: 0.2 }}
      transition={{ duration: 0.45 }}
      className="overflow-hidden rounded-3xl border border-gray-200 bg-white shadow-sm dark:border-gray-800 dark:bg-[#060606]"
    >
      <div className="grid gap-6 p-6 lg:grid-cols-[1.05fr_1fr]">
        <div className="relative overflow-hidden rounded-2xl border border-gray-200 dark:border-gray-800">
          {hasLiveUrl ? (
            <a
              href={liveUrl}
              target="_blank"
              rel="noopener noreferrer"
              className="block focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771]"
              aria-label={`Open live project: ${title}`}
            >
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="h-full min-h-52 w-full object-cover transition duration-300 hover:scale-[1.02]"
              />
            </a>
          ) : (
            <div className="relative">
              <img
                src={image}
                alt={imageAlt}
                loading="lazy"
                decoding="async"
                width="1200"
                height="800"
                className="h-full min-h-52 w-full object-cover opacity-90"
              />
              <div className="absolute inset-0 flex items-center justify-center bg-black/30">
                <span className="rounded-full bg-white px-4 py-2 text-xs font-bold uppercase tracking-wide text-black">
                  {status === "Private" ? "Private Project" : "Coming Soon"}
                </span>
              </div>
            </div>
          )}
        </div>

        <div className="flex flex-col">
          <div className="flex flex-wrap items-center gap-3">
            <h3 className="text-2xl font-extrabold tracking-tight text-black dark:text-white">
              {title}
            </h3>
            <span
              className={`rounded-full px-3 py-1 text-xs font-semibold uppercase tracking-wide ${
                statusStyles[status] || statusStyles.Private
              }`}
            >
              {status}
            </span>
          </div>

          <div className="mt-5 space-y-4">
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Problem
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {problem}
              </p>
            </div>
            <div>
              <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                Solution
              </h4>
              <p className="mt-1 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                {solution}
              </p>
            </div>
            {highlights.length > 0 && (
              <div>
                <h4 className="text-xs font-semibold uppercase tracking-wide text-gray-500">
                  Key Additions
                </h4>
                <ul className="mt-2 list-disc space-y-1 pl-5 text-sm leading-relaxed text-gray-700 dark:text-gray-300">
                  {highlights.map((highlight) => (
                    <li key={highlight}>{highlight}</li>
                  ))}
                </ul>
              </div>
            )}
          </div>

          <ul className="mt-4 flex flex-wrap gap-2">
            {techStack.map((tech) => (
              <li
                key={tech}
                className="rounded-full border border-gray-200 bg-gray-100 px-3 py-1 text-xs font-semibold text-gray-700 dark:border-gray-700 dark:bg-gray-900 dark:text-gray-200"
              >
                {tech}
              </li>
            ))}
          </ul>

          <div className="mt-6 flex flex-wrap gap-3">
            {hasLiveUrl ? (
              <a
                href={liveUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg bg-[#4ca771] px-4 py-2 text-sm font-semibold text-white transition hover:bg-[#3c8d5d] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771]"
              >
                <ExternalLink size={16} aria-hidden="true" />
                Live Project
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 dark:border-gray-700">
                <Lock size={16} aria-hidden="true" />
                {status === "Private" ? "Private Project" : "Coming Soon"}
              </span>
            )}

            {hasRepoUrl ? (
              <a
                href={repoUrl}
                target="_blank"
                rel="noopener noreferrer"
                className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-black transition hover:border-[#4ca771] hover:text-[#4ca771] focus-visible:outline-none focus-visible:ring-2 focus-visible:ring-[#4ca771] dark:border-gray-700 dark:text-white"
              >
                <Github size={16} aria-hidden="true" />
                GitHub
              </a>
            ) : (
              <span className="inline-flex min-h-10 items-center gap-2 rounded-lg border border-gray-300 px-4 py-2 text-sm font-semibold text-gray-500 dark:border-gray-700">
                <Lock size={16} aria-hidden="true" />
                Private Repository
              </span>
            )}
          </div>
        </div>
      </div>
    </motion.article>
  );
};

export default ProjectCard;
