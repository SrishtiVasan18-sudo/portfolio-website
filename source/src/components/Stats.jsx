import { content } from '../data/content';
import Card from './ui/Card';
import AnimatedCounter from './ui/AnimatedCounter';
export default function Stats() { return <section aria-label="Coordination in numbers" className="container-width pb-10"><div className="grid grid-cols-1 gap-4 sm:grid-cols-2 lg:grid-cols-4">{content.stats.map(stat => <Card key={stat.label} className="p-6"><div className="text-4xl font-bold tracking-tight text-accent md:text-5xl"><AnimatedCounter value={stat.value} suffix={stat.suffix} /></div><p className="mt-4 max-w-48 text-sm leading-relaxed text-textSecondary">{stat.label}</p></Card>)}</div></section>; }
