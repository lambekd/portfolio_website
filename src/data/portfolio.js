// All site content lives in this file. Replace every TODO placeholder with your real details.
// Never put API keys, passwords or other secrets here: this file is bundled into the public site.

export const profile = {
  name: 'Your Name', // TODO
  title: 'Design Technology & Information Systems',
  tagline:
    'TODO: A one-sentence summary of what you do, e.g. building tools and systems that connect design with data.',
};

// Each project's `category` must match one of these exactly. The Projects page builds its filter buttons from this list.
export const categories = ['Design Technology', 'Information Systems'];

export const projects = [
  {
    id: 'sample-design-automation',
    title: 'TODO: Design Automation Tool',
    category: 'Design Technology',
    year: '2025',
    summary: 'TODO: One or two sentences on the problem and the outcome.',
    details:
      'TODO: Longer description shown in the project popup: your role, the approach and the measurable results.',
    tools: ['TODO', 'Tool A', 'Tool B'],
    link: '', // Optional URL, e.g. a case study or repository. Leave empty to hide the button.
  },
  {
    id: 'sample-parametric-model',
    title: 'TODO: Parametric Modeling Workflow',
    category: 'Design Technology',
    year: '2024',
    summary: 'TODO: One or two sentences on the problem and the outcome.',
    details: 'TODO: Longer description shown in the project popup.',
    tools: ['TODO', 'Tool C'],
    link: '',
  },
  {
    id: 'sample-data-dashboard',
    title: 'TODO: Project Data Dashboard',
    category: 'Information Systems',
    year: '2025',
    summary: 'TODO: One or two sentences on the problem and the outcome.',
    details: 'TODO: Longer description shown in the project popup.',
    tools: ['TODO', 'Tool D', 'Tool E'],
    link: '',
  },
  {
    id: 'sample-database-migration',
    title: 'TODO: Database Migration',
    category: 'Information Systems',
    year: '2023',
    summary: 'TODO: One or two sentences on the problem and the outcome.',
    details: 'TODO: Longer description shown in the project popup.',
    tools: ['TODO', 'Tool F'],
    link: '',
  },
];

// `level` is a 0-100 value shown as a progress bar. Remove it from a skill to show only a badge.
export const skillGroups = [
  {
    name: 'Design Technology',
    skills: [
      { name: 'TODO: Skill one', level: 90 },
      { name: 'TODO: Skill two', level: 80 },
      { name: 'TODO: Skill three', level: 70 },
    ],
  },
  {
    name: 'Information Systems',
    skills: [
      { name: 'TODO: Skill one', level: 85 },
      { name: 'TODO: Skill two', level: 75 },
      { name: 'TODO: Skill three', level: 65 },
    ],
  },
  {
    name: 'Tools & Platforms',
    skills: [{ name: 'TODO: Tool' }, { name: 'TODO: Tool' }, { name: 'TODO: Tool' }],
  },
];

// Leave a value empty to hide that row on the Contact page.
export const contact = {
  email: 'you@example.com', // TODO
  linkedin: '', // TODO, e.g. https://www.linkedin.com/in/your-profile
  github: '', // TODO, e.g. https://github.com/your-username
  location: 'TODO: City, Region',
};
