import { Link } from 'react-router-dom';

// The row of large section buttons shown along the bottom of the Home and Skills pages.
// buttons: [{ to, label, style, current }]. `style` is a Bootstrap button class such as 'btn-light',
// and `current: true` marks the button for the page being viewed.
export default function SectionButtons({ buttons }) {
  return (
    <nav className="container pb-4 pb-md-5" aria-label="Site sections">
      <div className="hero-nav d-flex flex-column flex-sm-row flex-wrap justify-content-center gap-3">
        {buttons.map((button) => (
          <Link
            key={button.to}
            to={button.to}
            className={`btn btn-lg ${button.style}`}
            aria-current={button.current ? 'page' : undefined}
          >
            {button.label}
          </Link>
        ))}
      </div>
    </nav>
  );
}
