import { FloatingBackground } from '@/components/floating-background'
import { SiteHeader } from '@/components/site-header'
import { SiteFooter } from '@/components/site-footer'
import { Hero } from '@/components/sections/hero'
import { Projects } from '@/components/sections/projects'
import { About } from '@/components/sections/about'
import { Contact } from '@/components/sections/contact'

export default function HomePage() {
  return (
    <>
      <FloatingBackground />
      <SiteHeader />
      <main>
        <Hero />
        <Projects />
        <About />
        <Contact />
      </main>
      <SiteFooter />
    </>
  )
}
