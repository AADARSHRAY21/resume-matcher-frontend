import { ArrowRight, Sparkles, ScanSearch, Target, Bot, BookOpen, TrendingDown } from 'lucide-react';
import { Link } from 'react-router-dom';
import FadeInSection from "../motion/FadeInSection";

const tools = [
  { icon: ScanSearch, label: 'ATS Resume Checker', href: '#features' },
  { icon: Target, label: 'Job Scan & Match', href: '#features' },
  { icon: Bot, label: 'AI Resume Tools', href: '#features' },
  { icon: BookOpen, label: 'Resume Guide', to: '/resume-guide' },
  { icon: TrendingDown, label: 'Layoffs Tracker', to: '/layoffs-tracker' },
];

export default function Hero() {
  return (
    <FadeInSection>
    <section className="max-w-5xl mx-auto px-6 md:px-12 pt-24 md:pt-32 pb-16 md:pb-20 text-center font-body">
      <div className="inline-flex items-center gap-2 px-3 py-1 rounded-md bg-panel border border-line text-xs text-text-muted mb-6">
        <Sparkles size={14} className="text-signal" />
        Powered by Gemini
      </div>

      <h1 className="font-display font-bold text-4xl md:text-6xl text-text leading-tight tracking-tight">
        Know exactly why your resume
        <br className="hidden md:block" /> gets rejected.
      </h1>

      <p className="mt-6 text-lg text-text-muted max-w-2xl mx-auto">
        Paste a job description, upload your resume, and get a match score
        with a plain-English breakdown of what's missing — before an ATS
        filter ever sees it.
      </p>

      <div className="mt-8 flex flex-col sm:flex-row items-center justify-center gap-3">
        <Link
          to="/signup"
          className="inline-flex items-center gap-2 px-6 py-3 rounded-md bg-signal hover:bg-signal-hover text-white font-medium transition-colors"
        >
          Get started free
          <ArrowRight size={18} />
        </Link>
        <a
          href="#why"
          className="px-6 py-3 rounded-md border border-line text-text hover:bg-panel transition-colors font-medium"
        >
          See how it works
        </a>
      </div>

      <div className="mt-10 flex flex-wrap items-center justify-center gap-2">
        {tools.map(({ icon: Icon, label, href, to }) =>
          to ? (
            <Link
              key={label}
              to={to}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-panel text-xs font-medium text-text-muted hover:text-text hover:border-signal transition-colors"
            >
              <Icon size={14} />
              {label}
            </Link>
          ) : (
            <a
              key={label}
              href={href}
              className="inline-flex items-center gap-1.5 px-3 py-1.5 rounded-full border border-line bg-panel text-xs font-medium text-text-muted hover:text-text hover:border-signal transition-colors"
            >
              <Icon size={14} />
              {label}
            </a>
          )
        )}
      </div>
      
    
  
    </section>
    </FadeInSection>
  );
}