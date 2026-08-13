export default function ScoreBadge({ score, label = "Match Score" }) {
  const color = score >= 70 ? "text-match" : score >= 40 ? "text-signal" : "text-gap";
  const ring = score >= 70 ? "border-match" : score >= 40 ? "border-signal" : "border-gap";

  return (
    <div className={`flex flex-col items-center justify-center w-28 h-28 rounded-full border-4 ${ring} bg-void shrink-0`}>
      <span className={`font-mono text-3xl font-semibold ${color}`}>{score}</span>
      <span className="text-xs text-text-muted mt-1">{label}</span>
    </div>
  );
}