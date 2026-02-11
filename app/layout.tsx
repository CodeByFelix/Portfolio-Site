import type { Metadata } from 'next';
import { Inter } from 'next/font/google';
import './globals.css';

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap'
});

export const metadata: Metadata = {
  metadataBase: new URL('https://example.com'),
  title: 'Felix Ibeamaka | AI Engineer Portfolio',
  description:
    'Portfolio of Felix Ibeamaka, an AI Engineer helping startups design, build, and scale real-world AI systems across multi-agent architectures, RAG pipelines, and computer vision.',
  keywords: [
    'Felix Ibeamaka',
    'AI Engineer',
    'Machine Learning',
    'Multi-Agent Systems',
    'RAG',
    'LangGraph',
    'LangChain',
    'CrewAI',
    'Computer Vision',
    'FastAPI',
    'LLMs'
  ],
  openGraph: {
    title: 'Felix Ibeamaka | AI Engineer',
    description:
      'AI Engineer specializing in multi-agent systems, RAG, and production-grade AI for startups.',
    url: 'https://example.com',
    siteName: 'Felix Ibeamaka Portfolio',
    type: 'website',
    locale: 'en_US'
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Felix Ibeamaka | AI Engineer',
    description:
      'AI Engineer specializing in multi-agent systems, RAG, and production-grade AI for startups.'
  },
  alternates: {
    canonical: '/'
  }
};

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en">
      <body
        className={`${inter.variable} bg-background text-text-light antialiased min-h-screen`}
      >
        {children}
      </body>
    </html>
  );
}

