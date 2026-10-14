import { Award } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
export default function Recognition() { return <section id="recognition" className="container-width section-space"><SectionHeading title="Recognition" number="06" /><div className="space-y-3">{content.recognition.map(entry => <Card key={entry.title + entry.org} className="flex items-start gap-4 p-6"><div className="rounded-xl border border-accent/15 bg-accent/5 p-3 text-accent"><Award size={22} aria-hidden="true" /></div><div className="min-w-0"><h3 className="text-base font-semibold leading-relaxed">{entry.title}</h3><p className="mt-1 text-sm leading-relaxed text-textSecondary">{entry.org}</p></div></Card>)}</div></section>; }
