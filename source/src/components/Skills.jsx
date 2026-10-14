import { motion } from 'framer-motion';
import { content } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import Tag from './ui/Tag';
import { stagger } from './ui/Card';
export default function Skills() { return <section id="skills" className="container-width section-space"><SectionHeading title="Skills" number="04" /><motion.ul variants={stagger} initial="hidden" whileInView="visible" viewport={{ once: true, amount: 0.15 }} className="flex max-w-4xl flex-wrap gap-3">{content.skills.map(skill => <Tag key={skill}>{skill}</Tag>)}</motion.ul></section>; }
