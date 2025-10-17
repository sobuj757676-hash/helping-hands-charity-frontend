'use client'
import { usePathname, useRouter } from 'next/navigation'

export function LanguageToggle() {
  const pathname = usePathname()
  const router = useRouter()

  const toggle = () => {
    const isBn = pathname?.startsWith('/bn')
    const next = isBn ? pathname?.replace('/bn', '/en') : `/bn${pathname === '/' ? '' : pathname}`
    router.push(next || '/bn')
  }

  return (
    <button onClick={toggle} className="px-3 py-2 rounded-md border">EN ⇄ BN</button>
  )
}
