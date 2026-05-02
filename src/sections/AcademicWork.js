import AcademicCard from '../components/AcademicCard';
import SectionWrapper from '../components/SectionWrapper';
import { academicWork } from '../data/portfolioData';

function AcademicWork() {
  return (
    <SectionWrapper
      eyebrow="Academic Work"
      id="academic"
      intro="Research, analysis, and independent execution."
      title="Academic work."
    >
      <div className="grid grid--featured">
        {academicWork.map((item) => (
          <AcademicCard item={item} key={item.title} />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default AcademicWork;
