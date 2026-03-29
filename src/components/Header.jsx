import { Link, NavLink, useLocation } from "react-router-dom";

const navigation = [
  { to: "/rentals", label: "Rentals" },
  { to: "/approach", label: "Approach" },
];

export function Header({ isScrolled }) {
  const location = useLocation();
  const isHome = location.pathname === "/";

  return (
    <header
      className={`site-header ${isScrolled ? "site-header--scrolled" : ""} ${isHome && !isScrolled ? "site-header--light" : ""}`}
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

        <nav className="site-nav" aria-label="Primary navigation">
          <div className="site-nav__group">
            {navigation.map((item) => (
              <NavLink
                key={item.to}
                to={item.to}
                className={({ isActive }) =>
                  `site-nav__link ${isActive ? "site-nav__link--active" : ""}`
                }
              >
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
              Contact
            </NavLink>
          </div>
        </nav>
      </div>
    </header>
  );
}
