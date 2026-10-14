import { useEffect, useRef, useState } from 'react';
import { AnimatePresence, motion, useReducedMotion } from 'framer-motion';
import { Menu, X } from 'lucide-react';
import { content } from '../data/content';
import useScrollSpy from '../hooks/useScrollSpy';
const ids = content.navLinks.map(link => link.id);
export default function Navbar() {
  const [scrolled, setScrolled] = useState(false);
  const [open, setOpen] = useState(false);
  const active = useScrollSpy(ids);
  const trigger = useRef(null); const dialog = useRef(null);
  const reduced = useReducedMotion();
  useEffect(() => { const update = () => setScrolled(window.scrollY > 20); update(); window.addEventListener('scroll', update, { passive: true }); return () => window.removeEventListener('scroll', update); }, []);
  useEffect(() => {
    if (!open) return;
    const previous = document.body.style.overflow;
    document.body.style.overflow = 'hidden';
    dialog.current?.querySelector('button')?.focus();
    const onKey = event => {
      if (event.key === 'Escape') setOpen(false);
      if (event.key === 'Tab') {
        const items = dialog.current.querySelectorAll('a,button'); const first = items[0]; const last = items[items.length - 1];
        if (event.shiftKey && document.activeElement === first) { event.preventDefault(); last.focus(); }
        else if (!event.shiftKey && document.activeElement === last) { event.preventDefault(); first.focus(); }
      }
    };
    const onResize = () => { if (window.innerWidth >= 1024) setOpen(false); };
    window.addEventListener('keydown', onKey); window.addEventListener('resize', onResize);
    return () => { document.body.style.overflow = previous; window.removeEventListener('keydown', onKey); window.removeEventListener('resize', onResize); trigger.current?.focus(); };
  }, [open]);
  return <><header className={`fixed inset-x-0 top-0 z-50 border-b transition-all duration-300 ${scrolled ? 'border-border bg-background/80 backdrop-blur-md' : 'border-transparent'}`}><nav aria-label="Main navigation" className="container-width flex h-20 items-center justify-between gap-4"><a href="#home" className="flex items-center gap-2.5 text-sm font-semibold tracking-tight">{content.name}<span aria-hidden="true" className="h-1.5 w-1.5 rounded-full bg-accent" /></a><ul className="hidden items-center gap-6 lg:flex">{content.navLinks.map(link => <li key={link.id}><a href={`#${link.id}`} aria-current={active === link.id ? 'location' : undefined} className={`text-xs font-medium transition-colors hover:text-accent ${active === link.id ? 'text-accent' : 'text-textSecondary'}`}>{link.label}</a></li>)}</ul><button ref={trigger} type="button" onClick={() => setOpen(true)} aria-label="Open navigation" aria-expanded={open} aria-controls="mobile-navigation" className="rounded-lg p-2 text-textSecondary lg:hidden"><Menu size={22} /></button></nav></header><AnimatePresence>{open && <motion.div ref={dialog} id="mobile-navigation" role="dialog" aria-modal="true" aria-label="Navigation menu" initial={{ opacity: reduced ? 1 : 0 }} animate={{ opacity: 1 }} exit={{ opacity: 0 }} className="fixed inset-0 z-[60] flex flex-col overflow-y-auto bg-background px-6 py-6"><div className="flex items-center justify-between"><span className="font-semibold">{content.name}<span className="ml-2 text-accent">·</span></span><button onClick={() => setOpen(false)} aria-label="Close navigation" className="rounded-lg p-2"><X /></button></div><motion.nav aria-label="Mobile navigation" initial="hidden" animate="visible" variants={{ hidden: {}, visible: { transition: { staggerChildren: reduced ? 0 : 0.08 } } }} className="my-auto flex flex-col gap-6 py-10">{content.navLinks.map(link => <motion.a key={link.id} variants={{ hidden: { opacity: reduced ? 1 : 0, y: reduced ? 0 : 20 }, visible: { opacity: 1, y: 0 } }} href={`#${link.id}`} onClick={() => setOpen(false)} className={`text-3xl font-semibold ${active === link.id ? 'text-accent' : 'text-textPrimary'}`}>{link.label}</motion.a>)}</motion.nav></motion.div>}</AnimatePresence></>;
}
