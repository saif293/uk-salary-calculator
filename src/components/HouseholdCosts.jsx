import { useState } from 'react';
import './HouseholdCosts.css';

const DEFAULTS = [
  { label: 'Rent / Mortgage', key: 'rent' },
  { label: 'Utilities', key: 'utilities' },
  { label: 'Childcare', key: 'childcare' },
  { label: 'Subscriptions', key: 'subscriptions' },
  { label: 'Other expenses', key: 'other' },
];

export default function HouseholdCosts({ data, onChange }) {
  const [extras, setExtras] = useState([]);

  const set = (k, v) => onChange({ ...data, [k]: v });

  const addRow = () => {
    const id = Date.now();
    setExtras(prev => [...prev, { id, label: '', amount: '' }]);
  };

  const updateExtra = (id, field, val) => {
    setExtras(prev => prev.map(e => e.id === id ? { ...e, [field]: val } : e));
    const updated = extras.map(e => e.id === id ? { ...e, [field]: val } : e);
    const total = updated.reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);
    onChange({ ...data, extraTotal: total });
  };

  const totalMonthly = DEFAULTS.reduce((s, f) => s + (parseFloat(data[f.key]) || 0), 0)
    + extras.reduce((s, e) => s + (parseFloat(e.amount) || 0), 0);

  return (
    <div className="card">
      <div className="card-title"><span className="emoji">🏠</span> Household Costs <span className="badge-monthly">(monthly)</span></div>

      {DEFAULTS.map(({ label, key }) => (
        <div className="form-row household-row" key={key}>
          <div className="field">
            <label>{label}</label>
          </div>
          <div className="field">
            <div className="input-prefix-wrap">
              <span className="prefix">£</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={data[key] || ''}
                onChange={e => set(key, e.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      {extras.map(e => (
        <div className="form-row household-row" key={e.id}>
          <div className="field">
            <input
              type="text"
              placeholder="Description"
              value={e.label}
              onChange={v => updateExtra(e.id, 'label', v.target.value)}
            />
          </div>
          <div className="field">
            <div className="input-prefix-wrap">
              <span className="prefix">£</span>
              <input
                type="number"
                min="0"
                placeholder="0"
                value={e.amount}
                onChange={v => updateExtra(e.id, 'amount', v.target.value)}
              />
            </div>
          </div>
        </div>
      ))}

      <div className="household-footer">
        <button className="add-row-btn" onClick={addRow}>+ Add another row</button>
        {totalMonthly > 0 && (
          <span className="household-total">
            Total: <strong>£{Math.round(totalMonthly).toLocaleString('en-GB')}</strong> / month
          </span>
        )}
      </div>
    </div>
  );
}
