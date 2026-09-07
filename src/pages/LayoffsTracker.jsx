import { useState } from "react";
import { Search } from "lucide-react";
import LandingNav from "../components/landing/LandingNav.jsx";

// Placeholder data — swap for a real source (a static JSON file you
// maintain, or a public dataset/API) once you decide which.
const LAYOFFS = [
  { company: "Northwind Cloud", date: "2026-08-14", roles: 220, industry: "Cloud/Infra" },
  { company: "Ferrotype Media", date: "2026-08-02", roles: 85, industry: "Media" },
  { company: "Quill Analytics", date: "2026-07-21", roles: 140, industry: "Data/AI" },
  { company: "Bramblecart", date: "2026-07-10", roles: 310, industry: "E-commerce" },
  { company: "Sable Robotics", date: "2026-06-29", roles: 60, industry: "Hardware" },
  { company: "Loomstack", date: "2026-06-15", roles: 175, industry: "SaaS" },
  { company: "Verdant Foods Tech", date: "2026-05-30", roles: 45, industry: "FoodTech" },
  { company: "Pinehollow Games", date: "2026-05-18", roles: 90, industry: "Gaming" },
];

export default function LayoffsTracker() {
  const [query, setQuery] = useState("");

  const filtered = LAYOFFS.filter(
    (l) =>
      l.company.toLowerCase().includes(query.toLowerCase()) ||
      l.industry.toLowerCase().includes(query.toLowerCase())
  );

  return (
    <div className="min-h-screen bg-void">
      <LandingNav />

      <section className="max-w-4xl mx-auto px-6 md:px-12 pt-28 md:pt-36 pb-10 text-center font-body">
        <h1 className="font-display font-bold text-3xl md:text-5xl text-text leading-tight tracking-tight">
          Layoffs Tracker
        </h1>
        <p className="mt-4 text-lg text-text-muted max-w-2xl mx-auto">
          A running list of recent layoffs, so you know if the market shift
          affecting you is company-specific or industry-wide.
        </p>
        <p className="mt-2 text-xs text-text-muted">
          Sample data shown below — connect a real data source to make this
          live.
        </p>
      </section>

      <section className="max-w-4xl mx-auto px-6 md:px-12 pb-24 font-body">
        <div className="relative mb-6">
          <Search
            size={18}
            className="absolute left-3 top-1/2 -translate-y-1/2 text-text-muted"
          />
          <input
            type="text"
            value={query}
            onChange={(e) => setQuery(e.target.value)}
            placeholder="Search by company or industry..."
            className="w-full pl-10 pr-4 py-3 rounded-md bg-panel border border-line text-text placeholder:text-text-muted focus:outline-none focus:border-signal transition-colors"
          />
        </div>

        <div className="rounded-lg border border-line overflow-hidden">
          <div className="grid grid-cols-4 gap-4 px-5 py-3 bg-panel border-b border-line text-xs font-medium text-text-muted uppercase tracking-wide">
            <span>Company</span>
            <span>Date</span>
            <span>Roles Cut</span>
            <span>Industry</span>
          </div>
          {filtered.length === 0 ? (
            <div className="px-5 py-8 text-center text-text-muted">
              No matches for "{query}".
            </div>
          ) : (
            filtered.map((l) => (
              <div
                key={l.company + l.date}
                className="grid grid-cols-4 gap-4 px-5 py-4 border-b border-line last:border-b-0 hover:bg-panel-hover transition-colors text-sm"
              >
                <span className="text-text font-medium">{l.company}</span>
                <span className="text-text-muted">{l.date}</span>
                <span className="text-gap font-medium">{l.roles}</span>
                <span className="text-text-muted">{l.industry}</span>
              </div>
            ))
          )}
        </div>
      </section>
    </div>
  );
}