export const navLinks = [
  { id: 'whoami', label: 'Home' },
  { id: 'about', label: 'About Me' },
  { id: 'toolbox', label: 'Toolbox' },
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
  profileImage: '/Profile.png',
  tagline:
    'Computer Engineering student building automation tools, full-stack apps, and applied AI systems with research discipline and product-minded execution.',
  bio:
    'I work at the intersection of software engineering, automation, teaching, and applied machine learning, with a bias toward practical tools that make technical workflows faster and clearer.',
  resumeUrl: '/resume.pdf',
  stats: [
    { value: '30-50%', label: 'memory reduction in extension workflow' },
    { value: 'C++', label: 'systems and low-level programming focus' },
    { value: '2027', label: 'B.S. Computer Engineering graduation' },
  ],
  stack: [
    'C++',
    'Python',
    'React',
    'JavaScript',
    'Node.js',
    'Automation',
    'AI/ML',
    'Git/GitHub',
    'SQL',
    'Research Tools',
  ],
};

export const about = {
  intro:
    'I build software with an academic engineer mindset: careful enough for research, practical enough for production, and clear enough to teach.',
  mission:
    'My goal is to turn complex technical workflows into reliable, understandable systems, especially where automation, AI, and developer tools can remove friction.',
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
        label: 'Systems',
        value: 'Low-Level C++',
        detail: 'Networking, memory, debugging, and backend fundamentals.',
      },
      {
        label: 'Research',
        value: 'Applied Analysis',
        detail: 'Independent research, data preprocessing, and evaluation.',
      },
      {
        label: 'Direction',
        value: 'Automation',
        detail: 'Workflow tools, browser extensions, and developer productivity.',
      },
    ],
    coursework: [
      'Object-Oriented Programming',
      'C++ Debugging',
      'Software Development',
      'Machine Learning Research',
      'Full-Stack Tools',
    ],
    milestones: [
      'Computer Engineering coursework in software and systems',
      'C++ object-oriented programming and debugging foundation',
      'Full-stack and automation project development',
      'University of Utah Asia Campus academic path',
    ],
  },
};

export const toolbox = [
  {
    category: 'Programming Languages',
    items: ['C++', 'Python', 'JavaScript', 'SQL'],
  },
  {
    category: 'Frameworks & Apps',
    items: ['React', 'Node.js', 'Electron.js', 'Chrome Extensions'],
  },
  {
    category: 'Automation Tools',
    items: ['Workflow Automation', 'Browser APIs', 'Session Persistence', 'Vitest'],
  },
  {
    category: 'AI & Data Science',
    items: ['Applied ML', 'Voice Biomarkers', 'Feature Engineering', 'Vosk API'],
  },
  {
    category: 'Developer Tools',
    items: ['Git', 'GitHub', 'PostgreSQL', 'Debugging'],
  },
];

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
    metrics: ['Voice biomarkers', 'Supervised classification', 'Research publication'],
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
    title: 'cppespresso',
    description:
      'Low-level HTTP server built in C++ with socket programming and manual request/response handling.',
    impact: 'Demonstrates systems programming fundamentals, TCP networking, routing logic, and backend protocol design.',
    visual: {
      eyebrow: 'Systems Project',
      title: 'C++ HTTP Server',
      metric: 'Socket programming',
      tone: 'violet',
    },
    techStack: ['C++', 'Sockets', 'HTTP', 'Networking'],
    github: null,
    demo: null,
  },
  {
    title: 'Keeply',
    description:
      'Lassonde Institute software project focused on organizing and restoring browser work sessions.',
    impact: 'Built as a practical productivity tool with persistence, session recovery, and a cleaner workflow for tab-heavy users.',
    visual: {
      eyebrow: 'Lassonde Project',
      title: 'Session Manager',
      metric: 'Productivity tooling',
      tone: 'green',
    },
    techStack: ['JavaScript', 'Chrome Extension', 'Vitest', 'Automation'],
    github: null,
    demo: null,
  },
  {
    title: 'Bookmarker',
    description:
      'Chrome extension for saving and revisiting YouTube timestamps.',
    impact: 'Improves content review workflows with fast timestamp recall and lightweight extension UX.',
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
    impact: 'Combines local desktop productivity with searchable notes and voice-driven capture.',
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
    tags: ['Leadership', 'Chrome Extension', 'Vitest', 'Automation'],
  },
  {
    role: 'Teaching Assistant - CS 1410: Object-Oriented Programming',
    company: 'University of Utah Asia Campus',
    duration: 'August 2025 - December 2025',
    description:
      'Supported 18+ students in C++, pointers, memory management, and object-oriented design through office hours and code feedback.',
    tags: ['C++', 'Teaching', 'OOP', 'Mentorship'],
  },
];

export const contact = {
  email: 'a.erkhembileg9@gmail.com',
  linkedin: 'https://www.linkedin.com/in/lumb3/',
  github: 'https://github.com/Lumb3',
  resumeUrl: '/resume.pdf',
};
