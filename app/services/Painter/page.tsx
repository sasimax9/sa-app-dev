"use client";

import React from "react";
import Link from "next/link";
import {
  LucideBrush,
  LucidePaintBucket,
  LucideRuler,
} from "lucide-react";

const PaintingServices = [
  {
    name: "Interior Painting",
    icon: LucideBrush,
    href: "/interior-painting", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Exterior Painting",
    icon: LucidePaintBucket,
    href: "/exterior-painting", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Wall Texturing",
    icon: LucideRuler,
    href: "/wall-texturing", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Furniture Painting",
    icon: LucideBrush,
    href: "/furniture-painting", // Link to the internal page
    color: "text-yellow-500",
  },
  {
    name: "Decorative Painting",
    icon: LucidePaintBucket,
    href: "/decorative-painting", // Link to the internal page
    color: "text-red-500",
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
