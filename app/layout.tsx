import type { Metadata } from 'next'
import './globals.css'

export const metadata: Metadata = {
  title: 'Ashish Kumar | Software Engineer',
  description: 'Portfolio website of Ashish Kumar',
  generator: 'Ashish Kumar',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body>{children}</body>
    </html>
  )
}
