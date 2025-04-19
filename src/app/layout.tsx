'use client'

// "app/layout.tsx"
import Header from '@/components/globals/Header'
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  const pathname = usePathname()

  useEffect(() => {
    if (
      pathname?.includes('/login') ||
      pathname?.includes('/reset-password') ||
      pathname?.includes('/invite') ||
      pathname?.includes('/sign-up')
    ) {
      // Extrahiere den Pfad nach /login/
      console.log(pathname)
      const deepLink = `cappic-app://${pathname}`

      // Versuche, die App über das App-Schema zu öffnen
      window.location.href = deepLink
    }
  }, [pathname])

  return (
    <html className={poppins.variable}>
      <body>
        <Header root />
        <main>{children}</main>
      </body>
    </html>
  )
}
