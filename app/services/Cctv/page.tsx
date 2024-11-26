"Use client"

import Link from "next/link";
import {
  LucideWrench,
  CctvIcon,
  LucideCctv,
} from "lucide-react";

const Cctv = [
  { name: "Purchase & Install", icon: CctvIcon, href:"https://wa.me/919652575313?text=hi I Need Cctv Equipment And Installation.<Type your Address here>", color: "text-yellow-500" },
  { name: "Inatallation Only", icon: LucideCctv, href:"https://wa.me/919652575313?text=hi I Have All Cctv Equipment,I need Installation Only.  <Type your Address here>", color: "text-green-600" },
  { name: "Repair", icon: LucideWrench, href: "/cc cameras/Repair", color: "text-orange-500" },
 
];

const CctvMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Cctv Security Systems</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {Cctv.map((service) => (
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

export default  CctvMenu;
