import { hero } from '../data/portfolioData';

function Hero() {
  const repeatedStack = [...hero.stack, ...hero.stack];

  return (
    <section className="section hero" id="whoami">
      <div className="section__inner hero__content">
        <div className="hero__main">
          <div className="hero__copy">
            <span className="hero__kicker">{hero.role}</span>
            <h1>{hero.name}</h1>
            <p className="hero__alias">{hero.nickname}</p>
            <p className="hero__summary">{hero.tagline}</p>
            <p className="hero__bio">{hero.bio}</p>
            <div className="hero__actions">
              <a
                className={`button ${hero.resumeUrl ? '' : 'button--muted'}`}
                href={hero.resumeUrl || '#contact'}
                rel={hero.resumeUrl ? 'noreferrer' : undefined}
                target={hero.resumeUrl ? '_blank' : undefined}
              >
                View Resume
              </a>
              <a className="button button--secondary" href="#contact">
                Contact
              </a>
              <a className="button button--secondary" href="#projects">
                Projects
              </a>
            </div>
          </div>

          <aside className="hero-card" aria-label="Profile overview">
            <div className="profile-frame">
              {hero.profileImage ? (
                <img
                  className="profile-frame__image"
                  src={hero.profileImage}
                  alt={hero.name}
                />
              ) : (
                <span className="profile-frame__initials">EA</span>
              )}
            </div>
            <div className="hero-card__stats">
              {hero.stats.map((stat) => (
                <div className="hero-stat" key={stat.label}>
                  <strong>{stat.value}</strong>
                  <span>{stat.label}</span>
                </div>
              ))}
            </div>
          </aside>
        </div>

        <div className="tech-marquee" aria-label="Technical stack">
          <div className="tech-marquee__track">
            {repeatedStack.map((tech, index) => (
              <span key={`${tech}-${index}`}>{tech}</span>
            ))}
          </div>
        </div>
      </div>
    </section>
  );
}

export default Hero;
