'use client'

// "app/layout.tsx"
import Header from '@/components/globals/Header'
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import { usePathname, useSearchParams } from 'next/navigation'
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
    if (typeof window !== 'undefined') {
      if (
        pathname?.includes('/login') ||
        pathname?.includes('/reset-password') ||
        pathname?.includes('/invite') ||
        pathname?.includes('/sign-up')
      ) {
        const hash = window.location.hash
        const deepLink = `cappic-app://${pathname}${hash}`

        window.location.href = deepLink
      }
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
