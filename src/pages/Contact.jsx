import { useState } from 'react';
import { contact } from '../data/portfolio.js';

// The Formspree form ID comes from .env (VITE_FORMSPREE_ID); see .env.example and README.md.
const formId = import.meta.env.VITE_FORMSPREE_ID;
const isConfigured = Boolean(formId) && formId !== 'your_form_id_here';
const endpoint = isConfigured ? `https://formspree.io/f/${formId}` : '';

const initialValues = { name: '', email: '', message: '' };

export default function Contact() {
  const [values, setValues] = useState(initialValues);
  const [validated, setValidated] = useState(false);
  const [status, setStatus] = useState('idle'); // idle | sending | success | error

  function handleChange(event) {
    const { name, value } = event.target;
    setValues((current) => ({ ...current, [name]: value }));
  }

  async function handleSubmit(event) {
    event.preventDefault();
    const form = event.currentTarget;
    setValidated(true);
    if (!form.checkValidity() || !isConfigured) return;

    setStatus('sending');
    try {
      const response = await fetch(endpoint, {
        method: 'POST',
        headers: { Accept: 'application/json' },
        body: new FormData(form),
      });
      if (!response.ok) throw new Error(`Request failed with status ${response.status}`);
      setStatus('success');
      setValues(initialValues);
      setValidated(false);
    } catch {
      setStatus('error');
    }
  }

  const details = [
    contact.email && { label: 'Email', value: contact.email, href: `mailto:${contact.email}` },
    contact.linkedin && { label: 'LinkedIn', value: contact.linkedin, href: contact.linkedin },
    contact.github && { label: 'GitHub', value: contact.github, href: contact.github },
    contact.location && { label: 'Location', value: contact.location },
  ].filter(Boolean);

  return (
    <div className="container py-5">
      <h1 className="fw-bold">Contact</h1>
      <p className="text-body-secondary mb-4">Get in touch about projects, roles or collaborations.</p>

      <div className="row g-4">
        <div className="col-12 col-lg-5">
          <div className="card h-100 border-0 shadow-sm">
            <div className="card-body">
              <h2 className="h5 card-title mb-3">Contact information</h2>
              <dl className="mb-0">
                {details.map((item) => (
                  <div className="mb-3" key={item.label}>
                    <dt className="small text-body-secondary fw-normal">{item.label}</dt>
                    <dd className="mb-0 text-break">
                      {item.href ? (
                        <a
                          href={item.href}
                          {...(item.href.startsWith('http') && { target: '_blank', rel: 'noopener noreferrer' })}
                        >
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

        <div className="col-12 col-lg-7">
          <section className="card border-0 shadow-sm" id="contact-form" aria-labelledby="contact-form-title">
            <div className="card-body">
              <h2 className="h5 card-title mb-3" id="contact-form-title">
                Send a message
              </h2>

              {!isConfigured && (
                <div className="alert alert-warning" role="alert">
                  The contact form is not set up yet. Add your Formspree form ID to <code>.env</code> (see README).
                  Until then, please use the email address listed.
                </div>
              )}
              {status === 'success' && (
                <div className="alert alert-success" role="status">
                  Thanks! Your message has been sent.
                </div>
              )}
              {status === 'error' && (
                <div className="alert alert-danger" role="alert">
                  Sorry, the message could not be sent. Please try again or use the email address listed.
                </div>
              )}

              <form noValidate className={validated ? 'was-validated' : ''} onSubmit={handleSubmit}>
                <div className="mb-3">
                  <label htmlFor="contact-name" className="form-label">
                    Name
                  </label>
                  <input
                    type="text"
                    className="form-control"
                    id="contact-name"
                    name="name"
                    autoComplete="name"
                    required
                    value={values.name}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">Please enter your name.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-email" className="form-label">
                    Email
                  </label>
                  <input
                    type="email"
                    className="form-control"
                    id="contact-email"
                    name="email"
                    autoComplete="email"
                    required
                    value={values.email}
                    onChange={handleChange}
                  />
                  <div className="invalid-feedback">Please enter a valid email address.</div>
                </div>
                <div className="mb-3">
                  <label htmlFor="contact-message" className="form-label">
                    Message
                  </label>
                  <textarea
                    className="form-control"
                    id="contact-message"
                    name="message"
                    rows="5"
                    required
                    value={values.message}
                    onChange={handleChange}
                  ></textarea>
                  <div className="invalid-feedback">Please enter a message.</div>
                </div>
                {/* Honeypot field: hidden from people, filled in by spam bots; Formspree rejects those submissions. */}
                <input type="text" name="_gotcha" tabIndex="-1" autoComplete="off" className="d-none" aria-hidden="true" />
                <button type="submit" className="btn btn-primary" disabled={!isConfigured || status === 'sending'}>
                  {status === 'sending' ? 'Sending…' : 'Send message'}
                </button>
              </form>
            </div>
          </section>
        </div>
      </div>
    </div>
  );
}
