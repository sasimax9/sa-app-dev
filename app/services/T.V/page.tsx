"use client";

import React from "react";
import Link from "next/link";
import {
  
    MonitorCheckIcon,
  Tv,
  TvIcon,
} from "lucide-react";

const TvServices = [
  {
    name: "Old Color Tv",
    icon: Tv,
    href: "/gate-welding", // Link to the internal page
    color: "text-gray-500",
  },
  
  {
    name: "Lcd/Led",
    icon: MonitorCheckIcon,
    href: "/arc-welding", // Link to the internal page
    color: "text-blue-500",
  },
];

const TvMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">T.V Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TvServices.map((service) => (
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

export default TvMenu;
