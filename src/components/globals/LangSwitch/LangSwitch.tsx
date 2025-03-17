'use strict'

import Link from 'next/link'
import { useContext } from 'react'

export default function LangSwitch() {
  return (
    <nav>
      <ul className="language-switch">
        <li>
          <Link href={asPath} locale="en">
            <a className={locale === 'en' ? 'active' : ''}>English</a>
          </Link>
        </li>
        <li>
          <Link href={asPath} locale="de">
            <a className={locale === 'de' ? 'active' : ''}>Deutsch</a>
          </Link>
        </li>
      </ul>
    </nav>
  )
}
