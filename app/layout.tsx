import type { Metadata } from 'next'
import { Montserrat } from 'next/font/google'
import './globals.css'
import Sidebar from '@/components/Sidebar'

const montserrat = Montserrat({
  variable: '--font-montserrat',
  subsets: ['latin'],
  weight: ['400', '500', '600', '700'],
})

export const metadata: Metadata = {
  title: 'Konrad Galan - Photography',
  description: 'Photography portfolio of Konrad Galan - exploring the intersection of place, identity, and the human need for connection',
}

export default function RootLayout({
  children,
}: Readonly<{
  children: React.ReactNode
}>) {
  return (
    <html lang="en">
      <body
        className={`${montserrat.variable} antialiased`}
      >
        <div className="flex min-h-screen">
          <Sidebar />
          <main className="flex-1">
            {children}
          </main>
        </div>
      </body>
    </html>
  )
}

