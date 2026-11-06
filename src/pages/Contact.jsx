import SectionButtons from '../components/SectionButtons.jsx';
import { contact } from '../data/portfolio.js';

const buttons = [
  { to: '/', label: 'Home', style: 'btn-danger' },
  { to: '/projects', label: 'Projects', style: 'btn-outline-light' },
  { to: '/skills', label: 'Skills', style: 'btn-outline-light' },
  { to: '/contact', label: 'Contact', style: 'btn-light', current: true },
];

export default function Contact() {
  const details = [
    contact.linkedin && { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin },
    contact.github && { label: 'GitHub', value: contact.github, href: contact.github },
    contact.location && { label: 'Location', value: contact.location },
  ].filter(Boolean);

  return (
    <section className="hero page-fill d-flex flex-column">
      <div className="container flex-grow-1 py-5">
        <h1 className="fw-bold">Contact</h1>
        <p className="opacity-75 mb-4">Get in touch about projects, roles or collaborations.</p>

        <div className="row">
          <div className="col-12 col-md-8 col-lg-6">
            <div className="card border-0 shadow-sm">
              <div className="card-body">
                <h2 className="h5 card-title mb-3">Contact information</h2>
                <dl className="mb-0">
                  {details.map((item) => (
                    <div className="mb-3" key={item.label}>
                      <dt className="small text-body-secondary fw-normal">{item.label}</dt>
                      <dd className="mb-0 text-break">
                        {item.href ? (
                          <a href={item.href} target="_blank" rel="noopener noreferrer">
                            {item.value}
                          </a>
                        ) : (
                          item.value
                        )}
                      </dd>
                    </div>
                  ))}
                </dl>
              </div>
            </div>
          </div>
        </div>
      </div>

      <SectionButtons buttons={buttons} />
    </section>
  );
}
