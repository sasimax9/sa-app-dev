"use client";

import React from "react";
import Link from "next/link";
import {
  LucideWrench,
  LucideHammer,
  LucideShield,
} from "lucide-react";

const WeldingServices = [
  {
    name: "Gate Welding",
    icon: LucideWrench,
    href: "/gate-welding", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Grill Welding",
    icon: LucideHammer,
    href: "/grill-welding", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Steel Structure Welding",
    icon: LucideShield,
    href: "/steel-structure-welding", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Pipe Welding",
    icon: LucideWrench,
    href: "/pipe-welding", // Link to the internal page
    color: "text-yellow-500",
  },
  {
    name: "Arc Welding",
    icon: LucideHammer,
    href: "/arc-welding", // Link to the internal page
    color: "text-red-500",
  },
];

const WeldingMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Welding Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {WeldingServices.map((service) => (
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

export default WeldingMenu;
