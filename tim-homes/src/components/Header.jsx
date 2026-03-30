import { Link, NavLink, useLocation } from "react-router-dom";

const NAV_LINKS = [
  { to: "/rentals", label: "Rentals" },
  { to: "/approach", label: "Approach" },
  { to: "/contact", label: "Contact" },
];

export function Header({ isScrolled, isHidden, menuOpen, onMenuToggle }) {
  const location = useLocation();
  const isHome = location.pathname === "/";
  const isLight = (isHome && !isScrolled) || menuOpen;

  return (
    <>
      <header
        className={[
          "site-header",
          isLight ? "site-header--light" : "",
          isScrolled && !menuOpen ? "site-header--scrolled" : "",
          isHidden && !menuOpen ? "site-header--hidden" : "",
        ]
          .filter(Boolean)
          .join(" ")}
      >
        <div className="site-shell site-header__inner">
          <Link to="/" className="brand brand--wordmark" aria-label="Tim Homes homepage">
            <span className="brand__text">
              <span>Tim Homes</span>
            </span>
          </Link>

          <Link to="/" className="brand brand--icon" aria-label="Tim Homes homepage">
            <span className="brand__mark" aria-hidden="true">
              <span />
              <span />
              <span />
              <span />
            </span>
          </Link>

          <div className="site-header__right">
            <nav className="site-nav" aria-label="Primary navigation">
              <div className="site-nav__group">
                {NAV_LINKS.slice(0, 2).map((item) => (
                  <NavLink
                    key={item.to}
                    to={item.to}
                    className={({ isActive }) =>
                      `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
                    }
                  >
                    <span className="nav-dot" aria-hidden="true" />
                    {item.label}
                  </NavLink>
                ))}
              </div>
              <div className="site-nav__group">
                <NavLink
                  to="/contact"
                  className={({ isActive }) =>
                    `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
                  }
                >
                  <span className="nav-dot" aria-hidden="true" />
                  Contact
                </NavLink>
              </div>
            </nav>

            <button
              className={`menu-btn ${menuOpen ? "menu-btn--active" : ""}`}
              onClick={onMenuToggle}
              aria-label={menuOpen ? "Close menu" : "Open menu"}
              aria-expanded={menuOpen}
            >
              <span className="menu-btn__text menu-btn__text--menu">Menu</span>
              <span className="menu-btn__text menu-btn__text--close" aria-hidden="true">
                Close
              </span>
            </button>
          </div>
        </div>
      </header>

      <MobileMenu open={menuOpen} onClose={onMenuToggle} currentPath={location.pathname} />
    </>
  );
}

function MobileMenu({ open, onClose, currentPath }) {
  return (
    <div className={`mobile-menu ${open ? "mobile-menu--open" : ""}`} aria-hidden={!open}>
      <div className="mobile-menu__inner">
        <p className="mobile-menu__eyebrow">Navigate</p>
        <nav className="mobile-menu__nav">
          {NAV_LINKS.map((item) => (
            <Link
              key={item.to}
              to={item.to}
              className="mobile-menu__link"
              onClick={onClose}
              aria-current={currentPath === item.to ? "page" : undefined}
            >
              <span>{item.label}</span>
            </Link>
          ))}
        </nav>
        <div className="mobile-menu__contact">
          <span>hello@timhomes.ng</span>
          <span>+234 803 067 4494</span>
        </div>
      </div>
    </div>
  );
}
