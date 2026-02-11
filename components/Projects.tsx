'use client';

import Image from 'next/image';
import Link from 'next/link';
import { motion } from 'framer-motion';
import { SectionHeading } from './SectionHeading';
import { TechBadge } from './TechBadge';

const projects = [
  {
    id: 'rag-chatbot',
    name: 'Q&A RAG ChatBot with Data Injection',
    description:
      'A Retrieval-Augmented Generation (RAG) chatbot that combines LLM reasoning with vector search. It exposes REST APIs for both standard and streaming responses, ready for integration into apps and services.',
    problem:
      'Traditional chatbots rely on static, hard-coded knowledge. This system lets you inject new documents and query them via RAG, keeping answers accurate and context-aware.',
    architecture: [
      'ChromaDB as a persistent vector store for embedded documents.',
      'LangGraph orchestration over OpenAI models to reason over retrieved chunks.',
      'MongoDB-backed short-term conversation memory for session continuity.',
      'FastAPI API layer with endpoints for sync and streaming responses, plus secure PDF upload and embedding.'
    ],
    features: [
      'RAG pipeline built with LangGraph and ChromaDB.',
      'Short-term memory with MongoDB for conversational context.',
      'Data injection endpoints for uploading and embedding PDFs.',
      'Environment-based configuration for safe deployment.'
    ],
    stack: ['Python', 'LangGraph', 'ChromaDB', 'MongoDB', 'FastAPI', 'OpenAI'],
    github: 'https://github.com/CodeByFelix/Q-A-RAG-Chatbot-with-Endpoint',
    image: '/images/project-rag-chatbot.webp'
  },
  {
    id: 'auth-backend',
    name: 'Secure Authentication Backend System with FastAPI & Email OTP',
    description:
      'A modern, secure authentication backend built with FastAPI, SQLModel, and JWT. It supports user registration, login, and email verification via one-time passwords, following backend best practices.',
    problem:
      'Many applications struggle to implement secure, scalable authentication. This backend provides a reusable foundation with safe password storage, protected routes, and email-based verification.',
    architecture: [
      'FastAPI REST API layer exposing authentication and email verification endpoints.',
      'Authentication layer with bcrypt password hashing and JWT-based token auth.',
      'Email verification layer that generates, stores, and validates time-bound OTP codes.',
      'Async SQLModel / SQLAlchemy access to PostgreSQL for users and OTP records.',
      'Centralized configuration via environment variables for secrets and database settings.',
      'Utilities for structured logging, error handling, and dependency-based route protection.'
    ],
    features: [
      'User registration and login with securely hashed passwords.',
      'JWT authentication for protecting sensitive routes.',
      'Email OTP verification with expiration and invalidation logic.',
      'Async database access using SQLModel / SQLAlchemy for scalability.',
      'Pydantic-based request and response validation.',
      'Centralized logging and error handling patterns.',
      'REST API surface designed for easy web and mobile frontend integration.'
    ],
    stack: [
      'Python',
      'FastAPI',
      'SQLModel',
      'SQLAlchemy (Async)',
      'PostgreSQL',
      'Passlib',
      'bcrypt',
      'JWT',
      'Pydantic',
      'Uvicorn'
    ],
    github: 'https://github.com/CodeByFelix/FastAPI-Backend-with-SQLModel-and-Postgres',
    image: '/images/project-auth-backend.webp'
  },
  {
    id: 'whatsapp-meta',
    name: 'WhatsApp Integration via Meta Cloud API',
    description:
      'An event-driven WhatsApp chatbot integration built with FastAPI and the Meta Cloud API, connecting a custom chatbot to WhatsApp via webhooks and real-time message processing.',
    problem:
      'Many teams struggle to integrate automated chatbots into WhatsApp in a scalable, compliant way. This backend provides a working architecture that bridges WhatsApp and a custom chatbot via Meta’s official Cloud API.',
    architecture: [
      'Meta Cloud configuration with a WhatsApp Business App, messaging permissions, and webhook subscriptions.',
      'FastAPI webhook endpoint handling verification requests and incoming WhatsApp message events.',
      'JSON payload parsing to extract sender, message content, and metadata.',
      'Bot processing layer that forwards messages to chatbot logic and formats responses.',
      'Outbound message delivery via Meta Cloud API using authenticated HTTP POST requests.',
      'End-to-end event flow: User → WhatsApp → Meta Cloud → Webhook → Chatbot → Meta API → WhatsApp → User.'
    ],
    features: [
      'WhatsApp integration using the official Meta Cloud API.',
      'Webhook verification and subscription lifecycle handling.',
      'Real-time, event-driven message processing.',
      'Automated chatbot response generation and delivery.',
      'Secure API communication patterns.',
      'FastAPI-based backend that can scale with traffic.',
      'RESTful architecture suitable for production deployment.'
    ],
    stack: [
      'Python',
      'FastAPI',
      'Meta Cloud API',
      'WhatsApp Business API',
      'LangChain',
      'HTTP Requests',
      'Uvicorn'
    ],
    github: 'https://github.com/CodeByFelix/Meta-Webhoot',
    image: '/images/project-whatsapp-meta.webp',
    gallery: [
      '/images/whatapp1.jpeg',
      '/images/whatapp2.jpeg',
      '/images/whatapp3.jpeg'
    ]
  },
  {
    id: 'smartface',
    name: 'SmartFace – Real-Time Facial Emotion Recognition',
    description:
      'SmartFace is an open-source Python library for real-time facial emotion analysis, built around a CNN trained on AffectNet. It supports both static images and live webcam streams with face detection, bounding boxes, and emotion labels.',
    problem:
      'Most emotion recognition tooling is research-oriented and hard to run in production. SmartFace packages a fast, modular, and reusable library suitable for real-time applications.',
    architecture: [
      'OpenCV Haar Cascade for face detection in images and video frames.',
      'Preprocessing layer for grayscale normalization, resizing, and tensor formatting.',
      'Custom CNN trained on AffectNet for seven-class emotion classification.',
      'Inference pipelines for single-image and live webcam modes with overlay rendering.'
    ],
    features: [
      'Real-time facial emotion detection.',
      'Dual inference modes: single image & live video.',
      'Live webcam support with bounding box + label overlay.',
      'Modular, open-source Python library, easy to extend.'
    ],
    stack: ['Python', 'TensorFlow', 'OpenCV', 'NumPy', 'CNN'],
    github: 'https://github.com/CodeByFelix/SmartFace',
    image: '/images/project-smartface.webp',
    gallery: [
      '/images/smartface1.jpg',
      '/images/smartface2.jpg',
      '/images/smartface3.jpg',
      '/images/smartface4.jpg'
    ]
  }
];

