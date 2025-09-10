import { useState } from "react";
import Header from "./components/Header";
import About from "./components/About";
import Projects from "./components/Projects";
import Contact from "./components/Contact";
import Footer from "./components/Footer";

function App() {
  const [showProjects, setShowProjects] = useState(true);

  return (
    <>
      <Header />
      <About />
      {showProjects ? <Projects /> : <p>No projects available yet.</p>}
      <button onClick={() => setShowProjects(!showProjects)}>
        Toggle Projects
      </button>
      <Contact />
      <Footer />
    </>
  );
}

export default App;
