"use client";

import React from "react";
import Link from "next/link";
import {
  
  AirVent,
  AirVentIcon,
  LucideBrush,
  WrenchIcon,
} from "lucide-react";

const AcServices = [
  {
    name: "New A.C. Install",
    icon: AirVent,
    href: "/gate-welding", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "A.c. Uninstall & Install",
    icon: AirVentIcon,
    href: "/grill-welding", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "A.c.Service",
    icon: LucideBrush,
    href: "/steel-structure-welding", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "A.c Repair",
    icon: WrenchIcon,
    href: "/pipe-welding", // Link to the internal page
    color: "text-yellow-500",
  },
 
];

const AcMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">A.C. Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {AcServices.map((service) => (
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

export default AcMenu;
