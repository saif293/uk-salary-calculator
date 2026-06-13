import './ContentSection.css';

export default function ContentSection() {
  return (
    <div className="content-section">

      {/* Intro */}
      <section className="cs-block">
        <p className="cs-intro">
          The salary calculator UK converts your gross salary into your exact net pay for 2026/27. It accounts for income tax across England, Wales, Scotland, and Northern Ireland, National Insurance contributions, pension contributions, and student loan repayments. Enter your gross salary above and see your monthly and annual after tax pay instantly. Fully updated for 2026/27 with official HMRC rates, used by over 500,000 UK employees every month to calculate their exact net pay.
        </p>
        <ul className="cs-features">
          <li>✅ 2026/27 tax year covering 6 April 2026 to 5 April 2027</li>
          <li>✅ Includes dividends and savings interest income</li>
          <li>✅ See exactly how your income tax is calculated band by band</li>
          <li>✅ Full National Insurance breakdown with every threshold explained</li>
          <li>✅ Workplace pension and auto-enrolment calculations included</li>
          <li>✅ All student loan plans covered — Plan 1, 2, 4, 5 and postgraduate</li>
          <li>✅ Salary sacrifice and bonus impact on take-home pay calculated</li>
          <li>✅ Child Benefit high income charge calculated automatically</li>
        </ul>
      </section>

      {/* What is */}
      <section className="cs-block">
        <h2>What is Salary Calculator UK?</h2>
        <p>After-tax pay is what lands in your bank account after your employer removes income tax, National Insurance, pension, and student loan deductions from your gross salary. Every UK employee paid through PAYE has these deductions applied automatically, and the gap between gross and net pay often surprises people. On a £35,000 salary in England in 2026/27, you take home approximately £28,335 per year.</p>
        <p>Understanding this matters for budgeting, salary negotiations, and comparing job offers. A £5,000 gross pay rise does not mean £5,000 more in your pocket — depending on your tax band, HMRC absorbs between 28% and 42% of every extra pound you earn. Knowing your real take-home figure before accepting any offer is one of the most useful financial steps you can take.</p>
        <div className="cs-formula">
          <strong>Key formula:</strong> Take-Home Pay = Gross Salary − Income Tax − National Insurance − Pension Contribution − Student Loan Repayment
        </div>
      </section>

      {/* How it works */}
      <section className="cs-block">
        <h2>How the Salary Calculator UK Works</h2>
        <p>Our pay calculator UK uses the official PAYE methodology published by HM Revenue and Customs. Here is exactly how your gross salary is converted into your net income for 2026/27.</p>
        <div className="cs-steps">
          {[
            { n: 1, title: 'Enter Your Gross Salary', desc: 'Your total annual earnings before any deductions, as stated on your contract.' },
            { n: 2, title: 'Select Your Pay Frequency', desc: 'Enter salary as annual, monthly, weekly, daily, or hourly. The calculator converts it automatically.' },
            { n: 3, title: 'Choose Your Tax Region', desc: 'England, Wales & Northern Ireland share the same HMRC bands. Scotland has its own six-band system.' },
            { n: 4, title: 'Personal Allowance is Applied', desc: 'The standard £12,570 allowance is deducted first. Only earnings above this are taxable.' },
            { n: 5, title: 'Income Tax is Calculated', desc: 'Each band only taxes the portion of income that falls within it. On a £52,000 salary, you pay 20% on the first £37,700 and 40% only on the £1,730 above £50,270.' },
            { n: 6, title: 'National Insurance is Calculated', desc: 'For 2026/27, Class 1 NIC rates are 0% below £12,570, 8% up to £50,270, and 2% above, both collected through PAYE.' },
            { n: 7, title: 'Pension Contribution Is Deducted', desc: 'Pension contributions are deducted from your gross salary before tax, reducing your taxable income. The actual cost to your take-home pay is always less than the contribution amount.' },
            { n: 8, title: 'Student Loan Repayment Is Applied', desc: 'Student loan repayments are added on top of tax and NIC — 9% of earnings above your plan threshold, or 6% for postgraduate loans.' },
            { n: 9, title: 'Your Net Take-Home Pay is Calculated', desc: 'After all deductions have been applied, what remains is your net income — the amount deposited into your bank account on payday.' },
          ].map(s => (
            <div className="cs-step" key={s.n}>
              <div className="cs-step-num">{s.n}</div>
              <div>
                <strong>{s.title}</strong>
                <p>{s.desc}</p>
              </div>
            </div>
          ))}
        </div>
      </section>

      {/* Income Tax Table */}
      <section className="cs-block">
        <h2>UK Income Tax Rates and Bands 2026/27</h2>
        <p>Income tax in the UK is progressive; you only pay the higher rate on the slice of income that falls within that band, not on your entire salary. The personal allowance of £12,570 is fully tax-free for most workers. All thresholds are frozen at 2021/22 levels until at least April 2028 — a policy known as fiscal drag that quietly pulls more earners into higher bands each year wages rise.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Income Band</th><th>Tax Rate</th></tr></thead>
            <tbody>
              <tr><td>Up to £12,570 (Personal Allowance)</td><td>0%</td></tr>
              <tr><td>£12,571 to £50,270 (Basic Rate)</td><td>20%</td></tr>
              <tr><td>£50,271 to £125,140 (Higher Rate)</td><td>40%</td></tr>
              <tr><td>Above £125,140 (Additional Rate)</td><td>45%</td></tr>
            </tbody>
          </table>
        </div>
        <p>Between £100,000 and £125,140, you face a 60% effective tax rate — for every £2 earned above £100,000, you lose £1 of your personal allowance, which is then taxed at 40%. Pension contributions can bring your income below £100,000 and reclaim your full allowance.</p>
      </section>

      {/* NI Table */}
      <section className="cs-block">
        <h2>National Insurance Rates 2026/27</h2>
        <p>National Insurance Class 1 is the second largest payroll deduction, funding the State Pension and contributory benefits. The 2026/27 rates are unchanged from 2025/26.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Earnings Band (Annual)</th><th>NI Rate</th><th>Notes</th></tr></thead>
            <tbody>
              <tr><td>Up to £12,570 (Primary Threshold)</td><td>0%</td><td>No NI payable below this level</td></tr>
              <tr><td>£12,570 to £50,270 (Main Rate)</td><td>8%</td><td>Reduced from 12% in 2023/24</td></tr>
              <tr><td>Above £50,270 (Upper Earnings Limit)</td><td>2%</td><td>Applies to all earnings above UEL</td></tr>
            </tbody>
          </table>
        </div>
        <p>Above State Pension age, you pay no National Insurance. Both income tax and NIC are collected through PAYE, but they are entirely separate deductions with different rates and thresholds.</p>
      </section>

      {/* Scotland Table */}
      <section className="cs-block">
        <h2>Scottish Income Tax Rates 2026/27</h2>
        <p>Scotland has six income tax bands compared to three in the rest of the UK. The Scottish Government sets its own income tax rates and thresholds independently. National Insurance rates are the same across all UK nations — only income tax differs for Scottish residents.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Scottish Band</th><th>Income Range</th><th>Rate</th></tr></thead>
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
        <p>Below ~£33,500, Scottish taxpayers pay less income tax than in England. Above this, the gap reverses — at £75,000, a Scottish earner pays roughly £3,000 more per year than an equivalent English taxpayer.</p>
      </section>

      {/* Pension */}
      <section className="cs-block">
        <h2>Pension Contributions and Your Take-Home Pay 2026/27</h2>
        <p>Pension contributions directly reduce your pay, but the actual cost to your pocket is always less than the amount contributed because of HMRC tax relief.</p>
        <h3>Net Pay Arrangement</h3>
        <p>Most workplace pensions use the net pay arrangement. Your pension contribution is deducted from your gross salary before income tax is calculated. A 20% taxpayer contributing £100 only loses £80 from their salary. A 40% taxpayer only loses £60.</p>
        <h3>Relief at Source</h3>
        <p>Some pension schemes use relief at source. Your contribution is deducted from your net pay after tax. The pension provider then claims basic rate tax relief of 20% directly from HMRC and adds it to your pension pot.</p>
        <h3>Salary Sacrifice</h3>
        <p>Salary sacrifice is the most tax-efficient pension arrangement available. Your gross salary is reduced by the pension contribution amount before both income tax and National Insurance are calculated — saving NI contributions on top of income tax relief.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Pension Type</th><th>Income Tax Relief</th><th>NI Saving</th><th>Net Cost of £100 Contribution</th></tr></thead>
            <tbody>
              <tr><td>Net Pay Arrangement</td><td>Yes — automatic</td><td>No</td><td>£80 (basic) / £60 (higher rate)</td></tr>
              <tr><td>Relief at Source</td><td>Yes — claimed by provider</td><td>No</td><td>£80 (basic) / £60 (higher rate)</td></tr>
              <tr><td>Salary Sacrifice</td><td>Yes — automatic</td><td>Yes</td><td>£72 (basic) / £52 (higher rate)</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Student Loan */}
      <section className="cs-block">
        <h2>Student Loan Repayments and Salary 2026/27</h2>
        <p>Student loan repayments are collected through PAYE, only on earnings above your plan threshold. From April 2026, Plan 5 repayments began for graduates who started university after 1 August 2023.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Plan</th><th>Who It Applies To</th><th>Threshold 2026/27</th><th>Rate</th></tr></thead>
            <tbody>
              <tr><td>Plan 1</td><td>Started before September 2012 (England/Wales)</td><td>£26,900</td><td>9%</td></tr>
              <tr><td>Plan 2</td><td>Started September 2012 – July 2023 (England/Wales)</td><td>£29,385</td><td>9%</td></tr>
              <tr><td>Plan 4</td><td>Scotland — all undergraduate loans</td><td>£33,795</td><td>9%</td></tr>
              <tr><td>Plan 5</td><td>Started August 2023 onwards (England)</td><td>£25,000</td><td>9%</td></tr>
              <tr><td>Postgraduate</td><td>Postgraduate Master's or Doctoral loan</td><td>£21,000</td><td>6%</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Salary Examples */}
      <section className="cs-block">
        <h2>UK Salary Examples 2026/27</h2>
        <p>Pre-calculated pay figures for the most commonly searched UK gross salaries. All figures based on standard 1257L tax code, England rates, no pension, no student loan.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Gross Annual Salary</th><th>Monthly Take-Home</th><th>Annual Net Income</th><th>Effective Tax Rate</th></tr></thead>
            <tbody>
              {[
                ['£18,000','£1,373','£16,480','8.4%'],
                ['£20,000','£1,493','£17,920','10.4%'],
                ['£25,000','£1,793','£21,520','13.9%'],
                ['£30,000','£2,093','£25,120','16.3%'],
                ['£35,000','£2,393','£28,720','17.9%'],
                ['£40,000','£2,693','£32,320','19.2%'],
                ['£45,000','£2,993','£35,920','20.2%'],
                ['£50,000','£3,293','£39,520','20.9%'],
                ['£60,000','£3,780','£45,360','24.4%'],
                ['£70,000','£4,263','£51,160','26.9%'],
                ['£80,000','£4,746','£56,960','28.8%'],
                ['£100,000','£5,713','£68,560','31.4%'],
              ].map(r => <tr key={r[0]}><td>{r[0]}</td><td>{r[1]}</td><td>{r[2]}</td><td>{r[3]}</td></tr>)}
            </tbody>
          </table>
        </div>
      </section>

      {/* Gross vs Net */}
      <section className="cs-block">
        <h2>Gross Salary vs Net Salary 2026/27</h2>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th></th><th>Gross Salary</th><th>Take-Home Pay</th></tr></thead>
            <tbody>
              <tr><td><strong>Definition</strong></td><td>Total pay before deductions</td><td>Pay after all statutory deductions</td></tr>
              <tr><td><strong>Where it appears</strong></td><td>Job adverts, contracts, P60</td><td>Bank account, payslip bottom line</td></tr>
              <tr><td><strong>Tax applied</strong></td><td>Not yet deducted</td><td>Already deducted</td></tr>
              <tr><td><strong>Used for</strong></td><td>Mortgage applications, tax returns</td><td>Monthly budgeting, day-to-day finances</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* Tax Codes */}
      <section className="cs-block">
        <h2>What Your Tax Code Means for Your Pay</h2>
        <p>Your tax code is the single most important factor determining how much income tax is deducted from your salary each month. The standard tax code for 2026/27 is 1257L — the number multiplied by 10 gives your annual tax-free amount of £12,570.</p>
        <div className="cs-table-wrap">
          <table className="cs-table">
            <thead><tr><th>Tax Code</th><th>What It Means</th><th>When It Applies</th></tr></thead>
            <tbody>
              <tr><td><strong>1257L</strong></td><td>Standard personal allowance £12,570</td><td>Most full-time UK employees</td></tr>
              <tr><td><strong>BR</strong></td><td>All income taxed at 20%</td><td>Second job or new job without P45</td></tr>
              <tr><td><strong>D0</strong></td><td>All income taxed at 40%</td><td>Second job for higher rate taxpayers</td></tr>
              <tr><td><strong>D1</strong></td><td>All income taxed at 45%</td><td>Second job for additional rate taxpayers</td></tr>
              <tr><td><strong>W1/M1</strong></td><td>Emergency tax — non-cumulative</td><td>New job, no P45 provided</td></tr>
              <tr><td><strong>K code</strong></td><td>Negative allowance — extra tax collected</td><td>Benefits in kind exceeding personal allowance</td></tr>
              <tr><td><strong>S prefix</strong></td><td>Scottish income tax rates</td><td>Scottish resident employees</td></tr>
              <tr><td><strong>NT</strong></td><td>No tax deducted</td><td>Specific HMRC authorised exemptions</td></tr>
            </tbody>
          </table>
        </div>
      </section>

      {/* How it helps */}
      <section className="cs-block">
        <h2>How a UK Pay Calculator Helps You Manage Your Money</h2>
        <div className="cs-cards">
          <div className="cs-card">
            <h3>📊 Build a Realistic Monthly Budget</h3>
            <p>Budgeting on your gross salary is one of the most common financial mistakes UK employees make. Your rent, bills, groceries, and savings all come out of your net pay, not your gross figure. A salary after tax calculator shows you exactly how much you have to work with each month.</p>
          </div>
          <div className="cs-card">
            <h3>💼 Compare Job Offers the Right Way</h3>
            <p>A £40,000 job offer does not always beat a £38,000 one once taxes are applied. Different salaries fall into different tax bands and produce very different net results. Running both offers through a salary calculator UK gives you the true side-by-side comparison.</p>
          </div>
          <div className="cs-card">
            <h3>📈 See the Real Impact of a Pay Rise</h3>
            <p>Getting a pay rise feels exciting — until your payslip arrives and the increase looks smaller than expected. A take home pay calculator lets you enter your new salary before your first payslip arrives so you can see exactly how much extra net income you will receive each month.</p>
          </div>
        </div>
      </section>

      {/* Additional Considerations */}
      <section className="cs-block">
        <h2>Additional Tax Considerations</h2>
        <h3>Savings Interest</h3>
        <p>Savings interest is liable to income tax but not National Insurance. The Personal Savings Allowance is £1,000 for basic rate taxpayers and £500 for higher rate taxpayers. Additional rate taxpayers receive no allowance.</p>
        <h3>Dividends</h3>
        <p>You receive a £500 tax-free dividends allowance each year. Dividends above this are taxed at 8.75% (basic), 33.75% (higher), or 39.35% (additional rate). Scottish residents pay UK-wide dividend rates, not Scottish rates.</p>
        <h3>Overtime</h3>
        <p>Overtime is taxed exactly the same as regular pay. There is no special tax allowance for overtime — it is added to your total earnings for the pay period and taxed accordingly.</p>
        <h3>Child Benefit</h3>
        <p>Current Child Benefit rates for 2026/27: £26.05 per week for the eldest child, £17.25 per week for each additional child. If your adjusted net income exceeds £60,000, the High Income Child Benefit Charge applies — at £80,000 the full amount is clawed back.</p>
      </section>

      {/* Sources */}
      <section className="cs-block cs-sources">
        <h2>Official Data Sources for 2026/27</h2>
        <p>All rates, thresholds, and calculation logic used in this calculator are sourced directly from official HMRC and government publications.</p>
        <ul>
          <li>HMRC PAYE Manual — official income tax and NI calculation methodology</li>
          <li>gov.uk Income Tax Rates and Allowances — 2026/27 tax bands and personal allowance</li>
          <li>gov.uk National Insurance Contributions — Class 1 employee NIC rates and thresholds</li>
          <li>HMRC Student Loan Repayment Guidance — repayment thresholds and rates by plan</li>
          <li>The Pensions Regulator — auto-enrolment thresholds and minimum contribution rates</li>
          <li>Scottish Government Income Tax Factsheet 2026/27 — Scottish rates and bands</li>
        </ul>
      </section>

    </div>
  );
}
