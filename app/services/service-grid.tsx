import Link from "next/link"
import { Home, Calendar, User, Plane, Globe, Laptop, Trash2, Truck, DollarSign, Cog, Droplet, Wrench, Tv, CctvIcon, Car, Plug, PipetteIcon, WrenchIcon, DoorOpen, AirVent, ShowerHead, PaintRoller, Refrigerator, WashingMachine, ThermometerIcon, ThermometerSun, Waves, User2, Bug, Loader, Fan, Camera, Flower, Lightbulb, ChefHat, Music, Heater, FlameIcon, BrainCog, BatteryCharging, Rotate3D, Sunrise, Sun, RotateCcwIcon, Blend, EthernetPort } from 'lucide-react'

const services = [
  { name: "Architect", icon: Home, href: "https://wa.me/919059979016?text=hi I need Your Services,Shall We Discuss More Details.", color: "text-yellow-500" },
  { name: "Interior Designer", icon: BrainCog, href: "https://wa.me/919059979016?text=hi I need Your Services,Shall We Discuss More Details??.", color: "text-green-600" },
  { name: "Cctv", icon: CctvIcon, href: "/services/Cctv", color: "text-green-500" },
  { name: "Website Design", icon: Globe, href: "https://wa.me/918897390906?text=hi I need WebSite,Shall We Discuss More Details??.", color: "text-green-500" },
  { name: "Solar Power", icon: Sun, href: "https://wa.me/919652575313?text=hi I Need Solar Power,Shall We Discuss More Details??.<Type your Address here>", color: "text-red-500" },

  { name: "Inverter", icon: BatteryCharging, href: "/services/Inverter", color: "text-red-500" },
  { name: "Electrician", icon: Plug, href: "/services/Electrician", color: "text-red-500" },
  { name: "Plumber", icon: ShowerHead, href: "/services/Plumber", color: "text-indigo-500" },
  { name: "Carpenter", icon: DoorOpen, href: "/services/Carpenter", color: "text-purple-500" }, 
  { name: "Painter", icon: PaintRoller, href: "/services/Painter", color: "text-red-500" },
  { name: "Welder", icon: FlameIcon, href: "/services/Welder", color: "text-yellow-400" },
  { name: "Bore Well", icon: Waves, href: "/services/BoreWell", color: "text-red-500" },

  { name: "Mixer", icon: Rotate3D, href: "/services/Mixer", color: "text-red-500" },
  { name: "Grinder", icon: Blend, href: "/services/", color: "text-red-500" },
  { name: "A.C.Technician", icon: AirVent, href: "/services/A.C.Technician", color: "text-orange-500" },
  { name: "Air Cooler", icon: Fan, href: "/services/Air Cooler", color: "text-pink-500" },
  { name: " Refrigerator", icon: Refrigerator, href: "/services/Refrigerator", color: "text-blue-500" },
  { name: "Washing Machine", icon: WashingMachine, href: "/services/Washing Machine", color: "text-pink-500" },
  { name: "Chimney", icon: Loader, href: "/services/Chimney", color: "text-pink-500" },
  { name: "Geyser", icon: Heater, href: "/services/Geyser", color: "text-red-500" },
  { name: "Water Purifier", icon: Droplet, href: "/services/Water Purifier", color: "text-pink-500" },
  
  { name: "Pest Control", icon: Bug, href: "/services/Pest Control", color: "text-teal-500" },

  { name: "Brahmin", icon: User, href: "/services/brahmin", color: "text-orange-500" },
  { name: "Photo/Video", icon: Camera, href: "/services/Photo/Video", color: "text-orange-500" },
  { name: "Flower Decoration", icon: Flower, href: "/services/Flower Decoration", color: "text-orange-500" },
  { name: "Lighting", icon: Lightbulb, href: "/services/Lighting", color: "text-orange-500" },
  { name: "Food Catering", icon: ChefHat, href: "/services/Food Catering", color: "text-orange-500" },
  { name: "DJ Sounds", icon: Music, href: "/services/Sounds", color: "text-orange-500" },



  { name: "PC/Laptop Repair", icon: Laptop, href:"https://wa.me/919652575313?text=hi I Am Troble With pc/laptop.<Type your problem here>" , color: "text-green-500" },
  { name: "Networking", icon: EthernetPort, href:"https://wa.me/919652575313?text=hi I Am Troble With Networking.<Type your problem here>" , color: "text-green-500" },
 

  { name: "Automobile", icon: Wrench, href: "/services/AutoMobile", color: "text-gray-600" },
  { name: "JCB", icon: Cog, href: "/services/jcb", color: "text-yellow-600" },
  { name: "Finance", icon: DollarSign, href: "/services/Finance", color: "text-pink-500" },

  { name: "Tours&Travels", icon: Car, href: "/services/Tours-Travels", color: "text-blue-500" },
  { name: "Transport", icon: Truck, href: "/services/Transport", color: "text-indigo-500" },
]

export function ServiceGrid() {
  return (
    <div className="grid grid-cols-2 md:grid-cols-4 lg:grid-cols-6 gap-4 p-4">
      {services.map((service) => (
        <Link key={service.name} 
        href={service.href} 
        className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow">
          
          <service.icon className={`h-12 w-12 mb-2 ${service.color}`} />
          <span className="text-sm text-center">{service.name}</span>
        </Link>
      ))}
    </div>
  )
}

