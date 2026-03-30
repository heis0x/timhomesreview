import { Link } from "react-router-dom";

const PROCESS = [
  {
    num: "01",
    title: "Arrival",
    body: "The first screen should feel like checking into a private suite — calm, warm, and immediately reassuring. Every detail of the arrival sequence is designed before anything practical appears.",
    image:
      "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "02",
    title: "Selection",
    body: "Apartments become residences. Shortlets feel editorial. Each listing is framed around comfort, privacy, and stay-ready detail rather than square footage and spec sheets.",
    image:
      "https://images.unsplash.com/photo-1484154218962-a197022b5858?auto=format&fit=crop&w=600&q=80",
  },
  {
    num: "03",
    title: "Service",
    body: "Inquiry, viewing, and booking language stays discreet so the site feels guided by service rather than aggressive sales pressure. The guest is the focus at every stage.",
    image:
      "https://images.unsplash.com/photo-1616594039964-3f6c7ff6d13f?auto=format&fit=crop&w=600&q=80",
  },
];

export function ApproachPage() {
  return (
    <>
      <section className="page-hero page-hero--dark">
        <div className="site-shell page-hero__grid">
          <div>
            <p className="eyebrow eyebrow--light">Approach</p>
            <h1 className="display-title display-title--light" data-reveal>
              Designed with the rhythm of a boutique hospitality brand.
            </h1>
          </div>
          <div className="body-copy body-copy--light" data-reveal>
            <p>
              Tim Homes is presented through tone, pace, and atmosphere so every rental, shortlet,
              or serviced stay feels ready before the guest even arrives.
            </p>
            <p>
              Each project begins with how the space should feel, shaped by the client's vision, the
              energy they want to create, and the moments they hope to inspire.
            </p>
          </div>
        </div>
      </section>

      {/* Approach image reel */}
      <div className="approach-hero-reel" data-cursor="Explore">
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury apartment interior"
          data-parallax
        />
        <div className="approach-hero-reel__veil" aria-hidden="true" />
      </div>

      {/* Process steps — DADO-style */}
      <section className="section section--ivory">
        <div className="site-shell">
          <div className="section-heading" style={{ marginBottom: "0" }}>
            <p className="eyebrow">How we work</p>
            <h2 className="display-title" data-reveal>
              Partners in creation.
            </h2>
          </div>

          <div className="process-steps" style={{ marginTop: "4rem" }}>
            {PROCESS.map((step) => (
              <div key={step.num} className="process-step">
                <span className="process-step__num">{step.num}</span>
                <div className="process-step__body">
                  <h3>{step.title}</h3>
                  <p>{step.body}</p>
                </div>
                <div className="process-step__img" data-cursor="View">
                  <img src={step.image} alt={step.title} />
                </div>
              </div>
            ))}
          </div>
        </div>
      </section>

      {/* Editorial statement */}
      <section className="section section--charcoal">
        <div className="site-shell">
          <p className="eyebrow eyebrow--light" data-reveal>
            The philosophy
          </p>
          <h2
            className="display-title display-title--light"
            data-reveal
            style={{ maxWidth: "16ch", marginTop: "1rem" }}
          >
            Tell us what the stay should feel like. We'll make it so.
          </h2>
          <div style={{ marginTop: "3rem" }}>
            <Link to="/contact" className="button button--ghost btn-chars">
              <span className="btn-chars__bg" aria-hidden="true" />
              <span className="btn-chars__track">
                {"Request a viewing".split("").map((ch, i) => (
                  <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
                ))}
              </span>
            </Link>
          </div>
        </div>
      </section>

      {/* Featured projects — like DADO */}
      <section className="section section--ivory">
        <div className="site-shell">
          <div className="section-heading section-heading--collections">
            <p className="eyebrow">Featured apartments</p>
            <Link to="/rentals" className="text-link uline">
              All residences
            </Link>
          </div>
        </div>
      </section>
    </>
  );
}
