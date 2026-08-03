'use client'

import Image from 'next/image'
import { useId } from 'react'
import {
  Area,
  AreaChart,
  Bar,
  BarChart,
  CartesianGrid,
  ResponsiveContainer,
  Tooltip,
  XAxis,
  YAxis,
} from 'recharts'
import { ArrowUpRight, ExternalLink, TrendingDown, Target } from 'lucide-react'

const gold = 'oklch(0.86 0.15 90)'
const amber = 'oklch(0.72 0.15 62)'
const grid = 'oklch(0.83 0.14 84 / 0.12)'
const axis = 'oklch(0.72 0.025 85)'

const defaultData = [
  { period: '2018', ratio: 1.1 },
  { period: '2019', ratio: 1.9 },
  { period: '2020', ratio: 2.6 },
  { period: '2021', ratio: 3.4 },
  { period: '2022', ratio: 4.0 },
]

const errorData = [
  { month: 'Jan', errors: 100 },
  { month: 'Feb', errors: 88 },
  { month: 'Mar', errors: 74 },
  { month: 'Apr', errors: 61 },
  { month: 'May', errors: 70 },
]

function ChartTooltip({
  active,
  payload,
  label,
  unit,
}: {
  active?: boolean
  payload?: { value: number }[]
  label?: string
  unit?: string
}) {
  if (!active || !payload?.length) return null
  return (
    <div className="rounded-md border border-primary/30 bg-popover px-3 py-2 text-xs shadow-lg">
      <p className="font-medium text-muted-foreground">{label}</p>
      <p className="font-display text-sm font-bold text-primary">
        {payload[0].value}
        {unit}
      </p>
    </div>
  )
}

