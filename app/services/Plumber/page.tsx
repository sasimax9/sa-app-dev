"use client";

import React from "react";
import Link from "next/link";
import {
  LucideDroplet,
  LucideWrench,
  LucidePi,
} from "lucide-react";

const PlumbingServices = [
  {
    name: "Leak Repair",
    icon: LucideDroplet,
    href: "/leak-repair", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Pipe Installation",
    icon: LucidePi,
    href: "/pipe-installation", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Drain Cleaning",
    icon: LucideWrench,
    href: "/drain-cleaning", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Bathroom Fittings",
    icon: LucideWrench,
    href: "/bathroom-fittings", // Link to the internal page
    color: "text-yellow-500",
  },
  {
    name: "Water Heater Installation",
    icon: LucideDroplet,
    href: "/water-heater-installation", // Link to the internal page
    color: "text-red-500",
  },
];

const PlumbingMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Plumbing Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {PlumbingServices.map((service) => (
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

export default PlumbingMenu;
