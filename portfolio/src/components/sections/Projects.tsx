import { motion } from "framer-motion";
import Section from "../common/Section";
import { projects } from "../../data/project";
import FadeIn from "../common/FadeIn";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.15,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 30 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.5, ease: "easeOut" },
  },
};

function Projects() {
  return (
    <Section id="projects">
      <FadeIn>
        <div className="flex flex-col items-center gap-16">
          {/* Header */}
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Selected Projects
            </h2>
            <div className="mt-3 mx-auto h-1 w-24 bg-blue-600 rounded-full" />
            <p className="mt-4 text-gray-600">
              A selection of systems and platforms I’ve built and scaled in
              production.
            </p>
          </div>

          {/* Project Cards */}
          <motion.div
            className="grid gap-10 md:grid-cols-2 w-full"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {projects.map((project) => (
              <motion.div
                key={project.title}
                className="rounded-xl border border-gray-100 p-8 bg-white shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                <h3 className="text-xl font-semibold">{project.title}</h3>

                <p className="mt-3 text-gray-700">{project.description}</p>

                <ul className="mt-4 space-y-2 text-sm text-gray-600">
                  {project.highlights.map((point) => (
                    <li key={point}>• {point}</li>
                  ))}
                </ul>

                <div className="mt-6 flex flex-wrap gap-2">
                  {project.tech.map((tech) => (
                    <span
                      key={tech}
                      className="px-3 py-1 rounded-full bg-gray-100 text-xs text-gray-800"
                    >
                      {tech}
                    </span>
                  ))}
                </div>

                {project.link && (
                  <a
                    href={project.link}
                    target="_blank"
                    className="inline-block mt-6 text-sm font-medium text-blue-600 hover:underline"
                  >
                    View Project →
                  </a>
                )}
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default Projects;
