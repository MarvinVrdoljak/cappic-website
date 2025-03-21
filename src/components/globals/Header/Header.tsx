import Image from 'next/image'

export default function Header() {
  return (
    <header className="header">
      <Image src="/logo.svg" alt="Cappic Logo" width={150} height={50} />
    </header>
  )
}
