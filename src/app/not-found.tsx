'use client'

import Image from 'next/image'
import Link from 'next/link'

export default function NotFound() {
  return (
    <div className="not-found">
      <Link href={`/en`} className="not-found__logo">
        <Image src="/logo.svg" alt="cappic Logo" width={150} height={50} />
      </Link>
      <h1>404 - Page not found</h1>
    </div>
  )
}
