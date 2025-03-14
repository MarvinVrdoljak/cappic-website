import 'server-only'
import type { ValidLocale } from './config'

const dictionaries = {
  de: () => import('./dictionaries/de.json').then((module) => module.default),
  en: () => import('./dictionaries/en.json').then((module) => module.default),
}

export const getDictionary = async (locale: ValidLocale) => dictionaries[locale]()
