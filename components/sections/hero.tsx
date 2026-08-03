import Link from 'next/link'
import { ArrowRight, Download, Sparkles } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const stats = [
  { value: '10+', label: 'Years with data' },
  { value: '-30%', label: 'Entry errors cut' },
  { value: '4:1', label: 'Loan book impact' },
  { value: '99.7%', label: 'Data accuracy' },
]

export function Hero() {
  return (
    <section
      id="home"
      className="relative flex min-h-screen flex-col items-center justify-center px-4 pt-24 pb-16 text-center sm:px-6"
    >
      <div className="inline-flex items-center gap-2 rounded-full border border-primary/30 bg-card/50 px-4 py-1.5 text-xs font-medium text-muted-foreground backdrop-blur-sm">
        <Sparkles className="size-3.5 text-primary" />
        Available for hire &amp; freelance projects
      </div>

      <h1 className="mt-8 font-display text-6xl font-extrabold uppercase leading-[0.95] tracking-tight text-balance sm:text-8xl lg:text-[10rem]">
        <span className="text-gold-gradient">Data</span>
        <br />
        <span className="text-foreground">Analyst</span>
      </h1>

      <p className="mt-4 font-display text-lg font-medium tracking-[0.3em] text-muted-foreground uppercase sm:text-xl">
        Joseph Ndung&rsquo;u Kuria
      </p>

      <p className="mt-6 max-w-2xl text-pretty text-base leading-relaxed text-muted-foreground sm:text-lg">
        I turn messy financial and operational data into clean dashboards and
        decisions that move the bottom line. A decade inside banking and Sacco
        operations, now fully focused on analytics with{' '}
        <span className="text-foreground">Excel, Power BI &amp; SQL</span>.
      </p>

      <div className="mt-9 flex flex-col gap-3 sm:flex-row">
        <Link
          href="#contact"
          className={cn(
            buttonVariants({ size: 'lg' }),
            'bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90',
          )}
        >
          Hire me <ArrowRight className="ml-1 size-4" />
        </Link>
        <Link
          href="/cv"
          className={cn(
            buttonVariants({ size: 'lg', variant: 'outline' }),
            'border-primary/40 bg-transparent text-foreground hover:bg-primary/10',
          )}
        >
          <Download className="mr-1 size-4" /> Download CV
        </Link>
      </div>

      <dl className="mt-16 grid w-full max-w-3xl grid-cols-2 gap-4 sm:grid-cols-4">
        {stats.map((s) => (
          <div
            key={s.label}
            className="rounded-xl border border-border bg-card/40 p-4 backdrop-blur-sm"
          >
            <dt className="sr-only">{s.label}</dt>
            <dd className="font-display text-3xl font-bold text-gold-gradient">
              {s.value}
            </dd>
            <p className="mt-1 text-xs text-muted-foreground">{s.label}</p>
          </div>
        ))}
      </dl>
    </section>
  )
}
