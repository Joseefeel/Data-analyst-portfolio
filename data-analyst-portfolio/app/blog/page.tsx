import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { ArrowUpRight, Clock } from 'lucide-react'
import { FloatingBackground } from '@/components/floating-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { blogPosts } from '@/lib/blog-data'

export const metadata: Metadata = {
  title: 'Blog | Joseph Ndung\u2019u Kuria',
  description:
    'Short stories about data, credit risk, data quality and business intelligence from a finance-rooted data analyst.',
}

export default function BlogPage() {
  const [featured, ...rest] = blogPosts

  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main className="px-4 pt-28 pb-24 sm:px-6">
        <div className="mx-auto max-w-6xl">
          <div className="max-w-2xl">
            <p className="font-mono text-xs uppercase tracking-[0.3em] text-primary">
              The Blog
            </p>
            <h1 className="mt-3 font-display text-5xl font-extrabold uppercase tracking-tight text-balance sm:text-6xl">
              Stories about{' '}
              <span className="text-gold-gradient">data &amp; finance</span>
            </h1>
            <p className="mt-4 text-pretty leading-relaxed text-muted-foreground">
              Field notes from a decade inside banking and Sacco operations
              &mdash; what the numbers actually say when you clean them up and
              ask the right questions.
            </p>
          </div>

          {/* Featured */}
          <Link
            href={`/blog/${featured.slug}`}
            className="group mt-12 grid overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-colors hover:border-primary/40 lg:grid-cols-2"
          >
            <div className="relative aspect-[16/10] overflow-hidden lg:aspect-auto">
              <Image
                src={featured.cover || '/placeholder.svg'}
                alt=""
                fill
                className="object-cover transition-transform duration-500 group-hover:scale-105"
              />
            </div>
            <div className="flex flex-col justify-center gap-4 p-8 lg:p-10">
              <div className="flex items-center gap-3 text-xs">
                <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-medium text-primary">
                  {featured.category}
                </span>
                <span className="flex items-center gap-1 text-muted-foreground">
                  <Clock className="size-3" /> {featured.readTime}
                </span>
              </div>
              <h2 className="font-display text-3xl font-bold text-balance">
                {featured.title}
              </h2>
              <p className="text-pretty leading-relaxed text-muted-foreground">
                {featured.excerpt}
              </p>
              <span className="inline-flex items-center gap-1 text-sm font-medium text-primary">
                Read story{' '}
                <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
              </span>
            </div>
          </Link>

          {/* Rest grid */}
          <div className="mt-8 grid gap-8 md:grid-cols-2">
            {rest.map((post) => (
              <Link
                key={post.slug}
                href={`/blog/${post.slug}`}
                className="group flex flex-col overflow-hidden rounded-2xl border border-border bg-card/40 backdrop-blur-sm transition-colors hover:border-primary/40"
              >
                <div className="relative aspect-[16/9] overflow-hidden">
                  <Image
                    src={post.cover || '/placeholder.svg'}
                    alt=""
                    fill
                    className="object-cover transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
                <div className="flex flex-1 flex-col gap-3 p-6">
                  <div className="flex items-center gap-3 text-xs">
                    <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-medium text-primary">
                      {post.category}
                    </span>
                    <span className="flex items-center gap-1 text-muted-foreground">
                      <Clock className="size-3" /> {post.readTime}
                    </span>
                  </div>
                  <h3 className="font-display text-xl font-bold text-balance">
                    {post.title}
                  </h3>
                  <p className="text-pretty text-sm leading-relaxed text-muted-foreground">
                    {post.excerpt}
                  </p>
                  <span className="mt-auto inline-flex items-center gap-1 pt-2 text-sm font-medium text-primary">
                    Read story{' '}
                    <ArrowUpRight className="size-4 transition-transform group-hover:translate-x-0.5 group-hover:-translate-y-0.5" />
                  </span>
                </div>
              </Link>
            ))}
          </div>
        </div>
      </main>
      <SiteFooter />
    </>
  )
}
