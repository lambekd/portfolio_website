import SectionButtons from '../components/SectionButtons.jsx';
import { profile } from '../data/portfolio.js';

const buttons = [
  { to: '/projects', label: 'Projects', style: 'btn-light' },
  { to: '/skills', label: 'Skills', style: 'btn-outline-light' },
  { to: '/contact', label: 'Contact', style: 'btn-outline-light' },
  { to: '/contact#contact-form', label: 'Contact Form', style: 'btn-outline-light' },
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
            Hello, world! I’m Kevin Lambert and I am a business technologist with a long history in the world of
            technology and business. My father worked in IT from 1982 to his retirement in 2009, which is where my
            exposure to technology first originated.
          </p>
          <p className="mb-4">
            Since 2015, I have worked mainly as a CAD Designer for a trailer manufacturing company in the Midwest. In
            that time, I create engineering prints for a wide variety of trailer products (box trailers, truck bodies)
            for a wide range of key players in the logistics industry (JB Hunt, FedEx, Costco, Fleetco). After earning
            a bachelor’s in Information Systems in 2024, I used my professional training to automate business
            processes, visualize data to provide compelling insights for key stakeholders and develop information
            systems for other company departments. Even though I continue to learn and develop new skills in the
            technology world, I am open to meeting new people to see how we can apply technology to further our goals
            and create value for stakeholders.
          </p>
          <p className="mb-0">
            If you wish to contact me, feel free to reach out to me at the provided email address below or contact me
            on LinkedIn.
          </p>
        </div>
      </div>

      <SectionButtons buttons={buttons} />
    </section>
  );
}
