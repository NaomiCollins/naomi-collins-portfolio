import { Download, FileText } from 'lucide-react';
import { Reveal, SectionWrapper } from '@/components/ui/Reveal';
import { profile } from '@/data/portfolio';

export default function Resume() {
  return (
    <SectionWrapper id="resume" className="py-20">
      <Reveal className="glass-card glass-card-hover relative overflow-hidden rounded-4xl p-10 text-center sm:p-16">
        {/* Decorative glow */}
        <div className="pointer-events-none absolute inset-0 -z-10">
          <div className="absolute left-1/2 top-1/2 h-72 w-72 -translate-x-1/2 -translate-y-1/2 rounded-full bg-accent-500/10 blur-[80px]" />
        </div>

        <span className="mx-auto flex h-14 w-14 items-center justify-center rounded-2xl bg-white/5 text-white ring-1 ring-white/10">
          <FileText className="h-6 w-6" />
        </span>
        <h2 className="mt-6 font-serif text-3xl text-white sm:text-4xl text-balance">
          The full story, on one page.
        </h2>
        <p className="mx-auto mt-3 max-w-md text-sm leading-relaxed text-neutral-400">
          Download my resume for a complete overview of my experience, education,
          certifications and selected projects.
        </p>
        <a
          href={profile.resumeUrl}
          download
          className="mt-8 inline-flex items-center gap-2.5 rounded-full bg-white px-6 py-3 text-sm font-semibold text-black transition-all hover:scale-[1.03] hover:shadow-2xl hover:shadow-white/10 active:scale-95"
        >
          <Download className="h-5 w-5" />
          Download Resume (PDF)
        </a>
      </Reveal>
    </SectionWrapper>
  );
}
