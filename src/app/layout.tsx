import type { Metadata } from 'next'

import './globals.css'
import { inter } from '@/app/libs/fonts'

export const metadata: Metadata = {
  title: 'Its Kissha - Cosmetic store',
  description: 'A cosmetic store for every woman needs'
}

export default function RootLayout ({
  children
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body className={`${inter.className} antialiased`}>{children}</body>
    </html>
  )
}
