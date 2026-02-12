import Section from "../common/Section";
import FadeIn from "../common/FadeIn";

function Hero() {
  return (
    <Section id="home">
      <FadeIn>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 max-w-5xl mx-auto">
          {/* Text Content */}
          <div className="flex flex-col items-center md:items-start text-center md:text-left gap-6 max-w-xl">
            <h1 className="text-4xl md:text-5xl font-bold leading-tight text-gray-900 dark:text-white">
              Hi, I’m Godwin Metri 👋
            </h1>

            <h2 className="text-xl md:text-2xl text-gray-600 dark:text-gray-200">
              Full Stack Software Engineer — Distributed Systems & Cloud
              Platforms
            </h2>

            <p className="text-gray-700 dark:text-gray-200 leading-relaxed">
              I design and build high-performance backend systems that power
              real-world applications at scale. With 4.5+ years of experience, I
              specialize in distributed architectures, high-throughput APIs, and
              cloud-native platforms.
            </p>

            <div className="flex gap-4 pt-4">
              <a
                href="#projects"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-900 text-white dark:bg-blue-600 dark:hover:bg-blue-500 text-sm font-medium hover:bg-gray-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                View Projects
              </a>

              <a
                href="#contact"
                className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 dark:border-gray-700 text-gray-900 dark:text-gray-200 text-sm font-medium hover:bg-gray-100 dark:hover:bg-gray-800 hover:-translate-y-0.5 active:scale-95 transition-all duration-200"
              >
                Contact Me
              </a>
            </div>
          </div>

          {/* Profile Image */}
          <div className="relative flex justify-center">
            <div className="relative w-40 h-40 md:w-52 md:h-52">
              {/* Subtle glow background */}
              <div className="absolute inset-0 rounded-full bg-blue-500/10 blur-2xl dark:bg-blue-400/10" />

              <img
                src="/profile_pic.jpg"
                alt="Godwin Metri"
                className="
        relative w-full h-full 
        rounded-full 
        object-cover 
        border border-gray-300 dark:border-gray-700 
        shadow-xl
      "
              />
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default Hero;
