import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost3() {
  return (
    <div className="page-wrap">
      <Meta
        title="What is £25,000 After Tax in the UK? (2026/27) – Salary Calculator UK"
        description="£25,000 salary after tax in the UK for 2026/27. Take-home pay is £21,520/year or £1,793/month. Full breakdown of income tax, NI, pension and student loan."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>£25,000 After Tax UK</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Salary Guide</span>
          <h1>What is £25,000 After Tax in the UK?</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 4 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            If you earn £25,000 a year in the UK, your take-home pay for the 2026/27 tax year is:
          </p>

          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Pay Period</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td>Annual</td><td><strong>£21,520</strong></td></tr>
                <tr><td>Monthly</td><td><strong>£1,793</strong></td></tr>
                <tr><td>Weekly</td><td><strong>£414</strong></td></tr>
                <tr><td>Hourly (37.5hrs)</td><td><strong>£11.03</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            These figures are based on the standard 1257L tax code, England and Wales, no pension
            or student loan deductions. For a personalised figure, use a <Link to="/">salary calculator UK</Link> to
            adjust for your exact situation.
          </p>

          <h2>How is £25,000 Taxed?</h2>
          <p>
            Your £25,000 salary is not all taxed. The first £12,570 is completely tax-free thanks
            to the Personal Allowance. Only the remaining £12,430 is taxable.
          </p>

          <h3>Income Tax</h3>
          <ul>
            <li>£25,000 minus £12,570 = £12,430 taxable income</li>
            <li>£12,430 at 20% basic rate = <strong>£2,486 per year (£207/month)</strong></li>
          </ul>
          <p>You are entirely within the basic rate band at this salary. You pay no higher rate tax.</p>

          <h3>National Insurance</h3>
          <ul>
            <li>£25,000 minus £12,570 = £12,430</li>
            <li>£12,430 at 8% = <strong>£994 per year (£83/month)</strong></li>
          </ul>

          <h3>Full Deductions Breakdown</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>Annual</th><th>Monthly</th></tr>
              </thead>
              <tbody>
                <tr><td>Gross Salary</td><td>£25,000</td><td>£2,083</td></tr>
                <tr><td>Income Tax</td><td>−£2,486</td><td>−£207</td></tr>
                <tr><td>National Insurance</td><td>−£994</td><td>−£83</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£21,520</strong></td><td><strong>£1,793</strong></td></tr>
              </tbody>
            </table>
          </div>

          <h2>Does Student Loan Affect £25,000 Take-Home Pay?</h2>
          <p>It depends on your plan. At £25,000, most plan thresholds are not reached:</p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Plan</th><th>Threshold</th><th>Deduction on £25,000</th></tr>
              </thead>
              <tbody>
                <tr><td>Plan 1</td><td>£26,900</td><td>£0</td></tr>
                <tr><td>Plan 2</td><td>£29,385</td><td>£0</td></tr>
                <tr><td>Plan 4</td><td>£33,795</td><td>£0</td></tr>
                <tr><td>Plan 5</td><td>£25,000</td><td>£0</td></tr>
                <tr><td>Postgraduate</td><td>£21,000</td><td>£20/month</td></tr>
              </tbody>
            </table>
          </div>
          <p>Only Postgraduate Loan holders see a deduction at this salary level — £240 per year.</p>

          <h2>Does Pension Affect £25,000 Take-Home Pay?</h2>
          <p>
            Yes. A 5% salary sacrifice pension contribution reduces your taxable income, which lowers
            both your income tax and National Insurance bill.
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>No Pension</th><th>5% Pension</th></tr>
              </thead>
              <tbody>
                <tr><td>Pension Contribution</td><td>£0</td><td>£1,250/year</td></tr>
                <tr><td>Income Tax</td><td>£2,486</td><td>£2,236</td></tr>
                <tr><td>National Insurance</td><td>£994</td><td>£894</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£21,520</strong></td><td><strong>£20,620</strong></td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The £1,250 pension contribution only costs £900 in reduced take-home pay. The rest is
            covered by tax and NIC savings.
          </p>

          <h2>£25,000 After Tax in Scotland</h2>
          <p>
            Scottish taxpayers pay slightly less income tax at this salary level due to the wider
            starter rate band:
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>England/Wales</th><th>Scotland</th></tr>
              </thead>
              <tbody>
                <tr><td>Income Tax</td><td>£2,486</td><td>£2,446</td></tr>
                <tr><td>National Insurance</td><td>£994</td><td>£994</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£21,520</strong></td><td><strong>£21,560</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
            Figures based on confirmed HMRC rates for the 2026/27 tax year. Standard 1257L tax code,
            employed income only. This is for informational purposes and does not constitute tax
            advice.
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
