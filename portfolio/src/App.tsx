import NavBar from "./components/layout/NavBar";

function App() {
  return (
    <div className="min-h-screen bg-white text-gray-900">
      <NavBar />

      <main className="pt-16">
        <section
          id="home"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Home</h1>
        </section>

        <section
          id="about"
          className="h-screen flex items-center justify-center bg-gray-50"
        >
          <h1 className="text-4xl font-bold">About</h1>
        </section>

        <section
          id="projects"
          className="h-screen flex items-center justify-center"
        >
          <h1 className="text-4xl font-bold">Projects</h1>
        </section>

        <section
          id="contact"
          className="h-screen flex items-center justify-center bg-gray-50"
        >
          <h1 className="text-4xl font-bold">Contact</h1>
        </section>
      </main>
    </div>
  );
}

export default App;
