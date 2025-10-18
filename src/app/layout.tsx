import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'

const inter = Inter({ subsets: ['latin'], display: 'swap', variable: '--font-inter' })
const bengali = Noto_Sans_Bengali({ subsets: ['bengali'], weight: ['400','500','600','700','800'], display: 'swap', variable: '--font-bengali' })

export const metadata: Metadata = {
  title: {
    default: 'Helping Hands Charity',
    template: '%s | Helping Hands Charity',
  },
}

export default function RootLayout({ children }: { children: React.ReactNode }) {
  return (
    <html lang="en" className={`${inter.variable} ${bengali.variable}`}>
      <body>{children}</body>
    </html>
  )
}
