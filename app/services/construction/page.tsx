import Link from "next/link";
import {
  Hammer,
  Wrench,
  Ruler,
  Paintbrush,
  Building,
} from "lucide-react";

const constructionServices = [
  { name: "Masonry", icon: Hammer, href: "/services/construction/masonry", color: "text-gray-500" },
  { name: "Plumbing", icon: Wrench, href: "/services/construction/plumbing", color: "text-blue-500" },
  { name: "Carpentry", icon: Ruler, href: "/services/construction/carpentry", color: "text-yellow-500" },
  { name: "Painting", icon: Paintbrush, href: "/services/construction/painting", color: "text-green-500" },
  { name: "General Contracting", icon: Building, href: "/services/construction/general-contracting", color: "text-red-500" },
];

const ConstructionSubmenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Construction Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {constructionServices.map((service) => (
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

export default ConstructionSubmenu;
