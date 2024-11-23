"use client"

import { useState } from "react"
import { ChevronRight } from 'lucide-react'

const homeAppliances = [
  { name: "Fridge", categories: ["Single Door", "Double Door", "Side by Side", "French Door"] },
  { name: "Washing Machine", categories: ["Front Load", "Top Load", "Semi-Automatic", "Fully Automatic"] },
  { name: "TV", categories: ["LED", "OLED", "QLED", "Smart TV"] },
  { name: "Chimney", categories: ["Wall Mounted", "Island", "Built-in", "Corner"] },
  { name: "Geyser", categories: ["Electric", "Gas", "Solar", "Heat Pump"] },
  { name: "Microwave Oven", categories: ["Solo", "Grill", "Convection", "Built-in"] },
]

export default function HomeApplianceLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedAppliance, setSelectedAppliance] = useState(homeAppliances[0])

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            {homeAppliances.map((appliance) => (
              <li key={appliance.name} className="mb-2">
                <button
                  onClick={() => setSelectedAppliance(appliance)}
                  className={`flex items-center justify-between w-full p-2 rounded-md ${
                    selectedAppliance.name === appliance.name
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {appliance.name}
                  <ChevronRight className="h-4 w-4" />
                </button>
              </li>
            ))}
          </ul>
        </nav>
      </aside>
      <main className="flex-1 p-4">
        <h1 className="text-3xl font-bold mb-4">{selectedAppliance.name}</h1>
        <div className="grid grid-cols-2 md:grid-cols-3 gap-4">
          {selectedAppliance.categories.map((category) => (
            <div key={category} className="p-4 bg-white rounded-lg shadow-md">
              {category}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

