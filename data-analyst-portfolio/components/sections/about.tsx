import Image from 'next/image'
import Link from 'next/link'
import { Download, GraduationCap, Award, Languages } from 'lucide-react'
import { Button } from '@/components/ui/button'

const skillGroups = [
  {
    title: 'Technical',
    skills: ['Microsoft Excel (Advanced)', 'Power BI', 'SQL', 'Data Cleaning', 'Data Validation', 'Reporting'],
  },
  {
    title: 'Analytical',
    skills: ['Trend Analysis', 'Compliance Reporting', 'Customer Insights', 'Data Organization'],
  },
  {
    title: 'Domain',
    skills: ['Loan Appraisal', 'Financial Operations', 'Customer Service', 'Administrative Support'],
  },
]

const experience = [
  {
    role: 'Customer Service / Office Assistant',
    org: 'Metropolitan National Sacco Ltd.',
    period: 'Jun 2022 \u2013 Jul 2024',
    points: [
      'Managed large datasets for account openings and compliance, cutting entry errors 30%.',
      'Delivered insight-ready data to support operational decisions.',
    ],
  },
  {
    role: 'Credit Analyst / Officer',
    org: 'Metropolitan National Sacco Ltd.',
    period: 'Jan 2018 \u2013 Jun 2022',
    points: [
      'Analyzed loan applications and drove the loan book to a 4:1 good-to-bad debt ratio.',
      'Built loan-performance reports that surfaced actionable trends.',
    ],
  },
  {
    role: 'Teller / Admin Assistant',
    org: 'Metropolitan National Sacco Ltd.',
    period: 'Sep 2012 \u2013 Dec 2019',
    points: [
      'Managed transaction data with strict accuracy and confidentiality.',
      'Reduced customer complaints from 60% to 24% through cleaner records.',
    ],
  },
]

export function About() {
  return (
    <section id="about" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="grid gap-12 lg:grid-cols-[0.85fr_1.15fr]">
          {/* Left: photo + quick facts */}
          <div>
            <div className="relative mx-auto max-w-sm">
              <div className="absolute -inset-3 -z-10 rounded-3xl bg-gold-gradient opacity-30 blur-2xl" />
              <div className="overflow-hidden rounded-2xl border border-primary/30">
                <Image
                  src="/joseph-portrait.png"
                  alt="Portrait of Joseph Ndung'u Kuria, Data Analyst"
                  width={640}
                  height={800}
                  className="h-full w-full object-cover"
                  priority
                />
              </div>
            </div>

            <div className="mt-8 space-y-4">
              <FactRow
                icon={<GraduationCap className="size-4 text-primary" />}
                title="Education"
                lines={[
                  'BBA \u2013 University of the People (In Progress)',
                  'Diploma, Cooperative Management \u2013 Cooperative University of Kenya',
                ]}
              />
              <FactRow
                icon={<Award className="size-4 text-primary" />}
                title="Certificates"
                lines={[
                  'Data Analytics',
                  'Anti-Money Laundering & Teller Training',
                  'Introduction to Computers',
                ]}
              />
              <FactRow
                icon={<Languages className="size-4 text-primary" />}
                title="Languages"
                lines={['English (C1)', 'Kiswahili (Fluent)']}
              />
            </div>
          </div>

          {/* Right: bio + skills + experience */}
          <div>
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              About Me
            </p>
            <h2 className="mt-3 font-display text-4xl font-bold text-balance sm:text-5xl">
              A decade in finance, now{' '}
              <span className="text-gold-gradient">all-in on data</span>
            </h2>
            <p className="mt-5 text-pretty leading-relaxed text-muted-foreground">
              I&rsquo;m a detail-obsessed analyst who spent ten years inside Sacco
              and banking operations &mdash; appraising loans, reconciling
              transactions and safeguarding data integrity. That front-line
              exposure taught me what clean data is actually worth. Today I pair
              that instinct with Excel, Power BI and SQL to build reporting that
              leaders trust and act on.
            </p>

            <div className="mt-8 grid gap-4 sm:grid-cols-3">
              {skillGroups.map((g) => (
                <div
                  key={g.title}
                  className="rounded-xl border border-border bg-card/40 p-4"
                >
                  <p className="font-display text-sm font-semibold text-primary">
                    {g.title}
                  </p>
                  <ul className="mt-2 space-y-1.5">
                    {g.skills.map((s) => (
                      <li key={s} className="text-xs text-muted-foreground">
                        {s}
                      </li>
                    ))}
                  </ul>
                </div>
              ))}
            </div>

            <h3 className="mt-10 font-display text-xl font-bold">Experience</h3>
            <ol className="mt-4 space-y-6 border-l border-border pl-6">
              {experience.map((job) => (
                <li key={job.role} className="relative">
                  <span className="absolute -left-[27px] top-1.5 size-3 rounded-full bg-gold-gradient ring-4 ring-background" />
                  <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                    <p className="font-semibold">{job.role}</p>
                    <p className="font-mono text-xs text-muted-foreground">
                      {job.period}
                    </p>
                  </div>
                  <p className="text-sm text-primary">{job.org}</p>
                  <ul className="mt-2 space-y-1">
                    {job.points.map((p) => (
                      <li
                        key={p}
                        className="text-sm leading-relaxed text-muted-foreground"
                      >
                        {p}
                      </li>
                    ))}
                  </ul>
                </li>
              ))}
            </ol>

            <Button
              asChild
              size="lg"
              className="mt-8 bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90"
            >
              <Link href="/cv">
                <Download className="mr-1 size-4" /> Download full CV (PDF)
              </Link>
            </Button>
          </div>
        </div>
      </div>
    </section>
  )
}

function FactRow({
  icon,
  title,
  lines,
}: {
  icon: React.ReactNode
  title: string
  lines: string[]
}) {
  return (
    <div className="flex gap-3 rounded-xl border border-border bg-card/40 p-4">
      <div className="mt-0.5 grid size-8 shrink-0 place-items-center rounded-md bg-primary/10">
        {icon}
      </div>
      <div>
        <p className="font-display text-sm font-semibold">{title}</p>
        {lines.map((l) => (
          <p key={l} className="text-xs leading-relaxed text-muted-foreground">
            {l}
          </p>
        ))}
      </div>
    </div>
  )
}
