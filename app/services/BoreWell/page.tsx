"use client";

import React from "react";
import Link from "next/link";
import {
  LucideDroplet,
  LucideDrill,
  LucideHeater,
} from "lucide-react";

const BoreWellServices = [
  {
    name: "Water Borewell Drilling",
    icon: LucideDrill,
    href: "/water-borewell-drilling", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Hand Pump Installation",
    icon: LucideDroplet,
    href: "/hand-pump-installation", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Water Supply Setup",
    icon: LucideHeater,
    href: "/water-supply-setup", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Borewell Maintenance",
    icon: LucideDrill,
    href: "/borewell-maintenance", // Link to the internal page
    color: "text-yellow-500",
  },
];

const BoreWellMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Bore Well Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {BoreWellServices.map((service) => (
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

export default BoreWellMenu;
