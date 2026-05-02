import SectionWrapper from '../components/SectionWrapper';
import { about } from '../data/portfolioData';

function About() {
  return (
    <SectionWrapper
      eyebrow="About Me"
      id="about"
      title="Automation-minded engineering with a clear, practical edge."
    >
      <div className="about__layout">
        <p className="about__copy">{about.intro}</p>

        <article className="education-card" aria-label="University of Utah education">
          <div className="school-mark">
            <img
              alt="The University of Utah"
              src={about.education.logo}
            />
          </div>
          <div className="education-card__header">
            <div>
              <p className="education-card__label">Education</p>
              <h3>{about.education.institution}</h3>
              <p>{about.education.degree}</p>
            </div>
          </div>

          <div className="education-card__meta">
            <span>{about.education.graduation}</span>
            <span>{about.education.location}</span>
            <span>{about.education.focus}</span>
          </div>

          <div className="education-card__highlights">
            {about.education.highlights.map((item) => (
              <div className="education-highlight" key={item.label}>
                <span>{item.label}</span>
                <strong>{item.value}</strong>
                <p>{item.detail}</p>
              </div>
            ))}
          </div>

          <div className="education-card__coursework">
            {about.education.coursework.map((course) => (
              <span className="tag tag--accent" key={course}>
                {course}
              </span>
            ))}
          </div>
        </article>
      </div>
    </SectionWrapper>
  );
}

export default About;
