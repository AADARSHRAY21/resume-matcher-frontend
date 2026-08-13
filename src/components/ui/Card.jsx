export default function Card({ children, className = '' }) {
  return (
    <div className={`bg-panel border border-line rounded-lg p-6 shadow-lg ${className}`}>
      {children}
    </div>
  );
}