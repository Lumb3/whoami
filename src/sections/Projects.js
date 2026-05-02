import ProjectCard from '../components/ProjectCard';
import SectionWrapper from '../components/SectionWrapper';
import { projects } from '../data/portfolioData';

function Projects() {
  return (
    <SectionWrapper
      eyebrow="Personal Projects"
      id="projects"
      intro="Automation and productivity tools."
      title="Projects."
    >
      <div className="grid grid--cards">
        {projects.map((project, index) => (
          <ProjectCard key={`${project.title}-${index}`} project={project} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Projects;
