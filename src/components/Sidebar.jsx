import './Sidebar.css';

const ICONS = {
  wallet: '💷',
  landmark: '🏛️',
  receipt: '🧾',
  pension: '🏦',
  baby: '👶',
  shield: '🛡️',
  gift: '🎁',
  graduation: '🎓',
  file: '📄',
  percent: '％',
  building: '🏢',
  trending: '📈',
  briefcase: '💼',
  heart: '❤️',
  book: '📚',
  clock: '⏰',
  map: '🗺️',
  key: '🔑',
  home: '🏠',
};

export default function Sidebar({ categories }) {
  return (
    <aside className="sidebar">
      <div className="sidebar-header">
        <div className="sidebar-logo">
          <span className="logo-icon">🇬🇧</span>
          <div>
            <strong>UK Salary</strong>
            <span>Calculator</span>
          </div>
        </div>
      </div>

      <nav className="sidebar-nav" aria-label="Calculator categories">
        {categories.map((category) => (
          <div key={category.title} className="nav-section">
            <h3 className="nav-section-title">{category.title}</h3>
            <ul>
              {category.items.map((item) => (
                <li key={item.slug}>
                  <a
                    href={`#${item.slug}`}
                    className={`nav-link ${item.active ? 'active' : ''}`}
                  >
                    <span className="nav-icon">{ICONS[item.icon] ?? '📊'}</span>
                    {item.name}
                  </a>
                </li>
              ))}
            </ul>
          </div>
        ))}
      </nav>

      <div className="sidebar-newsletter">
        <h4>Tax Tips & Updates</h4>
        <p>Get the latest UK tax changes delivered to your inbox.</p>
        <form onSubmit={(e) => e.preventDefault()}>
          <input type="email" placeholder="Your email address" required aria-label="Your email address" />
          <button type="submit">Subscribe Now</button>
        </form>
      </div>
    </aside>
  );
}
