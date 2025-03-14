'use client'

import Link from 'next/link'
import { usePathname } from 'next/navigation'
import { locales, localeNames, type ValidLocale } from '@/i18n/config'

export default function LanguageSwitcher() {
  const pathname = usePathname()

  const currentLocale =
    locales.find((locale) => pathname.startsWith(`/${locale}/`) || pathname === `/${locale}`) ||
    'de'

  const pathnameWithoutLocale = pathname.replace(`/${currentLocale}`, '') || '/'

  return (
    <div className="switcher">
      {locales.map((locale) => {
        const isActive = currentLocale === locale
        return (
          <Link
            key={locale}
            href={`/${locale}${pathnameWithoutLocale}`}
            className={isActive ? 'active' : ''}
          >
            {localeNames[locale as ValidLocale]}
          </Link>
        )
      })}
    </div>
  )
}
