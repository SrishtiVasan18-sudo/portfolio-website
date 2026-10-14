import { content } from '../data/content';
import SectionHeading from './ui/SectionHeading';
export default function About() { return <section id="about" className="container-width section-space"><SectionHeading title="Profile" number="01" /><p className="max-w-3xl border-l-2 border-accent pl-6 text-lg leading-relaxed text-textSecondary">{content.profile}</p></section>; }
