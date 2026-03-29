import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useSiteMotion() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 720px)").matches;
    const lenis = new Lenis({
      duration: isMobile ? 1 : 1.1,
      smoothWheel: true,
      smoothTouch: false,
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };

    frameId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    const ctx = gsap.context(() => {
      gsap.utils.toArray("[data-reveal]").forEach((element) => {
        gsap.fromTo(
          element,
          { y: 40, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 1.05,
            ease: "power3.out",
            scrollTrigger: {
              trigger: element,
              start: "top 86%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-reveal-words]").forEach((element) => {
        const words = element.querySelectorAll(".split-word");
        gsap.fromTo(
          words,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1,
            stagger: 0.08,
            ease: "power3.out",
            delay: 0.2,
          },
        );
      });

      const hero = document.querySelector(".hero-stage");
      const heroTitle = document.querySelector(".hero-stage__title");
      const heroTopline = document.querySelector(".hero-stage__topline");
      if (hero && heroTitle && heroTopline) {
        gsap.to(heroTitle, {
          yPercent: isMobile ? 1.5 : 2.5,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.15,
          },
        });

        gsap.to(heroTopline, {
          y: isMobile ? -1 : -2,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.15,
          },
        });
      }

      gsap.utils.toArray("[data-parallax]").forEach((element) => {
        gsap.to(element, {
          yPercent: 10,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      });

      gsap.utils.toArray("[data-marquee]").forEach((element) => {
        gsap.to(element, {
          xPercent: -18,
          ease: "none",
          scrollTrigger: {
            trigger: element,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);
}
