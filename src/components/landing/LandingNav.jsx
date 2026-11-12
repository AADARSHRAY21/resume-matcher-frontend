import { Link } from "react-router-dom";
import ThemeToggle from "../ThemeToggle";
import NavDropdown from "./NavDropdown";
import FeaturesPanel from "./FeaturesPanel";
import GuidesPanel from "./GuidesPanel";

export default function LandingNav() {
  return (
    <nav className="fixed top-0 left-0 right-0 z-30 flex items-center justify-between px-6 md:px-12 py-3 bg-panel/80 backdrop-blur border-b border-line">
      <Link to="/" className="font-display font-bold text-lg text-text">
        ResumeMatch
      </Link>

      <div className="hidden md:flex items-center gap-2">
        <a
          href="/#why"
          className="px-3 py-2 rounded-md text-sm font-medium text-text-muted hover:text-text transition-colors"
        >
          Why
        </a>
        <NavDropdown label="Features" width={880}>
  {(close) => <FeaturesPanel onNavigate={close} />}
</NavDropdown>
        <NavDropdown label="Resume Guides" width={820}>
  {(close) => <GuidesPanel onNavigate={close} />}
</NavDropdown>
        <Link
          to="/layoffs-tracker"
          className="px-3 py-2 rounded-md text-sm font-medium text-text-muted hover:text-text transition-colors"
        >
          Layoffs Tracker
        </Link>
      </div>

      <div className="flex items-center gap-3">
        <ThemeToggle className="w-9 h-9 flex items-center justify-center rounded-md border border-line bg-panel text-base cursor-pointer transition-colors hover:bg-panel-hover hover:border-signal" />
        <Link
          to="/login"
          className="px-3 py-2 rounded-md text-sm font-medium text-text-muted hover:text-text transition-colors"
        >
          Log in
        </Link>
        <Link
          to="/signup"
          className="px-4 py-2 rounded-md text-sm font-medium bg-signal hover:bg-signal-hover text-white transition-colors"
        >
          Get started
        </Link>
      </div>
    </nav>
  );
}