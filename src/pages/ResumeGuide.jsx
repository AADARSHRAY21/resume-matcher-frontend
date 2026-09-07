import { Link } from "react-router-dom";
import { ArrowRight, FileSearch, Target, AlertTriangle, TrendingUp } from "lucide-react";
import LandingNav from "../components/landing/LandingNav.jsx";

const sections = [
  {
    icon: FileSearch,
    title: "How ATS filters actually work",
    body: "Applicant Tracking Systems parse your resume into structured fields — job titles, dates, skills — before a human ever opens it. If your formatting confuses the parser (tables, columns, text boxes, headers/footers), whole sections can get dropped or scrambled, even if the content is strong.",
  },
  {
    icon: Target,
    title: "Match the job description's exact keywords",
    body: "ATS filters and recruiters both scan for specific terms from the posting. \"Led cross-functional teams\" won't match a posting that says \"cross-functional leadership.\" Mirror the language of the JD wherever it's honestly true of your experience.",
  },
  {
    icon: AlertTriangle,
    title: "Formatting mistakes that get resumes auto-rejected",
    body: "Multi-column layouts, text inside images or graphics, unusual fonts, and headers/footers containing your contact info are the most common parser-breakers. Stick to a single column, standard fonts, and put contact details in the body text.",
  },
  {
    icon: TrendingUp,
    title: "Quantify everything you can",
    body: "\"Improved performance\" is forgettable. \"Cut page load time by 40%, reducing bounce rate 12%\" is specific and scannable in the 6-second glance most resumes get. Numbers anchor a recruiter's eye faster than adjectives do.",
  },
];

export default function ResumeGuide() {
  return (
    <div className="min-h-screen bg-void">
      <LandingNav />

      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-16 text-center font-body">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text leading-tight tracking-tight">
          The Resume Guide
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          What actually gets a resume through an ATS filter and in front of a
          human — based on how these systems really parse and rank
          applications.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-20 space-y-6 font-body">
        {sections.map(({ icon: Icon, title, body }) => (
          <div
            key={title}
            className="flex gap-4 p-6 rounded-lg bg-panel border border-line"
          >
            <div className="shrink-0 w-10 h-10 rounded-md bg-void border border-line flex items-center justify-center">
              <Icon size={20} className="text-signal" />
            </div>
            <div>
              <h2 className="font-display font-semibold text-lg text-text mb-2">
                {title}
              </h2>
              <p className="text-text-muted leading-relaxed">{body}</p>
            </div>
          </div>
        ))}
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24 text-center font-body">
        <div className="p-8 md:p-12 rounded-lg bg-panel border border-line">
          <h2 className="font-display font-bold text-2xl md:text-3xl text-text">
            Ready to check your own resume?
          </h2>
          <p className="mt-3 text-text-muted max-w-xl mx-auto">
            Paste a job description, upload your resume, and see your exact
            match score in under a minute.
          </p>
          <Link
            to="/signup"
            className="mt-6 inline-flex items-center gap-2 px-6 py-3 rounded-md bg-signal hover:bg-signal-hover text-white font-medium transition-colors"
          >
            Get started free
            <ArrowRight size={18} />
          </Link>
        </div>
      </section>
    </div>
  );
}