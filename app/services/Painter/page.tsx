"use client";

import React from "react";
import Link from "next/link";
import {
  LucideBrush,
  LucidePaintBucket,
  LucideRuler,
  Paintbrush,
  Paintbrush2Icon,
} from "lucide-react";
import { Water_Brush } from "next/font/google";

const PaintingServices = [

  {
    name: "For New Construction",
    icon: LucidePaintBucket,
    href: "https://wa.me/919652575313?text=hi I Need Painting For My New Construction.<Type your Address here>", // Link to the internal page
    color: "text-red-500",
  },


  {
    name: "Interior Painting",
    icon: LucideBrush,
    href: "https://wa.me/919652575313?text=hi I Need Painting Only For Interior.<Type your Address here>", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Exterior Painting",
    icon: Paintbrush,
    href: "https://wa.me/919652575313?text=hi I Need Painting Only For Exterior.<*Type* *your* *Address* *here*>", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Interior&Exterior",
    icon: LucideRuler,
    href:"https://wa.me/919652575313?text=hi I Need Painting  For Interior Exterior For My Old Bulding.<*Type* *your* *Address* *here*>", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Others",
    icon: Paintbrush2Icon,
    href: "https://wa.me/919652575313?text=hi I Need Painting Service. <Type Your Requiremet>.  <*Type* *your* *Address* *here*>", // Link to the internal page
    color: "text-yellow-500",
  },
  
];

const PaintingMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Painting Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {PaintingServices.map((service) => (
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

export default PaintingMenu;
