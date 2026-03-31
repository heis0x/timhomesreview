import { useEffect } from "react";
import gsap from "gsap";
import { ScrollTrigger } from "gsap/ScrollTrigger";
import Lenis from "lenis";

gsap.registerPlugin(ScrollTrigger);

export function useSiteMotion() {
  useEffect(() => {
    const isMobile = window.matchMedia("(max-width: 720px)").matches;

    const lenis = new Lenis({
      duration: isMobile ? 1.05 : 1.25,
      smoothWheel: true,
      smoothTouch: false,
      easing: (t) => Math.min(1, 1.001 - Math.pow(2, -10 * t)),
    });

    let frameId = 0;
    const raf = (time) => {
      lenis.raf(time);
      frameId = requestAnimationFrame(raf);
    };
    frameId = requestAnimationFrame(raf);
    lenis.on("scroll", ScrollTrigger.update);

    ScrollTrigger.refresh();

    const ctx = gsap.context(() => {
      // Clip-path wipe from bottom — matches DADO's line-mask reveal pattern
      gsap.utils.toArray("[data-reveal]").forEach((el) => {
        gsap.fromTo(
          el,
          { clipPath: "inset(0 0 100% 0)", y: 20 },
          {
            clipPath: "inset(0 0 0% 0)",
            y: 0,
            duration: 1.15,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 88%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray("[data-reveal-words]").forEach((el) => {
        const words = el.querySelectorAll(".split-word");
        if (!words.length) return;
        gsap.fromTo(
          words,
          { yPercent: 110 },
          {
            yPercent: 0,
            duration: 1.05,
            stagger: 0.08,
            ease: "power3.out",
            scrollTrigger: {
              trigger: el,
              start: "top 90%",
              once: true,
            },
          },
        );
      });

      gsap.utils.toArray(".editorial-reel__split").forEach((el, i) => {
        gsap.to(el, {
          yPercent: 0,
          duration: 1.15,
          ease: "power3.out",
          delay: i * 0.1,
          scrollTrigger: {
            trigger: el.closest(".editorial-reel"),
            start: "top 80%",
            once: true,
          },
        });
      });

      const hero = document.querySelector(".hero-stage");
      const heroTitle = document.querySelector(".hero-stage__title");
      const heroTopline = document.querySelector("[data-hero-topline]");

      if (hero && heroTitle) {
        gsap.to(heroTitle, {
          yPercent: isMobile ? 8 : 14,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      if (hero && heroTopline) {
        gsap.to(heroTopline, {
          y: isMobile ? -12 : -28,
          opacity: 0.4,
          ease: "none",
          scrollTrigger: {
            trigger: hero,
            start: "top top",
            end: "bottom top",
            scrub: 1.2,
          },
        });
      }

      const reelVideo = document.querySelector(".editorial-reel__video");
      if (reelVideo) {
        gsap.to(reelVideo, {
          y: "-10%",
          ease: "none",
          scrollTrigger: {
            trigger: ".editorial-reel",
            start: "top bottom",
            end: "bottom top",
            scrub: 1.0,
          },
        });
      }

      // skip parallax on mobile
      if (!isMobile) {
        gsap.utils.toArray("[data-parallax]").forEach((el) => {
          gsap.to(el, {
            yPercent: 16,
            ease: "none",
            scrollTrigger: {
              trigger: el,
              start: "top bottom",
              end: "bottom top",
              scrub: 1.2,
            },
          });
        });
      }

      gsap.utils.toArray("[data-marquee]").forEach((el) => {
        gsap.to(el, {
          xPercent: -22,
          ease: "none",
          scrollTrigger: {
            trigger: el,
            start: "top bottom",
            end: "bottom top",
            scrub: 1,
          },
        });
      });

      const processSteps = gsap.utils.toArray(".process-step");
      if (processSteps.length) {
        gsap.fromTo(
          processSteps,
          { y: 32, opacity: 0 },
          {
            y: 0,
            opacity: 1,
            duration: 0.9,
            stagger: 0.12,
            ease: "power2.out",
            scrollTrigger: {
              trigger: processSteps[0],
              start: "top 85%",
              once: true,
            },
          },
        );
      }

      const footer = document.querySelector(".site-footer");
      if (footer) {
        gsap.from(footer, {
          y: 48,
          ease: "power2.out",
          scrollTrigger: {
            trigger: footer,
            start: "top 95%",
            end: "top 60%",
            scrub: 0.8,
          },
        });
      }
    });

    return () => {
      cancelAnimationFrame(frameId);
      lenis.destroy();
      ctx.revert();
    };
  }, []);
}
