import { PropertyCard } from "../components/PropertyCard";
import { properties } from "../data/siteData";

const collections = ["Orion Apartment", "Wakanda Apartment", "Opal Apartment", "Pearl Apartment"];

export function RentalsPage() {
  return (
    <>
      <section className="page-hero page-hero--light">
        <div className="site-shell page-hero__grid">
          <div>
            <p className="eyebrow">Rentals</p>
            <h1 className="mega-title" data-reveal>Apartments</h1>
          </div>
          <div className="body-copy" data-reveal>
            <p>
              Browse furnished apartments for long stays, elegant shortlets for flexible bookings, and private residences shaped for a more refined arrival.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory section--tight rentals-toolbar">
        <div className="site-shell rentals-toolbar__inner">
          <div className="collections-row">
            {collections.map((collection) => (
              <span key={collection}>{collection}</span>
            ))}
          </div>
          <div className="view-switch" aria-hidden="true">
            <span className="view-switch__active">Gallery</span>
            <span>List</span>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="site-shell rentals-grid">
          {properties.map((property) => (
            <PropertyCard key={property.slug} property={property} />
          ))}
        </div>
      </section>
    </>
  );
}
