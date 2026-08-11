import { motion, useInView } from 'framer-motion';
import { useRef } from 'react';
import {
  Code2,
  BarChart3,
  BrainCircuit,
  Database,
  Cloud,
  Users,
  type LucideIcon,
} from 'lucide-react';
import { Reveal, SectionHeading, SectionWrapper } from '@/components/ui/Reveal';
import { skillGroups } from '@/data/portfolio';

const iconMap: Record<string, LucideIcon> = {
  Code2,
  BarChart3,
  BrainCircuit,
  Database,
  Cloud,
  Users,
};

function SkillBar({
  name,
  level,
  delay,
}: {
  name: string;
  level: number;
  delay: number;
}) {
  const ref = useRef(null);
  const inView = useInView(ref, { once: true, margin: '-40px' });

  return (
    <div ref={ref}>
      <div className="mb-2 flex items-center justify-between">
        <span className="text-sm font-medium text-neutral-200">{name}</span>
        <span className="text-xs text-neutral-500">{level}%</span>
      </div>
      <div className="h-1.5 w-full overflow-hidden rounded-full bg-white/10">
        <motion.div
          initial={{ width: 0 }}
          animate={inView ? { width: `${level}%` } : { width: 0 }}
          transition={{ duration: 1, delay, ease: [0.22, 1, 0.36, 1] }}
          className="h-full rounded-full bg-gradient-to-r from-accent-400 to-accent-300"
        />
      </div>
    </div>
  );
}

export default function Skills() {
  return (
    <SectionWrapper id="skills">
      <SectionHeading
        eyebrow="Skills & Tooling"
        title="A toolkit built across the full data lifecycle."
        description="From raw ingestion to the executive summary — the languages, platforms and methods I reach for daily."
        align="center"
      />

      <div className="mt-16 grid gap-6 sm:grid-cols-2 lg:grid-cols-3">
        {skillGroups.map((group, gi) => {
          const Icon = iconMap[group.icon] ?? Code2;
          return (
            <Reveal
              key={group.category}
              delay={gi * 0.08}
              className="glass-card glass-card-hover group rounded-3xl p-7"
            >
              <div className="mb-6 flex items-center gap-3">
                <span className="flex h-11 w-11 items-center justify-center rounded-xl bg-white/5 text-accent-300 ring-1 ring-white/10 transition-colors group-hover:bg-accent-400/10 group-hover:text-accent-300">
                  <Icon className="h-5 w-5" />
                </span>
                <h3 className="text-sm font-semibold uppercase tracking-wide text-white">
                  {group.category}
                </h3>
              </div>
              <div className="space-y-5">
                {group.skills.map((skill, si) => (
                  <SkillBar
                    key={skill.name}
                    name={skill.name}
                    level={skill.level}
                    delay={0.2 + si * 0.1}
                  />
                ))}
              </div>
            </Reveal>
          );
        })}
      </div>
    </SectionWrapper>
  );
}
