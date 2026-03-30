import { useEffect, useRef, useState } from "react";
import { Outlet, useLocation } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Preloader } from "./Preloader";
import { useSiteMotion } from "../hooks/useSiteMotion";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [isHidden, setIsHidden] = useState(false);
  const [menuOpen, setMenuOpen] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);
  const [pageKey, setPageKey] = useState(0);

  const location = useLocation();
  const lastScrollY = useRef(0);
  const cursorRef = useRef(null);
  const cursorLabelRef = useRef(null);
  const rafRef = useRef(null);
  const cursorPos = useRef({ x: 0, y: 0 });
  const cursorTarget = useRef({ x: 0, y: 0 });

  useSiteMotion();

  useEffect(() => {
    const handleScroll = () => {
      const y = window.scrollY;
      const delta = y - lastScrollY.current;

      setIsScrolled(y > 48);

      if (y < 80) {
        setIsHidden(false);
      } else if (delta > 4) {
        setIsHidden(true);
      } else if (delta < -4) {
        setIsHidden(false);
      }

      lastScrollY.current = y;
    };

    window.addEventListener("scroll", handleScroll, { passive: true });
    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    setMenuOpen(false);
    setPageKey((k) => k + 1);
  }, [location.pathname]);

  // iOS-safe scroll lock
  useEffect(() => {
    if (menuOpen || showPreloader) {
      const scrollY = window.scrollY;
      document.body.style.overflow = "hidden";
      document.body.style.position = "fixed";
      document.body.style.top = `-${scrollY}px`;
      document.body.style.width = "100%";
    } else {
      const top = document.body.style.top;
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
      if (top) window.scrollTo(0, -parseInt(top, 10));
    }
    return () => {
      document.body.style.overflow = "";
      document.body.style.position = "";
      document.body.style.top = "";
      document.body.style.width = "";
    };
  }, [menuOpen, showPreloader]);

  useEffect(() => {
    const timeout = setTimeout(() => setShowPreloader(false), 1700);
    return () => clearTimeout(timeout);
  }, []);

  // custom cursor
  useEffect(() => {
    const cursor = cursorRef.current;
    if (!cursor) return;

    // Skip entirely on touch/pointer-coarse devices (phones, tablets)
    if (window.matchMedia("(hover: none), (pointer: coarse)").matches) return;

    const onMove = (e) => {
      cursorTarget.current = { x: e.clientX, y: e.clientY };
    };

    const tick = () => {
      const ease = 0.18;
      cursorPos.current.x += (cursorTarget.current.x - cursorPos.current.x) * ease;
      cursorPos.current.y += (cursorTarget.current.y - cursorPos.current.y) * ease;

      cursor.style.transform = `translate(${cursorPos.current.x}px, ${cursorPos.current.y}px) translate(-50%, -50%)`;
      rafRef.current = requestAnimationFrame(tick);
    };

    const onEnterCursor = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (!el) return;
      const label = el.dataset.cursor;
      if (cursorLabelRef.current) cursorLabelRef.current.textContent = label || "View";
      cursor.classList.add("cursor--visible");
    };

    const onLeaveCursor = (e) => {
      const el = e.target.closest("[data-cursor]");
      if (!el) return;
      cursor.classList.remove("cursor--visible");
    };

    window.addEventListener("mousemove", onMove);
    document.addEventListener("mouseenter", onEnterCursor, true);
    document.addEventListener("mouseleave", onLeaveCursor, true);
    rafRef.current = requestAnimationFrame(tick);

    return () => {
      window.removeEventListener("mousemove", onMove);
      document.removeEventListener("mouseenter", onEnterCursor, true);
      document.removeEventListener("mouseleave", onLeaveCursor, true);
      cancelAnimationFrame(rafRef.current);
    };
  }, []);

  return (
    <>
      <div
        className={`page-frame ${showPreloader ? "page-frame--covered" : "page-frame--revealed"}`}
      >
        <Preloader visible={showPreloader} />
        <Header
          isScrolled={isScrolled}
          isHidden={isHidden}
          menuOpen={menuOpen}
          onMenuToggle={() => setMenuOpen((o) => !o)}
        />
        <main key={pageKey} className="page-frame--entering">
          <Outlet />
        </main>
        <Footer />
      </div>

      <div className="cursor" ref={cursorRef} aria-hidden="true">
        <span ref={cursorLabelRef}>View</span>
      </div>
    </>
  );
}
