export function Preloader({ visible }) {
  return (
    <div className={`preloader ${visible ? "preloader--visible" : "preloader--hidden"}`} aria-hidden={!visible}>
      <span className="preloader__panel preloader__panel--top" />
      <span className="preloader__panel preloader__panel--bottom" />
      <div className="preloader__inner">
        <div className="preloader__name" aria-label="TIM HOMES">
          <span className="preloader__word preloader__word--tim">TIM</span>
          <span className="preloader__word preloader__word--homes">HOMES</span>
        </div>
        <span className="preloader__caption">Luxury apartments and serviced stays</span>
      </div>
    </div>
  );
}
