import Section from "../common/Section";

function Contact() {
  return (
    <Section id="contact" className="bg-gray-50">
      <div className="flex flex-col items-center gap-10 text-center max-w-2xl mx-auto">
        {/* Header */}
        <div>
          <h2 className="text-3xl md:text-4xl font-bold">
            Let’s Build Something Together
          </h2>

          <div className="mt-3 mx-auto h-1 w-24 bg-blue-600 rounded-full" />

          <p className="mt-4 text-gray-600">
            Interested in collaborating, discussing backend systems, distributed
            architecture, or new opportunities? I’d love to connect.
          </p>
        </div>

        {/* Contact Links */}
        <div className="flex flex-col gap-4">
          <a
            href="mailto:godwin3120@gmail.com"
            className="px-6 py-3 rounded-md bg-gray-900 text-white text-sm font-medium hover:bg-gray-800 transition-colors"
          >
            Connect Me
          </a>

          <div className="flex gap-6 justify-center text-sm text-blue-600 font-medium">
            <a
              href="https://github.com/Godwin-Metri"
              target="_blank"
              className="hover:underline"
            >
              GitHub
            </a>

            <a
              href="https://www.linkedin.com/in/godwin-metri-b346111a4/"
              target="_blank"
              className="hover:underline"
            >
              LinkedIn
            </a>

            {/* TODO: Download actual resume. */}
            <a href="/resume.pdf" target="_blank" className="hover:underline">
              Resume
            </a>
          </div>
        </div>
      </div>
    </Section>
  );
}

export default Contact;
