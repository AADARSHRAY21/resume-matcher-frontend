export default function Button({ children, variant = 'primary', className = '', ...props }) {
  const base =
    'px-4 py-2.5 rounded-md font-medium text-sm transition-all duration-200 cursor-pointer disabled:opacity-50 disabled:cursor-not-allowed enabled:hover:-translate-y-px enabled:active:translate-y-0 enabled:active:scale-[0.98]';

  const variants = {
    primary:
      'bg-signal text-white hover:bg-signal-hover enabled:hover:shadow-lg enabled:hover:shadow-signal/25',
    secondary: 'bg-panel text-text border border-line hover:border-signal',
    ghost: 'bg-transparent text-text-muted hover:text-text hover:bg-panel',
  };

  return (
    <button className={`${base} ${variants[variant]} ${className}`} {...props}>
      {children}
    </button>
  );
}