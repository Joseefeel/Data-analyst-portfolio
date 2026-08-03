export type BlogPost = {
  slug: string
  title: string
  excerpt: string
  cover: string
  category: string
  date: string
  readTime: string
  content: string[]
}

export const blogPosts: BlogPost[] = [
  {
    slug: 'what-a-41-loan-book-taught-me',
    title: 'What a 4:1 Loan Book Taught Me About Data',
    excerpt:
      'Behind every healthy debt ratio is a boring, disciplined habit: verifying the data before you trust the decision.',
    cover: '/blog-credit-risk.png',
    category: 'Credit & Finance',
    date: 'Mar 2025',
    readTime: '5 min read',
    content: [
      'When I was appraising loans at the Sacco, our target was simple to say and hard to earn: keep good loans far ahead of bad ones. We landed at roughly a 4:1 good-to-bad debt ratio, and people often assumed it came from a clever model. It did not. It came from data hygiene.',
      'Most defaults were predictable long before they happened. The signals were sitting in the application data \u2014 mismatched employment records, income figures that did not reconcile with bank statements, guarantors already stretched across other loans. The problem was never a lack of data. It was that the data was messy, scattered and rarely cross-checked.',
      'So we tightened the intake. Every application went through the same verification checklist, and the fields that predicted trouble were validated at the point of entry rather than months later. Once the inputs were trustworthy, even simple risk banding did the heavy lifting.',
      'The lesson stuck with me as I moved into analytics: a modest model on clean data beats a sophisticated one on dirty data, every time. If you want a healthier loan book \u2014 or a healthier anything \u2014 start by respecting the inputs.',
    ],
  },
  {
    slug: 'the-30-percent-error-drop',
    title: 'The Unglamorous Win: Cutting Data Entry Errors by 30%',
    excerpt:
      'No AI, no fancy tooling \u2014 just validation rules, standard templates and a refusal to let bad records through.',
    cover: '/blog-data-cleaning.png',
    category: 'Data Quality',
    date: 'Feb 2025',
    readTime: '4 min read',
    content: [
      'Data cleaning does not trend on social media, but it is where most of the real value in analytics is created or destroyed. When I took over managing account-opening and compliance datasets, manual entry mistakes were quietly corrupting every downstream report.',
      'The fix was not exciting, and that is exactly why it worked. We standardized the entry templates so everyone captured the same fields the same way. We added validation rules that rejected impossible values on the spot \u2014 a national ID that was too short, a date of birth in the future, a phone number missing digits.',
      'Within a few cycles, entry errors dropped about 30%. Reports that used to need manual reconciliation started to reconcile themselves. Customer complaints tied to record mistakes fell from a painful 60% down to 24%.',
      'If you are building a data function from scratch, resist the urge to jump straight to dashboards. Fix the pipe first. Clean data compounds; dirty data compounds faster.',
    ],
  },
  {
    slug: 'from-spreadsheets-to-power-bi',
    title: 'From Spreadsheets to Power BI: Making Numbers Talk',
    excerpt:
      'A dashboard nobody opens is just an expensive spreadsheet. Here is how I make reports people actually use.',
    cover: '/blog-powerbi.png',
    category: 'Business Intelligence',
    date: 'Jan 2025',
    readTime: '6 min read',
    content: [
      'For years, our reporting lived in monthly spreadsheets that took days to assemble and were out of date the moment they were sent. Moving to Power BI was not really a tooling upgrade \u2014 it was a shift in how decisions got made.',
      'The temptation with a new BI tool is to cram every metric onto one screen. I have learned to do the opposite. A good dashboard answers one question well: Are we healthy? Where is the risk? What changed this week? Everything else is a click away, not a distraction.',
      'The other half of the work is trust. Leaders only act on numbers they believe, so I spend as much time on data lineage and validation as I do on visuals. When someone asks \u201cwhere did this figure come from?\u201d there has to be a clean answer.',
      'Done right, the report stops being a document you deliver and becomes a place people go to think. That is the whole point of analytics \u2014 not prettier charts, but faster, more confident decisions.',
    ],
  },
]

export function getPost(slug: string) {
  return blogPosts.find((p) => p.slug === slug)
}
