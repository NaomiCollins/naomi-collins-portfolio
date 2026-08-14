import { GraduationCap, Award } from 'lucide-react';
import { Reveal, SectionHeading, SectionWrapper } from '@/components/ui/Reveal';
import { education, certifications } from '@/data/portfolio';

export default function Education() {
  return (
    <SectionWrapper id="education">
      <SectionHeading
        eyebrow="Education & Professional Development"
        title="Foundations and continuous learning."
        align="center"
      />

      {/* Education */}
      <div className="mt-16 grid gap-6 md:grid-cols-2">
        {education.map((edu, i) => (
          <Reveal
            key={edu.degree}
            delay={i * 0.1}
            className="glass-card glass-card-hover rounded-3xl p-8"
          >
            <div className="mb-4 flex items-center gap-3">
              <span className="flex h-10 w-10 items-center justify-center rounded-xl bg-white/5 text-accent-300 ring-1 ring-white/10">
                <GraduationCap className="h-5 w-5" />
              </span>
              <span className="text-xs font-medium uppercase tracking-wider text-neutral-500">
                {edu.period}
              </span>
            </div>
            <h3 className="font-serif text-2xl leading-snug text-white">
              {edu.degree}
            </h3>
            <p className="mt-2 text-sm text-neutral-300">{edu.institution}</p>
            <p className="text-xs text-neutral-500">{edu.location}</p>
            <p className="mt-4 text-sm leading-relaxed text-neutral-400">
              {edu.details}
            </p>
          </Reveal>
        ))}
      </div>

      {/* Certifications */}
      <Reveal delay={0.1} className="mt-12">
        <h3 className="mb-6 flex items-center gap-2 text-sm font-semibold uppercase tracking-wider text-neutral-400">
          <Award className="h-4 w-4 text-accent-300" />
          Professional Development
        </h3>
      </Reveal>

      <div className="grid gap-4 sm:grid-cols-2 lg:grid-cols-3">
        {certifications.map((cert, i) => (
          <Reveal key={cert.name} delay={i * 0.05}>
            <div
  className="group flex h-full flex-col rounded-2xl border border-white/8 bg-white/[0.03] p-5 transition-all hover:border-white/15 hover:bg-white/[0.06]"
>
              <div className="flex items-start justify-between gap-3">
                <span className="text-sm font-medium leading-snug text-white">
                  {cert.name}
                </span>
                <span className="shrink-0 text-xs font-semibold text-accent-300/80">
                  {cert.year}
                </span>
              </div>
              <span className="mt-2 text-xs text-neutral-500">
                {cert.issuer}
              </span>
            </div>
          </Reveal>
        ))}
            </div>

      {/* View all certificates */}
      <Reveal delay={0.2} className="mt-10 flex flex-col items-center text-center">
        <p className="mb-5 max-w-xl text-sm leading-relaxed text-neutral-500">
          35+ DataCamp courses completed across SQL, Python, Power BI,
          Tableau, Excel, Statistics and BigQuery.
        </p>

        <a
          href="https://drive.google.com/drive/u/1/folders/1fkdRvqu_RD1T_byFcUj44j12nI7F8N9n"
          target="_blank"
          rel="noreferrer"
          className="inline-flex items-center gap-2 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10 active:scale-95"
        >
          <Award className="h-4 w-4" />
          View All 35+ Certificates
        </a>
      </Reveal>
    </SectionWrapper>
  );
}
