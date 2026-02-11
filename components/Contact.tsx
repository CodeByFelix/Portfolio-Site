'use client';

import Link from 'next/link';
import Image from 'next/image';
import { SectionHeading } from './SectionHeading';
import { motion } from 'framer-motion';

export function Contact() {
  return (
    <section id="contact" className="section-container py-16 lg:py-20">
      <div className="grid gap-10 lg:grid-cols-[minmax(0,1.4fr)_minmax(0,1fr)] lg:items-start">
        <div>
          <SectionHeading
            kicker="Contact"
            title="Let’s talk about your next AI system."
            description="Whether you’re validating an idea, extending an existing product, or wrestling with a fragile prototype, I can help you design and build AI systems that hold up in production."
          />
          <motion.div
            initial={{ opacity: 0, y: 16 }}
            whileInView={{ opacity: 1, y: 0 }}
            viewport={{ once: true, margin: '-80px' }}
            transition={{ duration: 0.4 }}
            className="mt-6 space-y-3 text-sm text-slate-300"
          >
            <p>
              Share a bit about your product, your users, and where AI fits into the picture. I’ll
              respond with concrete next steps. Let's chat.
            </p>
          </motion.div>
        </div>

        <motion.div
          initial={{ opacity: 0, y: 16 }}
          whileInView={{ opacity: 1, y: 0 }}
          viewport={{ once: true, margin: '-80px' }}
          transition={{ duration: 0.4, delay: 0.05 }}
          className="glass-panel rounded-2xl p-5 space-y-4"
        >
          <div className="space-y-3 text-sm">
            <h3 className="text-sm font-semibold text-slate-100">Direct contact</h3>
            <div className="flex flex-col gap-2 text-sm text-slate-300">
              <a
                href="tel:+2347037872133"
                aria-label="Call Felix Ibeamaka phone number"
                className="inline-flex items-center gap-2 text-accent hover:text-blue-400"
              >
                <Image
                  src="/images/icon-phone.svg"
                  alt="Phone icon"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="text-sm font-medium text-slate-100">
                  +234 703 787 2133
                </span>
              </a>
              <a
                href="mailto:felixibeamaka123@gmail.com"
                aria-label="Send an email to Felix Ibeamaka"
                className="inline-flex items-center gap-2 text-accent hover:text-blue-400"
              >
                <Image
                  src="/images/icon-email.svg"
                  alt="Email icon"
                  width={30}
                  height={30}
                  loading="lazy"
                />
                <span className="text-sm font-medium text-slate-100">
                  felixibeamaka123@gmail.com
                </span>
              </a>
            </div>
          </div>

          <div className="space-y-2">
            <h3 className="text-sm font-semibold text-slate-100">Profiles</h3>
            <div className="grid grid-cols-2 gap-2 text-xs sm:text-sm text-slate-300">
              <Link
                href="https://www.linkedin.com/in/felix-ibeamaka/"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <Image
                  src="/images/icon-linkedin.svg"
                  alt="LinkedIn icon"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                LinkedIn
              </Link>
              <Link
                href="https://x.com/Electronics____"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <Image
                  src="/images/icon-x.svg"
                  alt="X (Twitter) icon"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                X (Twitter)
              </Link>
              <Link
                href="https://github.com/CodeByFelix"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <Image
                  src="/images/icon-github.svg"
                  alt="GitHub icon"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                GitHub
              </Link>
              <Link
                href="https://www.youtube.com/@code-with-feli6"
                target="_blank"
                className="flex items-center gap-2 rounded-xl border border-slate-700 bg-slate-900/60 px-3 py-2 hover:border-slate-500 hover:bg-slate-800 transition-colors"
              >
                <Image
                  src="/images/icon-youtube.svg"
                  alt="YouTube icon"
                  width={18}
                  height={18}
                  loading="lazy"
                />
                YouTube
              </Link>
            </div>
          </div>
        </motion.div>
      </div>
    </section>
  );
}

