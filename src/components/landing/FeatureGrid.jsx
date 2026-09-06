import { Sparkles, Search, FileText, Download, Lock, Code2 } from 'lucide-react';

const features = [
  {
    icon: Sparkles,
    title: 'AI Match Score',
    description:
      'Paste a job description and get a semantic match score powered by Gemini, plus a plain-English breakdown of your strengths and gaps.',
    large: true,
  },
  {
    icon: Search,
    title: 'Keyword Scanner',
    description: "See every skill and keyword the posting mentions that your resume doesn't.",
  },
  {
    icon: FileText,
    title: 'PDF Resume Parsing',
    description: 'Upload your resume as a PDF — we extract and read it automatically, no copy-paste.',
  },
  {
    icon: Download,
    title: 'Tailored Resume Export',
    description: 'Download a rewritten version of your resume with missing keywords worked in naturally.',
    badge: 'Coming soon',
  },
  {
    icon: Lock,
    title: 'Secure by default',
    description: 'Your resume and match history sit behind JWT-secured accounts — nobody else can see them.',
  },
  {
    icon: Code2,
    title: 'Built for developers',
    description: "Recognizes frameworks, languages, and tools that a generic keyword scanner misses.",
  },
];

export default function FeatureGrid() {
  return (
    <section className="max-w-7xl mx-auto px-6 md:px-12 pb-20 md:pb-28 font-body">
      <div className="grid md:grid-cols-3 gap-4">
        {features.map(({ icon: Icon, title, description, large, badge }, i) => (
          <div
            key={title}
            className={`bg-panel border border-line rounded-lg p-6 ${
              large ? 'md:col-span-2 md:row-span-1' : ''
            }`}
          >
            <div className="flex items-start justify-between">
              <div className="w-10 h-10 rounded-md bg-match/10 flex items-center justify-center">
                <Icon size={20} className="text-match" />
              </div>
              {badge && (
                <span className="text-xs px-2 py-1 rounded-md bg-gap/10 text-gap border border-gap/20">
                  {badge}
                </span>
              )}
            </div>
            <h3 className="mt-4 font-display font-semibold text-lg text-text">
              {title}
            </h3>
            <p className="mt-2 text-sm text-text-muted leading-relaxed">
              {description}
            </p>
          </div>
        ))}
      </div>
    </section>
  );
}