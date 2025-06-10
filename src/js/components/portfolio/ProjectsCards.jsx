const ProjectsCards = ({ projects }) => {
  return (
    <section className="card-container">
      <a
        href={projects.link}
        target="_blank"
        rel="noopener noreferrer"
      >
        <div className="card-body">
          <img className="card-image" src={projects.img} alt={projects.name} />
          <div className="card-content">
            <h4>{projects.name}</h4>
            <p className="role-projects">Role: {projects.role}</p>
            <p className="tech-projects">Technologies: {projects.tech}</p>
          </div>
        </div>
      </a>
    </section>
  );
};

export default ProjectsCards;
