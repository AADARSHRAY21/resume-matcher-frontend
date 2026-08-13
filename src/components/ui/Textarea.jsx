export default function Textarea({ label, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text-muted">{label}</label>
      )}
      <textarea
        className={`px-3.5 py-2.5 rounded-md bg-panel border border-line text-text placeholder:text-text-muted focus:outline-none focus:border-signal transition-colors resize-y font-mono text-sm ${className}`}
        {...props}
      />
    </div>
  );
}