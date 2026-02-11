'use client';

import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

const aboutText =
  'I help startups and businesses design, build, and scale AI systems that work in real-world production environments. My work spans multi-agent architectures, RAG pipelines, Q&A and customer support chatbots, machine learning models, and computer vision applications, taking ideas from concept to deployment. I have 3+ years of hands-on experience building and orchestrating multi-agent AI systems using LangGraph, LangChain, and CrewAI, building and integrating tools for autonomous planning and execution, and connecting agents to everyday platforms like WhatsApp and Google services. I also develop scalable, multi-tenant RAG pipelines for customer support Agents, train machine learning models using TensorFlow and scikit-learn, and deploy production-ready AI systems on cloud platforms such as Render, with a strong focus on reliability, scalability, and real business impact.';

export function About() {
  return (
    <section id="about" className="section-container py-16 lg:py-20">
      <SectionHeading
        kicker="About"
        title="Profesional Summary"
        description={aboutText}
      />
    </section>
  );
}

