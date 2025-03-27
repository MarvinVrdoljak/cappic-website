import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import Providers from './providers'
import { routing } from '@/i18n/routing'
import getRequestConfig from '@/i18n/request'
import Header from '@/components/globals/Header'
import Footer from '@/components/globals/Footer'

export async function generateStaticParams() {
  return routing.locales.map((locale) => ({
    locale,
  }))
}

interface RootLayoutProps {
  children: React.ReactNode
  params: { locale: string }
}

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default async function RootLayout({ children, params }: RootLayoutProps) {
  const localeConfig = await getRequestConfig({ requestLocale: Promise.resolve(params.locale) })

  return (
    <html lang={localeConfig.locale} className={poppins.variable}>
      <Providers messages={localeConfig?.messages as any} locale={localeConfig.locale}>
        <body>
          <Header />
          <main>{children}</main>
          <Footer />
        </body>
      </Providers>
    </html>
  )
}
