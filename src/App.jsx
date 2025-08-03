import "./App.css";
import About from "./pages/About";
import Contact from "./pages/Contact";
import Education from "./pages/Education";
import Footer from "./pages/Footer";
import Home from "./pages/Home";
import Navbar from "./pages/Navbar";
import Skills from "./pages/Skills";

function App() {
  return (
    <>
      <Navbar />
      <Home />
      <About />
      <Education />
      <Skills />
      <Contact />
      <Footer />
    </>
  );
}

export default App;
