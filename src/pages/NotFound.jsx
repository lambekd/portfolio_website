import { Link } from 'react-router-dom';

export default function NotFound() {
  return (
    <section className="hero page-fill d-flex flex-column">
      <div className="container flex-grow-1 py-5 text-center">
        <h1 className="fw-bold">Page not found</h1>
        <p className="opacity-75">The page you're looking for doesn't exist.</p>
        <Link to="/" className="btn btn-light">
          Back to home
        </Link>
      </div>
    </section>
  );
}
