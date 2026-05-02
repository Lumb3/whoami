function CertificateCard({ certificate }) {
  const content = (
    <>
      {certificate.image && (
        <div className="certificate-card__image">
          <img src={certificate.image} alt={`${certificate.title} certificate`} />
        </div>
      )}
      <div className="certificate-card__content">
        <span className="card__meta">{certificate.year}</span>
        <h3 className="card__title">{certificate.title}</h3>
        <p className="card__description">{certificate.issuer}</p>
        {certificate.credentialUrl && (
          <span className="certificate-card__link">View credential</span>
        )}
      </div>
    </>
  );

  if (certificate.credentialUrl) {
    return (
      <a
        className="card certificate-card certificate-card--link"
        href={certificate.credentialUrl}
        rel="noreferrer"
        target="_blank"
      >
        {content}
      </a>
    );
  }

  return (
    <article className="card certificate-card">
      {content}
    </article>
  );
}

export default CertificateCard;
