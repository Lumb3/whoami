import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import AcademicWork from './sections/AcademicWork';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import TechStack from './sections/TechStack';
import { navLinks } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState(navLinks[0].id);

  useEffect(() => {
    document.documentElement.removeAttribute('data-theme');
    window.localStorage.removeItem('portfolio-theme');
  }, []);

  useEffect(() => {
    const observer = new IntersectionObserver(
      (entries) => {
        const visibleEntry = entries.find((entry) => entry.isIntersecting);

        if (visibleEntry) {
          setActiveSection(visibleEntry.target.id);
        }
      },
      {
        rootMargin: '-42% 0px -42% 0px',
        threshold: 0.01,
      }
    );

    navLinks.forEach(({ id }) => {
      const section = document.getElementById(id);

      if (section) {
        observer.observe(section);
      }
    });

    return () => observer.disconnect();
  }, []);

  return (
    <div className="site-shell">
      <Navbar activeSection={activeSection} />
      <main>
        <Hero />
        <About />
        <TechStack />
        <AcademicWork />
        <Projects />
        <Experience />
        <Certificates />
        <Contact />
      </main>
    </div>
  );
}

export default App;
