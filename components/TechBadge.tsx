'use client';

import { ReactNode } from 'react';
import { motion } from 'framer-motion';
import clsx from 'clsx';

type TechBadgeProps = {
  label: string;
  variant?: 'default' | 'subtle';
};

export function TechBadge({ label, variant = 'default' }: TechBadgeProps): ReactNode {
  return (
    <motion.span
      initial={{ opacity: 0, y: 8 }}
      whileInView={{ opacity: 1, y: 0 }}
      viewport={{ once: true, margin: '-60px' }}
      transition={{ duration: 0.25 }}
      className={clsx(
        'inline-flex items-center rounded-full border px-3 py-1 text-xs font-medium',
        variant === 'default'
          ? 'border-slate-700 bg-slate-900/70 text-slate-100'
          : 'border-slate-800 bg-slate-900/30 text-slate-300'
      )}
    >
      <span className="mr-1.5 h-1.5 w-1.5 rounded-full bg-accent-glow shadow-accent-glow" />
      {label}
    </motion.span>
  );
}

