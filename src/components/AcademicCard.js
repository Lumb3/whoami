function AcademicCard({ item }) {
  return (
    <article className="card academic-card">
      <div>
        <span className="card__meta">{item.duration}</span>
        <h3 className="card__title">{item.title}</h3>
        <p className="card__description">{item.institution}</p>
      </div>

      <p className="academic-card__summary">{item.description}</p>

      <ul className="academic-card__list">
        {item.highlights.map((highlight) => (
          <li key={highlight}>{highlight}</li>
        ))}
      </ul>

      {item.link && (
        <a
          className="button button--secondary"
          href={item.link}
          rel="noreferrer"
          target="_blank"
        >
          {item.linkLabel}
        </a>
      )}
    </article>
  );
}

export default AcademicCard;
