import './DiscoverCard.css';

const DISCOVER_ITEMS = [
  { title: 'Career Resources & Planning', icon: '📋' },
  { title: 'Compensation & Benefits', icon: '💰' },
  { title: 'Calculator', icon: '🧮' },
];

export default function DiscoverCard() {
  return (
    <div className="discover-card">
      <h2 className="discover-title">Discover more</h2>
      <ul className="discover-list">
        {DISCOVER_ITEMS.map((item) => (
          <li key={item.title}>
            <a href="#" className="discover-item">
              <span className="discover-icon">{item.icon}</span>
              <span>{item.title}</span>
              <span className="discover-chevron" aria-hidden="true">›</span>
            </a>
          </li>
        ))}
      </ul>
    </div>
  );
}
