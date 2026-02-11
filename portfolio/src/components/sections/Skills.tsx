import Section from "../common/Section";
import { skills } from "../../data/skills";
import FadeIn from "../common/FadeIn";
import { motion } from "framer-motion";

const containerVariants = {
  hidden: {},
  visible: {
    transition: {
      staggerChildren: 0.12,
    },
  },
};

const cardVariants = {
  hidden: { opacity: 0, y: 20 },
  visible: {
    opacity: 1,
    y: 0,
    transition: { duration: 0.45, ease: "easeOut" },
  },
};

function Skills() {
  return (
    <Section id="skills">
      <FadeIn>
        <div className="flex flex-col items-center gap-12">
          {/* Section Header — CENTER aligned */}
          <div className="text-center max-w-2xl">
            <h2 className="text-3xl md:text-4xl font-bold">
              Skills & Technologies
            </h2>

            <div className="mt-3 mx-auto h-1 w-24 bg-blue-600 rounded-full" />
          </div>

          {/* Cards */}
          <motion.div
            className="grid gap-8 md:grid-cols-3"
            variants={containerVariants}
            initial="hidden"
            whileInView="visible"
            viewport={{ once: true, amount: 0.2 }}
          >
            {skills.map((group) => (
              <motion.div
                key={group.title}
                className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm hover:shadow-md hover:-translate-y-1 transition-all duration-300"
              >
                {/* Card title */}
                <h3 className="text-lg font-semibold mb-6 text-center">
                  {group.title}
                </h3>

                {/* Skills */}
                <div className="flex flex-wrap justify-center gap-2">
                  {group.skills.map((skill) => (
                    <span
                      key={skill}
                      className="px-3 py-1 rounded-full bg-gray-100 text-sm text-gray-800"
                    >
                      {skill}
                    </span>
                  ))}
                </div>
              </motion.div>
            ))}
          </motion.div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default Skills;
