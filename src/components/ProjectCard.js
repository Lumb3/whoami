function ProjectCard({ project }) {
  const hasLinks = project.github || project.demo;
  const visualTone = project.visual?.tone || 'blue';

  return (
    <article className="card project-card">
      {project.image ? (
        <div className="project-card__media">
          <img src={project.image} alt={`${project.title} preview`} />
        </div>
      ) : (
        <div className={`project-card__visual project-card__visual--${visualTone}`}>
          <div className="project-card__visual-grid" aria-hidden="true" />
          <div className="project-card__visual-mark" aria-hidden="true">
            {project.title.slice(0, 2)}
          </div>
          <div className="project-card__visual-content">
            <span>{project.visual?.eyebrow || 'Project'}</span>
            <strong>{project.visual?.title || project.title}</strong>
            <em>{project.visual?.metric || 'Portfolio project'}</em>
          </div>
        </div>
      )}

      <div className="project-card__body">
        <h3 className="card__title">{project.title}</h3>
        <p className="card__description">{project.description}</p>
        {project.impact && (
          <p className="project-card__impact">{project.impact}</p>
        )}

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
                Live Demo
              </a>
            )}
          </div>
        )}
      </div>
    </article>
  );
}

export default ProjectCard;
