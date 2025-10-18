'use client'
import { useState } from 'react'
import Link from 'next/link'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { LanguageToggle } from '@/components/i18n/language-toggle'
import { HeartIcon, Bars3Icon, XMarkIcon, UserIcon, ChevronDownIcon } from '@heroicons/react/24/outline'
import { HeartIcon as HeartSolidIcon } from '@heroicons/react/24/solid'
import { cn } from '@/lib/utils'

const navigation = [
  { name: 'About', href: '/about' },
  { name: 'Programs', href: '/programs' },
  { name: 'Events', href: '/events' },
  { name: 'Stories', href: '/stories' },
  { name: 'Blog', href: '/blog' },
  { name: 'Contact', href: '/contact' },
]

export default function Header() {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false)
  const [isScrolled, setIsScrolled] = useState(false)

  // In a real app, you'd check scroll position
  // useEffect(() => {
  //   const handleScroll = () => setIsScrolled(window.scrollY > 10)
  //   window.addEventListener('scroll', handleScroll)
  //   return () => window.removeEventListener('scroll', handleScroll)
  // }, [])

  return (
    <header className={cn(
      "sticky top-0 z-50 w-full transition-all duration-200",
      isScrolled 
        ? "bg-white/95 backdrop-blur-md shadow-sm" 
        : "bg-white/80 backdrop-blur-sm"
    )}>
      <div className="container-responsive">
        <div className="flex h-16 items-center justify-between">
          {/* Logo */}
          <Link href="/" className="flex items-center gap-3 group">
            <div className="relative">
              <HeartSolidIcon className="h-8 w-8 text-charity-500 group-hover:scale-110 transition-transform duration-200" />
              <div className="absolute -inset-1 bg-charity-400/20 rounded-full blur opacity-0 group-hover:opacity-100 transition-opacity duration-200" />
            </div>
            <div>
              <span className="text-xl font-bold text-charity-700 group-hover:text-charity-600 transition-colors">
                Helping Hands
              </span>
              <div className="text-xs text-charity-500 font-medium tracking-wide">
                CHARITY
              </div>
            </div>
          </Link>

          {/* Desktop Navigation */}
          <nav className="hidden lg:flex items-center gap-1">
            {navigation.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="px-3 py-2 text-sm font-medium text-gray-700 rounded-lg hover:text-charity-600 hover:bg-charity-50/50 transition-all duration-200 relative group"
              >
                {item.name}
                <div className="absolute bottom-0 left-1/2 w-0 h-0.5 bg-charity-500 transition-all duration-200 group-hover:w-3/4 group-hover:left-[12.5%]" />
              </Link>
            ))}
          </nav>

          {/* Action Buttons */}
          <div className="flex items-center gap-3">
            {/* Language Toggle - Hidden on mobile for space */}
            <div className="hidden md:block">
              <LanguageToggle />
            </div>

            {/* Emergency Donation - Always visible */}
            <Button
              asChild
              variant="glow"
              size="sm"
              className="relative overflow-hidden group"
            >
              <Link href="/donate">
                <HeartIcon className="h-4 w-4 mr-1.5 group-hover:scale-110 transition-transform" />
                <span className="hidden sm:inline">Donate Now</span>
                <span className="sm:hidden">Donate</span>
                <Badge 
                  variant="secondary" 
                  className="ml-2 bg-white/20 text-white border-white/20 hidden md:inline-flex"
                >
                  Emergency
                </Badge>
              </Link>
            </Button>

            {/* Sign In Button */}
            <Button asChild variant="outline" size="sm" className="hidden sm:flex">
              <Link href="/auth/signin">
                <UserIcon className="h-4 w-4 mr-1.5" />
                Sign In
              </Link>
            </Button>

            {/* Mobile menu button */}
            <Button
              variant="ghost"
              size="icon"
              className="lg:hidden"
              onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
            >
              {mobileMenuOpen ? (
                <XMarkIcon className="h-5 w-5" />
              ) : (
                <Bars3Icon className="h-5 w-5" />
              )}
            </Button>
          </div>
        </div>

        {/* Mobile Navigation */}
        {mobileMenuOpen && (
          <div className="lg:hidden border-t bg-white/95 backdrop-blur-md animate-fade-in">
            <div className="py-4 space-y-1">
              {navigation.map((item) => (
                <Link
                  key={item.name}
                  href={item.href}
                  className="block px-3 py-2 text-base font-medium text-gray-700 hover:text-charity-600 hover:bg-charity-50 rounded-lg transition-colors"
                  onClick={() => setMobileMenuOpen(false)}
                >
                  {item.name}
                </Link>
              ))}
              <hr className="my-4" />
              <div className="flex items-center justify-between px-3">
                <LanguageToggle />
                <Button asChild size="sm">
                  <Link href="/auth/signin" onClick={() => setMobileMenuOpen(false)}>
                    <UserIcon className="h-4 w-4 mr-1.5" />
                    Sign In
                  </Link>
                </Button>
              </div>
            </div>
          </div>
        )}
      </div>

      {/* Emergency Banner - Optional */}
      <div className="bg-gradient-to-r from-red-600 to-red-500 text-white py-2 text-center text-sm animate-pulse hidden">
        <span className="font-medium">🚨 Emergency Relief Fund:</span> Help flood victims in Bangladesh.
        <Link href="/donate" className="ml-2 underline font-semibold hover:no-underline">
          Donate Now →
        </Link>
      </div>
    </header>
  )
}