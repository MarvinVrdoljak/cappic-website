'use client'

import Hero from '@/components/globals/Hero'
import { useTranslations } from 'next-intl'

const Page = () => {
  const t = useTranslations('Home')
  return (
    <div>
      <Hero />
    </div>
  )
}

export default Page
