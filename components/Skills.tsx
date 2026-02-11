'use client';

import { SectionHeading } from './SectionHeading';
import { TechBadge } from './TechBadge';
import { motion } from 'framer-motion';

const skillCategories: { label: string; skills: string[] }[] = [
  {
    label: 'Programming Languages',
    skills: ['Python', 'C++']
  },
  {
    label: 'AI & ML',
    skills: ['TensorFlow', 'Scikit-Learn']
  },
  {
    label: 'LLM, RAG & Multi-Agent Systems',
    skills: [
      'LangChain',
      'LangGraph',
      'CrewAI',
      'OpenAI',
      'Grok',
      'Ollama',
      'Azure AI Foundry',
      'Groq',
      'DeepSeek',
      'Gemma-3',
      'Hugging Face',
      'Transformers',
      'ChromaDB'
    ]
  },
  {
    label: 'Backend & APIs',
    skills: [
      'FastAPI',
      'MongoDB',
      'PostgreSQL',
      'SQLAlchemy',
      'SQLModel',
      'WhatsApp (Meta Cloud API)',
      'Google Services'
    ]
  },
  {
    label: 'Computer Vision & Data',
    skills: [
      'OpenCV',
      'YOLO',
      'NumPy',
      'Pandas',
      'MediaPipe',
      'NLTK',
      'Librosa',
      'Seaborn',
      'Matplotlib'
    ]
  },
  {
    label: 'Evaluation & Observability',
    skills: ['LangSmith', 'FutureAGI']
  },
  {
    label: 'Deployment & DevOps',
    skills: ['Docker', 'Docker Hub', 'GitHub', 'GitHub Actions', 'CMake', 'Render', 'Railway']
  },
  {
    label: 'Soft Skills',
    skills: [
      'Problem Solving',
      'Analytical & Critical Thinking',
      'Leadership & Team Coordination',
      'Time Management'
    ]
  }
];

export function Skills() {
  return (
    <section id="skills" className="section-container py-16 lg:py-20">
      <div className="space-y-10">
        <SectionHeading
          kicker="Skills"
          title="Skills"
          description="From multi-agent orchestration and RAG pipelines to model training, evaluation, and deployment, I bring a full-stack AI skill set you can plug directly into your product roadmap."
        />
        <div className="grid gap-5 md:grid-cols-2">
          {skillCategories.map((category) => (
            <motion.div
              key={category.label}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl p-5"
            >
              <h3 className="mb-3 text-sm font-semibold text-slate-100">{category.label}</h3>
              <div className="flex flex-wrap gap-2">
                {category.skills.map((skill) => (
                  <TechBadge key={skill} label={skill} variant="subtle" />
                ))}
              </div>
            </motion.div>
          ))}
        </div>
      </div>
    </section>
  );
}

