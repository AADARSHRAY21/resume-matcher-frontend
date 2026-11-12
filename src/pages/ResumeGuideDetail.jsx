import { useEffect } from "react";
import { Link, useParams } from "react-router-dom";
import LandingNav from "../components/landing/LandingNav.jsx";
import { guides, getGuide } from "../data/guides.js";

function Block({ title, children }) {
  return (
    <section className="mt-10">
      <h2 className="font-display text-xl font-bold text-text mb-3">{title}</h2>
      {children}
    </section>
  );
}

function List({ items, mark, markClass }) {
  return (
    <ul className="space-y-2">
      {items.map((t) => (
        <li key={t} className="flex gap-2 text-text-muted">
          <span className={markClass}>{mark}</span>
          <span>{t}</span>
        </li>
      ))}
    </ul>
  );
}

export default function ResumeGuideDetail() {
  const { slug } = useParams();
  const guide = getGuide(slug);

  useEffect(() => {
    window.scrollTo(0, 0);
  }, [slug]);

  if (!guide) {
    return (
      <>
        <LandingNav />
        <main className="mx-auto max-w-3xl px-6 pt-32 pb-20 text-center">
          <h1 className="font-display text-2xl font-bold text-text">
            This guide is coming soon
          </h1>
          <Link
            to="/resume-guide"
            className="mt-4 inline-block text-signal hover:underline"
          >
            ← All guides
          </Link>
        </main>
      </>
    );
  }

  const others = guides.filter((g) => g.slug !== slug);

  return (
    <>
      <LandingNav />
      <main className="mx-auto max-w-3xl px-6 pt-28 pb-20 text-text">
        <Link
          to="/resume-guide"
          className="text-sm text-text-muted hover:text-text"
        >
          ← All guides
        </Link>

        <header className="mt-6">
          <div className="text-4xl">{guide.icon}</div>
          <h1 className="mt-3 font-display text-3xl md:text-4xl font-bold">
            {guide.title}
          </h1>
          <p className="mt-2 text-text-muted">{guide.tagline}</p>
        </header>

        <Block title="Who this is for">
          <p className="text-text-muted leading-relaxed">{guide.whoFor}</p>
        </Block>

        <Block title="Best format">
          <p className="text-text-muted leading-relaxed">{guide.format}</p>
        </Block>

        <Block title="Section order">
          <ol className="space-y-3">
            {guide.sections.map((s, i) => (
              <li key={s.name} className="flex gap-3">
                <span className="flex h-6 w-6 shrink-0 items-center justify-center rounded-full bg-panel-hover text-xs font-semibold">
                  {i + 1}
                </span>
                <p className="text-text-muted">
                  <span className="font-semibold text-text">{s.name}.</span>{" "}
                  {s.note}
                </p>
              </li>
            ))}
          </ol>
        </Block>

        <Block title="Must include">
          <List items={guide.mustInclude} mark="•" markClass="text-signal" />
        </Block>

        <Block title="Before and after">
          <div className="space-y-3">
            {guide.examples.map((ex) => (
              <div
                key={ex.before}
                className="rounded-xl border border-line bg-panel p-4 space-y-2 text-sm"
              >
                <p className="text-red-500 line-through">{ex.before}</p>
                <p className="text-emerald-500">{ex.after}</p>
              </div>
            ))}
          </div>
          <p className="mt-3 text-xs text-text-muted">
            Examples show structure only. Use your real numbers and never invent them.
          </p>
        </Block>

        <Block title="Common mistakes">
          <List items={guide.mistakes} mark="✗" markClass="text-red-500" />
        </Block>

        <Block title="ATS keywords">
          <p className="mb-3 text-sm text-text-muted">
            Copy exact wording from the job posting for skills you really have.
            Common ones for this profile:
          </p>
          <div className="flex flex-wrap gap-2">
            {guide.keywords.map((k) => (
              <span
                key={k}
                className="rounded-md border border-line px-2.5 py-1 text-sm text-text-muted"
              >
                {k}
              </span>
            ))}
          </div>
        </Block>

        <Block title="Final checklist">
          <List items={guide.checklist} mark="✓" markClass="text-emerald-500" />
        </Block>

        <div className="mt-12 rounded-2xl border border-line bg-panel p-6 text-center">
          <p className="font-display text-lg font-semibold">
            Done writing? Check how it scores.
          </p>
          <p className="mt-1 text-sm text-text-muted">
            Upload your resume and a job description to see your match score and
            missing keywords.
          </p>
          <Link
            to="/signup"
            className="mt-4 inline-block rounded-md bg-signal px-4 py-2 text-sm font-medium text-white transition-colors hover:bg-signal-hover"
          >
            Get started
          </Link>
        </div>

        <Block title="Other guides">
          <div className="flex flex-wrap gap-2">
            {others.map((g) => (
              <Link
                key={g.slug}
                to={`/resume-guide/${g.slug}`}
                className="rounded-md border border-line px-3 py-1.5 text-sm text-text-muted transition-colors hover:border-signal hover:text-text"
              >
                {g.icon} {g.title}
              </Link>
            ))}
          </div>
        </Block>
      </main>
    </>
  );
}   