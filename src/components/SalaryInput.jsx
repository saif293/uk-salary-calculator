import './SalaryInput.css';

export default function SalaryInput({
  salary,
  onSalaryChange,
  onCalculate,
  quickTry,
  onQuickTry,
  loading,
  error,
}) {
  const handleKeyDown = (e) => {
    if (e.key === 'Enter') onCalculate();
  };

  return (
    <section className="salary-input-section" aria-label="Salary calculator input">
      <div className="salary-input-wrapper">
        <span className="salary-input-icon" aria-hidden="true">🧮</span>
        <input
          type="text"
          className="salary-input"
          placeholder="Type any salary (e.g. 75, 120k, 45000)..."
          value={salary}
          onChange={(e) => onSalaryChange(e.target.value)}
          onKeyDown={handleKeyDown}
          aria-label="Enter your gross annual salary"
        />
        <button
          type="button"
          className="check-pay-btn"
          onClick={onCalculate}
          disabled={loading}
        >
          {loading ? 'Calculating…' : 'Check Pay →'}
        </button>
      </div>

      {error && <p className="salary-error" role="alert">{error}</p>}

      {quickTry.length > 0 && (
        <div className="quick-try">
          <span>Try:</span>
          {quickTry.map((item) => (
            <button
              key={item.label}
              type="button"
              className="quick-try-btn"
              onClick={() => onQuickTry(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
