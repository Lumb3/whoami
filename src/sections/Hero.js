import { hero } from '../data/portfolioData';

function Hero() {
  return (
    <section className="section hero" id="whoami">
      <div className="section__inner hero__content">
        <span className="hero__kicker">{hero.role}</span>
        <h1>{hero.name}</h1>
        <p className="hero__alias">{hero.nickname}</p>
        <p className="hero__summary">{hero.tagline}</p>
        <div className="hero__actions">
          <a className="button" href="#about">
            Explore
          </a>
          <a className="button button--secondary" href="#projects">
            View Projects
          </a>
        </div>
      </div>
    </section>
  );
}

export default Hero;
