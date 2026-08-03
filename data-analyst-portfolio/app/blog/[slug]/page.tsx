import Image from 'next/image'
import Link from 'next/link'
import type { Metadata } from 'next'
import { notFound } from 'next/navigation'
import { ArrowLeft, Clock, Download } from 'lucide-react'
import { FloatingBackground } from '@/components/floating-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { buttonVariants } from '@/components/ui/button'
import { cn } from '@/lib/utils'
import { blogPosts, getPost } from '@/lib/blog-data'

export function generateStaticParams() {
  return blogPosts.map((p) => ({ slug: p.slug }))
}

export async function generateMetadata({
  params,
}: {
  params: Promise<{ slug: string }>
}): Promise<Metadata> {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) return { title: 'Post not found' }
  return {
    title: `${post.title} | Joseph Ndung\u2019u Kuria`,
    description: post.excerpt,
  }
}

export default async function BlogPostPage({
  params,
}: {
  params: Promise<{ slug: string }>
}) {
  const { slug } = await params
  const post = getPost(slug)
  if (!post) notFound()

  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main className="px-4 pt-28 pb-24 sm:px-6">
        <article className="mx-auto max-w-3xl">
          <Link
            href="/blog"
            className="inline-flex items-center gap-1 text-sm text-muted-foreground transition-colors hover:text-primary"
          >
            <ArrowLeft className="size-4" /> All stories
          </Link>

          <div className="mt-6 flex items-center gap-3 text-xs">
            <span className="rounded-full border border-primary/25 bg-primary/10 px-3 py-1 font-medium text-primary">
              {post.category}
            </span>
            <span className="text-muted-foreground">{post.date}</span>
            <span className="flex items-center gap-1 text-muted-foreground">
              <Clock className="size-3" /> {post.readTime}
            </span>
          </div>

          <h1 className="mt-4 font-display text-4xl font-extrabold tracking-tight text-balance sm:text-5xl">
            {post.title}
          </h1>

          <div className="relative mt-8 aspect-[16/8] overflow-hidden rounded-2xl border border-border">
            <Image
              src={post.cover || '/placeholder.svg'}
              alt=""
              fill
              className="object-cover"
              priority
            />
          </div>

          <div className="mt-8 space-y-5">
            {post.content.map((para, i) => (
              <p
                key={i}
                className="text-pretty text-lg leading-relaxed text-muted-foreground"
              >
                {para}
              </p>
            ))}
          </div>

          <div className="mt-12 flex flex-col items-start gap-4 rounded-2xl border border-primary/25 bg-card/40 p-6 backdrop-blur-sm sm:flex-row sm:items-center sm:justify-between">
            <div>
              <p className="font-display text-lg font-bold">
                Need this kind of thinking on your data?
              </p>
              <p className="text-sm text-muted-foreground">
                Available for hire and freelance analytics work.
              </p>
            </div>
            <div className="flex gap-3">
              <Link
                href="/#contact"
                className={cn(
                  buttonVariants(),
                  'bg-gold-gradient font-semibold text-primary-foreground hover:opacity-90',
                )}
              >
                Get in touch
              </Link>
              <Link
                href="/cv"
                className={cn(
                  buttonVariants({ variant: 'outline' }),
                  'border-primary/40 bg-transparent hover:bg-primary/10',
                )}
              >
                <Download className="mr-1 size-4" /> CV
              </Link>
            </div>
          </div>
        </article>
      </main>
      <SiteFooter />
    </>
  )
}
