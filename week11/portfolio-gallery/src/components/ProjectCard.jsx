function ProjectCard({ project }) {
  return (
    <article className="project-card">
      <div className="project-card-top">
        <h2>{project.title}</h2>
        <p>{project.description}</p>
      </div>
      <div className="tech-list" aria-label="Technologies used">
        {project.techStack.map((technology) => (
          <span className="tech-tag" key={technology}>{technology}</span>
        ))}
      </div>
      <div className="project-links">
        <a href={project.githubUrl} target="_blank" rel="noopener noreferrer">GitHub Code ↗</a>
        <a href={project.demoUrl} target="_blank" rel="noopener noreferrer">Live Demo ↗</a>
      </div>
    </article>
  );
}

export default ProjectCard;
