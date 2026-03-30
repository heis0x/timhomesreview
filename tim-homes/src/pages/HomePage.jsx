import { Link } from "react-router-dom";
import { HeroStage } from "../components/HeroStage";
import { EditorialReel } from "../components/EditorialReel";
import { featuredApartments, principles } from "../data/siteData";

function RollBtn({ to, label, variant = "primary" }) {
  const chars = label.split("");
  return (
    <Link to={to} className={`button button--${variant} btn-chars`} data-cursor="View">
      <span className="btn-chars__bg" aria-hidden="true" />
      <span className="btn-chars__track">
        {chars.map((ch, i) => (
          <span key={i} aria-hidden="true">
            {ch === " " ? "\u00A0" : ch}
          </span>
        ))}
      </span>
      <span className="visually-hidden">{label}</span>
    </Link>
  );
}

export function HomePage() {
  return (
    <>
      <HeroStage
        title="Elevated Living"
        statement="Tim Homes presents furnished apartments, serviced suites, and shortlet residences for private stays across Lagos."
      />

      <section className="section section--ivory statement-section">
        <div className="site-shell">
          <h2 className="statement-section__title" data-reveal>
            Luxury apartments, serviced suites, and shortlet residences prepared for calmer stays.
          </h2>
          <div className="statement-section__figure">
            <video
              src="https://www.studiodado.com/wp-content/uploads/2025/09/Regent-Suite-2-Animation-1.mp4"
              autoPlay
              muted
              loop
              playsInline
              data-parallax
            />
          </div>
        </div>
      </section>

      <EditorialReel />

      <section className="section section--ivory collections-section">
        <div className="site-shell section-heading section-heading--collections">
          <div>
            <p className="eyebrow">Featured apartments</p>
            <h2 className="mega-title" data-reveal>
              Featured Apartments
            </h2>
          </div>
          <Link to="/rentals" className="text-link uline">
            All residences
          </Link>
        </div>

        <div className="site-shell featured-apartments">
          {featuredApartments.map((apartment) => (
            <article
              key={apartment.slug}
              className={`featured-apartments__item ${apartment.layout}`}
              data-reveal
            >
              <Link
                to={`/rentals/${apartment.slug}`}
                className="featured-apartments__media"
                data-cursor="View"
              >
                <img src={apartment.image} alt={apartment.name} data-parallax />
              </Link>
              <div className="featured-apartments__copy">
                <strong>{apartment.name}</strong>
                <span>{apartment.type}</span>
              </div>
            </article>
          ))}
        </div>
      </section>

      <section className="section section--charcoal">
        <div className="site-shell principles-grid">
          <div>
            <p className="eyebrow eyebrow--light">Approach</p>
            <h2 className="display-title display-title--light principles-title" data-reveal>
              Every stay should feel composed, private, and ready on arrival.
            </h2>
            <div style={{ marginTop: "2.4rem" }}>
              <RollBtn to="/approach" label="Our approach" variant="ghost" />
            </div>
          </div>

          <div className="principles-list">
            {principles.map((item) => (
              <article key={item.title} className="principle-card" data-reveal>
                <h3>{item.title}</h3>
                <p>{item.body}</p>
              </article>
            ))}
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="site-shell intro-grid">
          <div data-reveal>
            <p className="eyebrow">Studio</p>
            <h2 className="display-title">
              A curated collection, not a catalogue.
            </h2>
          </div>
          <div className="body-copy" data-reveal>
            <p>
              Tim Homes is a private portfolio of furnished apartments and serviced residences across
              Lagos. We work closely with each property to ensure arrivals feel prepared, private,
              and worthy of the address.
            </p>
            <p>
              From Lekki to Victoria Island, our stays sit at the intersection of hotel-grade
              service and residential calm.
            </p>
            <RollBtn to="/rentals" label="Browse residences" variant="primary" />
          </div>
        </div>
      </section>
    </>
  );
}
