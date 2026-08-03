'use client'

import Link from 'next/link'
import { useState } from 'react'
import { Menu, X, Download, LineChart } from 'lucide-react'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'

const navLinks = [
  { label: 'Home', href: '/#home' },
  { label: 'Projects', href: '/#projects' },
  { label: 'About', href: '/#about' },
  { label: 'Contact', href: '/#contact' },
  { label: 'Blog', href: '/blog' },
]

export function SiteHeader() {
  const [open, setOpen] = useState(false)

  return (
    <header className="fixed inset-x-0 top-0 z-50 border-b border-border/60 bg-background/70 backdrop-blur-md">
      <div className="mx-auto flex h-16 max-w-6xl items-center justify-between px-4 sm:px-6">
        <Link
          href="/#home"
          className="flex items-center gap-2 font-display text-lg font-bold tracking-tight"
        >
          <span className="grid size-8 place-items-center rounded-md bg-gold-gradient text-primary-foreground">
            <LineChart className="size-4" />
          </span>
          <span>
            Joseph<span className="text-gold-gradient">.</span>
          </span>
        </Link>

        <nav className="hidden items-center gap-8 md:flex">
          {navLinks.map((link) => (
            <Link
              key={link.href}
              href={link.href}
              className="text-sm font-medium text-muted-foreground transition-colors hover:text-primary"
            >
              {link.label}
            </Link>
          ))}
        </nav>

        <div className="hidden md:block">
          <Link
            href="/cv"
            className={cn(
              buttonVariants(),
              'bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90',
            )}
          >
            <Download className="mr-1 size-4" /> Download CV
          </Link>
        </div>

        <button
          type="button"
          onClick={() => setOpen((v) => !v)}
          className="inline-flex size-10 items-center justify-center rounded-md border border-border text-foreground md:hidden"
          aria-label={open ? 'Close menu' : 'Open menu'}
          aria-expanded={open}
        >
          {open ? <X className="size-5" /> : <Menu className="size-5" />}
        </button>
      </div>

      {open && (
        <nav className="border-t border-border/60 bg-background/95 px-4 py-4 md:hidden">
          <ul className="flex flex-col gap-1">
            {navLinks.map((link) => (
              <li key={link.href}>
                <Link
                  href={link.href}
                  onClick={() => setOpen(false)}
                  className="block rounded-md px-3 py-2 text-sm font-medium text-muted-foreground hover:bg-secondary hover:text-primary"
                >
                  {link.label}
                </Link>
              </li>
            ))}
            <li className="mt-2">
              <Link
                href="/cv"
                onClick={() => setOpen(false)}
                className={cn(
                  buttonVariants(),
                  'w-full bg-gold-gradient font-semibold text-primary-foreground',
                )}
              >
                <Download className="mr-1 size-4" /> Download CV
              </Link>
            </li>
          </ul>
        </nav>
      )}
    </header>
  )
}
