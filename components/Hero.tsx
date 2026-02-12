'use client';

import Link from 'next/link';
import Image from 'next/image';
import { motion } from 'framer-motion';
import { TechBadge } from './TechBadge';

const heroSummary =
  'I help startups and businesses design, build, and scale AI systems that work in real-world production environments. My work spans multi-agent architectures, RAG pipelines, Q&A and customer support chatbots, machine learning models, and computer vision applications, taking ideas from concept to deployment.';

const heroPills = [
  'Multi-Agent Architectures',
  'RAG Pipelines',
  'Production Ready AI Systems',
  'Machine Learning Model',
  'Computer Vision'
];

export function Hero() {
  return (
    <section
      id="hero"
      className="section-container relative flex flex-col-reverse gap-12 py-16 md:flex-row md:items-center lg:py-24"
    >
      <div className="pointer-events-none absolute inset-0 -z-10 overflow-hidden">
        <div className="pointer-events-none absolute -left-32 top-10 h-72 w-72 rounded-full bg-accent-glow/20 blur-3xl" />
        <div className="pointer-events-none absolute right-0 top-40 h-72 w-72 rounded-full bg-accent/20 blur-3xl" />
      </div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6 }}
        className="flex-1 space-y-7"
      >
        <span className="pill">
          <span className="h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_10px_rgba(52,211,153,0.9)]" />
          Available for remote roles
        </span>

        <div className="space-y-4">
          <h1 className="text-3xl sm:text-4xl lg:text-5xl font-semibold tracking-tight text-slate-50">
            Felix Ibeamaka
          </h1>
          <p className="gradient-text text-lg sm:text-xl font-medium">AI Engineer</p>
          <p className="max-w-xl text-sm sm:text-base text-slate-300 leading-relaxed">
            {heroSummary}
          </p>
        </div>

        <div className="flex flex-wrap gap-3">
          {heroPills.map((pill) => (
            <TechBadge key={pill} label={pill} />
          ))}
        </div>

        <div className="flex flex-wrap items-center gap-3 pt-2">
          <Link
            href="#projects"
            className="inline-flex items-center justify-center rounded-full bg-accent px-5 py-2.5 text-sm font-medium text-slate-50 shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors"
          >
            View Projects
          </Link>
          <Link
            href="#contact"
            className="inline-flex items-center justify-center rounded-full px-4 py-2 text-xs font-medium text-slate-300 hover:text-white transition-colors"
          >
            Contact Me
          </Link>
        </div>
      </motion.div>

      <motion.div
        initial={{ opacity: 0, y: 24 }}
        animate={{ opacity: 1, y: 0 }}
        transition={{ duration: 0.6, delay: 0.1 }}
        className="flex-1"
      >
        <div className="glow-border glass-panel relative overflow-hidden rounded-3xl border border-slate-700/80 bg-gradient-to-b from-slate-900/80 to-slate-950/90 p-5">
          <div className="flex items-center justify-between gap-4">
            <div>
              <p className="text-xs font-medium text-slate-400">Specialization</p>
              <p className="text-sm font-semibold text-slate-100">
                I build AI Systems that Scales
              </p>
            </div>
            <div className="rounded-full bg-slate-900/80 px-3 py-1 text-[11px] text-slate-300">
              3+ years experience
            </div>
          </div>

          <div className="mt-5 flex gap-4">
            <div className="relative h-32 w-32 shrink-0 overflow-hidden rounded-2xl border border-slate-700/70 bg-slate-900/80">
              <Image
                src="/images/felix-profile1.png"
                alt="Portrait style illustration representing Felix Ibeamaka, AI Engineer"
                fill
                className="object-cover"
                priority
              />
            </div>
            <div className="space-y-3 text-xs text-slate-300">
              <p>
                I design, build, and ship AI systems from architecture to deployment, with a focus on
                robustness, latency, and real business impact.
              </p>
              <div className="grid grid-cols-2 gap-2">
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-2">
                  <p className="text-[11px] text-slate-400">Core Stack</p>
                  <p className="text-xs font-medium text-slate-100">
                    Python, LangGraph, LangChain, CrewAI, FastAPI, TensorFlow
                  </p>
                </div>
                <div className="rounded-xl border border-slate-800 bg-slate-900/70 p-2">
                  <p className="text-[11px] text-slate-400">Deployment</p>
                  <p className="text-xs font-medium text-slate-100">
                    Render, Docker, GitHub Actions
                  </p>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.div>
    </section>
  );
}

