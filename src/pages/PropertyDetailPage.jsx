import { Link, useParams } from "react-router-dom";
import { properties } from "../data/siteData";

export function PropertyDetailPage() {
  const { slug } = useParams();
  const property = properties.find((item) => item.slug === slug) ?? properties[0];
  const inquiryLabel =
    property.category === "Under Construction" ? "Register launch interest" : "Request a private viewing";

  return (
    <>
      <section className="detail-hero">
        <div className="detail-hero__media">
          <img src={property.image} alt={property.name} data-parallax />
        </div>
        <div className="detail-hero__veil" />
        <div className="site-shell detail-hero__content">
          <p className="eyebrow eyebrow--light">{property.location}</p>
          <h1 className="display-title display-title--light">{property.name}</h1>
          <p className="detail-hero__subtitle">{property.bedroomLabel}</p>
          <div className="detail-hero__stats">
            <span>{property.specs.beds} beds</span>
            <span>{property.specs.baths} baths</span>
            <span>{property.specs.size}</span>
            <span>{property.price}</span>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="site-shell detail-grid">
          <div className="body-copy" data-reveal>
            <p className="eyebrow">Residence overview</p>
            <p>{property.summary}</p>
            <p>
              Crafted for residents who want more than square footage, this address pairs turnkey comfort with the polished ease of a premium hotel stay.
            </p>
            <Link to="/contact" className="button button--primary">
              {inquiryLabel}
            </Link>
          </div>

          <aside className="detail-panel" data-reveal>
            <p className="eyebrow">Highlights</p>
            <ul>
              {property.highlights.map((item) => (
                <li key={item}>{item}</li>
              ))}
            </ul>
          </aside>
        </div>
      </section>

      <section className="section section--sand">
        <div className="site-shell gallery-grid">
          {property.gallery.map((image) => (
            <div key={image} className="gallery-tile">
              <img src={image} alt={`${property.name} interior`} data-parallax />
            </div>
          ))}
        </div>
      </section>

      <section className="section section--charcoal">
        <div className="site-shell amenities-grid">
          <div>
            <p className="eyebrow eyebrow--light">Amenities</p>
            <h2 className="display-title display-title--light">Everything a premium tenant expects, quietly delivered.</h2>
          </div>
          <div className="amenities-list">
            {property.amenities.map((amenity) => (
              <span key={amenity}>{amenity}</span>
            ))}
          </div>
        </div>
      </section>
    </>
  );
}
