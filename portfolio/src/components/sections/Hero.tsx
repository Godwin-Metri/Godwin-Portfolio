import Section from "../common/Section";
import FadeIn from "../common/FadeIn";

function Hero() {
  return (
    <Section id="home">
      <FadeIn>
        <div className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
          {/* Main Heading */}
          <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
            Hi, I’m Godwin Metri 👋
          </h1>

          {/* Subtitle */}
          <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-200">
            Software Engineer — Distributed Systems & Cloud Platforms
          </h2>

          {/* Description */}
          <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
            Software engineer with 4.5+ years of experience building scalable,
            cloud-native platforms and high-throughput APIs, with a strong focus
            on backend systems and distributed architectures.
          </p>

          {/* Buttons */}
          <div className="flex gap-4 pt-4">
            {/* Primary Button */}
            <a
              href="#projects"
              className="
                inline-flex items-center justify-center 
                px-6 py-3 rounded-md 
                bg-gray-900 text-white 
                dark:bg-blue-600 dark:text-white 
                text-sm font-medium 
                hover:bg-gray-800 dark:hover:bg-blue-500 
                hover:-translate-y-0.5 active:scale-95 
                transition-all duration-200
              "
            >
              View Projects
            </a>

            {/* Secondary Button */}
            <a
              href="#contact"
              className="
                inline-flex items-center justify-center 
                px-6 py-3 rounded-md 
                border border-gray-300 text-gray-900 
                dark:border-gray-700 dark:text-gray-200 
                text-sm font-medium 
                hover:bg-gray-100 dark:hover:bg-gray-800 
                hover:-translate-y-0.5 active:scale-95 
                transition-all duration-200
              "
            >
              Contact Me
            </a>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default Hero;
