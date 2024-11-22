import Link from "next/link"
import { Home, Calendar, User, Plane, Globe, Laptop, Trash2, Truck, DollarSign, Cog, Droplet, Wrench, Tv } from 'lucide-react'

const services = [
  { name: "Construction", icon: Home, href: "/services/construction", color: "text-yellow-500" },
  { name: "Event Management", icon: Calendar, href: "/services/event-management", color: "text-purple-500" },
  { name: "Brahmin", icon: User, href: "/services/brahmin", color: "text-orange-500" },
  { name: "Tours & Travels", icon: Plane, href: "/services/tours-travels", color: "text-blue-500" },
  { name: "Web Design", icon: Globe, href: "/services/web-design", color: "text-green-500" },
  { name: "PC Laptop Repair", icon: Laptop, href: "/services/pc-laptop-repair", color: "text-red-500" },
  { name: "Cleaning", icon: Trash2, href: "/services/cleaning", color: "text-teal-500" },
  { name: "Transport", icon: Truck, href: "/services/transport", color: "text-indigo-500" },
  { name: "Finance", icon: DollarSign, href: "/services/finance", color: "text-pink-500" },
  { name: "JCB", icon: Cog, href: "/services/jcb", color: "text-yellow-600" },
  { name: "Water Servicing", icon: Droplet, href: "/services/water-servicing", color: "text-blue-600" },
  { name: "Mechanics", icon: Wrench, href: "/services/mechanics", color: "text-gray-600" },
  { name: "Home Appliance", icon: Tv, href: "/services/home-appliance", color: "text-green-600" },
]

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {services.map((service) => (
        <Link key={service.name} href={service.href} className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          <service.icon className={`h-12 w-12 mb-2 ${service.color}`} />
          <span className="text-sm text-center">{service.name}</span>
        </Link>
      ))}
    </div>
  )
}

