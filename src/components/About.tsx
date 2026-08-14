import { Reveal, SectionHeading, SectionWrapper } from '@/components/ui/Reveal';
import { profile } from '@/data/portfolio';

export default function About() {
  return (
    <SectionWrapper id="about">
      <SectionHeading
        eyebrow="About Me"
        title="A data practitioner who values clarity over complexity."
        align="center"
      />

      <div className="mt-16 grid gap-8 lg:grid-cols-[1.6fr_1fr]">
        <Reveal className="glass-card glass-card-hover rounded-3xl p-8 sm:p-10">
          <p className="text-left text-lg leading-relaxed text-neutral-300">
  {profile.summary}
</p>

<p className="mt-5 text-left text-lg leading-relaxed text-neutral-300">
  I specialise in transforming complex datasets into actionable business
  insights across finance, retail, and operations. My experience spans KPI
  development, forecasting, predictive modelling, dashboard development,
  CRM analytics, and process automation, with a strong focus on improving
  operational efficiency, optimising revenue, and supporting data-driven
  decision-making.
</p>
        </Reveal>

        <div className="grid grid-cols-2 gap-4">
          {profile.stats.map((stat, i) => (
            <Reveal
              key={stat.label}
              delay={0.1 + i * 0.08}
              className="glass-card glass-card-hover flex flex-col justify-between rounded-2xl p-6"
            >
              <span className="font-serif text-4xl text-white sm:text-5xl">
                {stat.value}
              </span>
              <span className="mt-3 text-xs uppercase tracking-wider text-neutral-400">
                {stat.label}
              </span>
            </Reveal>
          ))}
        </div>
      </div>
    </SectionWrapper>
  );
}