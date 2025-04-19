'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function Login() {
  const pathname = usePathname()

  useEffect(() => {
    const deepLink = `cappic://login`

    // Versuche, die App über das App-Schema zu öffnen
    window.location.href = deepLink

    // Fallback nach 1.5 Sekunden (z. B. auf eine Webseite oder Hinweis-Seite)
    const timeout = setTimeout(() => {
      window.location.href = 'https://cappic.app/app-not-installed'
    }, 1500)

    return () => clearTimeout(timeout)
  }, [])

  return (
    <section className="section">
      <div className="grid">
        <h1>Login</h1>
      </div>
    </section>
  )
}
