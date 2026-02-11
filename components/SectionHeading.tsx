'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';

type SectionHeadingProps = {
  kicker?: string;
  title: string;
  description?: string;
  align?: 'left' | 'center';
};

export function SectionHeading({
  kicker,
  title,
  description,
  align = 'left'
}: SectionHeadingProps): ReactNode {
  const alignment = align === 'center' ? 'items-center text-center' : 'items-start text-left';

  return (
    <motion.div
      initial={{ opacity: 0, y: 16 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-80px' }}
      transition={{ duration: 0.5 }}
      className={`flex flex-col gap-3 ${alignment}`}
    >
      {kicker && (
        <span className="pill">
          <span className="h-1.5 w-1.5 rounded-full bg-accent-glow" />
          {kicker}
        </span>
      )}
      <h2 className="text-2xl sm:text-3xl lg:text-4xl font-semibold text-slate-50">{title}</h2>
      {description && (
        <p className="max-w-2xl text-sm sm:text-base text-slate-400 leading-relaxed">
          {description}
        </p>
      )}
    </motion.div>
  );
}

