export default function StudentLoanSection({ value, onChange }) {
  return (
    <div className="card">
      <div className="card-title"><span className="emoji">🎓</span> Student Loan</div>
      <div className="field">
        <label>Repayment Plan</label>
        <select value={value} onChange={e => onChange(e.target.value)}>
          <option value="none">No student loan</option>
          <option value="plan1">Plan 1 — threshold £24,990</option>
          <option value="plan2">Plan 2 — threshold £27,295</option>
          <option value="plan4">Plan 4 (Scotland) — threshold £31,395</option>
          <option value="plan5">Plan 5 — threshold £25,000</option>
          <option value="postgrad">Postgraduate — threshold £21,000</option>
        </select>
        <span className="hint">9% above threshold (6% for postgraduate)</span>
      </div>
    </div>
  );
}
