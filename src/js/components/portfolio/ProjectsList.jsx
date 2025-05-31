import ProjectsCards from "./ProjectsCards";

const ProjectsList = ({ projects, activeCategory }) => {
  const filteredProjects =
    activeCategory === "All"
      ? projects
      : projects.filter((project) => project.category === activeCategory);

  return (
    <div className="projects-cards">
      {filteredProjects.map((project) => (
        <ProjectsCards key={project.id} projects={project} />
      ))}
    </div>
  );
};

export default ProjectsList;
