const phases = [
  {
    name: "01. Arrival",
    text:
      "The first screen should feel like checking into a private suite: calm, warm, and immediately reassuring.",
  },
  {
    name: "02. Selection",
    text:
      "Apartments become residences, shortlets feel editorial, and each listing is framed around comfort, privacy, and stay-ready detail.",
  },
  {
    name: "03. Service",
    text:
      "Inquiry, viewing, and booking language stay discreet so the site feels guided by service rather than aggressive sales pressure.",
  },
];

export function ApproachPage() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="site-shell page-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">Approach</p>
            <h1 className="display-title display-title--light" data-reveal>Designed with the rhythm of a boutique hospitality brand.</h1>
          </div>
          <div className="body-copy body-copy--light" data-reveal>
            <p>
              Tim Homes is presented through tone, pace, and atmosphere so every rental, shortlet, or serviced stay feels ready before the guest even arrives.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="site-shell approach-grid">
          {phases.map((phase) => (
            <article key={phase.name} className="phase-card" data-reveal>
              <span>{phase.name}</span>
              <p>{phase.text}</p>
            </article>
          ))}
        </div>
      </section>
    </>
  );
}
