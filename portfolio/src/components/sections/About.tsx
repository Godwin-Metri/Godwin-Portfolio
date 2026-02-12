import FadeIn from "../common/FadeIn";
import Section from "../common/Section";

function About() {
  return (
    <Section id="about" className="bg-gray-50 dark:bg-gray-900">
      <FadeIn>
        <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">
          {/* Section Label */}
          <span className="text-sm font-medium uppercase tracking-wide text-gray-500 dark:text-gray-400">
            About
          </span>

          {/* Heading */}
          <h2 className="text-3xl md:text-4xl font-bold leading-tight text-gray-900 dark:text-white">
            How I Think About Building Systems
          </h2>

          {/* Paragraph 1 */}
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            I focus on clarity, scalability, and long-term maintainability. My
            work revolves around designing systems that handle real production
            traffic — not just work in theory. From decomposing monoliths into
            microservices to optimizing high-throughput APIs, I aim to build
            systems that remain stable under pressure.
          </p>

          {/* Paragraph 2 */}
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            Currently, I work as a core backend engineer on an enterprise AI
            platform, where I design and scale FastAPI-based services handling
            tens of thousands of requests per second. I enjoy solving
            performance bottlenecks, improving system architecture, and building
            reliable infrastructure that teams can depend on.
          </p>
        </div>
      </FadeIn>
    </Section>
  );
}

export default About;
