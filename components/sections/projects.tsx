import { projects } from "@/data/projects";
import ProjectCard from "../utils/projectCard";

const Projects = () => {
  return (
    <section className="w-full h-auto">
      <h2 className="w-full text-[80px] px-[4rem]">
        Proyectos
      </h2>
      <div className="w-full h-auto">
        {
          projects.map((project) => (
            <ProjectCard
              key={project.id}
              reference={project.reference}
              title={project.title}
              image={project.mainImage}
            />
          ))
        }
      </div>
    </section>
  );
};

export default Projects;