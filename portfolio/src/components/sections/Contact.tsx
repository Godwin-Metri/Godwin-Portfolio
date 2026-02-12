import FadeIn from "../common/FadeIn";
import Section from "../common/Section";
import { Mail, Github, Linkedin, FileText } from "lucide-react";

function Contact() {
  return (
    <Section id="contact" className="bg-gray-50 dark:bg-gray-900">
      <FadeIn>
        <div className="flex flex-col items-center gap-10 text-center max-w-2xl mx-auto">
          {/* Header */}
          <div>
            <h2 className="text-3xl md:text-4xl font-bold text-gray-900 dark:text-white">
              Let’s Build Something Together
            </h2>

            <div className="mt-3 mx-auto h-1 w-24 bg-blue-600 dark:bg-blue-400 rounded-full" />

            <p className="mt-4 text-gray-600 dark:text-gray-300">
              If you’re building scalable systems, high-performance APIs, or
              distributed platforms, I’d be glad to connect. Feel free to reach
              out for collaborations, discussions, or new opportunities.
            </p>
          </div>

          {/* Contact Links */}
          <div className="flex flex-col gap-6 items-center">
            {/* Primary CTA Button */}
            <a
              href="https://mail.google.com/mail/?view=cm&fs=1&to=godwin3120@gmail.com"
              target="_blank"
              rel="noopener noreferrer"
              className="
                inline-flex items-center gap-2
                px-6 py-3 rounded-md
                bg-gray-900 text-white
                dark:bg-blue-600 dark:text-white
                text-sm font-medium
                hover:bg-gray-800 dark:hover:bg-blue-500
                hover:-translate-y-0.5 active:scale-95
                transition-all duration-200
              "
            >
              <Mail size={16} />
              Email Me
            </a>

            {/* Secondary Links */}
            <div className="flex gap-8 justify-center text-sm font-medium">
              <a
                href="https://github.com/Godwin-Metri"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
              >
                <Github size={16} />
                GitHub
              </a>

              <a
                href="https://www.linkedin.com/in/godwin-metri-b346111a4/"
                target="_blank"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
              >
                <Linkedin size={16} />
                LinkedIn
              </a>

              <a
                href="/resume.pdf"
                download="Godwin_Metri_Resume.pdf"
                className="flex items-center gap-2 text-gray-700 dark:text-gray-200 hover:text-black dark:hover:text-white transition-colors"
              >
                <FileText size={16} />
                Resume
              </a>
            </div>
          </div>
        </div>
      </FadeIn>
    </Section>
  );
}

export default Contact;
