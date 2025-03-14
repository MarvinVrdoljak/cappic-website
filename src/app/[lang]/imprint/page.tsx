import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/get-dictionary'
import type { ValidLocale } from '@/i18n/config'

interface Props {
  params: {
    lang: ValidLocale
  }
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: `${dict.imprint.title} | Cappic Website`,
    description: `${dict.imprint.title} - Cappic Website`,
  }
}

export default async function Imprint({ params: { lang } }: Props) {
  const dict = await getDictionary(lang)

  return (
    <main>
      <h1>{dict.imprint.title}</h1>
      TBD
    </main>
  )
}
