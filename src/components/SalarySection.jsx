export default function SalarySection({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });

  return (
    <div className="card" id="calculator">
      <div className="card-title"><span className="emoji">💷</span> Salary Information</div>

      <div className="form-row">
        <div className="field">
          <label>Annual Gross Salary</label>
          <div className="input-prefix-wrap">
            <span className="prefix">£</span>
            <input
              type="number"
              min="0"
              placeholder="e.g. 45000"
              value={data.salary}
              onChange={e => set('salary', e.target.value)}
            />
          </div>
        </div>
        <div className="field">
          <label>Country / Tax Region</label>
          <select value={data.country} onChange={e => set('country', e.target.value)}>
            <option value="england">England</option>
            <option value="wales">Wales</option>
            <option value="ni">Northern Ireland</option>
            <option value="scotland">Scotland</option>
          </select>
        </div>
      </div>

      <div className="form-row">
        <div className="field">
          <label>Tax Code</label>
          <input
            type="text"
            placeholder="e.g. 1257L"
            value={data.taxCode}
            onChange={e => set('taxCode', e.target.value)}
          />
          <span className="hint">Leave blank to use standard 1257L</span>
        </div>
        <div className="field">
          <label>Annual Bonus / Commission</label>
          <div className="input-prefix-wrap">
            <span className="prefix">£</span>
            <input
              type="number"
              min="0"
              placeholder="0"
              value={data.bonus}
              onChange={e => set('bonus', e.target.value)}
            />
          </div>
        </div>
      </div>
    </div>
  );
}
