import { ReactNode } from "react"
import Link from "next/link"

interface ServiceLayoutProps {
  children: ReactNode
}

const services = [
  { name: "Construction", href: "/services/construction" },
  { name: "Event Management", href: "/services/event-management" },
  { name: "Brahmin", href: "/services/brahmin" },
  { name: "Tours & Travels", href: "/services/tours-travels" },
  { name: "Web Design", href: "/services/web-design" },
  { name: "PC Laptop Repair", href: "/services/pc-laptop-repair" },
  { name: "Cleaning", href: "/services/cleaning" },
  { name: "Transport", href: "/services/transport" },
  { name: "Finance", href: "/services/finance" },
  { name: "JCB", href: "/services/jcb" },
  { name: "Water Servicing", href: "/services/water-servicing" },
  { name: "Mechanics", href: "/services/mechanics" },
  { name: "Home Appliance", href: "/services/home-appliance" },
]

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <div className="flex">
      
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

