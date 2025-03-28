'use client'

import Image from 'next/image'
import LangSwitch from './LangSwitch'
import { Link } from '@/i18n/routing'
import { useLocale } from 'next-intl'

export default function Header() {
  const locale = useLocale()

  return (
    <header className="header">
      <div className="header__inner">
        <Link href={`/`} className="header__logo">
          <Image src="/logo.svg" alt="Cappic Logo" width={150} height={50} />
        </Link>
        <LangSwitch />
      </div>
    </header>
  )
}
