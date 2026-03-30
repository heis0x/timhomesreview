import { useEffect, useRef } from "react";
import gsap from "gsap";

const HERO_VIDEO_SRC =
  "https://www.studiodado.com/wp-content/uploads/2025/09/Regent-Suite-2-Animation-1.mp4";
const HERO_POSTER =
  "https://images.unsplash.com/photo-1502672260266-1c1ef2d93688?auto=format&fit=crop&w=1800&q=80";

export function HeroStage({ title, statement }) {
  const rootRef = useRef(null);
  const videoRef = useRef(null);
  const titleRef = useRef(null);
  const toplineRef = useRef(null);

  useEffect(() => {
    const video = videoRef.current;
    if (!video) return;

    const onCanPlay = () => {
      video.classList.add("hero-stage__video--active");
    };

    video.addEventListener("canplay", onCanPlay, { once: true });

    // Fallback: show after 600ms even if not ready
    const fallback = setTimeout(() => {
      video.classList.add("hero-stage__video--active");
    }, 600);

    return () => {
      video.removeEventListener("canplay", onCanPlay);
      clearTimeout(fallback);
    };
  }, []);

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
          ref={videoRef}
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

          <h1 className="hero-stage__title" data-reveal-words ref={titleRef}>
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
