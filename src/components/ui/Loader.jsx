export default function Loader({ size = 24 }) {
  return (
    <div
      className="animate-spin rounded-full border-2 border-line border-t-signal"
      style={{ width: size, height: size }}
    />
  );
}