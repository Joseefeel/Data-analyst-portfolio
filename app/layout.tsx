import { Analytics } from '@vercel/analytics/next'
import type { Metadata, Viewport } from 'next'
import { Inter, Space_Grotesk } from 'next/font/google'
import './globals.css'

const inter = Inter({
  subsets: ['latin'],
  variable: '--font-inter',
  display: 'swap',
})

const spaceGrotesk = Space_Grotesk({
  subsets: ['latin'],
  variable: '--font-space-grotesk',
  display: 'swap',
})

export const metadata: Metadata = {
  title: 'Joseph Ndung\u2019u Kuria | Data Analyst',
  description:
    'Data Analyst turning financial and operational data into decisions. Excel, Power BI & SQL specialist available for hire and freelance projects.',
  generator: 'v0.app',
  keywords: [
    'Data Analyst',
    'Power BI',
    'Excel',
    'SQL',
    'Financial Analytics',
    'Kenya Data Analyst',
    'Freelance Data Analyst',
  ],
  openGraph: {
    title: 'Joseph Ndung\u2019u Kuria | Data Analyst',
    description:
      'Turning financial and operational data into decisions. Available for hire and freelance projects.',
    type: 'website',
  },
}

export const viewport: Viewport = {
  colorScheme: 'dark',
  themeColor: '#0b0a08',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html
      lang="en"
      className={`${inter.variable} ${spaceGrotesk.variable} bg-background`}
    >
      <body className="font-sans antialiased">
        {children}
        {process.env.NODE_ENV === 'production' && <Analytics />}
      </body>
    </html>
  )
}
