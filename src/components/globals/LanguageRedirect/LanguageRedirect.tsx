'use client'

import { useEffect } from 'react'
import { useRouter } from 'next/navigation'
import { defaultLocale, locales } from '@/i18n/config'

export default function LanguageRedirect() {
  const router = useRouter()

  useEffect(() => {
    // Get browser language
    const browserLang = navigator.language.substring(0, 2)
    const preferredLocale = locales.includes(browserLang as (typeof locales)[number])
      ? browserLang
      : defaultLocale

    router.push(`/${preferredLocale}`)
  }, [router])

  return null
}
