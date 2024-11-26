"use client";

import Link from "next/link";
import { Battery, BatteryFull, WrenchIcon } from "lucide-react";

type InverterService = {
  name: string;
  icon: React.FC<React.SVGProps<SVGSVGElement>>; // Type for Lucide icons
  href: string;
  color: string;
};

const inverterServices: InverterService[] = [
  { name: "Buy & Install", icon: Battery, href: "https://wa.me/919652575313?text=hi I Need Inverter,Shall We Discuss More Details??.<Type your Address here>", color: "text-yellow-500" },
  { name: "Only Installation ", icon: BatteryFull, href: "https://wa.me/919652575313?text=hi I Have Inverter,Need Installation Only.<Type your Address here>", color: "text-green-500" },
  { name: "Repair", icon: WrenchIcon, href: "https://wa.me/919652575313?text=hi I Am Facing Problem With My Inverter, I Need Your Service.<Type your Address here>", color: "text-orange-500" },
];

const sendTextMessage = async (serviceName: string) => {
  try {
    const response = await fetch("/api/send-text", {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify({ message: `Booking request for ${serviceName}` }),
    });

    if (!response.ok) {
      throw new Error("Failed to send text message");
    }

    alert("Booking request sent successfully!");
  } catch (error) {
    alert("Failed to send booking request. Please try again.");
  }
};

const InverterSubmenu: React.FC = () => {
  return (
    <div className="p-6">
      <h1 className="text-2xl font-bold text-center mb-6">Inverter Services</h1>
      <div className="grid grid-cols-2 sm:grid-cols-3 md:grid-cols-4 lg:grid-cols-6 gap-4">
        {inverterServices.map((service) => (
          <div
            key={service.name}
            className="flex flex-col items-center p-4 bg-white rounded-lg shadow-md hover:shadow-lg transition-shadow"
          >
            <service.icon className={`h-12 w-12 mb-2 ${service.color}`} />
            <span className="text-sm text-center font-medium mb-4">
              {service.name}
            </span>
            <button
              onClick={() => sendTextMessage(service.name)}
              className="px-4 py-1 bg-green-400 text-white rounded hover:bg-gray-400 transition"
            >
              Book Now
            </button>
          </div>
        ))}
      </div>
    </div>
  );
};

export default InverterSubmenu;
