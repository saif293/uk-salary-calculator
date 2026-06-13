import { useState } from 'react';
import Meta from '../components/Meta';
import './Page.css';

export default function Contact() {
  const [form, setForm] = useState({ name: '', email: '', subject: 'general', message: '' });
  const [sent, setSent] = useState(false);

  const set = (k, v) => setForm(f => ({ ...f, [k]: v }));

  const handleSubmit = (e) => {
    e.preventDefault();
    setSent(true);
  };

  return (
    <div className="page-wrap">
      <Meta
        title="Contact Us – Salary Calculator UK"
        description="Get in touch with the Salary Calculator UK team. Report a calculation error, give feedback, or ask a question. We aim to respond within 2 business days."
      />
      <div className="page-container">
        <div className="page-header">
          <h1>Contact Us</h1>
          <p>Got a question, spotted a bug, or want to give feedback? We'd love to hear from you.</p>
        </div>

        <div className="page-content">
          <section className="contact-accuracy">
            <h2>Our Commitment to Accuracy</h2>
            <p>
              We understand that salary and tax calculations play an important role in financial planning.
              That's why we regularly review our calculation methods against the latest HMRC guidance,
              tax rates, and allowances. If you notice any difference between our estimates and your
              payslip, please contact us and we'll be happy to investigate and improve our calculations
              where necessary.
            </p>
          </section>

          <div className="contact-grid">
            <div>
              {sent ? (
                <div className="form-success">
                  ✓ Message sent! We'll get back to you within 2 business days.
                </div>
              ) : (
                <form className="contact-form" onSubmit={handleSubmit}>
                  <div className="field">
                    <label>Your Name</label>
                    <input
                      type="text"
                      placeholder="Jane Smith"
                      value={form.name}
                      onChange={e => set('name', e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Email Address</label>
                    <input
                      type="email"
                      placeholder="jane@example.com"
                      value={form.email}
                      onChange={e => set('email', e.target.value)}
                      required
                    />
                  </div>
                  <div className="field">
                    <label>Subject</label>
                    <select value={form.subject} onChange={e => set('subject', e.target.value)}>
                      <option value="general">General Enquiry</option>
                      <option value="bug">Report a Bug / Incorrect Calculation</option>
                      <option value="feedback">Feedback or Suggestion</option>
                      <option value="press">Press / Media</option>
                      <option value="other">Other</option>
                    </select>
                  </div>
                  <div className="field">
                    <label>Message</label>
                    <textarea
                      rows={5}
                      placeholder="Tell us what's on your mind..."
                      value={form.message}
                      onChange={e => set('message', e.target.value)}
                      required
                    />
                  </div>
                  <button type="submit" className="contact-submit">Send Message →</button>
                </form>
              )}
            </div>

            <div className="contact-info">
              <div className="contact-info-item">
                <div className="contact-info-icon">📧</div>
                <div className="contact-info-text">
                  <strong>Email</strong>
                  <span>hello@salarycalculatoruk.com</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🐛</div>
                <div className="contact-info-text">
                  <strong>Bug Reports</strong>
                  <span>Found a calculation error? Please include your salary, tax code, and the figure you expected.</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">⏱️</div>
                <div className="contact-info-text">
                  <strong>Response Time</strong>
                  <span>We aim to respond within 2 business days.</span>
                </div>
              </div>
              <div className="contact-info-item">
                <div className="contact-info-icon">🇬🇧</div>
                <div className="contact-info-text">
                  <strong>Based in the UK</strong>
                  <span>Salary Calculator UK is a UK-focused service operating under English law.</span>
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
