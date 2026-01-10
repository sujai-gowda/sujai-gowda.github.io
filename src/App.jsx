import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Education from "./components/education";

function App() {
  return (
    <>
      <div className="bg-fixed-layer">
        <div className="blob-1"></div>
        <div className="blob-2"></div>
        <div className="blob-3"></div>
      </div>
      <div className="noise-overlay"></div>
      
      <Navbar />
      <Home />
      <About />
      <Education />
      <Projects />
      <Contact />
    </>
  );
}

export default App;
