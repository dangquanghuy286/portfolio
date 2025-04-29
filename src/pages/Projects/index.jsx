import React from "react";
import SectionTitle from "../../components/SectionTitle";
import { projects } from "../../constants";
import ProjectCart from "../../components/ProjectCart";

const Projects = () => {
  return (
    <section className="py-16">
      <SectionTitle title="Dự án của tôi" />
      <div className="container mt-10">
        <div className="space-y-8">
          {projects.map((project, index) => (
            <ProjectCart
              key={project.id || index}
              projects={project}
              index={index}
            />
          ))}
        </div>
      </div>
    </section>
  );
};

export default Projects;
