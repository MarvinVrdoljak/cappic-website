interface RootLayoutProps {
  children: React.ReactNode
  params: {
    lang: 'de' | 'en'
  }
}

export default async function RootLayout({ children, params }: RootLayoutProps) {
  // ... existing code ...
}
