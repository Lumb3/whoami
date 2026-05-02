export const navLinks = [
  { id: 'whoami', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'academic', label: 'Academic' },
  { id: 'projects', label: 'Projects' },
  { id: 'experience', label: 'Experience' },
  { id: 'certificates', label: 'Certificates' },
  { id: 'contact', label: 'Contact' },
];

export const hero = {
  name: 'Erkhembileg Ariunbold',
  nickname: 'Lumb3',
  role: 'Software Engineering Student & Automation Developer',
  tagline:
    'Computer Engineering student building automation tools, full-stack apps, and practical systems.',
};

export const about = {
  intro:
    'Computer Engineering student focused on automation, software systems, teaching, and applied ML.',
  education: {
    institution: 'The University of Utah',
    logo:
      'https://upload.wikimedia.org/wikipedia/commons/3/30/University_of_Utah_horizontal_logo.svg',
    degree: 'B.S. Computer Engineering',
    graduation: 'Fall 2027',
    location: 'Salt Lake City, UT',
    focus: 'Software systems, automation, and applied computing',
    highlights: [
      {
        label: 'Academic Path',
        value: 'Computer Engineering',
        detail: 'Software, systems, and technical problem solving.',
      },
      {
        label: 'Teaching',
        value: 'CS 1410 TA',
        detail: 'C++, memory management, and OOP support.',
      },
      {
        label: 'Research',
        value: 'Applied ML',
        detail: "Parkinson's detection with voice biomarkers.",
      },
      {
        label: 'Leadership',
        value: 'Project Lead',
        detail: 'Lassonde software initiative project lead.',
      },
    ],
    coursework: [
      'Object-Oriented Programming',
      'C++ Debugging',
      'Software Development',
      'Machine Learning Research',
      'Full-Stack Tools',
    ],
  },
};

export const academicWork = [
  {
    title: "Extended Essay: ML-Based Parkinson's Detection",
    institution: 'IB Extended Essay',
    duration: 'September 2022 - May 2024',
    description:
      "ML research on Parkinson's detection using voice biomarkers.",
    highlights: [
      'Preprocessed voice datasets and engineered acoustic features for supervised classification.',
      'Evaluated model performance and compared accuracy across machine learning approaches.',
      'Published the research paper and related materials through GitHub.',
    ],
    link: 'https://github.com/Lumb3/Extended_Research_Paper',
    linkLabel: 'Research Paper',
  },
];

export const certificates = [
  {
    title: 'JavaScript (Intermediate)',
    issuer: 'HackerRank',
    year: '2026',
    image: '/hackerrank_cert.png',
    credentialUrl: 'https://www.hackerrank.com/certificates/27d269c31b45',
  },
  {
    title: 'React Basics',
    issuer: 'Meta',
    year: '2026',
    image: '/meta_cert.png',
    credentialUrl:
      'https://www.coursera.org/account/accomplishments/verify/RGLHCTGMB2J8',
  },
  {
    title: 'UAC CTF Volume 2',
    issuer: 'UAC Cybersecurity Club',
    year: '2025',
    image: '/UAC_CTF_cert.png',
    credentialUrl: 'https://zwique.gitbook.io/zwique_notes/achievements/accomplishments',
  }
];

export const projects = [
  {
    title: 'Bookmarker',
    description:
      'Chrome extension for saving and revisiting YouTube timestamps.',
    visual: {
      eyebrow: 'Chrome Extension',
      title: 'Timestamp Recall',
      metric: 'YouTube workflow',
      tone: 'blue',
    },
    techStack: ['HTML', 'CSS', 'JavaScript', 'Chrome Extension'],
    github: null,
    demo: null,
  },
  {
    title: 'IdeaVault',
    description:
      'Desktop note app with secure storage, speech-to-text, and PostgreSQL.',
    visual: {
      eyebrow: 'Desktop App',
      title: 'Secure Note System',
      metric: 'Speech to text',
      tone: 'cyan',
    },
    techStack: ['Electron.js', 'PostgreSQL', 'JavaScript', 'Vosk API'],
    github: null,
    demo: null,
  },
];

export const experience = [
  {
    role: 'Project Lead Developer',
    company: 'Lassonde Entrepreneur Institute - Lassonde Software Development Initiative',
    duration: 'January 2026 - March 2026',
    description:
      'Built a Chrome extension for tab/session management, persistence, and one-click restoration. Reduced memory usage by 30-50% and improved reliability with Vitest.',
  },
  {
    role: 'Teaching Assistant - CS 1410: Object-Oriented Programming',
    company: 'University of Utah Asia Campus',
    duration: 'August 2025 - December 2025',
    description:
      'Supported 18+ students in C++, pointers, memory management, and object-oriented design through office hours and code feedback.',
  },
];

export const contact = {
  email: 'a.erkhembileg9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lumb3/',
  github: 'https://github.com/Lumb3',
};
