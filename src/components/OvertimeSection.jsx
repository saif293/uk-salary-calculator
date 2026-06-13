import { useMemo } from 'react';

export default function OvertimeSection({ salary, data, onChange }) {
  const set = (k, v) => onChange({ ...data, [k]: v });

  const hourlyRate = useMemo(() => {
    const hrs = parseFloat(data.weeklyHours) || 37.5;
    const s = parseFloat(salary) || 0;
    return s > 0 ? (s / (hrs * 52)).toFixed(2) : '0.00';
  }, [salary, data.weeklyHours]);

  const overtimeAnnual = useMemo(() => {
    let total = 0;
    const rate = parseFloat(hourlyRate);
    [
      { key: 'ot1x', mult: 1 },
      { key: 'ot15x', mult: 1.5 },
      { key: 'ot2x', mult: 2 },
      { key: 'ot25x', mult: 2.5 },
    ].forEach(({ key, mult }) => {
      const hrs = parseFloat(data[key]) || 0;
      total += hrs * rate * mult * 52;
    });
    return total;
  }, [data, hourlyRate]);

  return (
    <div className="card">
      <div className="card-title"><span className="emoji">⏱️</span> Overtime</div>

      <div className="form-row">
        <div className="field">
          <label>Standard Weekly Hours</label>
          <input
            type="number"
            min="1"
            max="80"
            value={data.weeklyHours}
            onChange={e => set('weeklyHours', e.target.value)}
          />
        </div>
        <div className="field">
          <label>Calculated Hourly Rate</label>
          <div className="input-prefix-wrap">
            <span className="prefix">£</span>
            <input type="text" readOnly value={hourlyRate} style={{ background: 'var(--surface2)', color: 'var(--text-muted)' }} />
          </div>
        </div>
      </div>

      <div className="form-row three">
        {[
          { key: 'ot1x', label: 'Overtime Hours (1×)' },
          { key: 'ot15x', label: 'Overtime Hours (1.5×)' },
          { key: 'ot2x', label: 'Overtime Hours (2×)' },
        ].map(({ key, label }) => (
          <div className="field" key={key}>
            <label>{label} <span style={{ fontWeight: 400, textTransform: 'none' }}>per week</span></label>
            <input
              type="number"
              min="0"
              placeholder="0"
              value={data[key]}
              onChange={e => set(key, e.target.value)}
            />
          </div>
        ))}
      </div>

      {overtimeAnnual > 0 && (
        <p className="hint" style={{ marginTop: 4 }}>
          Estimated overtime income: <strong>£{Math.round(overtimeAnnual).toLocaleString('en-GB')}</strong> / year
        </p>
      )}
    </div>
  );
}
