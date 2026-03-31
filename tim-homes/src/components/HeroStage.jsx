import { useEffect, useRef } from "react";
import gsap from "gsap";

const HERO_VIDEO_SRC = "https://assets.mixkit.co/videos/4029/4029-720.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1560185127-6ed189bf02f4?auto=format&fit=crop&w=1920&q=80";

export function HeroStage({ title, statement }) {
  const rootRef = useRef(null);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) return undefined;

    const ctx = gsap.context(() => {
      const words = root.querySelectorAll(".hero-stage__split-word");
      if (words.length) {
        gsap.fromTo(
          words,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.15,
            stagger: 0.09,
            ease: "power3.out",
            delay: 0.4,
          },
        );
      }

      const topline = root.querySelector("[data-hero-topline]");
      if (topline) {
        gsap.fromTo(
          topline,
          { y: 28, opacity: 0 },
          { y: 0, opacity: 1, duration: 1.1, ease: "power3.out", delay: 0.7 },
        );
      }
    }, root);

    return () => ctx.revert();
  }, []);

  const titleWords = title.split(" ");

  return (
    <section className="hero-stage" ref={rootRef}>
      <div className="hero-stage__media" aria-hidden="true">
        <video
          className="hero-stage__video"
          src={HERO_VIDEO_SRC}
          poster={HERO_POSTER}
          autoPlay
          muted
          loop
          playsInline
        />
        <div className="hero-stage__veil" />
      </div>

      <div className="site-shell hero-stage__grid">
        <div className="hero-stage__copy">
          <div data-hero-topline style={{ opacity: 0 }}>
            <div className="hero-stage__topline">
              <div className="hero-stage__eyebrow-group">
                <p className="eyebrow eyebrow--light">
                  Luxury apartments and serviced stays in Lagos
                </p>
              </div>

              <div className="hero-stage__about" data-cursor="About">
                <span className="eyebrow eyebrow--light">About</span>
                <p className="hero-stage__statement">{statement}</p>
              </div>
            </div>
          </div>

          <h1 className="hero-stage__title" data-reveal-words>
            {titleWords.map((word) => (
              <span key={word} className="hero-stage__title-line">
                <span className="hero-stage__split-word">{word}</span>
              </span>
            ))}
          </h1>
        </div>
      </div>
    </section>
  );
}
