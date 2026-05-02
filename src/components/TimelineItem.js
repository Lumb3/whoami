function TimelineItem({ item }) {
  return (
    <article className="timeline__item">
      <time className="timeline__duration">{item.duration}</time>
      <div className="timeline__content">
        <h3 className="timeline__role">{item.role}</h3>
        <p className="timeline__company">{item.company}</p>
        <p className="timeline__description">{item.description}</p>
        {item.tags && (
          <div className="timeline__tags">
            {item.tags.map((tag) => (
              <span className="tag" key={tag}>
                {tag}
              </span>
            ))}
          </div>
        )}
      </div>
    </article>
  );
}

export default TimelineItem;
