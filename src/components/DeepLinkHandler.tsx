'use client'

import { usePathname } from 'next/navigation'
import { useEffect } from 'react'

export default function DeepLinkHandler() {
  const pathname = usePathname()

  useEffect(() => {
    if (
      pathname?.includes('/login') ||
      pathname?.includes('/reset-password') ||
      pathname?.includes('/invite') ||
      pathname?.includes('/sign-up')
    ) {
      const hash = window.location.hash
      const deepLink = `cappic-app://${pathname}${hash}`
      console.log('deepLink', deepLink, pathname, hash)
      window.location.href = deepLink
    }
  }, [pathname])

  return null
}
