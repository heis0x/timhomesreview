import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);
  const [copied, setCopied] = useState(false);

  const handleSubmit = (e) => {
    e.preventDefault();
    setSubmitted(true);
  };

  const copyAddress = () => {
    navigator.clipboard.writeText("13d Kenneth Agbakuru Street, Lekki Phase 1, Lagos");
    setCopied(true);
    setTimeout(() => setCopied(false), 2200);
  };

  return (
    <>
      <section className="page-hero page-hero--dark" style={{ paddingBottom: 0 }}>
        <div className="site-shell">
          <p className="eyebrow eyebrow--light" data-reveal>
            Contact
          </p>
          <h1
            className="display-title display-title--light"
            data-reveal
            style={{ fontSize: "clamp(4rem, 12vw, 10rem)", marginTop: "0.5rem" }}
          >
            Let's work
            <br />
            <em
              style={{
                fontStyle: "italic",
                fontFamily: '"Cormorant Garamond", serif',
                fontWeight: 400,
              }}
            >
              together.
            </em>
          </h1>
        </div>
      </section>

      {/* Contact hero image */}
      <div
        style={{
          height: "50svh",
          overflow: "hidden",
          background: "#0a0907",
          position: "relative",
        }}
      >
        <img
          src="https://images.unsplash.com/photo-1460317442991-0ec209397118?auto=format&fit=crop&w=1800&q=80"
          alt="Luxury apartment interior"
          style={{
            position: "absolute",
            inset: 0,
            width: "100%",
            height: "110%",
            objectFit: "cover",
          }}
          data-parallax
        />
        <div
          style={{
            position: "absolute",
            inset: 0,
            background: "linear-gradient(0deg, rgba(10,9,7,0.42) 0%, rgba(10,9,7,0.08) 100%)",
          }}
          aria-hidden="true"
        />
      </div>

      {/* Contact details + form */}
      <section className="section section--ivory">
        <div className="site-shell contact-grid">
          <div data-reveal>
            <p className="eyebrow">Get in touch</p>
            <p
              className="body-copy"
              style={{ maxWidth: "30rem", marginTop: "1rem", marginBottom: "3rem" }}
            >
              Reach out about a specific residence, a private viewing, or a longer-term stay and
              we'll get back to you within 1 business day.
            </p>

            <div style={{ display: "grid", gap: "1.8rem" }}>
              <div>
                <span
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}
                >
                  E:
                </span>
                <div style={{ marginTop: "0.4rem" }}>
                  <a href="mailto:kene@timhomes.ng" className="uline" style={{ display: "block", marginBottom: "0.3rem" }}>
                    kene@timhomes.ng
                  </a>
                  <a href="mailto:uju@timhomes.ng" className="uline" style={{ display: "block" }}>
                    uju@timhomes.ng
                  </a>
                </div>
              </div>

              <div>
                <span
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}
                >
                  T:
                </span>
                <div style={{ marginTop: "0.4rem" }}>
                  <a href="tel:+2348030674494" className="uline" style={{ display: "block", marginBottom: "0.3rem" }}>
                    +234 803 067 4494
                  </a>
                  <a href="tel:+2348090619323" className="uline" style={{ display: "block" }}>
                    +234 809 061 9323
                  </a>
                </div>
              </div>

              <div>
                <span
                  style={{ fontSize: "0.72rem", letterSpacing: "0.1em", textTransform: "uppercase", color: "var(--muted)" }}
                >
                  A:
                </span>
                <p style={{ marginTop: "0.4rem", lineHeight: 1.6 }}>
                  13d Kenneth Agbakuru Street
                  <br />
                  Lekki Phase 1, Lagos
                </p>
                <button
                  onClick={copyAddress}
                  style={{
                    marginTop: "0.7rem",
                    background: "transparent",
                    border: "1px solid var(--line-dark)",
                    padding: "0.5rem 1rem",
                    fontSize: "0.72rem",
                    letterSpacing: "0.1em",
                    textTransform: "uppercase",
                    cursor: "pointer",
                    borderRadius: "999px",
                    transition: "background 220ms ease",
                  }}
                >
                  {copied ? "Copied ✓" : "Click to copy"}
                </button>
              </div>
            </div>
          </div>

          <form className="contact-form" onSubmit={handleSubmit} data-reveal>
            <label>
              Full name
              <input type="text" name="name" placeholder="Your name" required />
            </label>
            <label>
              Email address
              <input type="email" name="email" placeholder="you@example.com" required />
            </label>
            <label>
              Desired residence
              <input type="text" name="residence" placeholder="Orion, Opal, or open brief" />
            </label>
            <label>
              Inquiry
              <textarea
                name="message"
                rows="5"
                placeholder="Tell us the type of home, move-in window, and budget band."
                required
              />
            </label>
            <button type="submit" className="button button--primary btn-chars">
              <span className="btn-chars__bg" aria-hidden="true" />
              <span className="btn-chars__track">
                {"Send inquiry".split("").map((ch, i) => (
                  <span key={i}>{ch === " " ? "\u00A0" : ch}</span>
                ))}
              </span>
            </button>
            {submitted && (
              <p className="contact-form__success">Thank you. Your inquiry has been received.</p>
            )}
          </form>
        </div>
      </section>
    </>
  );
}
