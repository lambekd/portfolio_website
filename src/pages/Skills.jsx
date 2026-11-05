import { skillGroups } from '../data/portfolio.js';

export default function Skills() {
  return (
    <div className="container py-5">
      <h1 className="fw-bold">Skills</h1>
      <p className="text-body-secondary mb-4">The tools and disciplines I work with.</p>

      <div className="row g-4">
        {skillGroups.map((group) => (
          <div className="col-12 col-md-6 col-lg-4" key={group.name}>
            <div className="card h-100 border-0 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title mb-3">{group.name}</h2>
                <ul className="list-unstyled mb-0">
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
  );
}
