"use client";

import React from "react";
import Link from "next/link";
import {
  
  AirVent,
  AirVentIcon,
  Album,
  Camera,
  CameraIcon,
  GalleryHorizontal,
  LucideBrush,
  WrenchIcon,
} from "lucide-react";

const PhotographyServices = [
  {
    name: "Photo & Video",
    icon: Camera,
    href: "/gate-welding", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Only PhotoShoot",
    icon: CameraIcon,
    href: "/grill-welding", // Link to the internal page
    color: "text-gray-700",
  },
  {
    name: "Only  Video",
    icon: GalleryHorizontal,
    href: "/steel-structure-welding", // Link to the internal page
    color: "text-green-600",
  },
  {
    name: "Album Designing & Making",
    icon: Album,
    href: "/pipe-welding", // Link to the internal page
    color: "text-orange-500",
  },
 
];

const PhotographyMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Photography Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {PhotographyServices.map((service) => (
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

export default PhotographyMenu;
