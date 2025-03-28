'use client'

import { useTranslations } from 'next-intl'

export default function Hero() {
  const t = useTranslations('Home')

  return (
    <section className="hero">
      <div className="hero__inner">
        <div className="hero__content">
          <p>{t('hero.description')}</p>
          <h1>{t('hero.title')}</h1>
        </div>
      </div>
    </section>
  )
}
