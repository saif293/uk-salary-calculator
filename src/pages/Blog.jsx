import { Link } from 'react-router-dom';
import Meta from '../components/Meta';
import './Page.css';
import './BlogPost.css';

const POSTS = [
  {
    slug: 'uk-take-home-pay-tables-2026-27',
    tag: 'Salary Guide',
    title: 'UK Take-Home Pay Tables 2026/27 – Monthly Net Pay for Every Salary',
    excerpt: 'Pre-calculated monthly net pay for UK salaries from £10,000 to £125,000. Look up your take-home instantly — income tax and NI already deducted.',
    date: 'June 2026',
  },
  {
    slug: 'uk-income-tax-2026-27',
    tag: 'Tax Guide',
    title: 'UK Income Tax 2026/27: Rates, Bands & How It Works',
    excerpt: 'Personal allowance, tax bands for England, Wales and Scotland, PAYE, tax codes and tax-free income — everything explained for 2026/27.',
    date: 'June 2026',
  },
  {
    slug: '50000-after-tax-uk',
    tag: 'Salary Guide',
    title: 'What is £50,000 After Tax in the UK? (2026/27)',
    excerpt: 'Take-home pay on a £50,000 salary is £39,520/year or £3,293/month. Includes Scottish tax breakdown — you pay no 40% tax at this level in England.',
    date: 'June 2026',
  },
  {
    slug: '45000-after-tax-uk',
    tag: 'Salary Guide',
    title: 'What is £45,000 After Tax in the UK? (2026/27)',
    excerpt: 'Take-home pay on a £45,000 salary is £35,920/year or £2,993/month. Full breakdown of income tax, NI, and Scotland comparison.',
    date: 'June 2026',
  },
  {
    slug: '25000-after-tax-uk',
    tag: 'Salary Guide',
    title: 'What is £25,000 After Tax in the UK? (2026/27)',
    excerpt: 'Take-home pay on a £25,000 salary is £21,520/year or £1,793/month. Full breakdown of income tax, NI, pension and student loan.',
    date: 'June 2026',
  },
  {
    slug: 'uk-tax-year-2026-27-everything-you-need-to-know',
    tag: 'Tax Year',
    title: 'UK Tax Year 2026/27: Everything You Need to Know',
    excerpt: 'Income tax bands, NI rates, National Living Wage, student loans, ISA allowances and all key dates — every update in one place.',
    date: 'June 2026',
  },
  {
    slug: 'how-to-calculate-take-home-pay-uk',
    tag: 'Tax Guide',
    title: 'How to Calculate Your Take-Home Pay in the UK (2026/27 Guide)',
    excerpt: 'Income tax, National Insurance, student loans, and pension deductions explained with full worked examples for 2026/27.',
    date: 'June 2026',
  },
];

export default function Blog() {
  return (
    <div className="page-wrap">
      <Meta
        title="Blog – Salary Calculator UK | UK Tax & Pay Guides 2026/27"
        description="Read our latest guides on UK salary, income tax, National Insurance, pensions and student loans. Helpful articles for UK workers updated for 2026/27."
      />
      <div className="page-container" style={{ maxWidth: 900 }}>
        <div className="page-header">
          <h1>Blog</h1>
          <p>Guides, tax year updates, and money tips for UK workers.</p>
        </div>

        <div className="blog-grid">
          {POSTS.map(post => (
            <Link key={post.slug} to={`/blog/${post.slug}`} className="blog-card">
              <span className="blog-tag">{post.tag}</span>
              <h3>{post.title}</h3>
              <p>{post.excerpt}</p>
              <div className="blog-date">{post.date}</div>
            </Link>
          ))}
        </div>
      </div>
    </div>
  );
}
