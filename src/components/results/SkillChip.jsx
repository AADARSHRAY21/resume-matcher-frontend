export default function SkillChip({ skill, type }) {
  const styles = type === "match" ? "border-match text-match" : "border-gap text-gap";
  const symbol = type === "match" ? "+" : "\u2212";

  return (
    <span className={`inline-flex items-center gap-1.5 px-2.5 py-1 rounded-md border text-xs font-mono ${styles}`}>
      <span className="font-semibold">{symbol}</span>
      {skill}
    </span>
  );
}