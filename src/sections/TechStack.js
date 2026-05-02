import SectionWrapper from '../components/SectionWrapper';
import { toolbox } from '../data/portfolioData';

function TechStack() {
  return (
    <SectionWrapper
      className="toolbox-section"
      eyebrow="Technical Toolbox"
      id="toolbox"
      intro="A practical stack shaped by coursework, research, automation projects, and teaching."
      title="Tools I use to build, debug, automate, and research."
    >
      <div className="toolbox-grid">
        {toolbox.map((group) => (
          <article className="toolbox-card" key={group.category}>
            <div className="toolbox-card__header">
              <span aria-hidden="true">{group.category.slice(0, 2)}</span>
              <h3>{group.category}</h3>
            </div>
            <div className="toolbox-card__items">
              {group.items.map((item) => (
                <span className="tool-chip" key={item}>
                  {item}
                </span>
              ))}
            </div>
          </article>
        ))}
      </div>
    </SectionWrapper>
  );
}

export default TechStack;
