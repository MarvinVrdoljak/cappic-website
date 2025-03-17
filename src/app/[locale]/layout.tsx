import Providers from './providers'
import { routing } from '@/i18n/routing'
import getRequestConfig from '@/i18n/request'
import Header from '@/components/globals/Header/Header'
import '@/styles/globals.scss'

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
  const localeConfig = await getRequestConfig({ requestLocale: Promise.resolve(params.locale) })

  return (
    <html lang={localeConfig.locale}>
      <Providers messages={localeConfig?.messages as any} locale={localeConfig.locale}>
        <body>
          <Header />
          {children}
        </body>
      </Providers>
    </html>
  )
}
