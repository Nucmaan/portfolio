import Hero from "../src/Components/Hero/Hero";
import Navbar from "../src/Components/Navbar/Navbar";
import Education from "../src/Components/Education/Education";
import Skills from "./Components/Skills/Skills";
import AboutMe from "./Components/AboutMe/AboutMe";
import ContactMe from "./Components/ContactMe/ContactMe";
import Footer from "./Components/Footer/Footer";
import Projects from "./Components/Projects/Projects";

export default function App() {
  return (
    <div className="bg-gray-100">
      <Navbar />
      <Hero />
      <AboutMe />
      <Skills />
      <Projects />
      <Education />
      <ContactMe />
      <Footer />
    </div>
  );
}
