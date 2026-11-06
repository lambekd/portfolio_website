import { Link } from 'react-router-dom';
import { profile } from '../data/portfolio.js';

// Top bar on every page except Home. Page-to-page navigation uses the bottom SectionButtons.
export default function NavBar() {
  return (
    <nav className="navbar navbar-dark bg-dark sticky-top">
      <div className="container">
        <Link className="navbar-brand fw-semibold" to="/">
          {profile.name}
        </Link>
      </div>
    </nav>
  );
}
