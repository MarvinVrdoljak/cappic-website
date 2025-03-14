import { locales, type ValidLocale } from '@/i18n/config'
import type { Metadata } from 'next'
import { getDictionary } from '@/i18n/get-dictionary'
import styles from './page.module.scss'

interface Props {
  params: {
    lang: ValidLocale
  }
}

export async function generateStaticParams() {
  return locales.map((lang) => ({ lang }))
}

export async function generateMetadata({ params }: Props): Promise<Metadata> {
  const dict = await getDictionary(params.lang)
  return {
    title: `Cappic Website | ${dict.navigation.home}`,
    description: dict.home.description,
  }
}

export default async function Home({ params: { lang } }: Props) {
  const dict = await getDictionary(lang)

  return (
    <main className={styles.container}>
      <h1 className={styles.title}>{dict.home.welcome}</h1>
      <p className={styles.description}>{dict.home.description}</p>
    </main>
  )
}
