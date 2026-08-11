import { useState, type FormEvent } from 'react';
import { motion, AnimatePresence } from 'framer-motion';
import {
  Mail,
  MapPin,
  Phone,
  Linkedin,
  Github,
  Send,
  CheckCircle2,
  AlertCircle,
  Loader2,
} from 'lucide-react';
import { Reveal, SectionHeading, SectionWrapper } from '@/components/ui/Reveal';
import { profile } from '@/data/portfolio';
import { supabase } from '@/lib/supabase';

type Status = 'idle' | 'loading' | 'success' | 'error';

export default function Contact() {
  const [status, setStatus] = useState<Status>('idle');
  const [errorMsg, setErrorMsg] = useState('');

  const handleSubmit = async (e: FormEvent<HTMLFormElement>) => {
    e.preventDefault();
    const form = e.currentTarget;
    const data = new FormData(form);
    const name = String(data.get('name') ?? '').trim();
    const email = String(data.get('email') ?? '').trim();
    const subject = String(data.get('subject') ?? '').trim();
    const message = String(data.get('message') ?? '').trim();

    if (!name || !email || !subject || !message) {
      setStatus('error');
      setErrorMsg('Please fill in every field before sending.');
      return;
    }

    setStatus('loading');
    setErrorMsg('');

    const { error } = await supabase.from('contact_messages').insert({
      name,
      email,
      subject,
      message,
    });

    if (error) {
      setStatus('error');
      setErrorMsg('Something went wrong sending your message. Please try again.');
      return;
    }

    setStatus('success');
    form.reset();
  };

  const contactItems = [
  {
    icon: Mail,
    label: 'Email',
    value: profile.email,
    href: `mailto:${profile.email}`,
  },
  {
    icon: Phone,
    label: 'Phone',
    value: profile.phone,
    href: `tel:${profile.phone.replace(/\s/g, '')}`,
  },
  {
    icon: MapPin,
    label: 'Location',
    value: profile.location,
    href: null,
  },
  {
    icon: Linkedin,
    label: 'LinkedIn',
    value: 'Connect on LinkedIn',
    href: profile.linkedin,
  },
  {
    icon: Github,
    label: 'GitHub',
    value: 'View my GitHub',
    href: profile.github,
  },
];

  return (
    <SectionWrapper id="contact">
      <SectionHeading
        eyebrow="Contact"
        title="Let's build something with data."
        description="Whether it is a role, a project or a collaboration — I would love to hear from you."
        align="center"
      />

      <div className="mt-16 grid gap-6 lg:grid-cols-[1fr_1.3fr]">
        {/* Contact details */}
        <Reveal className="flex flex-col gap-4">
          {contactItems.map((item) => {
            const Icon = item.icon;
            const content = (
              <div className="glass-card glass-card-hover flex items-center gap-4 rounded-2xl p-5">
                <span className="flex h-11 w-11 shrink-0 items-center justify-center rounded-xl bg-white/5 text-accent-300 ring-1 ring-white/10">
                  <Icon className="h-5 w-5" />
                </span>
                <div className="min-w-0">
                  <p className="text-xs uppercase tracking-wider text-neutral-500">
                    {item.label}
                  </p>
                  <p className="mt-0.5 truncate text-sm font-medium text-white">
                    {item.value}
                  </p>
                </div>
              </div>
            );
            return item.href ? (
              <a
                key={item.label}
                href={item.href}
                target={item.href.startsWith('http') ? '_blank' : undefined}
                rel="noreferrer"
              >
                {content}
              </a>
            ) : (
              <div key={item.label}>{content}</div>
            );
          })}
        </Reveal>

        {/* Form */}
        <Reveal delay={0.1} className="glass-card rounded-3xl p-7 sm:p-8">
          <form onSubmit={handleSubmit} className="space-y-5" noValidate>
            <div className="grid gap-5 sm:grid-cols-2">
              <Field label="Name" name="name" type="text" placeholder="Jane Doe" />
              <Field label="Email" name="email" type="email" placeholder="jane@company.com" />
            </div>
            <Field label="Subject" name="subject" type="text" placeholder="Data Analyst opportunity" />
            <div>
              <label htmlFor="message" className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-400">
                Message
              </label>
              <textarea
                id="message"
                name="message"
                rows={5}
                required
                placeholder="Tell me a little about the role or project…"
                className="w-full resize-none rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:border-accent-400/40 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-accent-400/30"
              />
            </div>

            <button
              type="submit"
              disabled={status === 'loading'}
              className="inline-flex w-full items-center justify-center gap-2.5 rounded-full bg-white px-6 py-3.5 text-sm font-semibold text-black transition-all hover:scale-[1.01] hover:shadow-2xl hover:shadow-white/10 active:scale-[0.99] disabled:cursor-not-allowed disabled:opacity-60"
            >
              {status === 'loading' ? (
                <>
                  <Loader2 className="h-4 w-4 animate-spin" />
                  Sending…
                </>
              ) : (
                <>
                  <Send className="h-4 w-4" />
                  Send message
                </>
              )}
            </button>

            <AnimatePresence>
              {status === 'success' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-emerald-400/20 bg-emerald-400/10 px-4 py-3 text-sm text-emerald-300"
                >
                  <CheckCircle2 className="h-4 w-4 shrink-0" />
                  Thank you — your message has been sent. I'll get back to you shortly.
                </motion.p>
              )}
              {status === 'error' && (
                <motion.p
                  initial={{ opacity: 0, y: -8 }}
                  animate={{ opacity: 1, y: 0 }}
                  exit={{ opacity: 0 }}
                  className="flex items-center gap-2 rounded-xl border border-red-400/20 bg-red-400/10 px-4 py-3 text-sm text-red-300"
                >
                  <AlertCircle className="h-4 w-4 shrink-0" />
                  {errorMsg}
                </motion.p>
              )}
            </AnimatePresence>
          </form>
        </Reveal>
      </div>
    </SectionWrapper>
  );
}

function Field({
  label,
  name,
  type,
  placeholder,
}: {
  label: string;
  name: string;
  type: string;
  placeholder: string;
}) {
  return (
    <div>
      <label htmlFor={name} className="mb-2 block text-xs font-medium uppercase tracking-wider text-neutral-400">
        {label}
      </label>
      <input
        id={name}
        name={name}
        type={type}
        required
        placeholder={placeholder}
        className="w-full rounded-xl border border-white/10 bg-white/5 px-4 py-3 text-sm text-white placeholder-neutral-600 transition-colors focus:border-accent-400/40 focus:bg-white/[0.07] focus:outline-none focus:ring-1 focus:ring-accent-400/30"
      />
    </div>
  );
}
