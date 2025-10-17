import type { Metadata } from 'next'
import '../styles/globals.css'
import { Inter, Noto_Sans_Bengali } from 'next/font/google'
import Header from '@/components/layout/header'
import Footer from '@/components/layout/footer'

const inter = Inter({ 
  subsets: ['latin'],
  display: 'swap',
  variable: '--font-inter'
})

const bengali = Noto_Sans_Bengali({ 
  subsets: ['bengali'], 
  weight: ['400','500','600','700','800'],
  display: 'swap',
  variable: '--font-bengali'
})

export const metadata: Metadata = {
  metadataBase: new URL('https://helpinghands.org'),
  title: {
    default: 'Helping Hands Charity - Transform Lives Through Giving',
    template: '%s | Helping Hands Charity'
  },
  description: 'Join Helping Hands Charity to make a lasting impact through education support, healthcare access, and emergency relief across Bangladesh. 100% transparent donations.',
  keywords: [
    'charity Bangladesh', 'donation Bangladesh', 'NGO Bangladesh', 'education support',
    'healthcare charity', 'emergency relief', 'helping hands', 'poverty alleviation',
    'community development', 'humanitarian aid', 'social impact', 'charitable giving'
  ],
  authors: [{ name: 'Helping Hands Charity Foundation' }],
  creator: 'Helping Hands Charity',
  publisher: 'Helping Hands Charity Foundation',
  formatDetection: {
    email: false,
    address: false,
    telephone: false,
  },
  category: 'charity',
  classification: 'Non-profit Organization',
  openGraph: {
    type: 'website',
    locale: 'en_US',
    alternateLocale: ['bn_BD'],
    url: 'https://helpinghands.org',
    title: 'Helping Hands Charity - Transform Lives Through Giving',
    description: 'Join thousands in creating positive change across Bangladesh. Support education, healthcare, and emergency relief with 100% transparency.',
    siteName: 'Helping Hands Charity',
    images: [
      {
        url: '/og-image.jpg',
        width: 1200,
        height: 630,
        alt: 'Helping Hands Charity - Making a difference together',
        type: 'image/jpeg',
      },
      {
        url: '/og-image-square.jpg',
        width: 600,
        height: 600,
        alt: 'Helping Hands Charity Logo',
        type: 'image/jpeg',
      }
    ],
  },
  twitter: {
    card: 'summary_large_image',
    title: 'Helping Hands Charity - Transform Lives Through Giving',
    description: 'Join thousands in creating positive change across Bangladesh. Support education, healthcare, and emergency relief.',
    site: '@helpinghandsbd',
    creator: '@helpinghandsbd',
    images: ['/twitter-image.jpg'],
  },
  robots: {
    index: true,
    follow: true,
    googleBot: {
      index: true,
      follow: true,
      'max-video-preview': -1,
      'max-image-preview': 'large',
      'max-snippet': -1,
    },
  },
  icons: {
    icon: [
      { url: '/favicon-16x16.png', sizes: '16x16', type: 'image/png' },
      { url: '/favicon-32x32.png', sizes: '32x32', type: 'image/png' },
    ],
    apple: [
      { url: '/apple-touch-icon.png', sizes: '180x180', type: 'image/png' },
    ],
    other: [
      { rel: 'mask-icon', url: '/safari-pinned-tab.svg', color: '#ed6b2f' },
    ],
  },
  manifest: '/site.webmanifest',
  alternates: {
    canonical: 'https://helpinghands.org',
    languages: {
      'en': 'https://helpinghands.org',
      'bn': 'https://helpinghands.org/bn',
    },
  },
  verification: {
    google: 'google-site-verification-code',
    yandex: 'yandex-verification-code',
    yahoo: 'yahoo-site-verification-code',
  },
  other: {
    'fb:app_id': 'facebook-app-id',
    'charity:registration': 'BD-NGO-2020-001234',
    'charity:tax_exempt': '80G Certified',
  },
}

// Structured Data
const organizationStructuredData = {
  '@context': 'https://schema.org',
  '@type': 'NGO',
  '@id': 'https://helpinghands.org/#organization',
  name: 'Helping Hands Charity Foundation',
  alternateName: 'Helping Hands',
  description: 'A charitable organization focused on education support, healthcare access, and emergency relief across Bangladesh.',
  url: 'https://helpinghands.org',
  logo: 'https://helpinghands.org/logo.png',
  image: 'https://helpinghands.org/og-image.jpg',
  sameAs: [
    'https://facebook.com/helpinghandsbd',
    'https://twitter.com/helpinghandsbd',
    'https://instagram.com/helpinghandsbd',
    'https://linkedin.com/company/helpinghandsbd'
  ],
  address: {
    '@type': 'PostalAddress',
    streetAddress: '123 Charity Lane, Dhanmondi',
    addressLocality: 'Dhaka',
    postalCode: '1205',
    addressCountry: 'BD'
  },
  contactPoint: {
    '@type': 'ContactPoint',
    telephone: '+880-1XXX-XXXXXX',
    contactType: 'customer service',
    email: 'info@helpinghands.org',
    availableLanguage: ['English', 'Bengali']
  },
  foundingDate: '2020-01-01',
  keywords: 'charity, donation, Bangladesh, education, healthcare, emergency relief',
  nonprofitStatus: 'NonprofitType',
  taxID: 'BD-NGO-2020-001234'
}

export default function RootLayout({
  children,
}: {
  children: React.ReactNode
}) {
  return (
    <html lang="en" className={`${inter.variable} ${bengali.variable}`}>
      <head>
        {/* Additional Meta Tags */}
        <meta name="theme-color" content="#ed6b2f" />
        <meta name="msapplication-TileColor" content="#ed6b2f" />
        <meta name="apple-mobile-web-app-capable" content="yes" />
        <meta name="apple-mobile-web-app-status-bar-style" content="default" />
        <meta name="format-detection" content="telephone=no" />
        
        {/* Structured Data */}
        <script
          type="application/ld+json"
          dangerouslySetInnerHTML={{
            __html: JSON.stringify(organizationStructuredData)
          }}
        />
        
        {/* Preload Critical Resources */}
        <link rel="preload" href="/fonts/inter-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        <link rel="preload" href="/fonts/noto-sans-bengali-var.woff2" as="font" type="font/woff2" crossOrigin="anonymous" />
        
        {/* DNS Prefetch */}
        <link rel="dns-prefetch" href="//images.unsplash.com" />
        <link rel="dns-prefetch" href="//fonts.googleapis.com" />
        <link rel="dns-prefetch" href="//www.google-analytics.com" />
      </head>
      <body className={inter.className}>
        <Header />
        <main className="min-h-screen">{children}</main>
        <Footer />
        
        {/* Analytics - Replace with your tracking code */}
        <script
          dangerouslySetInnerHTML={{
            __html: `
              // Google Analytics or other tracking code
              console.log('Analytics initialized');
            `
          }}
        />
      </body>
    </html>
  )
}