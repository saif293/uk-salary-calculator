import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost5() {
  return (
    <div className="page-wrap">
      <Meta
        title="What is £50,000 After Tax in the UK? (2026/27) – Salary Calculator UK"
        description="£50,000 salary after tax in the UK for 2026/27. Take-home pay is £39,520/year or £3,293/month. Full breakdown of income tax, NI, and Scotland comparison."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>£50,000 After Tax UK</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Salary Guide</span>
          <h1>What is £50,000 After Tax in the UK?</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 4 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            If you earn £50,000 a year in the UK, your take-home pay for the 2026/27 tax year is:
          </p>

          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Pay Period</th><th>Amount</th></tr>
              </thead>
              <tbody>
                <tr><td>Annual</td><td><strong>£39,520</strong></td></tr>
                <tr><td>Monthly</td><td><strong>£3,293</strong></td></tr>
                <tr><td>Weekly</td><td><strong>£760</strong></td></tr>
                <tr><td>Hourly (37.5hrs)</td><td><strong>£20.27</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            These figures are based on the standard 1257L tax code, England and Wales, no pension
            or student loan deductions. For a personalised figure, use a <Link to="/">salary calculator UK</Link> to
            adjust for your exact situation.
          </p>

          <h2>How is £50,000 Taxed?</h2>
          <p>
            Your £50,000 salary is not all taxed. The first £12,570 is completely tax-free thanks
            to the Personal Allowance. Only the remaining £37,430 is taxable.
          </p>

          <h3>Income Tax</h3>
          <ul>
            <li>£50,000 minus £12,570 = £37,430 taxable income</li>
            <li>£37,430 at 20% basic rate = <strong>£7,486 per year (£624/month)</strong></li>
          </ul>
          <p>
            At £50,000 you sit just below the higher rate threshold of £50,270, so your entire
            taxable income is taxed at the basic rate of 20% only. You pay <strong>no 40% tax</strong>.
          </p>

          <h3>National Insurance</h3>
          <ul>
            <li>£50,000 minus £12,570 = £37,430</li>
            <li>£37,430 at 8% = <strong>£2,994 per year (£250/month)</strong></li>
          </ul>

          <h3>Full Deductions Breakdown</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>Annual</th><th>Monthly</th></tr>
              </thead>
              <tbody>
                <tr><td>Gross Salary</td><td>£50,000</td><td>£4,167</td></tr>
                <tr><td>Income Tax</td><td>−£7,486</td><td>−£624</td></tr>
                <tr><td>National Insurance</td><td>−£2,994</td><td>−£250</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£39,520</strong></td><td><strong>£3,293</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Out of every £1 you earn, approximately <strong>79p</strong> reaches your bank account at this salary level.
          </p>

          <h2>£50,000 After Tax in Scotland</h2>
          <p>
            Scottish taxpayers pay significantly more income tax at this salary level. At £50,000,
            a Scottish earner falls into the 42% Higher Rate band, which starts at £43,663 in
            Scotland compared to £50,270 in England and Wales.
          </p>

          <h3>Scottish Income Tax Calculation on £50,000</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Income</th><th>Rate</th><th>Tax</th></tr>
              </thead>
              <tbody>
                <tr><td>Starter</td><td>£12,571 to £16,537</td><td>19%</td><td>£753</td></tr>
                <tr><td>Basic</td><td>£16,538 to £29,526</td><td>20%</td><td>£2,598</td></tr>
                <tr><td>Intermediate</td><td>£29,527 to £43,662</td><td>21%</td><td>£2,968</td></tr>
                <tr><td>Higher</td><td>£43,663 to £50,000</td><td>42%</td><td>£2,662</td></tr>
                <tr className="bp-table-total"><td><strong>Total Scottish Income Tax</strong></td><td></td><td></td><td><strong>£8,981</strong></td></tr>
              </tbody>
            </table>
          </div>

          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th></th><th>England/Wales</th><th>Scotland</th></tr>
              </thead>
              <tbody>
                <tr><td>Income Tax</td><td>£7,486</td><td>£8,981</td></tr>
                <tr><td>National Insurance</td><td>£2,994</td><td>£2,994</td></tr>
                <tr className="bp-table-total"><td><strong>Take-Home Pay</strong></td><td><strong>£39,520</strong></td><td><strong>£38,025</strong></td></tr>
              </tbody>
            </table>
          </div>

          <p>
            Scottish taxpayers on £50,000 take home approximately <strong>£1,495 less per year</strong> than
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
