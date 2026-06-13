import { useState } from 'react';
import './FAQSection.css';

const FAQS = [
  {
    q: 'Why does my take-home differ from my payslip?',
    a: 'Your payslip may include additional deductions such as pension contributions, student loan repayments, or an incorrect tax code that our calculator does not automatically account for.',
  },
  {
    q: 'How is National Insurance calculated in 2026/27?',
    a: 'National Insurance is charged at 0% up to £12,570, 8% on earnings between £12,570 and £50,270, and 2% on anything above £50,270.',
  },
  {
    q: 'Does this include the 5% auto-enrolment pension?',
    a: 'Yes, you can enter your pension contribution percentage in the calculator and it will automatically reduce your taxable income and show your adjusted after tax salary.',
  },
  {
    q: 'Are Scottish tax bands different, and by how much?',
    a: 'Yes. Scotland has six income tax bands compared to three in England, and higher earners in Scotland pay up to £3,000 more per year than equivalent earners in England.',
  },
  {
    q: 'How does a student loan plan affect my pay?',
    a: 'Your student loan repayment is deducted at 9% of earnings above your plan threshold directly through PAYE, reducing your monthly income automatically.',
  },
  {
    q: 'How is my take-home pay calculated?',
    a: 'Your after tax pay is your gross salary minus income tax, National Insurance, pension contributions, and any student loan repayments applied through PAYE.',
  },
  {
    q: 'How much National Insurance will I pay?',
    a: 'The exact amount depends on your earnings; use our calculator above to see your precise monthly and annual National Insurance deduction for 2026/27.',
  },
  {
    q: 'What is the minimum wage in the UK?',
    a: 'The UK National Living Wage for workers aged 21 and over is £12.71 per hour from April 2026.',
  },
  {
    q: 'Does this calculator work for Scotland?',
    a: 'Yes, simply select Scotland in the tax region option and the calculator will apply the correct Scottish income tax bands for an accurate take-home figure.',
  },
  {
    q: 'What are the benefits of this calculator?',
    a: 'It gives you an instant, accurate breakdown of your take-home pay including income tax, National Insurance, pension, and student loan deductions, all updated for 2026/27.',
  },
];

export default function FAQSection() {
  const [open, setOpen] = useState(null);
  return (
    <div className="card faq-card" id="faq">
      <div className="card-title"><span className="emoji">❓</span> Frequently Asked Questions</div>
      <div className="faq-list">
        {FAQS.map((item, i) => (
          <div key={i} className={`faq-item ${open === i ? 'open' : ''}`}>
            <button className="faq-q" onClick={() => setOpen(open === i ? null : i)}>
              {item.q}
              <span className="faq-chevron">{open === i ? '▲' : '▼'}</span>
            </button>
            {open === i && <p className="faq-a">{item.a}</p>}
          </div>
        ))}
      </div>
    </div>
  );
}
