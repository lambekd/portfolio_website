// All site content lives in this file. Replace every TODO placeholder with your real details.
// Never put API keys, passwords or other secrets here: this file is bundled into the public site.

export const profile = {
  name: 'Kevin Lambert',
  title: 'Experienced CAD Professional with Digital Transformation Experience',
  tagline:
    'An experienced hybrid professional working at the intersection of manufacturing, computer-aided design and digital transformation.',
};

// Each project's `category` must match one of these exactly. The Projects page builds its filter buttons from this list.
export const categories = ['Design Technology', 'Information Systems'];

// Fields: `summary` shows on the card, `details` in the popup.
// `year` and `link` are optional: leave them empty ('') to hide them.
export const projects = [
  {
    id: 'take-back-the-night',
    title: 'Take Back The Night',
    category: 'Design Technology',
    year: '2014',
    summary:
      'A letter sized poster that was created to showcase Ivy Tech’s event of the same name to raise awareness of domestic violence and sexual assault.',
    details:
      'A letter sized poster that was created to showcase Ivy Tech’s event of the same name to raise awareness of domestic violence and sexual assault. This poster won a stipend and was used throughout Ivy Tech’s campus in spring 2014 to promote the event.',
    tools: ['Adobe Illustrator', 'InDesign'],
    link: '', // Optional URL, e.g. a case study or repository. Leave empty to hide the button.
  },
  {
    id: 'tara-hamfest-postcard',
    title: 'TARA Hamfest Postcard',
    category: 'Design Technology',
    year: '2014',
    summary: 'A postcard advertising the 2014 Hamfest for a local ham radio club.',
    details:
      'A postcard advertising the 2014 Hamfest for a local ham radio club. The card used a QR code to show people information about the event such as its date, time and location.',
    tools: ['Adobe Photoshop', 'Adobe InDesign'],
    link: '',
  },
  {
    id: 'wabash-cad-schedule',
    title: 'Wabash CAD Schedule',
    category: 'Information Systems',
    year: '2024',
    summary:
      'A department-wide project to streamline the process of logging and tracking data on engineering sales orders.',
    details:
      'A department-wide project to streamline the process of logging and tracking data on engineering sales orders. This involved the use of Power Apps to allow engineers the option of choosing which product sheet to use and SharePoint to track that sales order data along with its editing.',
    tools: ['Microsoft Power Apps', 'SharePoint', 'Power Automate', 'Power BI'],
    link: '',
  },
  {
    id: 'lum-food-rescue',
    title: 'Lafayette Urban Ministry Food Rescue Weighing System',
    category: 'Information Systems',
    year: '2026',
    summary:
      'An AI-developed application to automate the process of weighing and tracking food donations for Lafayette Urban Ministry’s food programs.',
    details:
      'An AI-developed application to automate the process of weighing and tracking food donations for Lafayette Urban Ministry’s food programs. The project involved the use of a USB-enabled scale, two AI software development tools and a convertible tablet to track the data to take it from a paper-based process to a more digital one.',
    tools: ['Brecknell GP100', 'Devin & Cursor AI', 'LibreOffice Calc & Base'],
    link: '',
  },
];

// Skills page cards. `column` (1-3) picks the column on wide screens. Groups in the same column
// stack top-to-bottom in the order they appear here.
// Cards stretch to line up with the tallest column; `fitContent: true` makes a card only as tall
// as its skills instead (it still grows as skills are added).
// `level` is a 0-100 value shown as a progress bar. Remove it from a skill to show only a badge.
export const skillGroups = [
  {
    name: 'Design Technology',
    column: 1,
    skills: [
      { name: 'SolidWorks', level: 87 },
      { name: 'AutoCAD', level: 75 },
      { name: 'Inventor', level: 70 },
      { name: 'Revit', level: 60 },
      { name: 'Photoshop', level: 68 },
      { name: 'Illustrator', level: 65 },
      { name: 'InDesign', level: 76 },
      { name: 'Parametric Solid Modeling', level: 80 },
      { name: 'Engineering Drawings', level: 90 },
      { name: 'GD&T', level: 90 },
      { name: 'Graphic Design', level: 85 },
      { name: 'Architectural Layouts', level: 72 },
      { name: 'STEP files', level: 78 },
    ],
  },
  {
    name: 'Information Systems',
    column: 2,
    skills: [
      { name: 'Business Process Mapping', level: 80 },
      { name: 'Project Management', level: 85 },
      { name: 'Requirements Gathering', level: 87 },
      { name: 'Use Cases/User Stories', level: 85 },
      { name: 'Data Visualization', level: 85 },
      { name: 'Database Design', level: 85 },
      { name: 'Entity Relational Diagrams', level: 80 },
      { name: 'Power Apps', level: 80 },
      { name: 'Power BI', level: 90 },
      { name: 'Power Automate', level: 70 },
      { name: 'SharePoint', level: 85 },
      { name: 'Python', level: 75 },
      { name: 'SQL', level: 75 },
    ],
  },
  {
    name: 'Skills Under Development',
    column: 3,
    fitContent: true,
    skills: [
      { name: 'Devin AI', level: 56 },
      { name: 'Cursor AI', level: 45 },
      { name: 'Git', level: 40 },
      { name: 'DevOps', level: 45 },
      { name: 'GitHub', level: 48 },
    ],
  },
];

// Leave a value empty to hide that row on the Contact page.
export const contact = {
  linkedin: 'https://www.linkedin.com/in/kevinlambert1993/',
  github: 'https://github.com/lambekd',
  location: 'West Lafayette, IN',
};
