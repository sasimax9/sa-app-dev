"use client";

import React from "react";
import Link from "next/link";
import {
  LucideDollarSign,
  LucideCreditCard,
  LucideShield,
  LucideTrendingUp,
  HandCoins,
} from "lucide-react";

const FinanceServices = [
  {
    name: "Loans",
    icon: HandCoins,
    href: "/loans", // Link to the internal page
    color: "text-blue-500",
  },
  {
    name: "Credit Cards",
    icon: LucideCreditCard,
    href: "/credit-cards", // Link to the internal page
    color: "text-orange-500",
  },
  {
    name: "Insurance",
    icon: LucideShield,
    href: "/insurance", // Link to the internal page
    color: "text-purple-500",
  },
  {
    name: "Investment",
    icon: LucideTrendingUp,
    href: "/investment", // Link to the internal page
    color: "text-green-600",
  },
];

const FinanceMenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Financial Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {FinanceServices.map((service) => (
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

export default FinanceMenu;
