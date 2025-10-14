import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'
import DeepLinkHandler from '@/components/DeepLinkHandler'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={poppins.variable}>
      <body>
        <DeepLinkHandler />
        {children}
      </body>
    </html>
  )
}
