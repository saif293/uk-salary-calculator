import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

export default function BlogPost6() {
  return (
    <div className="page-wrap">
      <Meta
        title="UK Income Tax 2026/27: Rates, Bands & How It Works – Salary Calculator UK"
        description="Everything you need to know about UK income tax for 2026/27. Personal allowance, tax bands for England, Wales and Scotland, PAYE, tax codes and tax-free income explained."
      />
      <div className="page-container bp-container">

        <div className="bp-breadcrumb">
          <Link to="/">Home</Link> › <Link to="/blog">Blog</Link> › <span>UK Income Tax 2026/27</span>
        </div>

        <div className="bp-header">
          <span className="blog-tag">Tax Guide</span>
          <h1>UK Income Tax 2026/27: Rates, Bands &amp; How It Works</h1>
          <div className="bp-meta">
            <span>📅 June 2026</span>
            <span>⏱ 6 min read</span>
          </div>
        </div>

        <div className="bp-body">

          <p>
            Income tax is a charge on the money you earn. Once your income exceeds your tax-free
            Personal Allowance, HMRC takes a percentage of everything above that threshold. This
            guide covers everything you need to know about UK income tax for the 2026/27 tax year —
            rates, bands, how it's collected, and what income is exempt.
          </p>

          <h2>What is the Personal Allowance for 2026/27?</h2>
          <p>
            For the 2026/27 tax year, your first <strong>£12,570</strong> of income is completely
            tax-free. This is called the Personal Allowance. You only pay income tax on earnings
            above this amount.
          </p>
          <div className="bp-note">
            <strong>Note:</strong> If your income exceeds £100,000, your Personal Allowance is
            gradually reduced — by £1 for every £2 earned above £100,000. It reaches zero at £125,140.
          </div>

          <h2>Income Tax Rates &amp; Bands — England, Wales &amp; Northern Ireland</h2>
          <p>
            Most UK taxpayers are subject to the following rates for 2026/27:
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Taxable Income</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Personal Allowance</td><td>Up to £12,570</td><td>0%</td></tr>
                <tr><td>Basic Rate</td><td>£12,571 to £50,270</td><td>20%</td></tr>
                <tr><td>Higher Rate</td><td>£50,271 to £125,140</td><td>40%</td></tr>
                <tr><td>Additional Rate</td><td>Over £125,140</td><td>45%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            For example, on a £45,000 salary you pay <strong>20%</strong> on £32,430 (the amount
            above the Personal Allowance) — which works out at £6,486 per year.
          </p>

          <h2>Income Tax Rates &amp; Bands — Scotland</h2>
          <p>
            Scotland operates its own more graduated income tax system. Scottish taxpayers pay
            different rates on their earnings:
          </p>
          <div className="bp-table-wrap">
            <table className="bp-table">
              <thead>
                <tr><th>Band</th><th>Taxable Income</th><th>Rate</th></tr>
              </thead>
              <tbody>
                <tr><td>Personal Allowance</td><td>Up to £12,570</td><td>0%</td></tr>
                <tr><td>Starter Rate</td><td>£12,571 to £16,537</td><td>19%</td></tr>
                <tr><td>Basic Rate</td><td>£16,538 to £29,526</td><td>20%</td></tr>
                <tr><td>Intermediate Rate</td><td>£29,527 to £43,662</td><td>21%</td></tr>
                <tr><td>Higher Rate</td><td>£43,663 to £75,000</td><td>42%</td></tr>
                <tr><td>Advanced Rate</td><td>£75,001 to £125,140</td><td>45%</td></tr>
                <tr><td>Top Rate</td><td>Over £125,140</td><td>48%</td></tr>
              </tbody>
            </table>
          </div>
          <p>
            Scottish taxpayers earning above £43,663 pay considerably more income tax than those
            in England and Wales. At a £50,000 salary, for instance, a Scottish worker pays
            approximately £1,495 more in income tax per year.
          </p>

          <h2>How is Income Tax Collected?</h2>
          <p>HMRC uses two main methods to collect income tax:</p>

          <h3>PAYE (Pay As You Earn)</h3>
          <p>
            If you are employed, your employer automatically deducts income tax and National
            Insurance from your wages before you receive them. This is called PAYE. Your payslip
            will show exactly how much has been deducted each month.
          </p>

          <h3>Self Assessment</h3>
          <p>
            If you are self-employed, a landlord, or have investment income, you must file a
            Self Assessment tax return each year and pay your tax bill directly to HMRC. The
            deadline for online returns is 31 January following the end of the tax year.
          </p>

          <h2>What is a Tax Code?</h2>
          <p>
            Your tax code tells your employer how much of your income is tax-free. The standard
            tax code for most employees in 2026/27 is <strong>1257L</strong>, which corresponds
            to the £12,570 Personal Allowance. If your tax code is different, it may mean:
          </p>
          <ul>
            <li>You have untaxed income from a previous year</li>
            <li>You receive company benefits (e.g. a company car)</li>
            <li>You have multiple jobs</li>
            <li>You are claiming Marriage Allowance</li>
          </ul>
          <p>
            You can check and update your tax code via your HMRC Personal Tax Account.
          </p>

          <h2>What Income is Exempt from Tax?</h2>
          <p>Not all income is subject to income tax. The following are generally exempt:</p>
          <ul>
            <li><strong>ISA savings and returns</strong> — interest and investment gains inside an ISA are tax-free</li>
            <li><strong>Premium Bond winnings</strong> — all prizes are completely tax-free</li>
            <li><strong>Most state benefits</strong> — including Universal Credit, Child Benefit (below threshold), and Personal Independence Payment (PIP)</li>
            <li><strong>Pension lump sums</strong> — up to 25% of your pension pot can be taken tax-free</li>
            <li><strong>Rent-a-Room income</strong> — up to £7,500 per year if renting a furnished room in your home</li>
            <li><strong>Trading allowance</strong> — the first £1,000 of self-employment income is tax-free</li>
          </ul>

          <h2>What Income Sources Are Taxable?</h2>
          <p>Income tax applies to a wide range of earnings, including:</p>
          <ul>
            <li>Employment wages and salaries</li>
            <li>Self-employment profits</li>
            <li>Rental income from property</li>
            <li>Pension income (State Pension and private pensions)</li>
            <li>Investment income above the dividend allowance (£500 for 2026/27)</li>
            <li>Savings interest above the Personal Savings Allowance</li>
          </ul>

          <h2>How to Reduce Your Income Tax Bill</h2>
          <p>There are several legal ways to reduce how much income tax you pay:</p>
          <ul>
            <li><strong>Pension contributions</strong> — salary sacrifice pension contributions reduce your taxable income, cutting both income tax and National Insurance</li>
            <li><strong>ISA contributions</strong> — invest up to £20,000 per year into an ISA to shelter returns from tax</li>
            <li><strong>Marriage Allowance</strong> — transfer £1,260 of your Personal Allowance to your spouse or civil partner if they earn more than you</li>
            <li><strong>Gift Aid</strong> — charitable donations made through Gift Aid can reduce your tax bill if you are a higher-rate taxpayer</li>
          </ul>

          <p style={{ fontSize: 13, color: 'var(--text-muted)', marginTop: 16 }}>
            Figures based on confirmed HMRC rates for the 2026/27 tax year. This is for
            informational purposes and does not constitute tax advice. Always consult a qualified
            tax adviser for personal guidance.
          </p>

          <div className="bp-cta">
            <strong>See exactly how much tax you will pay</strong>
            <p>Use our free <Link to="/">Salary Calculator UK</Link> to calculate your take-home pay after income tax, National Insurance, pension and student loan for 2026/27.</p>
          </div>

        </div>
      </div>
    </div>
  );
}
