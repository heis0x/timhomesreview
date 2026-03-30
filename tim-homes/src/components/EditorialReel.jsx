import { Link } from "react-router-dom";

const REEL_SRC =
  "https://www.studiodado.com/wp-content/uploads/2025/09/Guest-Suite-2-Animation-1.mp4";

const REEL_POSTER =
  "https://images.unsplash.com/photo-1505693416388-ac5ce068fe85?auto=format&fit=crop&w=1800&q=80";

export function EditorialReel() {
  return (
    <section className="editorial-reel" data-cursor="Explore">
      <video
        className="editorial-reel__video"
        src={REEL_SRC}
        poster={REEL_POSTER}
        autoPlay
        muted
        loop
        playsInline
        aria-hidden="true"
      />
      <div className="editorial-reel__veil" aria-hidden="true" />

      <div className="site-shell editorial-reel__copy">
        <h2 className="editorial-reel__title">
          <span className="editorial-reel__line">
            <span className="editorial-reel__split" style={{ transform: "translateY(110%)" }}>
              Luxury is
            </span>
          </span>
          <span className="editorial-reel__line">
            <span className="editorial-reel__split" style={{ transform: "translateY(110%)" }}>
              the <em>feeling,</em>
            </span>
          </span>
          <span className="editorial-reel__line">
            <span className="editorial-reel__split" style={{ transform: "translateY(110%)" }}>
              not the floor plan.
            </span>
          </span>
        </h2>
        <p className="editorial-reel__sub">
          <span
            className="editorial-reel__split"
            style={{ transform: "translateY(110%)", display: "inline-block" }}
          >
            <Link to="/approach" className="uline">
              Learn our approach →
            </Link>
          </span>
        </p>
      </div>
    </section>
  );
}
