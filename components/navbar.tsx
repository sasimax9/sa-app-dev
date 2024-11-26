"use client"

import { useState } from "react"
import Link from "next/link"
import { Menu, X, Phone, Sun, Moon } from 'lucide-react'
import { Button } from "@/components/ui/button"
import { useTheme } from "next-themes"
import { PartnerForm } from "./Partner-form"



const navItems = [
  { name: "Services", href:"/" },
  { name: "About", href: "/" },
  { name: "Contact", href: "/" },
]

export function Navbar() {
  const [isOpen, setIsOpen] = useState(false)
  const { theme, setTheme } = useTheme()

  return (
    <nav className="sticky top-0 z-50 bg-background border-b">
      <div className="max-w-7xl mx-auto px-4 sm:px-6 lg:px-8">
        <div className="flex justify-between h-16">
          <div className="flex">
            <Link href="/" className="flex-shrink-0 flex items-center">
              <img className="h-8 w-auto" src="/logo.svg" alt="Logo" />
            </Link>
          </div>
          <div className="hidden md:flex items-center space-x-4">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="text-foreground hover:text-foreground/80"
              >
                {item.name}
              </Link>
            ))}
            <Link href="https://wa.me/919652575313" className="text-green-500">
              <Phone className="h-5 w-5" />
            </Link>
            <PartnerForm />
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setTheme(theme === "dark" ? "light" : "dark")}
            >
              <Sun className="h-[1.2rem] w-[1.2rem] rotate-0 scale-100 transition-all dark:-rotate-90 dark:scale-0" />
              <Moon className="absolute h-[1.2rem] w-[1.2rem] rotate-90 scale-0 transition-all dark:rotate-0 dark:scale-100" />
              <span className="sr-only">Toggle theme</span>
            </Button>
          </div>
          <div className="md:hidden flex items-center">
            <Button
              variant="ghost"
              size="icon"
              onClick={() => setIsOpen(!isOpen)}
            >
              <span className="sr-only">Open main menu</span>
              {isOpen ? (
                <X className="block h-6 w-6" aria-hidden="true" />
              ) : (
                <Menu className="block h-6 w-6" aria-hidden="true" />
              )}
            </Button>
          </div>
        </div>
      </div>
      {isOpen && (
        <div className="md:hidden">
          <div className="px-2 pt-2 pb-3 space-y-1 sm:px-3">
            {navItems.map((item) => (
              <Link
                key={item.name}
                href={item.href}
                className="block px-3 py-2 rounded-md text-base font-medium text-foreground hover:text-foreground/80 hover:bg-accent"
              >
                {item.name}
              </Link>
            ))}
            <Link
              href="https://wa.me/919652575313"
              className="block px-3 py-2 rounded-md text-base font-medium text-green-500 hover:bg-accent"
            >
              WhatsApp
            </Link>
            <PartnerForm />
          </div>
        </div>
      )}
    </nav>
  )
}

