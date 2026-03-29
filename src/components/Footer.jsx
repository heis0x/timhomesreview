import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell site-footer__grid">
        <div>
          <p className="eyebrow">Tim Homes</p>
          <h2 className="footer-title">Homes curated with restraint, warmth, and presence.</h2>
        </div>

        <div>
          <p className="eyebrow">Contact</p>
          <a href="mailto:hello@timhomes.ng" className="footer-link">
            hello@timhomes.ng
          </a>
          <a href="tel:+2348030674494" className="footer-link">
            +234 803 067 4494
          </a>
        </div>

        <div>
          <p className="eyebrow">Navigate</p>
          <Link to="/" className="footer-link">
            Home
          </Link>
          <Link to="/rentals" className="footer-link">
            Rentals
          </Link>
          <Link to="/approach" className="footer-link">
            Approach
          </Link>
          <Link to="/contact" className="footer-link">
            Contact
          </Link>
        </div>

        <div>
          <p className="eyebrow">Collection</p>
          <p className="footer-copy">
            Private rental residences
            <br />
            across Lekki, Ikoyi,
            <br />
            Victoria Island, Yaba, and Ikorodu
          </p>
        </div>
      </div>
    </footer>
  );
}
