'use client'

import { useState } from 'react'
import Link from 'next/link'
import { Mail, Phone, Contact as ContactIcon, Send, CheckCircle2, Download } from 'lucide-react'
import { Button } from '@/components/ui/button'

export function Contact() {
  const [sent, setSent] = useState(false)
  const [form, setForm] = useState({ name: '', email: '', message: '' })

  function handleSubmit(e: React.FormEvent) {
    e.preventDefault()
    const subject = encodeURIComponent(`Project enquiry from ${form.name}`)
    const body = encodeURIComponent(
      `${form.message}\n\nFrom: ${form.name}\nReply to: ${form.email}`,
    )
    window.location.href = `mailto:infotojoseph@gmail.com?subject=${subject}&body=${body}`
    setSent(true)
  }

  return (
    <section id="contact" className="relative px-4 py-24 sm:px-6">
      <div className="mx-auto max-w-5xl">
        <div className="overflow-hidden rounded-3xl border border-primary/25 bg-card/50 backdrop-blur-sm">
          <div className="grid lg:grid-cols-2">
            {/* Left pitch */}
            <div className="relative flex flex-col justify-center gap-6 p-8 lg:p-12">
              <div className="absolute -left-16 -top-16 -z-10 size-56 rounded-full bg-gold-gradient opacity-20 blur-3xl" />
              <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
                Let&rsquo;s Work Together
              </p>
              <h2 className="font-display text-4xl font-bold text-balance sm:text-5xl">
                Have data?{' '}
                <span className="text-gold-gradient">Let&rsquo;s make it talk.</span>
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                Open to full-time data analyst roles and freelance engagements
                &mdash; dashboards, data cleaning, reporting automation and credit
                analytics. Tell me about your data and I&rsquo;ll tell you what
                it&rsquo;s hiding.
              </p>

              <div className="flex flex-col gap-3">
                <a
                  href="mailto:infotojoseph@gmail.com"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-9 place-items-center rounded-md bg-primary/10">
                    <Mail className="size-4 text-primary" />
                  </span>
                  infotojoseph@gmail.com
                </a>
                <a
                  href="tel:+254759090911"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-9 place-items-center rounded-md bg-primary/10">
                    <Phone className="size-4 text-primary" />
                  </span>
                  0759 090 911
                </a>
                <a
                  href="https://www.linkedin.com/in/joseph-kuria-520b32157"
                  target="_blank"
                  rel="noopener noreferrer"
                  className="flex items-center gap-3 text-sm text-muted-foreground transition-colors hover:text-primary"
                >
                  <span className="grid size-9 place-items-center rounded-md bg-primary/10">
                    <ContactIcon className="size-4 text-primary" />
                  </span>
                  linkedin.com/in/joseph-kuria
                </a>
              </div>

              <Button
                asChild
                variant="outline"
                className="w-fit border-primary/40 bg-transparent hover:bg-primary/10"
              >
                <Link href="/cv">
                  <Download className="mr-1 size-4" /> Download CV
                </Link>
              </Button>
            </div>

            {/* Right form */}
            <div className="border-t border-border bg-background/40 p-8 lg:border-l lg:border-t-0 lg:p-12">
              {sent ? (
                <div className="flex h-full flex-col items-center justify-center gap-4 text-center">
                  <CheckCircle2 className="size-12 text-primary" />
                  <h3 className="font-display text-2xl font-bold">
                    Your email is ready
                  </h3>
                  <p className="text-sm text-muted-foreground">
                    Your mail app should have opened with the message pre-filled.
                    If not, reach me directly at infotojoseph@gmail.com.
                  </p>
                  <Button
                    variant="outline"
                    onClick={() => setSent(false)}
                    className="border-primary/40 bg-transparent"
                  >
                    Send another
                  </Button>
                </div>
              ) : (
                <form onSubmit={handleSubmit} className="space-y-5">
                  <Field label="Name" htmlFor="name">
                    <input
                      id="name"
                      required
                      value={form.name}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, name: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Jane Recruiter"
                    />
                  </Field>
                  <Field label="Email" htmlFor="email">
                    <input
                      id="email"
                      type="email"
                      required
                      value={form.email}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, email: e.target.value }))
                      }
                      className="w-full rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="you@company.com"
                    />
                  </Field>
                  <Field label="Message" htmlFor="message">
                    <textarea
                      id="message"
                      required
                      rows={5}
                      value={form.message}
                      onChange={(e) =>
                        setForm((f) => ({ ...f, message: e.target.value }))
                      }
                      className="w-full resize-none rounded-lg border border-border bg-card/60 px-4 py-2.5 text-sm text-foreground outline-none transition-colors focus:border-primary"
                      placeholder="Tell me about the role or project..."
                    />
                  </Field>
                  <Button
                    type="submit"
                    size="lg"
                    className="w-full bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90"
                  >
                    <Send className="mr-1 size-4" /> Send message
                  </Button>
                </form>
              )}
            </div>
          </div>
        </div>
      </div>
    </section>
  )
}

function Field({
  label,
  htmlFor,
  children,
}: {
  label: string
  htmlFor: string
  children: React.ReactNode
}) {
  return (
    <div>
      <label
        htmlFor={htmlFor}
        className="mb-1.5 block text-xs font-medium uppercase tracking-wider text-muted-foreground"
      >
        {label}
      </label>
      {children}
    </div>
  )
}
