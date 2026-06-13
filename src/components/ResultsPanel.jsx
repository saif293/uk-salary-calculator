import { useMemo } from 'react';
import { fmt } from '../utils/taxCalc';
import './ResultsPanel.css';

export default function ResultsPanel({ results, householdMonthly }) {
  const disposable = useMemo(() => {
    if (!results) return null;
    return results.takeHomeMonthly - householdMonthly;
  }, [results, householdMonthly]);

  const copyLink = () => {
    navigator.clipboard.writeText(window.location.href).then(() => {
      alert('Link copied! Share this URL to save your scenario.');
    });
  };

  if (!results) {
    return (
      <div className="card results-placeholder">
        <div className="card-title"><span className="emoji">📊</span> Salary Calculator UK</div>
        <p className="placeholder-text">Enter your salary above and click <strong>Calculate</strong> to see your salary calculator UK results.</p>
      </div>
    );
  }

  const rows = [
    { label: 'Gross Pay', annual: results.grossAnnual, monthly: results.grossMonthly, weekly: results.grossWeekly },
    { label: 'Income Tax', annual: results.incomeTax, monthly: results.incomeTax / 12, weekly: results.incomeTax / 52, deduction: true },
    { label: 'National Insurance', annual: results.ni, monthly: results.ni / 12, weekly: results.ni / 52, deduction: true },
    results.studentLoanDeduction > 0 && { label: 'Student Loan', annual: results.studentLoanDeduction, monthly: results.studentLoanDeduction / 12, weekly: results.studentLoanDeduction / 52, deduction: true },
    results.pensionAmount > 0 && { label: 'Pension', annual: results.pensionAmount, monthly: results.pensionAmount / 12, weekly: results.pensionAmount / 52, deduction: true },
    { label: 'Salary Calculator UK', annual: results.takeHomeAnnual, monthly: results.takeHomeMonthly, weekly: results.takeHomeWeekly, highlight: true },
  ].filter(Boolean);

  return (
    <div className="card results-card">
      <div className="card-title">
        <span className="emoji">📊</span> Salary Calculator UK
        <button className="bookmark-btn" onClick={copyLink}>💾 Save scenario</button>
      </div>

      <div className="results-table-wrap">
        <table className="results-table">
          <thead>
            <tr>
              <th></th>
              <th>Annual</th>
              <th>Monthly</th>
              <th>Weekly</th>
            </tr>
          </thead>
          <tbody>
            {rows.map((row) => (
              <tr key={row.label} className={row.highlight ? 'highlight-row' : row.deduction ? 'deduction-row' : ''}>
                <td className="row-label">{row.label}</td>
                <td>{row.deduction ? `−${fmt(row.annual)}` : fmt(row.annual)}</td>
                <td>{row.deduction ? `−${fmt(row.monthly)}` : fmt(row.monthly)}</td>
                <td>{row.deduction ? `−${fmt(row.weekly)}` : fmt(row.weekly)}</td>
              </tr>
            ))}
          </tbody>
        </table>
      </div>

      <div className="effective-rate">
        Effective Tax Rate: <strong>{results.effectiveTaxRate.toFixed(1)}%</strong>
      </div>

      {disposable !== null && householdMonthly > 0 && (
        <div className={`disposable-income ${disposable < 0 ? 'negative' : 'positive'}`}>
          <span>Monthly disposable after household costs</span>
          <strong>{disposable < 0 ? `−${fmt(Math.abs(disposable))}` : fmt(disposable)}</strong>
        </div>
      )}
    </div>
  );
}
