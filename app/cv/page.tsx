'use client'

import Link from 'next/link'
import { ArrowLeft, Download, Printer } from 'lucide-react'
import { Button } from '@/components/ui/button'
import { CvDocument } from '@/components/cv-document'

export default function CvPage() {
  function handleDownload() {
    window.print()
  }

  return (
    <div className="min-h-screen bg-background">
      {/* Toolbar (hidden when printing) */}
      <div className="no-print sticky top-0 z-40 border-b border-border/60 bg-background/80 backdrop-blur-md">
        <div className="mx-auto flex max-w-5xl items-center justify-between px-4 py-3 sm:px-6">
          <Link
            href="/"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> Back to site
          </Link>
          <Button
            onClick={handleDownload}
            className="bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90"
          >
            <Download className="mr-1 size-4" /> Download as PDF
          </Button>
        </div>
      </div>

      {/* Intro (hidden when printing) */}
      <div className="no-print mx-auto max-w-5xl px-4 pt-10 text-center sm:px-6">
        <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
          Curriculum Vitae
        </p>
        <h1 className="mt-3 font-display text-4xl font-extrabold uppercase tracking-tight sm:text-5xl">
          Joseph&rsquo;s <span className="text-gold-gradient">CV</span>
        </h1>
        <p className="mx-auto mt-3 max-w-xl text-pretty text-sm text-muted-foreground">
          Preview the full CV below. Click{' '}
          <span className="text-foreground">Download as PDF</span> and choose
          &ldquo;Save as PDF&rdquo; as the destination to get a clean,
          selectable file.
        </p>
        <div className="mt-4 inline-flex items-center gap-1.5 rounded-full border border-border bg-card/40 px-3 py-1 text-xs text-muted-foreground">
          <Printer className="size-3.5 text-primary" /> Tip: set margins to
          &ldquo;Default&rdquo; and enable background graphics for best results.
        </div>
      </div>

      {/* CV */}
      <div className="px-4 py-10 sm:px-6 print:p-0">
        <CvDocument />
      </div>
    </div>
  )
}
