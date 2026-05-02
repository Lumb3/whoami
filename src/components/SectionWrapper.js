import { useEffect, useRef, useState } from 'react';

function SectionWrapper({ id, eyebrow, title, intro, children, className = '' }) {
  const sectionRef = useRef(null);
  const [isVisible, setIsVisible] = useState(false);

  useEffect(() => {
    const section = sectionRef.current;

    if (!section) {
      return undefined;
    }

    const observer = new IntersectionObserver(
      ([entry]) => {
        if (entry.isIntersecting) {
          setIsVisible(true);
          observer.unobserve(entry.target);
        }
      },
      { threshold: 0.18 }
    );

    observer.observe(section);

    return () => observer.disconnect();
  }, []);

  return (
    <section
      className={`section ${className} reveal ${isVisible ? 'is-visible' : ''}`}
      id={id}
      ref={sectionRef}
    >
      <div className="section__inner">
        {eyebrow && <p className="section__eyebrow">{eyebrow}</p>}
        {title && <h2 className="section__heading">{title}</h2>}
        {intro && <p className="section__intro">{intro}</p>}
        {children}
      </div>
    </section>
  );
}

export default SectionWrapper;
