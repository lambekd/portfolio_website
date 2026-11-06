import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import SectionButtons from '../components/SectionButtons.jsx';
import { categories, projects } from '../data/portfolio.js';

const ALL = 'All';

const buttons = [
  { to: '/projects', label: 'Projects', style: 'btn-light', current: true },
  { to: '/skills', label: 'Skills', style: 'btn-outline-light' },
  { to: '/contact', label: 'Contact', style: 'btn-outline-light' },
];

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <section className="hero page-fill d-flex flex-column">
      <div className="container flex-grow-1 py-5">
        <h1 className="fw-bold">Projects</h1>
        <p className="opacity-75 mb-4">
          Professional work in Design Technology and Information Systems.
        </p>

        <div className="btn-group flex-wrap mb-4" role="group" aria-label="Filter projects by category">
          {[ALL, ...categories].map((category) => (
            <button
              key={category}
              type="button"
              className={`btn ${filter === category ? 'btn-light' : 'btn-outline-light'}`}
              aria-pressed={filter === category}
              onClick={() => setFilter(category)}
            >
              {category}
            </button>
          ))}
        </div>

        {visible.length === 0 ? (
          <p className="opacity-75">No projects in this category yet.</p>
        ) : (
          <div className="row g-4">
            {visible.map((project) => (
              <div className="col-12 col-md-6 col-lg-4" key={project.id}>
                <ProjectCard project={project} onSelect={setSelected} />
              </div>
            ))}
          </div>
        )}

        {/* One shared Bootstrap modal; its content follows the selected project. */}
        <div className="modal fade" id="project-modal" tabIndex="-1" aria-labelledby="project-modal-title" aria-hidden="true">
          <div className="modal-dialog modal-dialog-centered modal-lg">
            <div className="modal-content">
              <div className="modal-header">
                <h2 className="modal-title h5" id="project-modal-title">
                  {selected?.title}
                </h2>
                <button type="button" className="btn-close" data-bs-dismiss="modal" aria-label="Close"></button>
              </div>
              {selected && (
                <div className="modal-body">
                  <p className="mb-2">
                    <span className="badge text-bg-primary me-2">{selected.category}</span>
                    {selected.year && <small className="text-body-secondary">{selected.year}</small>}
                  </p>
                  <p>{selected.details}</p>
                  <h3 className="h6">Tools and Technologies Used</h3>
                  <div className="d-flex flex-wrap gap-2">
                    {selected.tools.map((tool, index) => (
                      <span className="badge text-bg-light border" key={`${tool}-${index}`}>
                        {tool}
                      </span>
                    ))}
                  </div>
                </div>
              )}
              <div className="modal-footer">
                {selected?.link && (
                  <a className="btn btn-primary" href={selected.link} target="_blank" rel="noopener noreferrer">
                    View project
                  </a>
                )}
                <button type="button" className="btn btn-secondary" data-bs-dismiss="modal">
                  Close
                </button>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionButtons buttons={buttons} />
    </section>
  );
}
