import {
  BrainCircuit,
  Server,
  LayoutPanelLeft,
  Wrench,
  Code2,
} from 'lucide-react'

export const skillGroups = [
  {
    id: 'languages',
    title: 'Languages',
    icon: Code2,
    skills: ['Python', 'C#', 'Java', 'JavaScript', 'TypeScript', 'SQL', 'HTML', 'CSS'],
  },
  {
    id: 'ai-ml',
    title: 'AI / ML',
    icon: BrainCircuit,
    skills: [
      'Machine Learning',
      'Deep Learning',
      'Generative AI',
      'RAG Systems',
      'NLP',
      'Scikit-learn',
      'Pandas',
      'NumPy',
      'Hugging Face',
    ],
  },
  {
    id: 'backend',
    title: 'Backend',
    icon: Server,
    skills: ['FastAPI', 'ASP.NET Core', 'Node.js / Express', 'REST APIs', 'SQLAlchemy', 'PostgreSQL', 'MySQL', 'SQLite'],
  },
  {
    id: 'frontend',
    title: 'Frontend',
    icon: LayoutPanelLeft,
    skills: ['React', 'Next.js', 'Tailwind CSS', 'HTML', 'CSS', 'Framer Motion'],
  },
  {
    id: 'tools',
    title: 'Tools & Platforms',
    icon: Wrench,
    skills: ['Git / GitHub', 'Docker', 'VS Code', 'Visual Studio', 'Figma', 'Vercel', 'Render', 'Supabase'],
  },
]
