import './globals.css'
import type { Metadata } from 'next'
import { montserrat } from './fonts'
export const metadata: Metadata = {
  title: 'Past Auction',
  description: 'For Classic Cars Lovers',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en">
      <body className={montserrat.className}>
        {children}
      </body>
    </html>
  )
}
