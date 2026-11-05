import { useState } from 'react';
import ProjectCard from '../components/ProjectCard.jsx';
import { categories, projects } from '../data/portfolio.js';

const ALL = 'All';

export default function Projects() {
  const [filter, setFilter] = useState(ALL);
  const [selected, setSelected] = useState(null);

  const visible = filter === ALL ? projects : projects.filter((p) => p.category === filter);

  return (
    <div className="container py-5">
      <h1 className="fw-bold">Projects</h1>
      <p className="text-body-secondary mb-4">
        Professional work in Design Technology and Information Systems.
      </p>

      <div className="btn-group flex-wrap mb-4" role="group" aria-label="Filter projects by category">
        {[ALL, ...categories].map((category) => (
          <button
            key={category}
            type="button"
            className={`btn ${filter === category ? 'btn-primary' : 'btn-outline-primary'}`}
            aria-pressed={filter === category}
            onClick={() => setFilter(category)}
          >
            {category}
          </button>
        ))}
      </div>

      {visible.length === 0 ? (
        <p className="text-body-secondary">No projects in this category yet.</p>
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
                  <small className="text-body-secondary">{selected.year}</small>
                </p>
                <p>{selected.details}</p>
                <h3 className="h6">Tools &amp; technologies</h3>
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
  );
}
