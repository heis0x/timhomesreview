import { Link } from "react-router-dom";
import { HeroStage } from "../components/HeroStage";
import { featuredApartments, heroScenes, principles } from "../data/siteData";

export function HomePage() {
  return (
    <>
      <HeroStage
        scenes={heroScenes}
        title="Elevated Living"
        statement="Tim Homes presents furnished apartments, serviced suites, and shortlet residences for private stays across Lagos."
      />

      <section className="section section--ivory statement-section">
        <div className="site-shell">
          <h2 className="statement-section__title" data-reveal>
            Luxury apartments, serviced suites, and shortlet residences prepared for calmer stays.
          </h2>

          <div className="statement-section__figure" data-reveal>
            <img
              src="https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1200&q=80"
              alt="Luxury apartment interior"
              data-parallax
            />
          </div>
        </div>
      </section>

      <section className="section section--ivory collections-section">
        <div className="site-shell section-heading section-heading--collections">
          <div>
            <p className="eyebrow">Featured apartments</p>
            <h2 className="mega-title" data-reveal>Featured Apartments</h2>
          </div>
          <Link to="/rentals" className="text-link">
            All residences
          </Link>
        </div>

        <div className="site-shell featured-apartments">
          {featuredApartments.map((apartment) => (
            <article key={apartment.slug} className={`featured-apartments__item ${apartment.layout}`} data-reveal>
              <Link to={`/rentals/${apartment.slug}`} className="featured-apartments__media">
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
    </>
  );
}
