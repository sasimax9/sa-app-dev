"use client";

import React from "react";
import Link from "next/link";
import {
  Brush,
  LucideHammer,
  LucideRuler,
  LucideWrench,
  Trees,
} from "lucide-react";

const CarpenterServices = [
 
  {
    name: "Work For New Construction",
    icon: Trees,
    href: "https://wa.me/919652575313?text=hi I Need Carpenter For New Construction.<Type your Address here>", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Door and Window Repair",
    icon: LucideWrench,
    href: "/door-window-repair", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Furniture Repair",
    icon: LucideHammer,
    href:  "https://wa.me/919652575313?text=hi I Need Carpenter  <Type Your Problem.><Type your Address here>", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Wood Polishing",
    icon: Brush,
    href:  "https://wa.me/919652575313?text=hi I Need Carpenter For Polshing.<Type your Address here>", // Link to the internal page
    color: "text-yellow-500",
  },
  
];

const CarpenterMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Carpenter Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {CarpenterServices.map((service) => (
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

export default CarpenterMenu;
