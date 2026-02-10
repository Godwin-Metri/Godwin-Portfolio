import NavBar from "./components/layout/Navbar";
import Section from "./components/common/Section";
import Skills from "./components/sections/Skills";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <main className="pt-16">
        <Hero />

        <About />

        <Skills />

        <Section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
        </Section>

        <Section
          id="contact"
          className="h-screen flex items-center justify-center bg-gray-50"
        >
          <h1 className="text-4xl font-bold">Contact</h1>
        </Section>
      </main>
    </div>
  );
}

export default App;
