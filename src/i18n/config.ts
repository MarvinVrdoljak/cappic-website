export const defaultLocale = 'de'
export const locales = ['de', 'en'] as const
export type ValidLocale = (typeof locales)[number]

export const localeNames: Record<ValidLocale, string> = {
  de: 'Deutsch',
  en: 'English',
}
