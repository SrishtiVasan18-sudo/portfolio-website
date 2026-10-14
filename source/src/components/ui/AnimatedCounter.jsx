export default function AnimatedCounter({ value, suffix = '' }) {
  return <span className="tabular-nums">{value.toLocaleString('en-US')}{suffix}</span>;
}
