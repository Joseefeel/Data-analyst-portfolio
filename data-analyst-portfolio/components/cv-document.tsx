import { Mail, Phone, MapPin, Contact as ContactIcon } from 'lucide-react'

const experience = [
  {
    role: 'Customer Service / Office Assistant',
    org: 'Metropolitan National Sacco Ltd. \u2014 Limuru Town, Kenya',
    period: 'Jun 2022 \u2013 Jul 2024',
    points: [
      'Managed and organized large datasets for new account openings and compliance checks, ensuring data accuracy and integrity.',
      'Reduced original entry errors by 30%, resulting in cleaner, audit-ready data.',
      'Collected, sorted and entered data to support operational decision-making.',
      'Handled email management and resolved customer disputes, streamlining the user experience.',
    ],
  },
  {
    role: 'Credit Analyst / Officer',
    org: 'Metropolitan National Sacco Ltd. \u2014 Nairobi City, Kenya',
    period: 'Jan 2018 \u2013 Jun 2022',
    points: [
      'Analyzed and processed loan applications in compliance with financial regulations, driving the loan book to a ~4:1 good-to-bad debt ratio.',
      'Prepared detailed reports on loan performance and client data, identifying actionable trends.',
      'Verified employment data and financial records to authenticate loan applications.',
      'Collaborated with stakeholders to enhance data quality and streamline reporting systems.',
    ],
  },
  {
    role: 'Teller / Admin Assistant',
    org: 'Metropolitan National Sacco Ltd. \u2014 Kiambu Town, Kenya',
    period: 'Sep 2012 \u2013 Dec 2019',
    points: [
      'Accurately managed transaction data including deposits, withdrawals and reconciliations.',
      'Maintained meticulous, confidential records, reducing customer complaints from 60% to 24%.',
      'Assisted in cash reconciliation and administrative support to improve workflows.',
    ],
  },
  {
    role: 'Warehouse Associate / Attendant',
    org: 'Kamindi Supermarkets \u2014 Kiambu Town, Kenya',
    period: 'Jan 2009 \u2013 Dec 2010',
    points: [
      'Monitored inventory data via management software, increasing efficiency by 15%.',
      'Conducted data entry to forecast supply and demand, preventing stock discrepancies.',
      'Verified and maintained data integrity across physical and digital records.',
    ],
  },
]

const skills = {
  Technical:
    'Microsoft Excel (Advanced), Power BI, SQL (Basic), Data Entry, Data Validation, Reporting, Data Cleaning',
  Analytical:
    'Trend Analysis, Data Organization, Compliance Reporting, Customer Insights',
  Soft: 'Communication, Attention to Detail, Time Management, Problem-Solving, Adaptability',
  Additional: 'Administrative Support, Customer Service, Loan Appraisal',
}

/**
 * Print-optimized CV. Uses plain black-on-white styling for reliable
 * PDF output via the browser's print dialog.
 */
export function CvDocument() {
  return (
    <div
      id="cv-document"
      className="mx-auto max-w-[820px] bg-white p-10 text-[13px] leading-relaxed text-neutral-800 shadow-2xl print:max-w-none print:p-0 print:shadow-none"
    >
      {/* Header */}
      <header className="border-b-2 border-amber-500 pb-4">
        <h1 className="font-display text-4xl font-extrabold tracking-tight text-neutral-900">
          Joseph Ndung&rsquo;u Kuria
        </h1>
        <p className="mt-1 text-lg font-semibold text-amber-600">
          Data Analyst
        </p>
        <div className="mt-3 flex flex-wrap gap-x-5 gap-y-1 text-xs text-neutral-600">
          <span className="flex items-center gap-1.5">
            <Phone className="size-3.5 text-amber-600" /> 0759 090 911
          </span>
          <span className="flex items-center gap-1.5">
            <Mail className="size-3.5 text-amber-600" /> infotojoseph@gmail.com
          </span>
          <span className="flex items-center gap-1.5">
            <MapPin className="size-3.5 text-amber-600" /> Kiambu, Central Kenya
          </span>
          <span className="flex items-center gap-1.5">
            <ContactIcon className="size-3.5 text-amber-600" /> /joseph-kuria-520b32157
          </span>
        </div>
      </header>

      {/* Summary */}
      <Section title="Professional Summary">
        <p>
          Detail-oriented data professional with a decade of experience across
          data entry, analysis, customer service and financial operations. Adept
          at organizing large datasets, safeguarding data accuracy and extracting
          actionable insights that inform business decisions. Skilled with Excel,
          Power BI and SQL, with a strong foundation in statistics, reporting and
          data visualization &mdash; now fully focused on data analytics.
        </p>
      </Section>

      {/* Skills */}
      <Section title="Core Skills">
        <div className="grid grid-cols-1 gap-1.5">
          {Object.entries(skills).map(([group, list]) => (
            <p key={group}>
              <span className="font-semibold text-neutral-900">{group}:</span>{' '}
              {list}
            </p>
          ))}
        </div>
      </Section>

      {/* Experience */}
      <Section title="Professional Experience">
        <div className="space-y-4">
          {experience.map((job) => (
            <div key={job.role} className="break-inside-avoid">
              <div className="flex flex-wrap items-baseline justify-between gap-x-4">
                <p className="font-semibold text-neutral-900">{job.role}</p>
                <p className="text-xs font-medium text-neutral-500">
                  {job.period}
                </p>
              </div>
              <p className="text-xs italic text-amber-700">{job.org}</p>
              <ul className="mt-1.5 list-disc space-y-1 pl-5 text-neutral-700">
                {job.points.map((p) => (
                  <li key={p}>{p}</li>
                ))}
              </ul>
            </div>
          ))}
        </div>
      </Section>

      {/* Education & Certs */}
      <div className="grid grid-cols-1 gap-6 sm:grid-cols-2">
        <Section title="Education">
          <ul className="space-y-2">
            <li>
              <p className="font-semibold text-neutral-900">
                Bachelor of Business Administration
              </p>
              <p className="text-xs text-neutral-600">
                University of the People, USA &mdash; In Progress
              </p>
            </li>
            <li>
              <p className="font-semibold text-neutral-900">
                Diploma in Cooperative Management
              </p>
              <p className="text-xs text-neutral-600">
                Cooperative University of Kenya, Nairobi
              </p>
            </li>
          </ul>
        </Section>

        <Section title="Certificates & Languages">
          <ul className="list-disc space-y-1 pl-5 text-neutral-700">
            <li>Data Analytics</li>
            <li>Anti-Money Laundering &amp; Teller Training &mdash; Co-op Bank Institute</li>
            <li>Introduction to Computers &mdash; Kiambu Institute</li>
          </ul>
          <p className="mt-2">
            <span className="font-semibold text-neutral-900">Languages:</span>{' '}
            English (C1), Kiswahili (Fluent)
          </p>
        </Section>
      </div>
    </div>
  )
}

function Section({
  title,
  children,
}: {
  title: string
  children: React.ReactNode
}) {
  return (
    <section className="mt-5 break-inside-avoid">
      <h2 className="mb-2 text-xs font-bold uppercase tracking-[0.18em] text-amber-600">
        {title}
      </h2>
      {children}
    </section>
  )
}