export function Projects() {
  return (
    <section id="projects" className="section-container py-16 lg:py-20">
      <div className="space-y-10">
        <SectionHeading
          kicker="Projects"
          title="Selected work at the intersection of AI."
          description="A sample of the systems I’ve designed and shipped to production"
        />

        <div className="space-y-8">
          {projects.map((project, index) => (
            <motion.article
              key={project.id}
              initial={{ opacity: 0, y: 24 }}
              whileInView={{ opacity: 1, y: 0 }}
              viewport={{ once: true, margin: '-80px' }}
              transition={{ duration: 0.5, delay: index * 0.05 }}
              className="glass-panel relative overflow-hidden rounded-2xl p-5 md:p-6"
            >
              <div className="grid gap-6 md:grid-cols-[minmax(0,1.6fr)_minmax(0,1.1fr)] md:items-start">
                <div className="space-y-3">
                  <h3 className="text-lg font-semibold text-slate-50">{project.name}</h3>
                  <p className="text-sm text-slate-300">{project.description}</p>

                  <div className="mt-2 space-y-2 text-xs text-slate-300">
                    <div>
                      <p className="font-semibold text-slate-200">Problem</p>
                      <p>{project.problem}</p>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Technical Architecture</p>
                      <ul className="mt-1 list-disc space-y-1 pl-4">
                        {project.architecture.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                    <div>
                      <p className="font-semibold text-slate-200">Key Features</p>
                      <ul className="mt-1 list-disc space-y-1 pl-4">
                        {project.features.map((item) => (
                          <li key={item}>{item}</li>
                        ))}
                      </ul>
                    </div>
                  </div>

                  <div className="mt-3 flex flex-wrap items-center gap-2">
                    {project.stack.map((tech) => (
                      <TechBadge key={tech} label={tech} variant="subtle" />
                    ))}
                    <Link
                      href={project.github}
                      target="_blank"
                      className="ml-1 inline-flex text-xs font-medium text-accent hover:text-blue-400"
                    >
                      View on GitHub
                    </Link>
                  </div>
                </div>

                {Array.isArray((project as any).gallery) ? (
                  <div className="grid grid-cols-2 gap-3 rounded-xl border border-slate-800 bg-slate-900/60 p-3">
                    {(project as any).gallery.map((src: string) => (
                      <div key={src} className="overflow-hidden rounded-lg bg-slate-950/60">
                        <Image
                          src={src}
                          alt={`${project.name} screenshot`}
                          width={800}
                          height={600}
                          className="w-full h-auto object-contain"
                          sizes="(min-width: 1024px) 280px, (min-width: 768px) 45vw, 100vw"
                          loading="lazy"
                        />
                      </div>
                    ))}
                  </div>
                ) : (
                  <div className="rounded-xl border border-slate-800 bg-slate-900/60 overflow-hidden">
                    <Image
                      src={project.image}
                      alt={project.name}
                      width={960}
                      height={640}
                      className="w-full h-auto object-contain"
                      sizes="(min-width: 1024px) 360px, (min-width: 768px) 50vw, 100vw"
                      loading="lazy"
                    />
                  </div>
                )}
              </div>
            </motion.article>
          ))}
        </div>
      </div>
    </section>
  );
}

