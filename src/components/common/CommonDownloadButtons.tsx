'use client'

import Link from 'next/link'
import { useLocale } from 'next-intl'
import Image from 'next/image'

export default function CommonDownloadButtons() {
  const locale = useLocale()

  return (
    <div className="download-buttons">
      <a
        href={
          locale === 'de'
            ? 'https://apps.apple.com/de/app/cappic/id6743133357'
            : 'https://apps.apple.com/de/app/cappic/id6743133357?l=en-GB'
        }
        className="download-buttons__button"
      >
        <Image
          src={locale === 'de' ? '/download-app-store-de.svg' : '/download-app-store-en.svg'}
          alt="iPhone"
          width="120"
          height="40"
        />
      </a>
      <a
        href={
          locale === 'de'
            ? 'https://play.google.com/store/apps/details?id=com.cappic.app&hl=de'
            : 'https://play.google.com/store/apps/details?id=com.cappic.app'
        }
        className="download-buttons__button"
      >
        <Image
          src={locale === 'de' ? '/download-google-play-de.svg' : '/download-google-play-en.svg'}
          alt="iPhone"
          width="646"
          height="121"
        />
      </a>
    </div>
  )
}
