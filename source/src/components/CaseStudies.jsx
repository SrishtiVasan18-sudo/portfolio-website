import { ChevronDown } from 'lucide-react';
import { content } from '../data/content';
import SectionHeading from './ui/SectionHeading';
import Card from './ui/Card';

const sections = [
  ['challenge', 'The Challenge'],
  ['contributions', 'My Role & Contributions'],
  ['outcome', 'Outcome & Impact'],
  ['reflection', 'Professional Reflection'],
];

export default function CaseStudies() {
  return (
    <section id="case-studies" className="container-width section-space">
      <SectionHeading title="Case Studies" number="03" />
      <div className="space-y-6">
        {content.caseStudies.map(study => (
          <Card key={study.number} className="p-6 md:p-8">
            <article aria-labelledby={`case-${study.number}`}>
              <p className="mb-3 text-xs font-medium uppercase tracking-[0.18em] text-accent">Case Study {study.number}</p>
              <h3 id={`case-${study.number}`} className="max-w-3xl text-xl font-semibold leading-snug md:text-2xl">{study.title}</h3>
              <p className="mt-3 text-sm leading-relaxed text-textSecondary">{study.context}</p>
              <ul aria-label="Areas of focus" className="mt-5 flex flex-wrap gap-2">
                {study.focus.map(focus => <li key={focus} className="rounded-full border border-accent/20 bg-accent/5 px-3 py-1.5 text-xs leading-relaxed text-accentSoft">{focus}</li>)}
              </ul>
              <div className="mt-6 max-w-3xl space-y-3 text-base leading-relaxed text-textSecondary">
                {study.overview.map(paragraph => <p key={paragraph}>{paragraph}</p>)}
              </div>
              <details className="group mt-6 border-t border-border pt-5">
                <summary className="flex cursor-pointer list-none items-center justify-between gap-3 rounded-sm text-sm font-semibold text-accent [&::-webkit-details-marker]:hidden">
                  <span>Read the full case study<span className="sr-only">: {study.title}</span></span>
                  <ChevronDown aria-hidden="true" size={18} className="shrink-0 transition-transform group-open:rotate-180" />
                </summary>
                <div className="mt-8 space-y-8">
                  {sections.map(([key, label]) => (
                    <section key={key} aria-labelledby={`case-${study.number}-${key}`} className={key === 'outcome' ? 'rounded-xl border border-accent/20 bg-accent/5 p-5' : ''}>
                      <h4 id={`case-${study.number}-${key}`} className="mb-3 text-base font-semibold text-textPrimary">{label}</h4>
                      {key === 'contributions' ? (
                        <ul className="max-w-3xl space-y-3">
                          {study[key].map(paragraph => <li key={paragraph} className="flex gap-3 text-base leading-relaxed text-textSecondary"><span aria-hidden="true" className="mt-2.5 h-1 w-1 shrink-0 rounded-full bg-accent" /><span>{paragraph}</span></li>)}
                        </ul>
                      ) : (
                        <div className="max-w-3xl space-y-3 text-base leading-relaxed text-textSecondary">{study[key].map(paragraph => <p key={paragraph}>{paragraph}</p>)}</div>
                      )}
                    </section>
                  ))}
                </div>
              </details>
            </article>
          </Card>
        ))}
      </div>
    </section>
  );
}
