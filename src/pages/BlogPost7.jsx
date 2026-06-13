import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost7() {
  return (
    <div className="page-wrap">
      <Meta
        title="UK Take-Home Pay Tables 2026/27 – Monthly Net Pay for Every Salary"
        description="Pre-calculated monthly take-home pay for UK salaries from £10,000 to £125,000 for 2026/27. Based on HMRC rates — income tax and National Insurance included."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>UK Take-Home Pay Tables 2026/27</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Salary Guide</span>
          <h1>UK Take-Home Pay Tables 2026/27</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 5 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            Use this reference table to instantly look up your monthly net pay for 2026/27. All
            figures use the standard 1257L tax code, England and Wales rates, with no pension,
            student loan, or other deductions applied. For a personalised figure use our{' '}
            <Link to="/">salary calculator UK</Link>.
          </p>

          <div className="bp-note">
            <strong>Calculation basis:</strong> £12,570 Personal Allowance · 20% basic rate to
            £50,270 · 40% higher rate to £125,140 · 45% additional rate above £125,140 · 8% NI
            to £50,270 · 2% NI above £50,270 · 2026/27 HMRC confirmed rates.
          </div>

          <h2>Monthly Take-Home Pay Table — £10,000 to £50,000</h2>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr>
                  <th>Gross Salary</th>
                  <th>Income Tax</th>
                  <th>National Insurance</th>
                  <th>Monthly Take-Home</th>
                  <th>Annual Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>£10,000</td><td>£0</td><td>£0</td><td><strong>£833</strong></td><td>£10,000</td></tr>
                <tr><td>£12,570</td><td>£0</td><td>£0</td><td><strong>£1,048</strong></td><td>£12,570</td></tr>
                <tr><td>£15,000</td><td>£486</td><td>£194</td><td><strong>£1,193</strong></td><td>£14,320</td></tr>
                <tr><td>£18,000</td><td>£1,086</td><td>£434</td><td><strong>£1,370</strong></td><td>£16,480</td></tr>
                <tr><td>£20,000</td><td>£1,486</td><td>£594</td><td><strong>£1,493</strong></td><td>£17,920</td></tr>
                <tr><td>£22,000</td><td>£1,886</td><td>£754</td><td><strong>£1,613</strong></td><td>£19,360</td></tr>
                <tr><td>£25,000</td><td>£2,486</td><td>£994</td><td><strong>£1,793</strong></td><td>£21,520</td></tr>
                <tr><td>£28,000</td><td>£3,086</td><td>£1,234</td><td><strong>£1,973</strong></td><td>£23,680</td></tr>
                <tr><td>£30,000</td><td>£3,486</td><td>£1,394</td><td><strong>£2,093</strong></td><td>£25,120</td></tr>
                <tr><td>£32,000</td><td>£3,886</td><td>£1,554</td><td><strong>£2,213</strong></td><td>£26,560</td></tr>
                <tr><td>£35,000</td><td>£4,486</td><td>£1,794</td><td><strong>£2,393</strong></td><td>£28,720</td></tr>
                <tr><td>£38,000</td><td>£5,086</td><td>£2,034</td><td><strong>£2,573</strong></td><td>£30,880</td></tr>
                <tr><td>£40,000</td><td>£5,486</td><td>£2,194</td><td><strong>£2,693</strong></td><td>£32,320</td></tr>
                <tr><td>£42,000</td><td>£5,886</td><td>£2,354</td><td><strong>£2,813</strong></td><td>£33,760</td></tr>
                <tr><td>£45,000</td><td>£6,486</td><td>£2,594</td><td><strong>£2,993</strong></td><td>£35,920</td></tr>
                <tr><td>£48,000</td><td>£7,086</td><td>£2,834</td><td><strong>£3,173</strong></td><td>£38,080</td></tr>
                <tr><td>£50,000</td><td>£7,486</td><td>£2,994</td><td><strong>£3,293</strong></td><td>£39,520</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Monthly Take-Home Pay Table — £50,000 to £125,000</h2>
          <p>
            Above £50,270 the 40% higher rate kicks in, and above £50,270 National Insurance
            drops to 2%. Your take-home still grows but at a slower rate.
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr>
                  <th>Gross Salary</th>
                  <th>Income Tax</th>
                  <th>National Insurance</th>
                  <th>Monthly Take-Home</th>
                  <th>Annual Take-Home</th>
                </tr>
              </thead>
              <tbody>
                <tr><td>£55,000</td><td>£9,432</td><td>£3,111</td><td><strong>£3,538</strong></td><td>£42,457</td></tr>
                <tr><td>£60,000</td><td>£11,432</td><td>£3,211</td><td><strong>£3,780</strong></td><td>£45,357</td></tr>
                <tr><td>£65,000</td><td>£13,432</td><td>£3,311</td><td><strong>£4,022</strong></td><td>£48,257</td></tr>
                <tr><td>£70,000</td><td>£15,432</td><td>£3,411</td><td><strong>£4,263</strong></td><td>£51,157</td></tr>
                <tr><td>£75,000</td><td>£17,432</td><td>£3,511</td><td><strong>£4,505</strong></td><td>£54,057</td></tr>
                <tr><td>£80,000</td><td>£19,432</td><td>£3,611</td><td><strong>£4,746</strong></td><td>£56,957</td></tr>
                <tr><td>£85,000</td><td>£21,432</td><td>£3,711</td><td><strong>£4,988</strong></td><td>£59,857</td></tr>
                <tr><td>£90,000</td><td>£23,432</td><td>£3,811</td><td><strong>£5,230</strong></td><td>£62,757</td></tr>
                <tr><td>£95,000</td><td>£25,432</td><td>£3,911</td><td><strong>£5,471</strong></td><td>£65,657</td></tr>
                <tr><td>£100,000</td><td>£27,432</td><td>£4,011</td><td><strong>£5,713</strong></td><td>£68,557</td></tr>
                <tr><td>£110,000</td><td>£32,432</td><td>£4,211</td><td><strong>£6,113</strong></td><td>£73,357</td></tr>
                <tr><td>£120,000</td><td>£37,432</td><td>£4,411</td><td><strong>£6,513</strong></td><td>£78,157</td></tr>
                <tr><td>£125,000</td><td>£39,932</td><td>£4,511</td><td><strong>£6,713</strong></td><td>£80,557</td></tr>
              </tbody>
            </table>
          </div>

          <h2>How to Use This Table</h2>
          <p>This table is useful for:</p>
          <ul>
            <li><strong>Comparing job offers</strong> — quickly see what a salary increase actually means in monthly take-home</li>
            <li><strong>Budget planning</strong> — know exactly what lands in your bank account each month</li>
            <li><strong>Salary negotiations</strong> — understand the net value of what you are asking for</li>
            <li><strong>Promotion planning</strong> — see how a pay rise translates to real income</li>
          </ul>

          <h2>Important Notes</h2>
          <ul>
            <li>Figures are for <strong>England and Wales</strong> only — Scottish taxpayers pay different income tax rates</li>
            <li>No <strong>pension contributions</strong> are included — salary sacrifice pensions reduce your taxable income and will increase take-home relative to the tax saving</li>
            <li>No <strong>student loan</strong> deductions are included — Plan 1, 2, 4 and 5 thresholds vary</li>
            <li>Above <strong>£100,000</strong>, the Personal Allowance is tapered — the effective tax rate rises sharply between £100,000 and £125,140</li>
            <li>All figures assume the standard <strong>1257L tax code</strong></li>
          </ul>

          <h2>What Happens Above £100,000?</h2>
          <p>
            Between £100,000 and £125,140 your Personal Allowance is gradually withdrawn — you
            lose £1 of allowance for every £2 earned above £100,000. This creates an effective
            marginal tax rate of <strong>60%</strong> on income in this band (40% higher rate plus
            the 20% lost from the shrinking allowance). Many earners in this range use pension
            contributions to bring their adjusted net income below £100,000 and reclaim their
            full Personal Allowance.
          </p>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
            All figures are estimates based on confirmed HMRC rates for the 2026/27 tax year,
            standard 1257L tax code, England and Wales, employed income only. Actual take-home
            may vary. This is for informational purposes and does not constitute financial or tax advice.
          </p>

          <div className="bp-cta">
            <strong>Need a personalised figure?</strong>
            <p>Use our free <Link to="/">Salary Calculator UK</Link> to model your exact take-home pay with pension, student loan, Scottish tax, and your specific tax code.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
