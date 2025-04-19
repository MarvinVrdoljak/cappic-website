// "app/layout.tsx"
import '@/styles/globals.scss'
import { Poppins } from 'next/font/google'

const poppins = Poppins({
  subsets: ['latin'],
  weight: ['400', '700'],
  variable: '--font-poppins',
  display: 'swap',
})

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return <html className={poppins.variable}>{children}</html>
}
