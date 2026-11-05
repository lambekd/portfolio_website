export default function ProjectCard({ project, onSelect }) {
  return (
    <div className="card h-100 border-0 shadow-sm card-hover">
      <div className="card-body d-flex flex-column">
        <div className="d-flex justify-content-between align-items-start mb-2 gap-2">
          <span className="badge text-bg-primary">{project.category}</span>
          <small className="text-body-secondary">{project.year}</small>
        </div>
        <h3 className="h5 card-title">{project.title}</h3>
        <p className="card-text text-body-secondary">{project.summary}</p>
        <div className="mt-auto">
          <button
            type="button"
            className="btn btn-outline-primary btn-sm"
            data-bs-toggle="modal"
            data-bs-target="#project-modal"
            onClick={() => onSelect(project)}
          >
            View details
          </button>
        </div>
      </div>
    </div>
  );
}
