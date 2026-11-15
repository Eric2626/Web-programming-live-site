import ProjectCard from './ProjectCard';

function ProjectList({ projects }) {
  if (projects.length === 0) {
    return <p className="empty-message">No projects found for this technology.</p>;
  }

  return (
    <section className="project-grid" aria-label="Portfolio projects">
      {projects.map((project) => (
        <ProjectCard key={project.id} project={project} />
      ))}
    </section>
  );
}

export default ProjectList;
