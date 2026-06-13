import './CalculatorPanel.css';

const STUDENT_LOAN_OPTIONS = [
  { value: 'none', label: 'No student loan' },
  { value: 'plan1', label: 'Plan 1' },
  { value: 'plan2', label: 'Plan 2' },
  { value: 'plan4', label: 'Plan 4 (Scotland)' },
  { value: 'plan5', label: 'Plan 5' },
  { value: 'postgraduate', label: 'Postgraduate loan' },
];

export default function CalculatorPanel({
  pensionPercent,
  onPensionChange,
  studentLoan,
  onStudentLoanChange,
  onRecalculate,
}) {
  return (
    <section className="panel calculator-panel" aria-label="Salary and pay settings">
      <h2 className="panel-title">
        <span className="panel-icon">💷</span>
        Salary & Pay
      </h2>

      <div className="panel-body">
        <div className="form-group">
          <label htmlFor="pension-percent">Pension contribution (%)</label>
          <div className="range-row">
            <input
              id="pension-percent"
              type="range"
              min="0"
              max="20"
              step="1"
              value={pensionPercent}
              onChange={(e) => onPensionChange(Number(e.target.value))}
            />
            <span className="range-value">{pensionPercent}%</span>
          </div>
        </div>

        <div className="form-group">
          <label htmlFor="student-loan">Student loan plan</label>
          <select
            id="student-loan"
            value={studentLoan}
            onChange={(e) => onStudentLoanChange(e.target.value)}
          >
            {STUDENT_LOAN_OPTIONS.map((opt) => (
              <option key={opt.value} value={opt.value}>{opt.label}</option>
            ))}
          </select>
        </div>

        <div className="form-group">
          <label htmlFor="tax-code">Tax code</label>
          <input id="tax-code" type="text" defaultValue="1257L" placeholder="1257L" />
          <span className="form-hint">Standard personal allowance code</span>
        </div>

        <button type="button" className="recalculate-btn" onClick={onRecalculate}>
          Recalculate
        </button>
      </div>
    </section>
  );
}
