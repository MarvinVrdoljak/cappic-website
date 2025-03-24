'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'

export default function LangSwitch() {
  const locale = useLocale()

  return (
    <nav>
      <ul className="language-switch">
        {/* Links für Sprachwechsel */}
        <li>
          <Link href={'/en'} locale="en">
            <span className={locale === 'en' ? 'active' : ''}>English</span>
          </Link>
        </li>
        <li>
          <Link href={'/de'} locale="de">
            <span className={locale === 'de' ? 'active' : ''}>Deutsch</span>
          </Link>
        </li>
      </ul>
      <style jsx>{`
        .language-switch {
          display: flex;
          gap: 1rem;
          list-style: none;
          padding: 0;
          margin: 0;
        }
        .language-switch a {
          text-decoration: none;
          color: inherit;
        }
        .language-switch a.active {
          font-weight: bold;
          text-decoration: underline;
        }
      `}</style>
    </nav>
  )
}
