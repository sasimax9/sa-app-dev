import Link from "next/link";
import {
  Home,
  Calendar,
  User,
  Plane,
  Globe,
  Laptop,
  Trash2,
  Truck,
  DollarSign,
  Cog,
  Droplet,
  Wrench,
  Tv,
  Camera,
  Flower,
  Lightbulb,
  ChefHat,
  Music,
  Car,
  CameraIcon,
  LucideWrench,
} from "lucide-react";

const services = [
  { name: "Purchase&Installation", icon: CameraIcon, href: "/cc cameras/Purchase&Installation", color: "text-yellow-500" },
  { name: "Inatallation Only", icon: Camera, href: "/cc cameras/Inatallation Only", color: "text-green-600" },
  { name: "Repair", icon: LucideWrench, href: "/cc cameras/Repair", color: "text-orange-500" },
 
];

const ServiceGrid: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Our Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {services.map((service) => (
          <Link
            key={service.name}
            href={service.href}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <service.icon className={`h-12 w-12 mb-2 ${service.color}`} />
            <span className="text-sm text-center font-medium">{service.name}</span>
          </Link>
        ))}
      </div>
    </div>
  );
};

export default ServiceGrid;
