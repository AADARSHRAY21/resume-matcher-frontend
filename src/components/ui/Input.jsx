export default function Input({ label, error, className = '', ...props }) {
  return (
    <div className="flex flex-col gap-1.5">
      {label && (
        <label className="text-sm font-medium text-text-muted">{label}</label>
      )}
      <input
        className={`px-3.5 py-2.5 rounded-md bg-panel border ${error ? 'border-gap' : 'border-line'} text-text placeholder:text-text-muted focus:outline-none focus:border-signal transition-colors ${className}`}
        {...props}
      />
      {error && <span className="text-xs text-gap">{error}</span>}
    </div>
  );
}