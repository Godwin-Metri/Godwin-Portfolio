import Section from "../common/Section";
import { skills } from "../../data/skills";

function Skills() {
  return (
    <Section id="skills">
      <div className="flex flex-col items-center gap-12">
        {/* Section Header — CENTER aligned */}
        <div className="text-center max-w-2xl">
          <h2 className="text-3xl md:text-4xl font-bold">
            Skills & Technologies
          </h2>

          <div className="mt-3 mx-auto h-1 w-24 bg-blue-600 rounded-full" />
        </div>

        {/* Cards */}
        <div className="grid gap-8 md:grid-cols-3">
          {skills.map((group) => (
            <div
              key={group.title}
              className="rounded-xl bg-white p-6 border border-gray-100 shadow-sm"
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
            </div>
          ))}
        </div>
      </div>
    </Section>
  );
}

export default Skills;
