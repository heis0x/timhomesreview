import { Link } from "react-router-dom";

export function PropertyCard({ property, large = false }) {
  return (
    <article className={`property-card ${large ? "property-card--large" : ""}`} data-reveal>
      <Link to={`/rentals/${property.slug}`} className="property-card__media">
        <img src={property.image} alt={property.name} data-parallax />
      </Link>

      <div className="property-card__content">
        <div className="property-card__meta">
          <span>{property.location}</span>
          <span>{property.category}</span>
        </div>
        <div className="property-card__head">
          <div>
            <h3>{property.name}</h3>
            <p>{property.bedroomLabel}</p>
          </div>
          <strong>{property.shortPrice}</strong>
        </div>
        <p className="property-card__summary">{property.summary}</p>
        <Link to={`/rentals/${property.slug}`} className="text-link">
          View residence
        </Link>
      </div>
    </article>
  );
}
