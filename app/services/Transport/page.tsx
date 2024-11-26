"use client";

import React from "react";
import Link from "next/link";
import {
  LucideZap,
  LucidePlug,
  LucideWrench,
  CalendarCog,
  Truck,
  Car,
  Package,
} from "lucide-react";

const TransportServices = [
  {
    name: "Truck",
    icon: Truck,
    href: "https://wa.me/919652575313?text=hi I Need Electrical Installation Services. <Type your Address here>",
    color: "text-blue-500",
  },
  {
    name: "Van",
    icon: Car,
    href: "https://wa.me/919652575313?text=hi I Need Electrical Repair Services. <Type your Address here>",
    color: "text-orange-500",
  },
  {
    name: "Logistics",
    icon: Package,
    href: "https://wa.me/919652575313?text=hi I Need Electrical Maintenance Services. <Type your Address here>",
    color: "text-green-600",
  },
];

const TransportMenu: React.FC = () => {
  return (
    <div className="p-6"> 
      <h1 className="text-2xl font-bold text-center mb-6">Transport Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TransportServices.map((service) => (
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

export default TransportMenu;
