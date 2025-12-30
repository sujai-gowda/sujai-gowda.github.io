import Navbar from "./components/Navbar";
import Home from "./components/Home";
import About from "./components/about";
import Projects from "./components/Projects";
import Contact from "./components/contact";
import Education from "./components/education";

function App() {
  return (
    <>
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
