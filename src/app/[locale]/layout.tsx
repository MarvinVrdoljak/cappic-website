import Providers from './providers'
import { routing } from '@/i18n/routing'
import getRequestConfig from '@/i18n/request'
import en from '@/i18n/messages/en.json'

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const messages = await getRequestConfig({ requestLocale: Promise.resolve(params.locale) })
  return (
    <html lang={params.locale}>
      <Providers messages={messages?.messages as any} locale={params.locale}>
        <body>{children}</body>
      </Providers>
    </html>
  )
}
