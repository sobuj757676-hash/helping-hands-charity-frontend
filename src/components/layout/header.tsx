import { LanguageToggle } from '@/components/i18n/language-toggle'
import Link from 'next/link'

export default function Header() {
  return (
    <header className="sticky top-0 z-40 w-full bg-white/80 backdrop-blur border-b">
      <div className="container-responsive flex h-16 items-center justify-between">
        <Link href="/" className="flex items-center gap-2 font-bold text-charity-700">
          <span>🤝</span>
          <span>Helping Hands</span>
        </Link>
        <nav className="hidden md:flex items-center gap-6 text-sm font-medium">
          <Link href="/about">About</Link>
          <Link href="/events">Events</Link>
          <Link href="/blog">Blog</Link>
          <Link href="/contact">Contact</Link>
        </nav>
        <div className="flex items-center gap-3">
          <LanguageToggle />
          <Link href="/donate" className="px-4 py-2 rounded-md bg-charity-500 text-white">Donate</Link>
          <Link href="/auth/signin" className="px-4 py-2 rounded-md border">Sign In</Link>
        </div>
      </div>
    </header>
  )
}
