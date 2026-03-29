import { useEffect, useMemo, useRef } from "react";
import gsap from "gsap";

export function HeroStage({ scenes, title, statement }) {
  const rootRef = useRef(null);
  const sceneRefs = useRef([]);
  const activeScenes = useMemo(() => scenes.slice(0, 3), [scenes]);

  useEffect(() => {
    const root = rootRef.current;
    if (!root) {
      return undefined;
    }

    const ctx = gsap.context(() => {
      const timeline = gsap.timeline({ repeat: -1, repeatDelay: 0.35 });
      sceneRefs.current.forEach((element, index) => {
        timeline
          .to(
            element,
            {
              opacity: 1,
              scale: 1,
              duration: 1.2,
              ease: "power2.out",
            },
            index === 0 ? 0 : "+=0",
          )
          .to(
            element,
            {
              scale: 1.05,
              duration: 5.4,
              ease: "none",
            },
            "<",
          )
          .to(
            element,
            {
              opacity: index === sceneRefs.current.length - 1 ? 1 : 0,
              duration: 0.9,
              ease: "power2.inOut",
            },
            "-=1.2",
          );
      });
    }, root);

    return () => ctx.revert();
  }, [activeScenes]);

  const titleWords = title.split(" ");

  return (
    <section className="hero-stage" ref={rootRef}>
      <div className="hero-stage__sticky">
        <div className="hero-stage__media" aria-hidden="true">
          {activeScenes.map((scene, index) => (
            <div
              key={scene.id}
              ref={(node) => {
                sceneRefs.current[index] = node;
              }}
              className="hero-stage__scene"
              style={{ backgroundImage: `url(${scene.image})` }}
            />
          ))}
          <div className="hero-stage__veil" />
        </div>

        <div className="site-shell hero-stage__grid">
          <div className="hero-stage__copy">
            <div className="hero-stage__topline" data-reveal>
              <div className="hero-stage__eyebrow-group">
                <p className="eyebrow eyebrow--light">Luxury apartments and serviced stays in Lagos</p>
              </div>

              <div className="hero-stage__about">
                <span className="eyebrow eyebrow--light">About</span>
                <p className="hero-stage__statement">{statement}</p>
              </div>
            </div>

            <h1 className="hero-stage__title" data-reveal-words>
              {titleWords.map((word) => (
                <span key={word} className="hero-stage__title-line">
                  <span className="split-word">{word}</span>
                </span>
              ))}
            </h1>
          </div>
        </div>
      </div>
    </section>
  );
}
