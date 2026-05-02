import CertificateCard from '../components/CertificateCard';
import SectionWrapper from '../components/SectionWrapper';
import { certificates } from '../data/portfolioData';

function Certificates() {
  return (
    <SectionWrapper
      eyebrow="Certificates"
      id="certificates"
      intro="Click any certificate to verify it."
      title="Credentials."
    >
      <div className="grid grid--certificates">
        {certificates.map((certificate, index) => (
          <CertificateCard
            certificate={certificate}
            key={`${certificate.title}-${index}`}
          />
        ))}
      </div>
    </SectionWrapper>
  );
}

export default Certificates;
