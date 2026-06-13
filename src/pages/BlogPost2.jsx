import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost2() {
  return (
    <div className="page-wrap">
      <Meta
        title="UK Tax Year 2026/27: Everything You Need to Know – Salary Calculator UK"
        description="Complete guide to the 2026/27 UK tax year. Income tax bands, NI rates, National Living Wage, student loans, ISA allowances and all key dates in one place."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>UK Tax Year 2026/27</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Tax Year</span>
          <h1>UK Tax Year 2026/27: Everything You Need to Know</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 12 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            The 2026/27 tax year runs from 6 April 2026 to 5 April 2027. For millions of UK workers,
            savers, and business owners, this is the year that frozen thresholds, a higher National
            Living Wage, reformed student loan interest, and new employment rights all land at the
            same time. Some changes put more money in your pocket. Others quietly take more out.
          </p>
          <p>
            This guide covers every key update for the 2026/27 tax year in one place, so you know
            exactly where you stand.
          </p>

          <h2>What is the UK Tax Year and When Does 2026/27 Start?</h2>
          <p>
            The UK tax year does not follow the calendar year. It runs from 6 April to 5 April each
            year — a quirk that dates back to the 18th century when Britain switched from the Julian
            to the Gregorian calendar.
          </p>
          <p>
            The 2026/27 tax year began on 6 April 2026 and ends on 5 April 2027. Every April, a
            fresh set of rates, thresholds, and allowances takes effect. The tax year end on 5 April
            is also a hard deadline for using annual allowances, such as your ISA limit and Capital
            Gains Tax exemption. Once 5 April passes, those allowances expire permanently.
          </p>

          <h2>Income Tax 2026/27: Bands, Rates and the Frozen Allowance</h2>

          <h3>Personal Allowance Still Frozen at £12,570</h3>
          <p>
            The Personal Allowance — the amount of income you can earn completely free of income tax
            — remains at £12,570 for 2026/27. It has been frozen at this level since the 2021/22
            tax year and is now confirmed to stay frozen until at least April 2031, a full decade
            at the same level.
          </p>
          <p>
            This freeze is the defining feature of UK income tax right now. It is not a formal tax
            rise, but the effect is identical. With average UK wages rising by approximately 3.8%
            per year, workers are receiving pay rises while the tax-free amount stays still. More
            of each salary is pulled into the taxable bands every single year.
          </p>

          <h3>2026/27 Income Tax Bands (England, Wales and Northern Ireland)</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Taxable Income</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Personal Allowance</td><td>Up to £12,570</td><td>0%</td></tr>
                <tr><td>Basic Rate</td><td>£12,571 to £50,270</td><td>20%</td></tr>
                <tr><td>Higher Rate</td><td>£50,271 to £125,140</td><td>40%</td></tr>
                <tr><td>Additional Rate</td><td>Above £125,140</td><td>45%</td></tr>
              </tbody>
            </table>
          </div>
          <p>These bands are unchanged from 2025/26 for taxpayers in England, Wales and Northern Ireland.</p>

          <h3>The £100,000 Trap</h3>
          <p>
            If you earn between £100,000 and £125,140, your Personal Allowance is reduced by £1
            for every £2 earned above £100,000. By the time you reach £125,140, the allowance has
            disappeared entirely. This creates an effective marginal tax rate of 60% on that slice
            of income — making it the highest effective rate in the UK tax system. Pension
            contributions paid via salary sacrifice can bring your adjusted net income below
            £100,000, restoring the allowance and generating 60p of tax relief for every £1
            contributed in that range.
          </p>

          <h3>Scottish Income Tax 2026/27</h3>
          <p>
            Scottish taxpayers pay a different structure set by the Scottish Government. For 2026/27,
            Scotland has widened its starter and basic rate bands, providing a small reduction for
            lower earners.
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Income Range</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Starter Rate</td><td>£12,571 to £16,537</td><td>19%</td></tr>
                <tr><td>Basic Rate</td><td>£16,538 to £29,526</td><td>20%</td></tr>
                <tr><td>Intermediate Rate</td><td>£29,527 to £43,662</td><td>21%</td></tr>
                <tr><td>Higher Rate</td><td>£43,663 to £75,000</td><td>42%</td></tr>
                <tr><td>Advanced Rate</td><td>£75,001 to £125,140</td><td>45%</td></tr>
                <tr><td>Top Rate</td><td>Above £125,140</td><td>48%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Scottish taxpayers earning above approximately £28,000 continue to pay more income tax
            than equivalent earners south of the border.
          </p>

          <h2>National Insurance 2026/27: What Employees and Employers Pay</h2>

          <h3>Employee NIC Rates (Unchanged)</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Earnings up to £12,570</td><td>0%</td></tr>
                <tr><td>Earnings from £12,571 to £50,270</td><td>8%</td></tr>
                <tr><td>Earnings above £50,270</td><td>2%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Like income tax, employee NIC thresholds remain frozen. Every pay rise you receive
            without a corresponding threshold increase means a larger absolute NIC bill each year.
          </p>

          <h3>Employer NIC Stays at 15%</h3>
          <p>
            Employers continue to pay 15% National Insurance on employee earnings above the Secondary
            Threshold of £5,000 per year. This elevated rate, introduced in April 2025, remains
            unchanged for 2026/27.
          </p>
          <p>
            While employer NIC does not come out of your payslip, it significantly raises the total
            cost of employing you. For a £40,000 salary, your employer pays approximately £5,250 in
            NIC on top of your gross pay.
          </p>

          <div className="bp-note">
            <strong>Employment Allowance: £10,500</strong> — Small businesses and charities can
            offset up to £10,500 of their employer NIC bill through the Employment Allowance. The
            previous £100,000 NIC liability cap on eligibility was removed, meaning all qualifying
            employers can now claim regardless of their NIC bill size.
          </div>

          <h2>Fiscal Drag: The Silent Tax Rise of 2026/27</h2>
          <p>
            Fiscal drag is the single most important concept for understanding what is happening to
            UK take-home pay in 2026/27. It does not make headlines because no tax rate has been
            raised. But the effect on millions of workers is very real.
          </p>
          <p>
            Here is how it works. Tax thresholds are frozen. Wages rise with inflation. More of each
            salary falls inside the taxable bands. A worker earning £35,000 who receives a 3.8% pay
            rise gains £1,330 in gross pay. After income tax at 20% and NIC at 8%, only approximately
            £956 of that actually reaches their bank account. The frozen threshold silently captures
            the rest.
          </p>
          <p>
            The Higher Rate Threshold of £50,270 is particularly significant. Workers who received
            modest pay rises have been pushed into the 40% bracket for the first time — without any
            deliberate government policy change in tax rates.
          </p>

          <h2>National Living Wage 2026/27: Biggest Rise Yet</h2>
          <p>
            From 1 April 2026, the National Living Wage increased to <strong>£12.71 per hour</strong> for
            workers aged 21 and over — a 4.1% rise from the previous £12.21. This is the highest
            rate since the National Living Wage was introduced in 2016 at £7.20.
          </p>

          <h3>All Minimum Wage Rates from April 2026</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Category</th><th>Hourly Rate</th><th>Change</th></tr>
              </thead>
              <tbody>
                <tr><td>Age 21 and over (National Living Wage)</td><td>£12.71</td><td>+4.1%</td></tr>
                <tr><td>Age 18 to 20 (National Minimum Wage)</td><td>£10.85</td><td>+8.5%</td></tr>
                <tr><td>Age 16 to 17</td><td>£8.00</td><td>+6.0%</td></tr>
                <tr><td>Apprentices (under 19, or first year)</td><td>£8.00</td><td>+6.0%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            A full-time worker aged 21 or over on the National Living Wage earns approximately
            £26,556 per year gross at 37.5 hours per week.
          </p>

          <div className="bp-note">
            <strong>Real Living Wage vs National Living Wage:</strong> The National Living Wage is
            the legal minimum. The Real Living Wage, set by the Living Wage Foundation, is higher at
            £13.45/hour outside London and £14.80/hour in London from May 2026. Over 16,000
            accredited employers pay this voluntarily, but it is not a legal requirement.
          </div>

          <h2>Student Loan Repayments 2026/27: Updated Thresholds and Interest Cap</h2>
          <p>
            Student loan repayments are collected automatically through PAYE and function more like
            a graduate contribution than a traditional debt. You only repay above a threshold, and
            any balance remaining at the end of your repayment term is written off.
          </p>

          <h3>2026/27 Repayment Thresholds (All Plans)</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Plan</th><th>Who It Covers</th><th>Threshold</th><th>Rate</th><th>Write-Off</th></tr>
              </thead>
              <tbody>
                <tr><td>Plan 1</td><td>Pre-2012 English/Welsh; all NI students</td><td>£26,900</td><td>9%</td><td>Age 65 or 25 years</td></tr>
                <tr><td>Plan 2</td><td>English/Welsh 2012 to 2023</td><td>£29,385</td><td>9%</td><td>30 years</td></tr>
                <tr><td>Plan 4</td><td>Scottish students</td><td>£33,795</td><td>9%</td><td>30 years</td></tr>
                <tr><td>Plan 5</td><td>English students from Sept 2023</td><td>£25,000</td><td>9%</td><td>40 years</td></tr>
                <tr><td>Postgraduate</td><td>Masters or Doctoral loan</td><td>£21,000</td><td>6%</td><td>30 years</td></tr>
              </tbody>
            </table>
          </div>
          <p>Plans 1, 2 and 4 all saw threshold increases for 2026/27, meaning slightly lower monthly repayments at the same salary compared to last year.</p>

          <div className="bp-note">
            <strong>Plan 2 Interest Capped at 6%:</strong> The government announced in April 2026
            that interest on Plan 2 and Postgraduate loans would be capped at 6% from September
            2026. This protects approximately 7 million Plan 2 borrowers in England and Wales from
            inflation-linked interest spikes.
          </div>

          <div className="bp-note">
            <strong>Plan 5 First Repayments Begin:</strong> Students who started university in
            England from September 2023 are on Plan 5 and are making their first student loan
            repayments in the 2026/27 tax year. Check your payslip from April 2026 to confirm
            deductions have started correctly.
          </div>

          <h2>Pension Contributions 2026/27</h2>

          <h3>Auto-Enrolment Minimum Contributions</h3>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Contributor</th><th>Minimum Rate</th><th>On Which Earnings</th></tr>
              </thead>
              <tbody>
                <tr><td>Employee</td><td>5%</td><td>£6,240 to £50,270</td></tr>
                <tr><td>Employer</td><td>3%</td><td>£6,240 to £50,270</td></tr>
                <tr><td><strong>Total</strong></td><td><strong>8%</strong></td><td>£6,240 to £50,270</td></tr>
              </tbody>
            </table>
          </div>

          <h3>Annual Pension Allowance: £60,000</h3>
          <p>
            The annual pension allowance remains at £60,000 for 2026/27. The tax-free cash lump
            sum cap is £268,275.
          </p>

          <h3>Salary Sacrifice: Still the Most Tax-Efficient Option</h3>
          <p>
            Pension contributions made via salary sacrifice reduce your gross pay before income tax
            and NIC are calculated. At the basic rate, a £2,000 pension contribution via salary
            sacrifice saves approximately £560 in combined tax and NIC — meaning the real cost to
            your take-home pay is only around £1,440.
          </p>
          <p>
            For higher earners approaching £100,000, salary sacrifice into a pension is even more
            valuable, as it can restore the Personal Allowance and reduce effective marginal rates
            from 60% back to 40%.
          </p>

          <h2>ISA and Savings Allowances 2026/27</h2>

          <h3>ISA Allowance: Still £20,000</h3>
          <p>
            The annual ISA allowance remains at £20,000 for 2026/27. All returns inside an ISA —
            whether interest, dividends, or capital gains — are completely free of tax.
          </p>
          <div className="bp-note">
            <strong>Important future change:</strong> From April 2027, the cash ISA limit is set to
            fall to £12,000 for those aged 64 and under, while the total £20,000 ISA limit remains.
            The 2026/27 tax year is your last opportunity to deposit up to £20,000 into a cash ISA
            under current rules.
          </div>

          <h3>Personal Savings Allowance</h3>
          <ul>
            <li>Basic rate taxpayers: £1,000 per year</li>
            <li>Higher rate taxpayers: £500 per year</li>
            <li>Additional rate taxpayers: £0</li>
          </ul>

          <h2>Capital Gains Tax 2026/27</h2>
          <p>
            The Capital Gains Tax annual exempt amount remains at £3,000 for individuals — down
            sharply from £12,300 in 2022/23.
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Taxpayer</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Basic rate taxpayer</td><td>18%</td></tr>
                <tr><td>Higher or additional rate taxpayer</td><td>24%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            The Business Asset Disposal Relief rate increased to 18% for 2026/27 (up from 14% in
            2025/26), reducing the attractiveness of entrepreneurial relief for business owners
            planning an exit.
          </p>

          <h2>Dividend Tax 2026/27</h2>
          <p>The Dividend Allowance remains at £500, unchanged from 2025/26.</p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Taxpayer</th><th>Dividend Tax Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Basic rate</td><td>8.75%</td></tr>
                <tr><td>Higher rate</td><td>33.75%</td></tr>
                <tr><td>Additional rate</td><td>39.35%</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Statutory Sick Pay 2026/27: Day One Rights</h2>
          <p>
            From 6 April 2026, Statutory Sick Pay (SSP) increases to <strong>£123.25 per week</strong> and
            is now payable from day one of absence. The previous three waiting days have been
            removed, meaning employees receive SSP from the very first day they are too ill to work.
            The Lower Earnings Limit restriction has also been removed, broadening eligibility to
            more workers.
          </p>

          <h2>Homeworking Tax Relief: Change from April 2026</h2>
          <p>
            From 6 April 2026, employees can no longer claim homeworking tax relief via their tax
            code for equipment reimbursed by their employer. However, employer reimbursements for
            homeworking equipment, eye tests, and flu vaccinations are now tax and NIC exempt when
            processed directly through payroll.
          </p>
          <p>
            If you work from home and pay for equipment yourself without employer reimbursement, you
            may still be able to claim the flat rate working from home allowance. Check your
            eligibility via your HMRC Personal Tax Account.
          </p>

          <h2>Making Tax Digital for Income Tax: Now Live for Higher Earners</h2>
          <p>
            From 6 April 2026, Making Tax Digital for Income Tax (MTD for IT) is mandatory for
            self-employed people and landlords whose qualifying income exceeded £50,000 in the
            2024/25 tax year. The threshold drops to £30,000 from April 2027.
          </p>

          <h2>Key 2026/27 Tax Year Dates and Deadlines</h2>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Date</th><th>What Happens</th></tr>
              </thead>
              <tbody>
                <tr><td>1 April 2026</td><td>National Living Wage rises to £12.71/hour</td></tr>
                <tr><td>6 April 2026</td><td>2026/27 tax year begins. New rates and allowances take effect</td></tr>
                <tr><td>6 April 2026</td><td>SSP payable from day one of absence</td></tr>
                <tr><td>6 April 2026</td><td>MTD for Income Tax mandatory above £50,000 qualifying income</td></tr>
                <tr><td>5 July 2026</td><td>P60 deadline: employers must issue P60 for 2025/26</td></tr>
                <tr><td>6 July 2026</td><td>P11D deadline: employers report benefits in kind for 2025/26</td></tr>
                <tr><td>31 January 2027</td><td>Self Assessment deadline: file 2025/26 return and pay any tax owed</td></tr>
                <tr><td>5 April 2027</td><td>2026/27 tax year ends. Last day to use annual ISA, CGT and pension allowances</td></tr>
              </tbody>
            </table>
          </div>

          <h2>Quick Summary: All Key Figures for 2026/27</h2>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Item</th><th>2026/27 Figure</th></tr>
              </thead>
              <tbody>
                <tr><td>Personal Allowance</td><td>£12,570</td></tr>
                <tr><td>Basic Rate band</td><td>£12,571 to £50,270 at 20%</td></tr>
                <tr><td>Higher Rate band</td><td>£50,271 to £125,140 at 40%</td></tr>
                <tr><td>Additional Rate</td><td>Above £125,140 at 45%</td></tr>
                <tr><td>Employee NIC main rate</td><td>8% (£12,570 to £50,270)</td></tr>
                <tr><td>Employer NIC rate</td><td>15% above £5,000</td></tr>
                <tr><td>National Living Wage (21+)</td><td>£12.71/hour</td></tr>
                <tr><td>ISA allowance</td><td>£20,000</td></tr>
                <tr><td>Pension Annual Allowance</td><td>£60,000</td></tr>
                <tr><td>CGT annual exemption</td><td>£3,000</td></tr>
                <tr><td>Dividend Allowance</td><td>£500</td></tr>
                <tr><td>Student Loan Plan 2 threshold</td><td>£29,385</td></tr>
                <tr><td>Student Loan Plan 1 threshold</td><td>£26,900</td></tr>
                <tr><td>Student Loan Plan 4 threshold</td><td>£33,795</td></tr>
                <tr><td>Student Loan Plan 5 threshold</td><td>£25,000</td></tr>
                <tr><td>Postgraduate Loan threshold</td><td>£21,000</td></tr>
                <tr><td>Statutory Sick Pay</td><td>£123.25/week</td></tr>
                <tr><td>Auto-enrolment qualifying earnings</td><td>£6,240 to £50,270</td></tr>
                <tr><td>State Pension (new)</td><td>£230.25/week</td></tr>
              </tbody>
            </table>
          </div>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 8 }}>
            All figures are confirmed HMRC rates for the tax year 6 April 2026 to 5 April 2027.
            This article is for informational purposes and does not constitute financial or tax
            advice. Verify current rates at gov.uk or consult a qualified tax adviser for personal
            guidance.
          </p>

          <div className="bp-cta">
            <strong>See how 2026/27 affects your salary</strong>
            <p>Use our free <Link to="/">Salary Calculator UK</Link> to get a full breakdown of your income tax, National Insurance, student loan, and pension deductions in seconds.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