export function Projects() {
  const g1 = useId().replace(/:/g, '')
  const g2 = useId().replace(/:/g, '')

  return (
    <section id="projects" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-6xl">
        <div className="mx-auto max-w-2xl text-center">
          <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
            Selected Work
          </p>
          <h2 className="mt-3 font-display text-4xl font-bold text-balance sm:text-5xl">
            Case studies that moved{' '}
            <span className="text-gold-gradient">real numbers</span>
          </h2>
          <p className="mt-4 text-pretty text-muted-foreground">
            Two projects drawn from live financial operations &mdash; from credit
            risk to data quality engineering.
          </p>
        </div>

        <div className="mt-14 flex flex-col gap-10">
          {/* Project 1 */}
          <article className="grid gap-8 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm lg:grid-cols-2 lg:p-8">
            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                {['Credit Risk', 'Power BI', 'SQL', 'Forecasting'].map((t) => (
                  <span
                    key={t}
                    className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                  >
                    {t}
                  </span>
                ))}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Loan Default Risk &amp; Recovery Analytics
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Built a scoring and monitoring model for the Sacco loan book,
                combining employment verification data with repayment history to
                flag high-risk applications early. Reporting cadence moved from
                monthly spreadsheets to a live Power BI dashboard, lifting the
                good-to-bad debt ratio to a healthy{' '}
                <span className="text-foreground">4:1</span>.
              </p>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2 text-muted-foreground">
                  <Target className="mt-0.5 size-4 shrink-0 text-primary" />
                  Segmented borrowers into 5 risk bands, cutting approval time
                  for low-risk clients.
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <TrendingDown className="mt-0.5 size-4 shrink-0 text-primary" />
                  Reduced write-offs through earlier intervention on flagged
                  accounts.
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Good : Bad debt ratio over time
                </p>
                <ResponsiveContainer width="100%" height={160}>
                  <AreaChart data={defaultData} margin={{ left: -20, right: 8 }}>
                    <defs>
                      <linearGradient id={g1} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={gold} stopOpacity={0.5} />
                        <stop offset="100%" stopColor={gold} stopOpacity={0} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={grid} vertical={false} />
                    <XAxis
                      dataKey="period"
                      stroke={axis}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke={axis}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      content={<ChartTooltip unit=":1" />}
                      cursor={{ stroke: amber, strokeDasharray: 4 }}
                    />
                    <Area
                      type="monotone"
                      dataKey="ratio"
                      stroke={gold}
                      strokeWidth={2.5}
                      fill={`url(#${g1})`}
                    />
                  </AreaChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                >
                  <ExternalLink className="size-4" /> View project
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-primary transition-colors hover:underline"
                >
                  Discuss this work <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>

            <div className="relative order-first overflow-hidden rounded-xl border border-border lg:order-last">
              <Image
                src="/project-loan-default.png"
                alt="Loan default risk analytics dashboard with gold accented charts"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>
          </article>

          {/* Project 2 */}
          <article className="grid gap-8 rounded-2xl border border-border bg-card/40 p-6 backdrop-blur-sm lg:grid-cols-2 lg:p-8">
            <div className="relative overflow-hidden rounded-xl border border-border">
              <Image
                src="/project-data-quality.png"
                alt="Data quality pipeline dashboard showing error reduction over time"
                width={800}
                height={600}
                className="h-full w-full object-cover"
              />
            </div>

            <div className="flex flex-col">
              <div className="flex flex-wrap gap-2">
                {['Data Cleaning', 'Excel', 'Automation', 'Reporting'].map(
                  (t) => (
                    <span
                      key={t}
                      className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 text-xs font-medium text-primary"
                    >
                      {t}
                    </span>
                  ),
                )}
              </div>
              <h3 className="mt-4 font-display text-2xl font-bold">
                Data Quality Overhaul: Excel &rarr; Power BI Pipeline
              </h3>
              <p className="mt-3 text-sm leading-relaxed text-muted-foreground">
                Re-engineered the new-account and compliance data intake with
                validation rules, standardized templates and automated checks.
                Manual entry mistakes dropped{' '}
                <span className="text-foreground">30%</span>, producing a clean,
                audit-ready dataset that fed downstream reporting with confidence.
              </p>

              <ul className="mt-5 space-y-2 text-sm">
                <li className="flex gap-2 text-muted-foreground">
                  <TrendingDown className="mt-0.5 size-4 shrink-0 text-primary" />
                  Data validation at entry caught errors before they reached
                  reports.
                </li>
                <li className="flex gap-2 text-muted-foreground">
                  <Target className="mt-0.5 size-4 shrink-0 text-primary" />
                  Customer complaints on records fell from 60% to 24%.
                </li>
              </ul>

              <div className="mt-6 rounded-xl border border-border bg-background/40 p-4">
                <p className="mb-2 font-mono text-[11px] uppercase tracking-widest text-muted-foreground">
                  Monthly entry errors (indexed to 100)
                </p>
                <ResponsiveContainer width="100%" height={160}>
                  <BarChart data={errorData} margin={{ left: -20, right: 8 }}>
                    <defs>
                      <linearGradient id={g2} x1="0" y1="0" x2="0" y2="1">
                        <stop offset="0%" stopColor={gold} />
                        <stop offset="100%" stopColor={amber} />
                      </linearGradient>
                    </defs>
                    <CartesianGrid stroke={grid} vertical={false} />
                    <XAxis
                      dataKey="month"
                      stroke={axis}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <YAxis
                      stroke={axis}
                      fontSize={11}
                      tickLine={false}
                      axisLine={false}
                    />
                    <Tooltip
                      content={<ChartTooltip />}
                      cursor={{ fill: 'oklch(0.83 0.14 84 / 0.08)' }}
                    />
                    <Bar dataKey="errors" fill={`url(#${g2})`} radius={[4, 4, 0, 0]} />
                  </BarChart>
                </ResponsiveContainer>
              </div>

              <div className="mt-6 flex gap-3">
                <a
                  href="https://github.com/"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="inline-flex items-center gap-1.5 rounded-md border border-primary/40 px-4 py-2 text-sm font-medium text-foreground transition-colors hover:bg-primary/10"
                >
                  <ExternalLink className="size-4" /> View project
                </a>
                <a
                  href="#contact"
                  className="inline-flex items-center gap-1.5 rounded-md px-4 py-2 text-sm font-medium text-primary transition-colors hover:underline"
                >
                  Discuss this work <ArrowUpRight className="size-4" />
                </a>
              </div>
            </div>
          </article>
        </div>
      </div>
    </section>
  )
}
