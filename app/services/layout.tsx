import { ReactNode } from "react"
import Link from "next/link"
import { Wrench, Cog, DollarSign, Car, Truck, Bug, Camera, ChefHat, Flower, Lightbulb, Music, User } from "lucide-react"

interface ServiceLayoutProps {
  children: ReactNode
}

const services = [
  { name: "Electrician", href: "/services/Electrician" },
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

  { name: "Pest Control", icon: Bug, href: "/services/Pest Control", color: "text-teal-500" },
  { name: "Brahmin", icon: User, href: "/services/brahmin", color: "text-orange-500" },
  { name: "Photo/Video", icon: Camera, href: "/services/Photo/Video", color: "text-orange-500" },
  { name: "Flower Decoration", icon: Flower, href: "/services/Flower Decoration", color: "text-orange-500" },
  { name: "Lighting", icon: Lightbulb, href: "/services/Lighting", color: "text-orange-500" },
  { name: "Food Catering", icon: ChefHat, href: "/services/Food Catering", color: "text-orange-500" },
  { name: "DJ Sounds", icon: Music, href: "/services/Sounds", color: "text-orange-500" },

  { name: "Automobile", icon: Wrench, href: "/services/Automobile", color: "text-gray-600" },
  { name: "JCB", icon: Cog, href: "/services/jcb", color: "text-yellow-600" },
  { name: "Finance", icon: DollarSign, href: "/services/finance", color: "text-pink-500" },
  { name: "Tours & Travels", icon: Car, href: "/services/tours-travels", color: "text-blue-500" },
  { name: "Transport", icon: Truck, href: "/services/Transport", color: "text-indigo-500" },
]

export default function ServiceLayout({ children }: ServiceLayoutProps) {
  return (
    <div className="flex">
      
      <main className="flex-1 p-4">{children}</main>
    </div>
  )
}

