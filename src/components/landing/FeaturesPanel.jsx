import { Link } from "react-router-dom";
import { featureMenu } from "./navMenus";

/* ---------- mini previews (top row) ---------- */

function KeywordPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-3 h-24 overflow-hidden">
      <div className="flex items-baseline gap-2">
        <span className="text-xl font-bold text-emerald-500">78</span>
        <span className="text-xs text-text-muted">match score</span>
      </div>
      <div className="mt-2 flex flex-wrap gap-1.5">
        {["React", "Node.js", "REST", "Docker"].map((k) => (
          <span
            key={k}
            className="px-2 py-0.5 rounded border border-line text-[11px] text-text-muted"
          >
            {k}
          </span>
        ))}
      </div>
    </div>
  );
}

function MatchPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-3 h-24 overflow-hidden space-y-2">
      <div className="h-2 rounded-full bg-panel-hover overflow-hidden">
        <div className="h-full w-3/4 rounded-full bg-signal" />
      </div>
      <p className="text-[11px] text-emerald-500">✓ Strong: React, Node.js, MongoDB</p>
      <p className="text-[11px] text-red-500">✗ Gap: Docker, CI/CD</p>
    </div>
  );
}

function ParserPreview() {
  return (
    <div className="rounded-lg border border-line bg-panel p-3 h-24 overflow-hidden space-y-1.5">
      {[
        ["Name", "Parsed"],
        ["Skills", "12 found"],
        ["Education", "Parsed"],
      ].map(([k, v]) => (
        <div key={k} className="flex items-center justify-between text-[11px]">
          <span className="text-text-muted">{k}</span>
          <span className="text-emerald-500">✓ {v}</span>
        </div>
      ))}
    </div>
  );
}

const previews = {
  "keyword-scanner": <KeywordPreview />,
  "ai-match": <MatchPreview />,
  "resume-parser": <ParserPreview />,
};

/* ---------- panel ---------- */

export default function FeaturesPanel({ onNavigate }) {
  const live = featureMenu.slice(0, 3);
  const soon = featureMenu.slice(3);

  return (
    <div className="space-y-3">
      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {live.map((item) => (
          <Link
            key={item.id}
            to={item.to}
            onClick={onNavigate}
            className="flex flex-col gap-1 rounded-xl border border-line bg-panel-hover/40 p-4 transition-colors hover:border-signal"
          >
            <span className="text-lg">{item.icon}</span>
            <span className="text-sm font-semibold text-text">{item.title}</span>
            <span className="text-xs text-text-muted mb-3">{item.desc}</span>
            <div className="mt-auto">{previews[item.id]}</div>
          </Link>
        ))}
      </div>

      <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
        {soon.map((item) => (
          <div
            key={item.id}
            className="flex items-start gap-3 rounded-xl border border-line p-4 opacity-70 cursor-default"
          >
            <span className="text-lg">{item.icon}</span>
            <div>
              <div className="flex items-center gap-2">
                <span className="text-sm font-semibold text-text">{item.title}</span>
                <span className="px-1.5 py-0.5 rounded bg-panel-hover text-[10px] font-medium uppercase tracking-wide text-text-muted">
                  Soon
                </span>
              </div>
              <p className="text-xs text-text-muted mt-0.5">{item.desc}</p>
            </div>
          </div>
        ))}
      </div>
    </div>
  );
}