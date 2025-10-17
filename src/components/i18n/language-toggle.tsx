'use client'
import { useState } from 'react'
import { usePathname, useRouter } from 'next/navigation'
import { Button } from '@/components/ui/button'
import { Badge } from '@/components/ui/badge'
import { GlobeAltIcon } from '@heroicons/react/24/outline'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()
  const [isLoading, setIsLoading] = useState(false)

  const currentLang = pathname?.startsWith('/bn') ? 'bn' : 'en'
  const langLabels = { en: 'English', bn: 'বাংলা' }

  const toggle = async () => {
    setIsLoading(true)
    const isBn = pathname?.startsWith('/bn')
    const next = isBn 
      ? pathname?.replace('/bn', '') || '/'
      : `/bn${pathname === '/' ? '' : pathname}`
    
    router.push(next)
    
    // Reset loading after navigation
    setTimeout(() => setIsLoading(false), 300)
  }

  return (
    <Button
      onClick={toggle}
      variant="outline"
      size="sm"
      disabled={isLoading}
      className="group relative overflow-hidden"
    >
      <GlobeAltIcon className="h-4 w-4 mr-1.5 group-hover:rotate-12 transition-transform" />
      <span className="hidden sm:inline mr-1">{langLabels[currentLang]}</span>
      <Badge variant="secondary" className="text-xs">
        {currentLang.toUpperCase()}
      </Badge>
      {isLoading && (
        <div className="absolute inset-0 bg-white/50 flex items-center justify-center">
          <div className="h-3 w-3 border border-charity-400 border-t-transparent rounded-full animate-spin" />
        </div>
      )}
    </Button>
  )
}