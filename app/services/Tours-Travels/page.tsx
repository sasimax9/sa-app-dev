"use client";

import React from "react";
import Link from "next/link";
import {
  LucidePlane,
  LucideMapPin,
  LucideLuggage,
} from "lucide-react";

const TourServices = [
  {
    name: "Flight Booking",
    icon: LucidePlane,
    href: "/flight-booking", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Hotel Reservations",
    icon: LucideMapPin,
    href: "/hotel-reservations", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Travel Packages",
    icon: LucideLuggage,
    href: "/travel-packages", // Link to the internal page
    color: "text-green-600",
  },
];

const TourMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Tours and Travels</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {TourServices.map((service) => (
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

export default TourMenu;
