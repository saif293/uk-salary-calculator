import Meta from '../components/Meta';
import './Page.css';

export default function Terms() {
  return (
    <div className="page-wrap">
      <Meta
        title="Terms & Conditions – Salary Calculator UK"
        description="Read the Salary Calculator UK terms and conditions. Calculator results are for informational purposes only. Please consult a professional for financial advice."
      />
      <div className="page-container">
        <div className="page-header">
          <h1>Terms &amp; Conditions</h1>
          <p>Last updated: June 2026</p>
        </div>

        <div className="page-content">
          <section>
            <h2>Introduction</h2>
            <p>
              Welcome to Salary Calculator UK. By accessing or using this website, you accept and agree
              to be bound by these Terms &amp; Conditions in full. If you disagree with any part of these
              terms, you must discontinue use of this website immediately.
            </p>
          </section>

          <section>
            <h2>Website Access</h2>
            <p>
              Most sections of this website are freely accessible without creating an account. We reserve
              the right, at our discretion, to restrict access to certain areas of the website at any time.
            </p>
          </section>

          <section>
            <h2>Acceptable Use</h2>
            <p>
              You may only use this website for personal, non-commercial activities. You must not:
            </p>
            <ul>
              <li>Use the website in any way that violates applicable laws or regulations</li>
              <li>Attempt to gain unauthorised access to any part of the website or its related systems</li>
              <li>Copy or reproduce any content without prior written permission, except for personal use where copyright notices remain intact</li>
              <li>Transmit any malicious code, viruses, or harmful material to or through this website</li>
            </ul>
            <p>
              Personal printing or downloading of content is permitted provided all copyright notices are kept intact.
            </p>
          </section>

          <section>
            <h2>Salary Calculator Results</h2>
            <p>
              All results produced by our salary calculator are for <strong>informational purposes only</strong>.
              We do not guarantee that all calculations, tax rates, allowances, or deductions are completely
              accurate for your individual circumstances. Tax rules are subject to change and your personal
              situation may differ.
            </p>
            <p>
              We strongly recommend consulting a qualified financial adviser, accountant, or HMRC directly
              before making any financial decisions based on calculator results.
            </p>
          </section>

          <section>
            <h2>Website Availability</h2>
            <p>
              While we aim to ensure this website is consistently available, we make no guarantee of
              uninterrupted access. The website may be temporarily unavailable due to maintenance, technical
              issues, or circumstances beyond our control. We accept no liability for any loss or inconvenience
              caused by downtime.
            </p>
          </section>

          <section>
            <h2>User-Submitted Content</h2>
            <p>
              Any content you submit to this website (such as through a contact form) may be used by us
              for the purpose of responding to your enquiry. We will not publish or share submissions that
              are unlawful, offensive, defamatory, discriminatory, or that infringe intellectual property rights.
            </p>
          </section>

          <section>
            <h2>Third-Party Links</h2>
            <p>
              This website may contain links to third-party websites. These links are provided for
              convenience only and do not constitute an endorsement of those sites or their content.
              You access any third-party website entirely at your own risk, and we accept no responsibility
              for their content, privacy practices, or any damage arising from your use of them.
            </p>
          </section>

          <section>
            <h2>Intellectual Property Rights</h2>
            <p>
              All content on this website — including text, design, code, and graphics — is protected by
              copyright and owned by Salary Calculator UK unless otherwise stated. Reproduction of any
              content requires our express written permission.
            </p>
          </section>

          <section>
            <h2>Disclaimer</h2>
            <p>
              This website and its content are provided <strong>"as is"</strong> without any warranties,
              express or implied, regarding accuracy, completeness, reliability, or availability. We make
              no representations that the website will meet your requirements or that it will be free
              from errors.
            </p>
          </section>

          <section>
            <h2>Limitation of Liability</h2>
            <p>
              To the fullest extent permitted by law, Salary Calculator UK shall not be liable for any
              direct, indirect, incidental, special, or consequential damages arising from your use of,
              or inability to use, this website or any calculator results. This limitation does not apply
              where liability cannot be legally excluded, such as in cases of negligence causing death
              or personal injury.
            </p>
          </section>

          <section>
            <h2>Privacy and Personal Data</h2>
            <p>
              Any salary figures or inputs entered into the calculator are processed temporarily in your
              browser and are not stored or transmitted to our servers after your session ends.
            </p>
            <p>
              We collect anonymous usage data through Google Analytics to help us improve the website.
              If you submit a contact form, your details may be processed solely for the purpose of
              responding to your enquiry.
            </p>
          </section>

          <section>
            <h2>Legal Basis for Processing</h2>
            <p>Where we process personal data, we do so on the following bases:</p>
            <ul>
              <li>To provide and maintain website functionality</li>
              <li>For our legitimate business interests in improving the service</li>
              <li>To comply with legal obligations</li>
              <li>To respond to enquiries you have submitted</li>
            </ul>
          </section>

          <section>
            <h2>Sharing Personal Information</h2>
            <p>
              We do not sell your personal information. We may share data with trusted service providers
              who assist us in operating the website, with professional advisers, or with legal authorities
              where required by law.
            </p>
          </section>

          <section>
            <h2>Google Analytics</h2>
            <p>
              This website uses Google Analytics to collect anonymous traffic data. Google processes this
              data in accordance with its own privacy policy. We encourage you to review Google's privacy
              terms if you have concerns about this.
            </p>
          </section>

          <section>
            <h2>Changes to These Terms</h2>
            <p>
              We reserve the right to update these Terms &amp; Conditions at any time. Changes take effect
              immediately upon publication. Your continued use of the website following any changes
              constitutes your acceptance of the updated terms.
            </p>
          </section>

          <section>
            <h2>Governing Law</h2>
            <p>
              These Terms &amp; Conditions are governed by the laws of England and Wales. Any disputes
              arising from your use of this website shall be subject to the exclusive jurisdiction of
              the courts of England and Wales.
            </p>
          </section>

          <section>
            <h2>Contact Us</h2>
            <p>
              If you have any questions about these Terms &amp; Conditions, please get in touch using
              our <a href="/contact">contact form</a>.
            </p>
          </section>
        </div>
      </div>
    </div>
  );
}
