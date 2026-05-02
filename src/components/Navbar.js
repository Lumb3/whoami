import { navLinks } from '../data/portfolioData';

function Navbar({ activeSection, onToggleTheme, theme }) {
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

        <button
          aria-label={`Switch to ${theme === 'light' ? 'dark' : 'light'} mode`}
          className="theme-toggle"
          onClick={onToggleTheme}
          type="button"
        >
          <span className="theme-toggle__icon" aria-hidden="true">
            {theme === 'light' ? 'D' : 'L'}
          </span>
          <span>{theme === 'light' ? 'Dark' : 'Light'}</span>
        </button>
      </nav>
    </header>
  );
}

export default Navbar;
