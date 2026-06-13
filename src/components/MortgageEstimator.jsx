import { fmt } from '../utils/taxCalc';
import './MortgageEstimator.css';

export default function MortgageEstimator({ grossAnnual }) {
  if (!grossAnnual || grossAnnual <= 0) return null;

  const low = grossAnnual * 4.0;
  const high = grossAnnual * 4.5;

  return (
    <div className="card mortgage-card" id="mortgage">
      <div className="card-title"><span className="emoji">🏡</span> Mortgage Borrowing Estimator</div>
      <p className="mortgage-subtitle">Based on your gross income of <strong>{fmt(grossAnnual)}</strong> / year</p>

      <div className="mortgage-range">
        <div className="mortgage-block">
          <span className="mult-label">4.0× income</span>
          <span className="mort-amount">{fmt(low)}</span>
        </div>
        <div className="mortgage-divider">to</div>
        <div className="mortgage-block">
          <span className="mult-label">4.5× income</span>
          <span className="mort-amount">{fmt(high)}</span>
        </div>
      </div>

      <p className="mortgage-caveat">
        Indicative range only. Affordability also depends on outgoings, credit history, deposit size, and current interest rates.
        Always speak to a qualified mortgage adviser.
      </p>

      <div className="joint-link">
        💑 <strong>Two incomes?</strong> Calculate combined take-home and joint mortgage capacity by opening a second calculator tab.
      </div>
    </div>
  );
}
