import { useEffect, useState } from 'react';
import { Routes, Route, useLocation } from 'react-router-dom';
import NavBar from './components/NavBar.jsx';
import Home from './pages/Home.jsx';
import Projects from './pages/Projects.jsx';
import Skills from './pages/Skills.jsx';
import Contact from './pages/Contact.jsx';
import NotFound from './pages/NotFound.jsx';

// Page transitions: when the app first opens, the page content rises and fades in ('intro').
// On navigation, the current content fades out (EXIT_MS), then the new page mounts and fades in.
// Keep EXIT_MS in sync with the page-exit animation in index.css.
const EXIT_MS = 1000;

const locationKey = (loc) => loc.pathname + loc.search + loc.hash;

function prefersReducedMotion() {
  return window.matchMedia?.('(prefers-reduced-motion: reduce)').matches ?? false;
}

function ScrollManager({ location }) {
  const { pathname, hash } = location;

  // When a new page is shown, scroll to the #section if there is one, otherwise to the top.
  useEffect(() => {
    if (hash) {
      const target = document.getElementById(hash.slice(1));
      if (target) {
        target.scrollIntoView({ behavior: 'smooth', block: 'start' });
        return;
      }
    }
    window.scrollTo(0, 0);
  }, [pathname, hash]);

  return null;
}

export default function App() {
  const location = useLocation();
  // The page currently on screen. It lags behind `location` while the old page animates out.
  const [displayLocation, setDisplayLocation] = useState(location);
  const [stage, setStage] = useState('intro'); // 'intro' (first open) | 'exit' | 'enter'

  useEffect(() => {
    // Same page (e.g. clicking the current page's button): nothing to animate. Only undo an exit
    // that was in progress, so the opening 'intro' animation isn't cancelled on first render.
    if (locationKey(location) === locationKey(displayLocation)) {
      setStage((current) => (current === 'exit' ? 'enter' : current));
      return undefined;
    }

    if (prefersReducedMotion()) {
      setDisplayLocation(location);
      setStage('enter');
      return undefined;
    }

    setStage('exit');
    const timer = setTimeout(() => {
      setDisplayLocation(location);
      setStage('enter');
    }, EXIT_MS);
    // A newer click cancels this swap, so rapid clicks land on the last page chosen.
    return () => clearTimeout(timer);
  }, [location, displayLocation]);

  const isHome = displayLocation.pathname === '/';

  return (
    <>
      <ScrollManager location={displayLocation} />
      {!isHome && <NavBar />}
      <main className={`page-${stage}`}>
        <Routes location={displayLocation}>
          <Route path="/" element={<Home />} />
          <Route path="/projects" element={<Projects />} />
          <Route path="/skills" element={<Skills />} />
          <Route path="/contact" element={<Contact />} />
          <Route path="*" element={<NotFound />} />
        </Routes>
      </main>
    </>
  );
}
