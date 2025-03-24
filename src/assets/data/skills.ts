export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: [
      'JavaScript(ES6+)',
      'React',
      'Next.js',
      'TypeScript',
      'Redux Toolkit',
      'React Query',
      'Zustand',
    ],
  },
  {
    label: 'Styling',
    items: ['SCSS', 'TailwindCSS', 'Styled-Components'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB (Mongoose)'],
  },
  {
    label: 'CI/CD & Deployment',
    items: ['GitHub Actions', 'Vercel'],
  },
  {
    label: 'Authentication & Security',
    items: ['JWT', 'Firebase Authentication'],
  },
  {
    label: 'Performance & Optimization',
    items: ['React Profiler', 'Lighthouse'],
  },
  {
    label: 'Tools & Collaboration',
    items: ['Git', 'Firebase', 'Notion', 'Discord', 'Slack', 'Adobe XD'],
  },
];
