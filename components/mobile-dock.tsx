"use client"

import { Home, Search, User, Menu } from 'lucide-react'
import Link from 'next/link'
import { usePathname } from 'next/navigation'

const dockItems = [
  { icon: Home, label: 'Home', href: '/' },
  { icon: Search, label: 'Search', href: '/search' },
  { icon: User, label: 'Partner With Us', href: '/profile' },
  { icon: Menu, label: 'Services', href: '/menu' },
]

export function MobileDock() {
  const pathname = usePathname()

  return (
    <div className="fixed bottom-0 left-0 z-50 w-full h-16 bg-background border-t md:hidden">
      <div className="grid h-full max-w-lg grid-cols-4 mx-auto">
        {dockItems.map((item) => (
          <Link
            key={item.label}
            href={item.href}
            className={`inline-flex flex-col items-center justify-center px-5 hover:bg-accent group ${
              pathname === item.href ? 'text-primary' : 'text-foreground/60'
            }`}
          >
            <item.icon className="w-6 h-6 mb-1 transition-colors" />
            <span className="text-xs transition-colors">{item.label}</span>
          </Link>
        ))}
      </div>
    </div>
  )
}

