export const PERSONAL = {
  name: 'Kumkum Kumari Patel',
  initials: 'KKP',
  title: 'Full Stack Engineer',
  subtitle: 'Backend-focused · Node.js · Next.js · PostgreSQL',
  email: 'kumkum9234@gmail.com',
  phone: '7992238747',
  github: 'https://github.com/kumkum9234',
  linkedin: 'https://www.linkedin.com/in/kumkum-kumari-patel-0471b5376/',
  portfolio: 'https://gauravmandal.dev',
  resume: 'https://drive.google.com/uc?export=download&id=1d9oGi5l0x80UezTDm4fvkLS8e50j3R7l',
  bio: `I'm a full-stack engineer with a strong backend focus — I love building things that actually work at scale. I craft production-grade REST APIs, realtime systems with Socket.io, and design PostgreSQL schemas that don't fall apart under load.

Currently pursuing my MCA while actively shipping projects. I believe the best way to learn is to build — so I do.`,
};

export const PROJECTS = [
  // {
  //   title: 'CollabNotes',
  //   description:
  //     'Realtime collaborative note-taking app with simultaneous multi-user editing, JWT auth with refresh token rotation, SHA-256 hashed token revocation, version history with restore, and note sharing with per-user read/write permissions.',
  //   tech: ['Node.js', 'Express', 'Socket.io', 'Next.js', 'PostgreSQL', 'Docker'],
  //   live: 'https://collab-notes.vercel.app',
  //   github: 'https://github.com/kumkum9234/collab-notes',
  //   highlight: true,
  //   gradient: 'from-violet-600 to-indigo-600',
  // },
  // {
  //   title: 'Job Application Tracker',
  //   description:
  //     'Full-stack job tracking system with Applied → Interview → Offer/Rejected pipeline, analytics dashboard, per-application notes, and server-side search with multi-filter API built using dynamic Prisma query building.',
  //   tech: ['Next.js', 'TypeScript', 'Prisma', 'PostgreSQL', 'Tailwind CSS'],
  //   live: 'https://job-tracker.vercel.app',
  //   github: 'https://github.com/kumkum9234/job-tracker',
  //   highlight: false,
  //   gradient: 'from-indigo-600 to-cyan-600',
  // },
  {
    title: 'Developer Portfolio',
    description:
      'This portfolio — built with Next.js 14 App Router, Tailwind CSS, and Framer Motion. Fully responsive, SEO optimised with Open Graph tags and Next.js metadata API.',
    tech: ['Next.js', 'Tailwind CSS', 'Framer Motion', 'Vercel'],
    live: 'https://portfolio-henna-eight-81.vercel.app/',
    github: 'https://github.com/kumkum9234/portfolio',
    highlight: false,
    gradient: 'from-pink-600 to-violet-600',
  },
];

export const SKILLS = [
  {
    category: 'Languages',
    icon: '⌨️',
    items: ['JavaScript (ES2022+)', 'TypeScript', 'SQL', 'Bash'],
  },
  {
    category: 'Backend',
    icon: '⚙️',
    items: ['Node.js', 'Express.js', 'Socket.io', 'REST API', 'JWT Auth', 'Joi Validation'],
  },
  {
    category: 'Frontend',
    icon: '🎨',
    items: ['Next.js 14', 'React 18', 'Tailwind CSS', 'Zustand', 'TanStack Query'],
  },
  {
    category: 'Databases',
    icon: '🗄️',
    items: ['PostgreSQL', 'Prisma ORM', 'Raw SQL', 'Indexing', 'Transactions'],
  },
  {
    category: 'DevOps & Tools',
    icon: '🚀',
    items: ['Docker', 'Docker Compose', 'Git', 'Vercel', 'Railway', 'GitHub Actions'],
  },
  {
    category: 'Architecture',
    icon: '🏗️',
    items: ['MVC Pattern', 'Rate Limiting', 'Token Rotation', 'Realtime Systems', 'CORS & Helmet'],
  },
];

export const EDUCATION = [
  {
    degree: 'Master of Computer Applications (MCA)',
    year: '2025 – Present',
    institution: 'Pursuing',
  },
];

export const ACHIEVEMENTS = [
  {
    icon: '🎓',
    title: 'Sharpener Tech',
    description: 'Completed full-stack development curriculum covering JavaScript, Node.js, Express, and PostgreSQL',
  },
  {
    icon: '💡',
    title: '200+ LeetCode Problems',
    description: 'Solved 200+ DSA problems covering arrays, hash maps, binary search, and sliding window',
  },
  {
    icon: '🚀',
    title: '3 Production Projects',
    description: 'Built and deployed 3 full-stack projects end-to-end independently',
  },
];
