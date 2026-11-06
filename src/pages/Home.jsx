import SectionButtons from '../components/SectionButtons.jsx';
import { profile } from '../data/portfolio.js';

const buttons = [
  { to: '/projects', label: 'Projects', style: 'btn-light' },
  { to: '/skills', label: 'Skills', style: 'btn-outline-light' },
  { to: '/contact', label: 'Contact', style: 'btn-outline-light' },
];

export default function Home() {
  return (
    <section className="hero min-vh-100 d-flex flex-column">
      <div className="container flex-grow-1 d-flex flex-column justify-content-center py-5">
        <p className="text-uppercase small fw-semibold opacity-75 mb-2">Portfolio</p>
        <h1 className="display-4 fw-bold">{profile.name}</h1>
        <p className="lead fw-semibold">{profile.title}</p>
        <p className="hero-tagline opacity-75">{profile.tagline}</p>

        <div className="hero-bio mt-4">
          <p className="mb-4">
            Hello, world! I’m Kevin Lambert and I am a business technologist with an emerging track record in business
            and technology. My father worked in IT from 1982 to his retirement in 2009, which is where my interest in
            technology and its applications was fostered.
          </p>
          <p className="mb-4">
            Since 2015, I have worked as a CAD designer for a trailer manufacturing company in the Midwest. In that
            role, I use CAD software to create engineering prints for a diverse portfolio of trailer products that key
            logistics companies use to support their operations. After earning a bachelor’s degree in Information
            Systems in 2024, I used my professional training to optimize departmental business processes and provided
            data-driven insights for key stakeholders. Even though I continue to learn and develop new skills in the
            ever-evolving technology world, I enjoy meeting a diverse range of people to see how we can use technology
            to solve problems and create value.
          </p>
          <p className="mb-0">
            If you are interested in learning more or seeing how we can collaborate, use the Contact button to reach out
            to me on my LinkedIn profile.
          </p>
        </div>
      </div>

      <SectionButtons buttons={buttons} />
    </section>
  );
}
