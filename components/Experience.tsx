'use client';

import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

type ExperienceItem = {
  role: string;
  company: string;
  location: string;
  period: string;
  mode: string;
  bullets: string[];
};

const experiences: ExperienceItem[] = [
  {
    role: 'AI Engineer',
    company: 'Osmaxin Developers',
    location: 'Awka, Anambra State',
    period: 'July 2025 – Present',
    mode: 'Remote',
    bullets: [
      'Led the end-to-end design and development of an AI-powered football match prediction system for score prediction.',
      'Designed and orchestrated a multi-agent research and prediction system using LangGraph and Grok-4, including automated fixture ingestion, inference, and result persistence.',
      'Built high-performance asynchronous data and inference pipelines in Python with robust schemas for diverse match and prediction data.',
      'Developed FastAPI-based backend services, integrating PostgreSQL via asyncpg for non-blocking, low-latency data access.',
      'Containerized and deployed the system with Docker, ensuring scalable and reliable production rollout.',
      'Evaluated agent correctness and hallucination using LangSmith, tuning prompts and flows.',
      'Reduced inference costs by over 50% through token and latency optimizations.'
    ]
  },
  {
    role: 'AI Engineer',
    company: 'PM Accelerator',
    location: 'Boston, USA',
    period: 'June 2025 – September 2025',
    mode: 'Remote',
    bullets: [
      'Led backend development for KyrahAI, an emotion-aware chat system, including architecture, code reviews, and task coordination.',
      'Implemented a graph-based agent architecture with LangGraph and MongoDB for short- and long-term conversational memory.',
      'Developed secure, async FastAPI services for authentication, REST APIs, and multi-session conversation handling.',
      'Evaluated response quality with LangSmith to track correctness, conciseness, and hallucinations.',
      'Managed the codebase with scalable design and version-control best practices, deploying infrastructure on Render.',
      'Built a Discord-based Q&A RAG chatbot to support interns directly inside the server.'
    ]
  },
  {
    role: 'AI/ML Engineer',
    company: 'Fecodon Tech',
    location: '',
    period: '2022 – June 2025',
    mode: 'Remote',
    bullets: [
      'Designed, trained, and optimized emotion recognition models across text (FNN), audio (LSTM), and vision (CNN).',
      'Built FastAPI inference services exposing RESTful endpoints for real-time model inference following production-grade patterns.',
      'Developed and deployed a RAG pipeline for Q&A customer support chatbots, including data ingestion endpoints for dynamic updates.',
      'Deployed AI and backend services on Render with a focus on reliability, scalability, and low latency.'
    ]
  }
];

export function Experience() {
  return (
    <section id="experience" className="section-container py-16 lg:py-20">
      <div className="space-y-10">
        <SectionHeading
          kicker="Experience"
          title="Where I’ve applied my skills."
          description="I’ve worked with remote teams across startups and AI products, taking responsibility for both the architecture and the day-to-day engineering needed to ship."
        />

        <div className="space-y-5">
          {experiences.map((exp) => (
            <motion.article
              key={`${exp.role}-${exp.company}-${exp.period}`}
              initial={{ opacity: 0, y: 20 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.4 }}
              className="glass-panel rounded-2xl p-5 md:p-6"
            >
              <div className="flex flex-col gap-2 md:flex-row md:items-baseline md:justify-between">
                <div>
                  <h3 className="text-sm sm:text-base font-semibold text-slate-50">
                    {exp.role}{' '}
                    <span className="text-slate-400">
                      · {exp.company}
                      {exp.location ? `, ${exp.location}` : ''}
                    </span>
                  </h3>
                  <p className="text-xs text-slate-400">
                    {exp.period} · {exp.mode}
                  </p>
                </div>
              </div>
              <ul className="mt-3 list-disc space-y-1.5 pl-4 text-xs sm:text-sm text-slate-300">
                {exp.bullets.map((item) => (
                  <li key={item}>{item}</li>
                ))}
              </ul>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

