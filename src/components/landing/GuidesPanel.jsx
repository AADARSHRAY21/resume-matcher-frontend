import { Link } from "react-router-dom";
import { guideMenu } from "./navMenus";

const label =
  "mb-3 text-[11px] font-semibold uppercase tracking-wider text-text-muted";

export default function GuidesPanel({ onNavigate }) {
  return (
    <div className="grid grid-cols-1 md:grid-cols-[1fr_220px] gap-6 p-2">
      {/* By background */}
      <div>
        <p className={label}>By background</p>
        <div className="grid grid-cols-1 md:grid-cols-3 gap-3">
          {guideMenu.byBackground.map((g) => (
            <Link
              key={g.id}
              to={`/resume-guide#${g.id}`}
              onClick={onNavigate}
              className="flex flex-col min-h-[150px] rounded-xl border border-line bg-panel-hover/40 p-4 transition-colors hover:border-signal"
            >
              <span className="text-2xl">{g.icon}</span>
              <span className="mt-auto text-sm font-semibold text-text">
                {g.title}
              </span>
              <span className="text-xs text-text-muted">{g.desc}</span>
            </Link>
          ))}
        </div>
      </div>

      {/* More guides */}
      <div className="md:border-l border-line md:pl-6">
        <p className={label}>More guides</p>
        <ul className="space-y-1">
          {guideMenu.more.map((g) => (
            <li key={g.id}>
              <Link
                to={`/resume-guide#${g.id}`}
                onClick={onNavigate}
                className="flex items-center gap-3 rounded-md px-2 py-2 text-sm text-text-muted transition-colors hover:bg-panel-hover hover:text-text"
              >
                <span>{g.icon}</span>
                {g.title}
              </Link>
            </li>
          ))}
        </ul>
        <Link
          to="/resume-guide"
          onClick={onNavigate}
          className="mt-3 inline-block px-2 text-sm font-medium text-signal hover:underline"
        >
          View all guides →
        </Link>
      </div>
    </div>
  );
}