import { Link } from "react-router-dom";

export function Footer() {
  return (
    <footer className="site-footer">
      <div className="site-shell">
        <div className="footer-cta">
          <div>
            <p className="footer-cta__label">Work together?</p>
            <Link to="/contact" className="footer-cta__link">
              Contact us{" "}
              <span className="footer-cta__arrow" aria-hidden="true">
                →
              </span>
            </Link>
          </div>
        </div>

        <div className="site-footer__grid">
          <div>
            <p className="eyebrow">Tim Homes</p>
            <h2 className="footer-title">
              Homes curated with restraint, warmth, and presence.
            </h2>
          </div>

          <div>
            <p className="eyebrow">Contact</p>
            <a href="mailto:kene@timhomes.ng" className="footer-link">
              kene@timhomes.ng
            </a>
            <a href="tel:+2348030674494" className="footer-link">
              +234 803 067 4494
            </a>
            <a href="mailto:uju@timhomes.ng" className="footer-link">
              uju@timhomes.ng
            </a>
            <a href="tel:+2348090619323" className="footer-link">
              +234 809 061 9323
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
              Victoria Island and Yaba
            </p>
            <div style={{ marginTop: "1.5rem", display: "flex", gap: "1.2rem" }}>
              <a
                href="https://www.instagram.com/Timhomesng"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link uline"
              >
                Instagram
              </a>
              <a
                href="https://www.facebook.com/Tim-Homes-Nigeria-Limited-1722357124520203"
                target="_blank"
                rel="noopener noreferrer"
                className="footer-link uline"
              >
                Facebook
              </a>
            </div>
          </div>
        </div>

        {/* Newsletter row */}
        <div
          style={{
            marginTop: "3rem",
            paddingTop: "1.8rem",
            borderTop: "1px solid rgba(255,255,255,0.1)",
            display: "flex",
            alignItems: "center",
            justifyContent: "space-between",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <div>
            <p className="eyebrow" style={{ marginBottom: "0.8rem" }}>Updates</p>
            <p className="footer-copy" style={{ fontSize: "0.8rem" }}>
              Get occasional updates on new residences.
            </p>
            <form
              onSubmit={(e) => e.preventDefault()}
              style={{ display: "flex", gap: "0.6rem", marginTop: "0.8rem" }}
            >
              <input
                type="email"
                placeholder="your@email.com"
                style={{
                  background: "rgba(255,255,255,0.06)",
                  border: "1px solid rgba(255,255,255,0.12)",
                  color: "white",
                  padding: "0.6rem 0.9rem",
                  fontSize: "0.78rem",
                  borderRadius: "999px",
                  outline: "none",
                  width: "14rem",
                }}
              />
              <button
                type="submit"
                style={{
                  background: "transparent",
                  border: "1px solid rgba(255,255,255,0.22)",
                  color: "white",
                  padding: "0.6rem 1.1rem",
                  fontSize: "0.72rem",
                  letterSpacing: "0.1em",
                  textTransform: "uppercase",
                  borderRadius: "999px",
                  cursor: "pointer",
                }}
              >
                →
              </button>
            </form>
          </div>

          <button
            onClick={() => window.scrollTo({ top: 0, behavior: "smooth" })}
            className="uline"
            style={{
              background: "transparent",
              border: "none",
              color: "rgba(255,255,255,0.44)",
              fontSize: "0.72rem",
              letterSpacing: "0.1em",
              textTransform: "uppercase",
              cursor: "pointer",
              padding: 0,
              alignSelf: "flex-end",
            }}
          >
            Back to top ↑
          </button>
        </div>

        <div
          style={{
            marginTop: "2rem",
            paddingTop: "1.2rem",
            borderTop: "1px solid rgba(255,255,255,0.08)",
            display: "flex",
            justifyContent: "space-between",
            alignItems: "center",
            gap: "1rem",
            flexWrap: "wrap",
          }}
        >
          <span className="footer-copy" style={{ fontSize: "0.72rem", letterSpacing: "0.06em" }}>
            © Tim Homes Nigeria Limited 2026
          </span>
          <span className="footer-copy" style={{ fontSize: "0.72rem" }}>
            13d Kenneth Agbakuru Street, Lekki Phase 1, Lagos
          </span>
        </div>
      </div>
    </footer>
  );
}
