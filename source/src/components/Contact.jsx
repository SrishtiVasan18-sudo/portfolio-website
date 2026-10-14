import { useState } from 'react';
import { Mail, Linkedin, MapPin, ArrowUpRight, Copy, Check } from 'lucide-react';
import { content } from '../data/content';
import Card from './ui/Card';

export default function Contact() {
  const [copyStatus, setCopyStatus] = useState('');
  async function copyEmail() {
    try {
      await navigator.clipboard.writeText(content.email);
      setCopyStatus('Email address copied.');
    } catch {
      setCopyStatus('Please select and copy the email address shown above.');
    }
  }
  const gmailUrl = `https://mail.google.com/mail/?view=cm&fs=1&to=${encodeURIComponent(content.email)}`;
  return (
    <section id="contact" className="container-width section-space">
      <Card className="relative overflow-hidden px-6 py-14 text-center shadow-[0_0_60px_rgba(149,91,68,0.08)] md:px-12 md:py-20">
        <div aria-hidden="true" className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_at_top,rgba(149,91,68,0.10),transparent_70%)]" />
        <div className="relative">
          <p className="mb-5 text-xs font-medium uppercase tracking-[0.18em] text-accent">Let's connect</p>
          <h2 className="mx-auto max-w-3xl text-3xl font-semibold leading-tight tracking-tight md:text-4xl">Open to remote patient navigation, advocacy, and care-coordination roles.</h2>
          <div className="mt-9 flex flex-wrap justify-center gap-3">
            <a href={gmailUrl} target="_blank" rel="noopener noreferrer" aria-label="Email Me (opens Gmail in a new tab)" className="button-primary"><Mail size={17} aria-hidden="true" />Email Me</a>
            <a href={content.linkedin} target="_blank" rel="noopener noreferrer" aria-label="LinkedIn (opens in a new tab)" className="button-secondary"><Linkedin size={17} aria-hidden="true" />LinkedIn<ArrowUpRight size={15} aria-hidden="true" /></a>
          </div>
          <a href={`mailto:${content.email}`} className="mt-6 inline-block max-w-full break-all text-sm text-textSecondary underline decoration-border underline-offset-4 hover:text-accent">{content.email}</a>
          <div className="mt-3 flex flex-wrap items-center justify-center gap-x-5 gap-y-2 text-sm">
            <button type="button" onClick={copyEmail} className="inline-flex items-center gap-1.5 rounded-sm py-2 text-accent underline-offset-4 hover:underline">{copyStatus === 'Email address copied.' ? <Check size={14} aria-hidden="true" /> : <Copy size={14} aria-hidden="true" />}Copy email</button>
          </div>
          <p role="status" aria-live="polite" className="min-h-5 text-xs leading-relaxed text-textSecondary">{copyStatus}</p>
          <p className="mt-7 flex items-center justify-center gap-2 text-sm text-textSecondary"><MapPin size={15} aria-hidden="true" />{content.location}</p>
        </div>
      </Card>
    </section>
  );
}
