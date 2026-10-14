import { motion, useReducedMotion } from 'framer-motion';
export const stagger = { hidden: {}, visible: { transition: { staggerChildren: 0.08 } } };
export default function Card({ children, className = '', ...props }) {
  const reduced = useReducedMotion();
  return <motion.div initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }, visible: { opacity: 1, y: 0, transition: { duration: reduced ? 0 : 0.6, ease: 'easeOut' } } }} className={`rounded-2xl border border-border bg-surface transition-[border-color,box-shadow] hover:border-accent/40 shadow-[0_4px_24px_rgba(83,57,40,0.035)] hover:shadow-[0_12px_36px_rgba(83,57,40,0.08)] ${className}`} {...props}>{children}</motion.div>;
}
