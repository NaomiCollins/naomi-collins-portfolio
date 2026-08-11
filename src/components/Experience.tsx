import { Briefcase, Check } from 'lucide-react';
import { Reveal, SectionHeading, SectionWrapper } from '@/components/ui/Reveal';
import { experiences } from '@/data/portfolio';

export default function Experience() {
  return (
    <SectionWrapper id="experience">
      <SectionHeading
        eyebrow="Experience"
        title="Where I have applied the craft."
        align="center"
      />

      <div className="relative mt-16">
        {/* Timeline rail */}
        <div className="absolute left-4 top-2 bottom-2 w-px bg-gradient-to-b from-white/20 via-white/10 to-transparent sm:left-1/2" />

        <div className="space-y-10">
          {experiences.map((exp, i) => (
            <Reveal key={exp.role} delay={i * 0.08}>
              <div
                className={`relative flex flex-col gap-4 pl-12 sm:pl-0 ${
                  i % 2 === 0
                    ? 'sm:flex-row sm:items-start'
                    : 'sm:flex-row-reverse sm:items-start'
                }`}
              >
                {/* Node */}
                <div className="absolute left-0 top-1.5 flex h-8 w-8 items-center justify-center rounded-full border border-white/15 bg-neutral-900 text-accent-300 sm:left-1/2 sm:-translate-x-1/2">
                  <Briefcase className="h-3.5 w-3.5" />
                </div>

                {/* Spacer for alternating layout on desktop */}
                <div className="hidden sm:block sm:w-1/2" />

                <div className="glass-card glass-card-hover rounded-2xl p-6 sm:w-1/2 sm:max-w-md">
                  <div className="flex flex-wrap items-baseline justify-between gap-x-3">
                    <h3 className="text-base font-semibold text-white">
                      {exp.role}
                    </h3>
                    <span className="text-xs font-medium text-accent-300/80">
                      {exp.period}
                    </span>
                  </div>
                  <p className="mt-1 text-sm text-neutral-400">
                    {exp.company} · {exp.location}
                  </p>
                  <p className="mt-3 text-sm leading-relaxed text-neutral-400">
                    {exp.description}
                  </p>
                  <ul className="mt-4 space-y-2">
                    {exp.highlights.map((h) => (
                      <li
                        key={h}
                        className="flex items-start gap-2.5 text-sm text-neutral-300"
                      >
                        <Check className="mt-0.5 h-4 w-4 shrink-0 text-accent-300" />
                        <span className="leading-relaxed">{h}</span>
                      </li>
                    ))}
                  </ul>
                </div>
              </div>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}
