import { Link } from "react-router-dom";
import LandingNav from "../components/landing/LandingNav.jsx";
import { guideMenu } from "../components/landing/navMenus.js";
import { guides } from "../data/guides.js";

const all = [...guideMenu.byBackground, ...guideMenu.more];
const isReady = (id) => guides.some((g) => g.slug === id);

export default function ResumeGuide() {
  return (
    <>
      <LandingNav />
      <main className="mx-auto max-w-5xl px-6 pt-28 pb-20 text-text">
        <h1 className="font-display text-3xl md:text-4xl font-bold">
          Resume guides
        </h1>
        <p className="mt-2 max-w-2xl text-text-muted">
          Pick your background. Each guide covers the right format, section
          order, example bullets and ATS keywords for that profile.
        </p>

        <div className="mt-8 grid grid-cols-1 sm:grid-cols-2 lg:grid-cols-3 gap-4">
          {all.map((g) => {
            const body = (
              <>
                <span className="text-2xl">{g.icon}</span>
                <span className="mt-6 flex items-center gap-2 text-sm font-semibold text-text">
                  {g.title}
                  {!isReady(g.id) && (
                    <span className="rounded bg-panel-hover px-1.5 py-0.5 text-[10px] font-medium uppercase tracking-wide text-text-muted">
                      Soon
                    </span>
                  )}
                </span>
                {g.desc && (
                  <span className="text-xs text-text-muted">{g.desc}</span>
                )}
              </>
            );
            const base = "flex flex-col rounded-xl border border-line p-5";
            return isReady(g.id) ? (
              <Link
                key={g.id}
                to={`/resume-guide/${g.id}`}
                className={`${base} bg-panel-hover/40 transition-colors hover:border-signal`}
              >
                {body}
              </Link>
            ) : (
              <div key={g.id} className={`${base} opacity-70`}>
                {body}
              </div>
            );
          })}
        </div>
      </main>
    </>
  );
}