import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost4() {
  return (
    <div className="page-wrap">
      <Meta
        title="What is £45,000 After Tax in the UK? (2026/27) – Salary Calculator UK"
        description="£45,000 salary after tax in the UK for 2026/27. Take-home pay is £35,920/year or £2,993/month. Full breakdown of income tax, NI, pension and student loan."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>£45,000 After Tax UK</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Salary Guide</span>
          <h1>What is £45,000 After Tax in the UK?</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 4 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            If you earn £45,000 a year in the UK, your take-home pay for the 2026/27 tax year is:
          </p>

          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Pay Period</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td>Annual</td><td><strong>£35,920</strong></td></tr>
                <tr><td>Monthly</td><td><strong>£2,993</strong></td></tr>
                <tr><td>Weekly</td><td><strong>£691</strong></td></tr>
                <tr><td>Hourly (37.5hrs)</td><td><strong>£18.42</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            These figures are based on the standard 1257L tax code, England and Wales, no pension
            or student loan deductions. For a personalised figure, use a <Link to="/">salary calculator UK</Link> to
            adjust for your exact situation.
          </p>

          <h2>How is £45,000 Taxed?</h2>
          <p>
            Your £45,000 salary is not all taxed. The first £12,570 is completely tax-free thanks
            to the Personal Allowance. Only the remaining £32,430 is taxable.
          </p>

          <h3>Income Tax</h3>
          <ul>
            <li>£45,000 minus £12,570 = £32,430 taxable income</li>
            <li>£32,430 at 20% basic rate = <strong>£6,486 per year (£540/month)</strong></li>
          </ul>
          <p>
            At £45,000 you are entirely within the basic rate band. The higher rate of 40% does
            not apply until earnings exceed £50,270.
          </p>

          <h3>National Insurance</h3>
          <ul>
            <li>£45,000 minus £12,570 = £32,430</li>
            <li>£32,430 at 8% = <strong>£2,594 per year (£216/month)</strong></li>
          </ul>

          <h3>Full Deductions Breakdown</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>Annual</th><th>Monthly</th></tr>
              </thead>
              <tbody>
                <tr><td>Gross Salary</td><td>£45,000</td><td>£3,750</td></tr>
                <tr><td>Income Tax</td><td>−£6,486</td><td>−£540</td></tr>
                <tr><td>National Insurance</td><td>−£2,594</td><td>−£216</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£35,920</strong></td><td><strong>£2,993</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Out of every £1 you earn, approximately <strong>80p</strong> reaches your bank account at this salary level.
          </p>

          <h2>£45,000 After Tax in Scotland</h2>
          <p>
            Scottish taxpayers pay more income tax at this salary level due to the 21% intermediate rate band:
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>England/Wales</th><th>Scotland</th></tr>
              </thead>
              <tbody>
                <tr><td>Income Tax</td><td>£6,486</td><td>£7,986</td></tr>
                <tr><td>National Insurance</td><td>£2,594</td><td>£2,594</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£35,920</strong></td><td><strong>£34,420</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Scottish taxpayers on £45,000 take home approximately <strong>£1,500 less per year</strong> than
            equivalent earners in England and Wales.
          </p>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
            Figures based on confirmed HMRC rates for the 2026/27 tax year. Standard 1257L tax code,
            employed income only. This is for informational purposes and does not constitute tax advice.
          </p>

          <div className="bp-cta">
            <strong>Get your exact take-home pay</strong>
            <p>Use our free <Link to="/">Salary Calculator UK</Link> to model your exact take-home pay with pension, student loan, and tax code adjustments.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
