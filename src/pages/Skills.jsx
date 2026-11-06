import SectionButtons from '../components/SectionButtons.jsx';
import { skillGroups } from '../data/portfolio.js';

const buttons = [
  { to: '/', label: 'Home', style: 'btn-danger' },
  { to: '/projects', label: 'Projects', style: 'btn-outline-light' },
  { to: '/skills', label: 'Skills', style: 'btn-light', current: true },
  { to: '/contact', label: 'Contact', style: 'btn-outline-light' },
];

export default function Skills() {
  return (
    <section className="hero page-fill d-flex flex-column">
      <div className="container flex-grow-1 py-5">
        <h1 className="fw-bold">Skills &amp; Software</h1>
        <p className="opacity-75 mb-4">The tools and disciplines I work with.</p>

        <div className="row g-4">
          {skillGroups.map((group) => (
            <div className="col-12 col-md-6 col-lg-4" key={group.name}>
              <div className="card h-100 border-0 shadow-sm">
                <div className="card-body">
                  <h2 className="h5 card-title mb-3">{group.name}</h2>
                  {/* Scrolls when the list is taller than the card allows (scroll bar on the right).
                      tabIndex lets keyboard users focus it and scroll with the arrow keys. */}
                  <ul className="list-unstyled mb-0 skill-scroll" tabIndex="0" aria-label={`${group.name} skills`}>
                    {group.skills.map((skill, index) =>
                      typeof skill.level === 'number' ? (
                        <li className="mb-3" key={`${skill.name}-${index}`}>
                          <div className="d-flex justify-content-between small mb-1">
                            <span>{skill.name}</span>
                            <span className="text-body-secondary">{skill.level}%</span>
                          </div>
                          <div
                            className="progress"
                            role="progressbar"
                            aria-label={skill.name}
                            aria-valuenow={skill.level}
                            aria-valuemin="0"
                            aria-valuemax="100"
                            style={{ height: '0.5rem' }}
                          >
                            <div className="progress-bar" style={{ width: `${skill.level}%` }}></div>
                          </div>
                        </li>
                      ) : (
                        <li className="d-inline-block me-2 mb-2" key={`${skill.name}-${index}`}>
                          <span className="badge text-bg-light border fs-6 fw-normal">{skill.name}</span>
                        </li>
                      ),
                    )}
                  </ul>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>

      <SectionButtons buttons={buttons} />
    </section>
  );
}
