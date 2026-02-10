import Section from "../common/Section"

function About() {
  return (
    <Section id="about" className="bg-gray-50">
      <div className="flex flex-col items-center gap-6 text-center max-w-3xl mx-auto">

        <span className="text-sm font-medium text-gray-500 uppercase tracking-wide">
          About
        </span>

        <h2 className="text-3xl md:text-4xl font-bold leading-tight">
          How I build and scale software systems
        </h2>

        <p className="text-gray-700 leading-relaxed">
          I’m a software engineer with 4.5+ years of experience building
          cloud-native and distributed systems in production environments.
          I specialize in backend architecture, high-throughput APIs, and
          scalable system design.
        </p>

        <p className="text-gray-700 leading-relaxed">
          Currently, I work as a core backend engineer on an enterprise AI
          platform, designing and scaling FastAPI-based microservices that
          serve real-world traffic at scale. I enjoy working across the
          stack, but I’m most passionate about backend systems and
          distributed architectures.
        </p>

      </div>
    </Section>
  )
}

export default About
