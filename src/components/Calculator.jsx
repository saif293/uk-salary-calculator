import { useState, useMemo, useEffect, useRef } from 'react';
import { calculateTakeHome, fmt } from '../utils/taxCalc';
import './Calculator.css';

function useCountUp(target, duration = 600) {
  const [display, setDisplay] = useState(target);
  const prevRef = useRef(target);
  const frameRef = useRef(null);

  useEffect(() => {
    const start = prevRef.current;
    const end = target;
    if (start === end) return;
    const startTime = performance.now();
    cancelAnimationFrame(frameRef.current);
    frameRef.current = requestAnimationFrame(function tick(now) {
      const elapsed = now - startTime;
      const progress = Math.min(elapsed / duration, 1);
      const ease = 1 - Math.pow(1 - progress, 3);
      setDisplay(start + (end - start) * ease);
      if (progress < 1) frameRef.current = requestAnimationFrame(tick);
      else prevRef.current = end;
    });
    return () => cancelAnimationFrame(frameRef.current);
  }, [target, duration]);

  return display;
}

const PERIODS = [
  { key: 'annually', label: 'Annually', divisor: 1 },
  { key: 'monthly', label: 'Monthly', divisor: 12 },
  { key: 'weekly', label: 'Weekly', divisor: 52 },
  { key: '2weekly', label: '2-Weekly', divisor: 26 },
  { key: '4weekly', label: '4-Weekly', divisor: 13 },
];

export default function Calculator() {
  const [salary, setSalary] = useState('');
  const [period, setPeriod] = useState('annually');
  const [showMore, setShowMore] = useState(false);
  const [country, setCountry] = useState('england');
  const [pensionPercent, setPensionPercent] = useState('');
  const [pensionPreTax, setPensionPreTax] = useState(true);
  const [studentLoan, setStudentLoan] = useState('none');
  const [taxCode, setTaxCode] = useState('');
  const [bonus, setBonus] = useState('');

  const annualSalary = useMemo(() => {
    const v = parseFloat(String(salary).replace(/,/g, '')) || 0;
    const p = PERIODS.find(p => p.key === period);
    return v * (p ? p.divisor : 1);
  }, [salary, period]);

  const results = useMemo(() => {
    if (!annualSalary || annualSalary <= 0) return null;
    return calculateTakeHome({
      grossSalary: annualSalary,
      country,
      pensionPercent: parseFloat(pensionPercent) || 0,
      pensionPreTax,
      studentLoan,
      bonusAnnual: parseFloat(bonus) || 0,
    });
  }, [annualSalary, country, pensionPercent, pensionPreTax, studentLoan, bonus]);

  return (
    <div className="calc-wrapper" id="calculator">
      <div className="calc-layout">

        {/* ── LEFT: Form ── */}
        <div className="calc-form-col">
          <h2 className="calc-heading">Salary Calculator</h2>

          <div className="salary-row">
            <label className="salary-label">My <strong>salary</strong> is:</label>
            <div className="salary-input-wrap">
              <span className="salary-prefix">£</span>
              <input
                className="salary-input"
                type="number"
                min="0"
                placeholder="e.g. 45,000"
                value={salary}
                onChange={e => setSalary(e.target.value)}
                autoFocus
              />
            </div>
          </div>

          <div className="period-tabs">
            {PERIODS.map(p => (
              <button
                key={p.key}
                className={`period-tab ${period === p.key ? 'active' : ''}`}
                onClick={() => setPeriod(p.key)}
              >
                {p.label}
              </button>
            ))}
          </div>

          <button className="more-options-btn" onClick={() => setShowMore(o => !o)}>
            <span>{showMore ? '▲' : '▼'}</span> {showMore ? 'Hide options' : 'More options'}
          </button>

          {showMore && (
            <div className="more-options">
              <div className="opt-field">
                <label>Tax Region</label>
                <select value={country} onChange={e => setCountry(e.target.value)}>
                  <option value="england">England</option>
                  <option value="wales">Wales</option>
                  <option value="ni">Northern Ireland</option>
                  <option value="scotland">Scotland</option>
                </select>
              </div>

              <div className="opt-field">
                <label>Tax Code</label>
                <input
                  type="text"
                  placeholder="e.g. 1257L"
                  value={taxCode}
                  onChange={e => setTaxCode(e.target.value)}
                />
              </div>

              <div className="opt-field">
                <label>Annual Bonus</label>
                <div className="opt-prefix-wrap">
                  <span className="opt-prefix">£</span>
                  <input
                    type="number"
                    min="0"
                    placeholder="0"
                    value={bonus}
                    onChange={e => setBonus(e.target.value)}
                  />
                </div>
              </div>

              <div className="opt-field">
                <label>Pension Contribution</label>
                <div className="opt-prefix-wrap">
                  <input
                    type="number"
                    min="0"
                    max="100"
                    step="0.5"
                    placeholder="0"
                    value={pensionPercent}
                    onChange={e => setPensionPercent(e.target.value)}
                  />
                  <span className="opt-suffix">%</span>
                </div>
                <div className="pension-toggle-row">
                  <button
                    className={`pension-toggle-btn ${pensionPreTax ? 'active' : ''}`}
                    onClick={() => setPensionPreTax(true)}
                  >Pre-tax</button>
                  <button
                    className={`pension-toggle-btn ${!pensionPreTax ? 'active' : ''}`}
                    onClick={() => setPensionPreTax(false)}
                  >Post-tax</button>
                </div>
              </div>

              <div className="opt-field">
                <label>Student Loan</label>
                <select value={studentLoan} onChange={e => setStudentLoan(e.target.value)}>
                  <option value="none">None</option>
                  <option value="plan1">Plan 1</option>
                  <option value="plan2">Plan 2</option>
                  <option value="plan4">Plan 4 (Scotland)</option>
                  <option value="plan5">Plan 5</option>
                  <option value="postgrad">Postgraduate</option>
                </select>
              </div>
            </div>
          )}
        </div>

        {/* ── RIGHT: Results ── */}
        <div className="calc-results-col">
          {!results ? (
            <div className="results-empty">
              <div className="results-empty-icon">💷</div>
              <p>Enter your salary to see your take-home pay breakdown</p>
            </div>
          ) : (
            <ResultsBreakdown results={results} />
          )}
        </div>

      </div>
    </div>
  );
}

