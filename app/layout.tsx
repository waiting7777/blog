import '@/styles/globals.css'
import type { Metadata } from 'next'
import { Inter } from 'next/font/google'
import { GlobalNav } from '@/ui/sidebar'
import { Analytics } from '@vercel/analytics/react';

const inter = Inter({ subsets: ['latin'] })

export const metadata: Metadata = {
  title: 'Waiting7777 (@waiting7777)',
  description: 'Waiting7777\'s Portfolio (Personal Website). Front-end Developer / Blogger',
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={inter.className}>
      <body className="bg-gray-1100 overflow-y-scroll bg-[url('/grid.svg')] pb-36">
        <GlobalNav />
        <div className="lg:pl-72">
          {children}
        </div>
        <Analytics />
      </body>
    </html>
  )
}
