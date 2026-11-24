// Renders a sample resume from data. Section types: "text" | "skills" | "entries"

export default function ExampleResume({ resume }) {
  return (
    <article className="rounded-xl bg-white p-6 text-neutral-900 shadow-lg sm:p-8">
      <header className="border-b border-neutral-300 pb-3 text-center">
        <h3 className="font-display text-2xl font-bold">{resume.name}</h3>
        <p className="mt-1 text-xs text-neutral-600">
          {resume.contact.join("  |  ")}
        </p>
      </header>

      {resume.sections.map((s) => (
        <section key={s.title} className="mt-4">
          <h4 className="border-b border-neutral-300 pb-1 text-xs font-bold uppercase tracking-wider text-neutral-700">
            {s.title}
          </h4>

          {s.type === "text" && (
            <p className="mt-2 text-sm leading-relaxed text-neutral-800">
              {s.text}
            </p>
          )}

          {s.type === "skills" && (
            <div className="mt-2 space-y-1 text-sm text-neutral-800">
              {s.groups.map((g) => (
                <p key={g.label}>
                  <span className="font-semibold">{g.label}:</span>{" "}
                  {g.items.join(", ")}
                </p>
              ))}
            </div>
          )}

          {s.type === "entries" &&
            s.items.map((it) => (
              <div key={it.heading + (it.sub || "")} className="mt-2">
                <div className="flex justify-between gap-3 text-sm">
                  <p>
                    <span className="font-semibold">{it.heading}</span>
                    {it.sub && (
                      <span className="text-neutral-600"> · {it.sub}</span>
                    )}
                  </p>
                  {it.period && (
                    <span className="shrink-0 text-xs text-neutral-600">
                      {it.period}
                    </span>
                  )}
                </div>
                {it.bullets && (
                  <ul className="mt-1 list-disc space-y-0.5 pl-5 text-sm text-neutral-800">
                    {it.bullets.map((b, i) => (
                      <li key={i}>{b}</li>
                    ))}
                  </ul>
                )}
              </div>
            ))}
        </section>
      ))}
    </article>
  );
}