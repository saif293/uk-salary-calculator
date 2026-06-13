import { useState } from 'react';
import './CookieBanner.css';

export default function CookieBanner() {
  const [visible, setVisible] = useState(() => !localStorage.getItem('cookie-consent'));

  if (!visible) return null;

  const accept = () => { localStorage.setItem('cookie-consent', 'accepted'); setVisible(false); };
  const reject = () => { localStorage.setItem('cookie-consent', 'rejected'); setVisible(false); };

  return (
    <div className="cookie-banner">
      <p>
        We use Google Analytics to understand site usage.{' '}
        <strong>We do not collect any personal or salary information.</strong>
      </p>
      <div className="cookie-actions">
        <button className="btn-accept" onClick={accept}>Accept</button>
        <button className="btn-reject" onClick={reject}>Reject</button>
      </div>
    </div>
  );
}
