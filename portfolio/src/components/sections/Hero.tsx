import Section from "../common/Section"

function Hero() {
  return (
    <Section id="home">
      <div className="flex flex-col items-center gap-6 text-center max-w-2xl mx-auto">
        
        <h1 className="text-4xl md:text-5xl font-bold leading-tight">
          Hi, I’m Godwin Metri 👋
        </h1>

        <h2 className="text-xl md:text-2xl text-gray-600">
          Software Engineer — Distributed Systems & Cloud Platforms
        </h2>

        <p className="text-gray-700 leading-relaxed">
          Software engineer with 4.5+ years of experience building scalable,
          cloud-native platforms and high-throughput APIs, with a strong
          focus on backend systems and distributed architectures.
        </p>

        <div className="flex gap-4 pt-4">
          <a
            href="#projects"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            View Projects
          </a>

          <a
            href="#contact"
            className="inline-flex items-center justify-center px-6 py-3 rounded-md border border-gray-300 text-sm font-medium hover:bg-gray-100 transition-colors"
          >
            Contact Me
          </a>
        </div>

      </div>
    </Section>
  )
}

export default Hero
