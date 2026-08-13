export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base = 'px-4 py-2.5 rounded-md font-medium text-sm transition-colors cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed';

  const variants = {
    primary: 'bg-signal text-white hover:bg-signal-hover',
    secondary: 'bg-panel text-text border border-line hover:border-signal',
    ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-panel',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}