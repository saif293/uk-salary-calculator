export default function PensionSection({ data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });

  return (
    <div className="card">
      <div className="card-title"><span className="emoji">🏦</span> Pension &amp; Deductions</div>

      <div className="form-row">
        <div className="field">
          <label>Pension Contribution</label>
          <div className="input-prefix-wrap" style={{ '--pfx': 'none' }}>
            <input
              type="number"
              min="0"
              max="100"
              step="0.5"
              placeholder="0"
              value={data.pensionPercent}
              onChange={e => set('pensionPercent', e.target.value)}
              style={{ paddingRight: '32px' }}
            />
            <span style={{ position: 'absolute', right: 12, top: '50%', transform: 'translateY(-50%)', color: 'var(--text-muted)', pointerEvents: 'none' }}>%</span>
          </div>
        </div>
        <div className="field" style={{ justifyContent: 'flex-end' }}>
          <label style={{ marginBottom: 8 }}>Tax Treatment</label>
          <div className="toggle-row" style={{ margin: 0 }}>
            <span className="toggle-label">Post-tax</span>
            <label className="toggle">
              <input
                type="checkbox"
                checked={data.preTax}
                onChange={e => set('preTax', e.target.checked)}
              />
              <span className="toggle-slider" />
            </label>
            <span className="toggle-label">Pre-tax</span>
          </div>
          <span className="hint" style={{ marginTop: 6 }}>Pre-tax = salary sacrifice</span>
        </div>
      </div>
    </div>
  );
}
