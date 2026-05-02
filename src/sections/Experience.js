import SectionWrapper from '../components/SectionWrapper';
import TimelineItem from '../components/TimelineItem';
import { experience } from '../data/portfolioData';

function Experience() {
  return (
    <SectionWrapper
      eyebrow="Experience"
      id="experience"
      intro="Teaching, leadership, and software development."
      title="Experience."
    >
      <div className="timeline">
        {experience.map((item) => (
          <TimelineItem
            item={item}
            key={`${item.role}-${item.company}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Experience;
