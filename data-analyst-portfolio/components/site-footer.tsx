import Link from 'next/link'
import { Mail, Phone, Contact as ContactIcon, MapPin } from 'lucide-react'

export function SiteFooter() {
  return (
    <footer className="relative border-t border-border/60 bg-card/30">
      <div className="mx-auto flex max-w-6xl flex-col gap-6 px-4 py-10 sm:px-6 md:flex-row md:items-center md:justify-between">
        <div>
          <p className="font-display text-lg font-bold">
            Joseph Ndung&rsquo;u Kuria
          </p>
          <p className="text-sm text-muted-foreground">
            Data Analyst &middot; Financial &amp; Operational Insights
          </p>
        </div>
        <div className="flex flex-wrap gap-x-6 gap-y-2 text-sm text-muted-foreground">
          <a
            href="mailto:infotojoseph@gmail.com"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Mail className="size-4" /> infotojoseph@gmail.com
          </a>
          <a
            href="tel:+254759090911"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <Phone className="size-4" /> 0759 090 911
          </a>
          <a
            href="https://www.linkedin.com/in/joseph-kuria-520b32157"
            target="_blank"
            rel="noopener noreferrer"
            className="flex items-center gap-2 transition-colors hover:text-primary"
          >
            <ContactIcon className="size-4" /> LinkedIn
          </a>
          <span className="flex items-center gap-2">
            <MapPin className="size-4" /> Kiambu, Kenya
          </span>
        </div>
      </div>
      <div className="border-t border-border/60 py-4">
        <p className="text-center text-xs text-muted-foreground">
          &copy; {new Date().getFullYear()} Joseph Ndung&rsquo;u Kuria. Built for
          impact.{' '}
          <Link href="/cv" className="text-primary hover:underline">
            Download CV
          </Link>
        </p>
      </div>
    </footer>
  )
}
