import { projects } from "../../constants";
import Projects from "../Projects";
import Home from "./Home";

import Tape from "./Tape";

const HomeDefault = ({ menuOpen }) => {
  const limitedProjects = projects.slice(0, 3);

  return (
    <div className="bg-slate-100 dark:bg-slate-950 min-h-screen flex flex-col items-center">
      {/* Hero Section */}
      <div className="w-full max-w-5xl px-4 py-16">
        <Home menuOpen={menuOpen} />
      </div>

      {/* Tape Section */}
      <div className="w-full max-w-5xl px-4 py-16">
        <Tape />
      </div>

      {/* Projects Section */}
      <div className="w-full max-w-5xl px-4 py-16">
        <Projects data={limitedProjects} />
      </div>
    </div>
  );
};

export default HomeDefault;
