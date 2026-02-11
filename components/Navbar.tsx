'use client';

import Link from 'next/link';
import { motion } from 'framer-motion';

const navItems = [
  { href: '#about', label: 'About' },
  { href: '#skills', label: 'Skills' },
  { href: '#projects', label: 'Projects' },
  { href: '#experience', label: 'Experience' },
  { href: '#contact', label: 'Contact' }
];

export function Navbar() {
  return (
    <header className="sticky top-0 z-40 border-b border-slate-800/60 bg-slate-950/70 backdrop-blur-xl">
      <div className="section-container flex items-center justify-between py-3">
        <motion.div
          initial={{ opacity: 0, y: -8 }}
          animate={{ opacity: 1, y: 0 }}
          transition={{ duration: 0.35 }}
          className="flex items-center gap-2"
        >
          <div className="flex h-8 w-8 items-center justify-center rounded-xl bg-gradient-to-tr from-accent to-accent-glow text-xs font-semibold text-slate-950 shadow-accent-glow">
            FI
          </div>
          <div className="flex flex-col leading-tight">
            <span className="text-sm font-medium text-slate-100">Felix Ibeamaka</span>
            <span className="text-[11px] text-slate-400">AI Engineer</span>
          </div>
        </motion.div>
        <nav className="hidden md:flex items-center gap-6">
          {navItems.map((item) => (
            <Link key={item.href} href={item.href} className="nav-link">
              {item.label}
            </Link>
          ))}
        </nav>
        <Link
          href="#contact"
          className="hidden sm:inline-flex items-center rounded-full bg-accent px-4 py-1.5 text-xs font-medium text-slate-50 shadow-lg shadow-blue-500/30 hover:bg-blue-500 transition-colors"
        >
          Let&apos;s work together
        </Link>
      </div>
    </header>
  );
}

