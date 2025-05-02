import { projects } from "../../constants";
import About from "../Abouts";
import Contact from "../Contacts";
import Projects from "../Projects";
import Services from "../Services";
import Home from "./Home";
import Tape from "./Tape";

const HomeDefault = ({ menuOpen }) => {
  const limitedProjects = projects.slice(0, 3);

  return (
    <div className="bg-slate-100 dark:bg-slate-950 min-h-screen flex flex-col items-center overflow-x-clip antialiased">
      {/* Hero Section */}
      <div className="w-full max-w-7xl px-4 py-16">
        <Home menuOpen={menuOpen} />
      </div>

      {/* Tape Section */}
      <div className="w-full max-w-7xl px-4 py-16">
        <Tape />
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-7xl px-4 py-16">
        <Projects data={limitedProjects} />
      </div>

      {/* About Section */}
      <div className="w-full max-w-7xl px-4 py-2">
        <About />
      </div>
      <div className="w-full max-w-7xl px-4 py-2">
        <Services />
      </div>
      <div className="w-full max-w-7xl px-4 py-2">
        <Contact />
      </div>
    </div>
  );
};

export default HomeDefault;
