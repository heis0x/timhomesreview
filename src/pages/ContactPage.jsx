import { useState } from "react";

export function ContactPage() {
  const [submitted, setSubmitted] = useState(false);

  const handleSubmit = (event) => {
    event.preventDefault();
    setSubmitted(true);
  };

  return (
    <>
      <section className="page-hero page-hero--light">
        <div className="site-shell page-hero__grid">
          <div>
            <p className="eyebrow">Contact</p>
            <h1 className="display-title" data-reveal>Book a private viewing or reserve your next stay.</h1>
          </div>
          <div className="body-copy" data-reveal>
            <p>
              Share the residence type you need, your preferred district, and whether you are booking a shortlet, serviced suite, or longer-term apartment.
            </p>
          </div>
        </div>
      </section>

      <section className="section section--ivory">
        <div className="site-shell contact-grid">
          <div className="detail-panel detail-panel--light">
            <p className="eyebrow">Direct contact</p>
            <a href="mailto:hello@timhomes.ng" className="footer-link">
              hello@timhomes.ng
            </a>
            <a href="tel:+2348030674494" className="footer-link">
              +234 803 067 4494
            </a>
            <p className="footer-copy">
              13d Kenneth Agbakuru Street
              <br />
              Lekki Phase 1, Lagos
            </p>
          </div>

          <form className="contact-form" onSubmit={handleSubmit}>
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
              <input type="text" name="residence" placeholder="Orion Grand, Ikoyi, or open brief" />
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
            <button type="submit" className="button button--primary">
              Send inquiry
            </button>
            {submitted ? <p className="contact-form__success">Thank you. Your inquiry has been received.</p> : null}
          </form>
        </div>
      </section>
    </>
  );
}
