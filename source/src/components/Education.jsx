import { content } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';
export default function Education() { return <section id="education" className="container-width section-space"><SectionHeading title="Education & Training" number="05" /><div className="grid gap-4 md:grid-cols-2">{content.education.map(entry => <Card key={entry.title} className="p-6"><div className="flex items-start justify-between gap-4"><h3 className="min-w-0 text-base font-semibold leading-relaxed">{entry.title}</h3><span className="shrink-0 rounded-md border border-accent/15 bg-accent/5 px-2 py-1 text-xs uppercase text-accent">{entry.year}</span></div><p className="mt-4 text-sm leading-relaxed text-textSecondary">{entry.org}</p></Card>)}</div></section>; }
