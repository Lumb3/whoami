import { useEffect, useState } from 'react';
import Navbar from './components/Navbar';
import About from './sections/About';
import AcademicWork from './sections/AcademicWork';
import Certificates from './sections/Certificates';
import Contact from './sections/Contact';
import Experience from './sections/Experience';
import Hero from './sections/Hero';
import Projects from './sections/Projects';
import { navLinks } from './data/portfolioData';

function App() {
  const [activeSection, setActiveSection] = useState(navLinks[0].id);
  const [theme, setTheme] = useState(() => {
    const savedTheme = window.localStorage.getItem('portfolio-theme');

    if (savedTheme) {
      return savedTheme;
    }

    return window.matchMedia('(prefers-color-scheme: dark)').matches
      ? 'dark'
      : 'light';
  });

  useEffect(() => {
    document.documentElement.dataset.theme = theme;
    window.localStorage.setItem('portfolio-theme', theme);
  }, [theme]);

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
      <Navbar
        activeSection={activeSection}
        onToggleTheme={() =>
          setTheme((currentTheme) =>
            currentTheme === 'light' ? 'dark' : 'light'
          )
        }
        theme={theme}
      />
      <main>
        <Hero />
        <About />
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
