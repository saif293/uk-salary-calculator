import './TopNav.css';

export default function TopNav({ topTools, darkMode, onToggleDark }) {
  return (
    <header className="top-nav">
      <div className="top-tools-bar">
        <span className="top-tools-label">TOP TOOLS</span>
        <div className="top-tools-scroll">
          {topTools.map((tool) => (
            <a key={tool.slug} href={`#${tool.slug}`} className="top-tool-pill">
              {tool.name}
            </a>
          ))}
          <a href="#all" className="top-tool-pill top-tool-pill--more">
            All Calculators →
          </a>
        </div>
      </div>

      <div className="search-bar">
        <div className="search-bar-inner">
          <span className="search-flag" aria-hidden="true">🇬🇧</span>
          <input
            type="search"
            placeholder="Search calculators & articles..."
            aria-label="Search calculators and articles"
            className="search-input"
          />
          <div className="search-actions">
            <button type="button" className="icon-btn" title="Refresh" aria-label="Refresh application">
              ↻
            </button>
            <button
              type="button"
              className="icon-btn"
              onClick={onToggleDark}
              title={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              aria-label={darkMode ? 'Switch to light mode' : 'Switch to dark mode'}
              role="switch"
              aria-checked={darkMode}
            >
              {darkMode ? '☀️' : '🌙'}
            </button>
            <button type="button" className="icon-btn" title="Settings" aria-label="Settings">
              ⚙️
            </button>
          </div>
        </div>
      </div>
    </header>
  );
}
