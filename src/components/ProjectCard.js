function ProjectCard({ project }) {
  const hasLinks = project.github || project.demo;

  return (
    <article className="card project-card">
      <h3 className="card__title">{project.title}</h3>
      <p className="card__description">{project.description}</p>

      <div className="tag-list" aria-label={`${project.title} tech stack`}>
        {project.techStack.map((tech) => (
          <span className="tag" key={tech}>
            {tech}
          </span>
        ))}
      </div>

      {hasLinks && (
        <div className="project-card__actions">
          {project.github && (
            <a
              className="button button--secondary"
              href={project.github}
              rel="noreferrer"
              target="_blank"
            >
              GitHub
            </a>
          )}
          {project.demo && (
            <a
              className="button button--secondary"
              href={project.demo}
              rel="noreferrer"
              target="_blank"
            >
              Demo
            </a>
          )}
        </div>
      )}
    </article>
  );
}

export default ProjectCard;
