import DiscoverCard from './DiscoverCard';
import './Hero.css';

export default function Hero({ popularLookups, onLookup }) {
  return (
    <section className="hero">
      <h1 className="hero-title">
        UK Salary Calculator <em>2026/27</em>
      </h1>

      <DiscoverCard />

      <p className="hero-description">
        Calculate your exact take-home pay after Income Tax, National Insurance, pension contributions,
        and student loan repayments. Updated for the 2026/27 tax year with the latest HMRC rates.
      </p>

      {popularLookups.length > 0 && (
        <div className="popular-lookups">
          <span className="popular-label">Popular lookups:</span>
          {popularLookups.map((item) => (
            <button
              key={item.label}
              type="button"
              className="lookup-link"
              onClick={() => onLookup(item.value)}
            >
              {item.label}
            </button>
          ))}
        </div>
      )}
    </section>
  );
}
