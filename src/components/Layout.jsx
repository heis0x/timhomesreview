import { useEffect, useState } from "react";
import { Outlet } from "react-router-dom";
import { Footer } from "./Footer";
import { Header } from "./Header";
import { Preloader } from "./Preloader";
import { useSiteMotion } from "../hooks/useSiteMotion";

export function Layout() {
  const [isScrolled, setIsScrolled] = useState(false);
  const [showPreloader, setShowPreloader] = useState(true);

  useSiteMotion();

  useEffect(() => {
    const handleScroll = () => setIsScrolled(window.scrollY > 48);

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    return () => window.removeEventListener("scroll", handleScroll);
  }, []);

  useEffect(() => {
    const timeout = window.setTimeout(() => setShowPreloader(false), 1600);
    return () => window.clearTimeout(timeout);
  }, []);

  useEffect(() => {
    document.body.style.overflow = showPreloader ? "hidden" : "";
    return () => {
      document.body.style.overflow = "";
    };
  }, [showPreloader]);

  return (
    <div className={`page-frame ${showPreloader ? "page-frame--covered" : "page-frame--revealed"}`}>
      <Preloader visible={showPreloader} />
      <Header isScrolled={isScrolled} />
      <main>
        <Outlet />
      </main>
      <Footer />
    </div>
  );
}
