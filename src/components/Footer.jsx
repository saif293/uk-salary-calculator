import { useState } from 'react';
import { Link } from 'react-router-dom';
import './Footer.css';

export default function Footer() {
  const [email, setEmail] = useState('');
  const [submitted, setSubmitted] = useState(false);

  const submit = (e) => {
    e.preventDefault();
    if (email) setSubmitted(true);
  };

  return (
    <footer className="site-footer">
      <div className="footer-inner">

        <div className="footer-brand-col">
          <div className="footer-brand">💷 Salary Calculator UK</div>
          <p>Free UK salary calculator UK. No data stored, no sign-up required.</p>

          {submitted ? (
            <p className="newsletter-success">✓ Subscribed! We'll notify you of tax year updates.</p>
          ) : (
            <form className="newsletter-form" onSubmit={submit}>
              <input
                type="email"
                placeholder="your@email.com"
                value={email}
                onChange={e => setEmail(e.target.value)}
                required
              />
              <button type="submit">Subscribe</button>
            </form>
          )}
          <span className="newsletter-note">No spam, unsubscribe anytime.</span>
        </div>

        <div className="footer-links-col">
          <h4>Calculator</h4>
          <Link to="/">Salary Calculator UK</Link>
          <Link to="/#faq">FAQ</Link>
        </div>

        <div className="footer-links-col">
          <h4>Company</h4>
          <Link to="/blog">Blog</Link>
          <Link to="/about">About Us</Link>
          <Link to="/contact">Contact Us</Link>
          <Link to="/privacy">Privacy Policy</Link>
          <Link to="/terms">Terms &amp; Conditions</Link>
        </div>

      </div>

      <div className="footer-bottom">
        <div className="footer-bottom-inner">
          <span>Figures based on <strong>2026/27 HMRC</strong> thresholds. Indicative only — not financial advice.</span>
          <span>© {new Date().getFullYear()} Salary Calculator UK · Built for the UK 🇬🇧</span>
        </div>
      </div>
    </footer>
  );
}