function AnimatedValue({ value, prefix = '' }) {
  const animated = useCountUp(value);
  const str = fmt(animated);
  return <span>{prefix}{str}</span>;
}

function ResultsBreakdown({ results }) {
  const [view, setView] = useState('monthly');
  const [visible, setVisible] = useState(false);

  useEffect(() => {
    setVisible(false);
    const t = setTimeout(() => setVisible(true), 30);
    return () => clearTimeout(t);
  }, [results]);

  const views = [
    { key: 'annually', label: 'Annually', gross: results.grossAnnual, net: results.takeHomeAnnual, tax: results.incomeTax, ni: results.ni, pension: results.pensionAmount, loan: results.studentLoanDeduction },
    { key: 'monthly', label: 'Monthly', gross: results.grossMonthly, net: results.takeHomeMonthly, tax: results.incomeTax / 12, ni: results.ni / 12, pension: results.pensionAmount / 12, loan: results.studentLoanDeduction / 12 },
    { key: 'weekly', label: 'Weekly', gross: results.grossWeekly, net: results.takeHomeWeekly, tax: results.incomeTax / 52, ni: results.ni / 52, pension: results.pensionAmount / 52, loan: results.studentLoanDeduction / 52 },
  ];

  const v = views.find(x => x.key === view);

  const rows = [
    { label: 'Gross Pay', value: v.gross, type: 'gross' },
    { label: 'Income Tax', value: v.tax, type: 'deduction' },
    { label: 'National Insurance', value: v.ni, type: 'deduction' },
    v.pension > 0 && { label: 'Pension', value: v.pension, type: 'deduction' },
    v.loan > 0 && { label: 'Student Loan', value: v.loan, type: 'deduction' },
    { label: 'Take-Home Pay', value: v.net, type: 'net' },
  ].filter(Boolean);

  const animatedRate = useCountUp(results.effectiveTaxRate);

  return (
    <div className={`results-breakdown results-fade ${visible ? 'results-visible' : ''}`}>
      <div className="results-view-tabs">
        {views.map(x => (
          <button
            key={x.key}
            className={`view-tab ${view === x.key ? 'active' : ''}`}
            onClick={() => setView(x.key)}
          >
            {x.label}
          </button>
        ))}
      </div>

      <div className="results-rows">
        {rows.map((row, i) => (
          <div
            key={row.label}
            className={`result-row result-row--${row.type}`}
            style={{ animationDelay: `${i * 60}ms` }}
          >
            <span className="result-label">{row.label}</span>
            <span className="result-value">
              {row.type === 'deduction'
                ? <span>−<AnimatedValue value={row.value} /></span>
                : <AnimatedValue value={row.value} />}
            </span>
          </div>
        ))}
      </div>

      <div className="effective-rate-bar">
        <span>Effective tax rate</span>
        <strong>{animatedRate.toFixed(1)}%</strong>
      </div>
    </div>
  );
}
