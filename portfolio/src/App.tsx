import NavBar from "./components/layout/Navbar";
import Skills from "./components/sections/Skills";
import Hero from "./components/sections/Hero";
import About from "./components/sections/About";
import Projects from "./components/sections/Projects";
import Contact from "./components/sections/Contact";
import Footer from "./components/layout/Footer";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <main className="pt-16">
        <Hero />

        <About />

        <Skills />

        <Projects />

        <Contact />
      </main>
      <Footer />
    </div>
  );
}

export default App;
