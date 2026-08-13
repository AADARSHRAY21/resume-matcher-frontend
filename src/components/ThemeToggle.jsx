import { useTheme } from '../context/ThemeContext.jsx';

export default function ThemeToggle() {
  const { theme, toggleTheme } = useTheme();

  return (
    <button
      onClick={toggleTheme}
      aria-label={`Switch to ${theme === 'dark' ? 'light' : 'dark'} theme`}
      className="fixed top-4 right-4 z-50 w-10 h-10 flex items-center justify-center rounded-md border border-line bg-panel text-lg cursor-pointer transition-colors hover:bg-panel-hover hover:border-signal"
    >
      {theme === 'dark' ? '☀️' : '🌙'}
    </button>
  );
}