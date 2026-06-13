import Meta from '../components/Meta';
import './Page.css';

export default function PrivacyPolicy() {
  return (
    <div className="page-wrap">
      <Meta
        title="Privacy Policy – Salary Calculator UK"
        description="Read the Salary Calculator UK privacy policy. We do not store your salary data. Learn how we handle anonymous analytics and contact form data."
      />
      <div className="page-container">
        <div className="page-header">
          <h1>Privacy Policy</h1>
          <p>Website: SalaryCalculatorUK.uk &nbsp;·&nbsp; Last updated: June 2026</p>
        </div>

        <div className="page-content">
          <section>
            <p>
              At Salary Calculator UK, we take a <strong>privacy-focused approach</strong> to financial
              tools. Calculator information entered by users is processed only for generating results —
              we do not store, sell, or share your financial data.
            </p>
          </section>

          <section>
            <h2>1. Who We Are</h2>
            <p>
              Salary Calculator UK (<strong>SalaryCalculatorUK.uk</strong>) is a free online platform
              helping UK workers understand their take-home pay, tax deductions, and National Insurance
              contributions. We are committed to protecting your privacy and being transparent about
              how we handle data.
            </p>
          </section>

          <section>
            <h2>2. What Data We Collect</h2>
            <p>We collect only the minimum data necessary to operate this website:</p>
            <ul>
              <li>
                <strong>Calculator inputs</strong> — salary, wages, pension details, and other figures
                you enter. These are processed temporarily in your browser to generate results and are
                not retained longer than necessary for the calculation process.
              </li>
              <li>
                <strong>Anonymous analytics</strong> — browser type, pages visited, and general
                location (country/region level). This data cannot be used to identify you personally.
              </li>
              <li>
                <strong>Contact information</strong> — only when you choose to contact us via our
                contact form (name, email address, and your message).
              </li>
            </ul>
          </section>

          <section>
            <h2>3. How We Use Your Data</h2>
            <p>We use the information we collect to:</p>
            <ul>
              <li>Deliver calculator results accurately and instantly</li>
              <li>Improve website functionality and user experience</li>
              <li>Respond to enquiries you submit through our contact form</li>
              <li>Understand how visitors use our site so we can improve it</li>
            </ul>
            <p>
              <strong>We do not sell, rent, or trade your personal information</strong> to any third party,
              under any circumstances.
            </p>
          </section>

          <section>
            <h2>4. Cookies</h2>
            <p>We use cookies only if you accept our cookie consent banner. These include:</p>
            <ul>
              <li><strong>Analytics cookies</strong> (Google Analytics) — to understand how the site is used anonymously</li>
              <li><strong>Consent cookie</strong> — to remember your cookie preference</li>
            </ul>
            <p>
              You can withdraw your consent at any time by clearing your browser cookies or using your
              browser's cookie management settings.
            </p>
          </section>

          <section>
            <h2>5. Google Analytics</h2>
            <p>
              This website uses Google Analytics to collect anonymous traffic and usage data. Google
              processes this data in accordance with its own privacy policy. We use this information
              solely to understand how visitors interact with the site and to improve its content and
              performance. No personally identifiable information is shared with Google through this
              service.
            </p>
          </section>

          <section>
            <h2>6. Data Storage and Retention</h2>
            <p>
              Calculator inputs are not stored on our servers. All calculations take place within your
              browser session. Contact form submissions may be retained for a reasonable period in order
              to respond to your enquiry, after which they are deleted.
            </p>
            <p>
              Anonymous analytics data is retained by Google Analytics in accordance with their
              standard data retention settings.
            </p>
          </section>

          <section>
            <h2>7. Third-Party Services</h2>
            <p>We may use the following third-party services to operate and improve this website:</p>
            <ul>
              <li><strong>Google Analytics</strong> — anonymous usage statistics (only with your consent)</li>
            </ul>
            <p>
              These services have their own privacy policies and we encourage you to review them
              independently.
            </p>
          </section>

          <section>
            <h2>8. Your Rights Under UK GDPR</h2>
            <p>Under UK data protection law, you have the right to:</p>
            <ul>
              <li>Access any personal data we hold about you</li>
              <li>Request correction of inaccurate data</li>
              <li>Request deletion of your personal data</li>
              <li>Withdraw consent for analytics at any time</li>
              <li>Lodge a complaint with the Information Commissioner's Office (ICO)</li>
            </ul>
            <p>
              To exercise any of these rights, please contact us via our{' '}
              <a href="/contact">contact form</a>.
            </p>
          </section>

          <section>
            <h2>9. Newsletter</h2>
            <p>
              If you subscribe to our newsletter, we store your email address solely to send tax year
              update notifications. We never share your email with third parties. You can unsubscribe
              at any time using the link in any email we send.
            </p>
          </section>

          <section>
            <h2>10. Changes to This Policy</h2>
            <p>
              We may update this Privacy Policy from time to time to reflect changes in how we operate
              or in applicable law. Any changes will be posted on this page with an updated date.
              Continued use of the website after changes are posted constitutes your acceptance of the
              updated policy.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
