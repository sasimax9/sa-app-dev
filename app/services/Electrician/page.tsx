"use client";

import React from "react";
import Link from "next/link";
import {
  LucideZap,
  LucidePlug,
  LucideWrench,
  LucideFan,
  LucideLightbulb,
} from "lucide-react";

const ElectricalServices = [
  {
    name: "New Wiring For Construction",
    icon: LucidePlug,
    href: "https://wa.me/919652575313?text=hi I Need Electrician For My New Construction.<Type your Address here>" , // Link to the internal page
    color: "text-blue-500",
  },
  
  {
    name: "Switch Board Issue",
    icon: LucideZap,
    href:  "https://wa.me/919652575313?text=Hi I Have Trouble With Switch Boards.<Type your Address here>", // Link to the internal page
    color: "text-red-600",
  },
  {
    name: "Ceiling Fan",
    icon: LucideFan,
    href:  "https://wa.me/919652575313?text=hi I Need Electrician For My Ceiling Fan.<Type your Address here>", // Link to the internal page
    color: "text-yellow-500",
  },
  {
    name: "Stand Fan",
    icon: LucideFan,
    href:  "https://wa.me/919652575313?text=hi I Need Electrician  For My Stand Fan.<Type your Address here>", // Link to the internal page
    color: "text-green-500",
  },
  {
    name: "Lights",
    icon: LucideLightbulb,
    href: "https://wa.me/919652575313?text=hi I Need Electrician  <Type Your Problem.><Type your Address here>", // Link to the internal page
    color: "text-purple-500",
  },
  {
    name: "Others",
    icon: LucideWrench,
    href:  "https://wa.me/919652575313?text=<Type Your Requirement/problem.><Type your Address here>", // Link to the internal page
    color: "text-orange-500",
  },
];

const ElectricalMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Electrical Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {ElectricalServices.map((service) => (
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

export default ElectricalMenu;
