export type SkillCategory = {
  label: string;
  items: string[];
};

export const skills: SkillCategory[] = [
  {
    label: 'Frontend',
    items: ['JavaScript(ES6+)', 'TypeScript', 'React', 'Next.js'],
  },
  {
    label: 'Backend',
    items: ['Node.js', 'Express', 'MongoDB (Mongoose)'],
  },
  {
    label: 'State Mangement',
    items: ['Redux Toolkit', 'React Query', 'Zustand'],
  },
  {
    label: 'Styling',
    items: ['SCSS', 'TailwindCSS', 'Styled-Components'],
  },
  {
    label: 'Testing',
    items: ['Jest', 'React Testing Library'],
  },
  {
    label: 'Deployment & DevOps',
    items: ['GitHub Actions', 'Vercel', 'Cloudtype'],
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
    items: ['Git', 'Notion', 'Discord', 'Slack', 'Adobe XD'],
  },
];
