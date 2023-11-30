import "./app.scss";
import "./components/sidebar/Sidebar.jsx";

import { Sidebar } from "./components/sidebar/Sidebar.jsx";
import { Hero } from "./components/homepage/Hero.jsx";
import { Parallax } from "./components/parallax/Parallax.jsx";
import { About } from "./components/aboutpage/About.jsx";
import { Contact } from "./components/contactpage/Contact.jsx";
import { Project } from "./components/projectpage/Project.jsx";
// import { ParticlesBackground } from "./components/particles/ParticlesBackground.jsx";

const App = () => {
  return (
    <div>
      {/* <section>
        <ParticlesBackground />
      </section> */}
      <section id="Homepage">
        <Sidebar />
        <Hero />
      </section>
      <section id="About">
        <Parallax type="about" />
      </section>
      <section>
        <About />
      </section>
      <section id="Projects">
        <Parallax type="projects" />
      </section>
      <Project />
      <section id="Contact">
        <Contact />
      </section>
    </div>
  );
};

export default App;
