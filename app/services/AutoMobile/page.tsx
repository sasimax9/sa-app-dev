"use client";

import React from "react";
import Link from "next/link";
import {
  LucideCar,
  LucideWrench,
  LucideLamp,
  LucideBike,
  LucideDroplet,
  LucideAlertTriangle,
  CarFrontIcon,
  CarTaxiFront,
} from "lucide-react";

const AutomobileServices = [
  
  
 
  {
    name: "Bike ",
    icon: LucideBike,
    href: "/bike-servicing", // Link to the internal page
    color: "text-black-500",
  },
  {
    name: "Car ",
    icon: CarTaxiFront,
    href: "/car-servicing", // Link to the internal page
    color: "text-red-500",
  },
 
];

const AutomobileMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Automobile Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {AutomobileServices.map((service) => (
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

export default AutomobileMenu;
