import type { Metadata } from 'next'
import './styles/globals.css'
import { Inter } from 'next/font/google'
import { Noto_Sans_Bengali } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ subsets: ['latin'] })
const bengali = Noto_Sans_Bengali({ subsets: ['bengali'], weight: ['400','500','700'] })

export const metadata: Metadata = {
  title: 'Helping Hands Charity',
  description: 'Comprehensive charity management platform',
  icons: {
    icon: '/favicon.ico',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={inter.className}>
      <body>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
      </body>
    </html>
  )
}
