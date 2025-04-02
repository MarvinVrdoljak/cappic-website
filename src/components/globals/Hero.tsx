'use client'

import { useLocale, useTranslations } from 'next-intl'
import Image from 'next/image'
import CommonDownloadButtons from '../common/CommonDownloadButtons'

export default function Hero() {
  const t = useTranslations('Home')
  const locale = useLocale()

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <span className="label">{t('hero.subtitle')}</span>
          <h1 className="hero__title">{t('hero.title')}</h1>
          <p className="lead">{t('hero.description')}</p>
          {/* <CommonDownloadButtons /> */}
        </div>
        <div className="hero__image-wrapper">
          <Image
            src={locale === 'de' ? '/iphone-de.png' : '/iphone-en.png'}
            alt="iPhone"
            width="1668"
            height="2284"
            className="hero__image"
          />
        </div>
      </div>
    </section>
  )
}
