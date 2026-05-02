import { navLinks } from '../data/portfolioData';

function Navbar({ activeSection }) {
  return (
    <header className="navbar">
      <nav className="navbar__inner" aria-label="Primary navigation">
        <a className="navbar__brand" href="#whoami" aria-label="Go to hero section">
          <span className="navbar__mark">W</span>
          <span>Welcome</span>
        </a>

        <div className="navbar__links">
          {navLinks.map((link) => (
            <a
              className={`navbar__link ${
                activeSection === link.id ? 'is-active' : ''
              }`}
              href={`#${link.id}`}
              key={link.id}
            >
              {link.label}
            </a>
          ))}
        </div>
      </nav>
    </header>
  );
}

export default Navbar;
