"use client"

import { useState } from "react"
import { ChevronRight } from 'lucide-react'

const eventmanagement = [
  { name: "Brahmin", categories: ["Single Door", "Double Door", "Side by Side", "French Door"] },
  { name: "Band Melam", categories: ["Front Load", "Top Load", "Semi-Automatic", "Fully Automatic"] },
  { name: "Flower Decoration", categories: ["LED", "OLED", "QLED", "Smart TV"] },
  { name: "Lighting", categories: ["Wall Mounted", "Island", "Built-in", "Corner"] },
  { name: "Sound/Music", categories: ["Electric", "Gas", "Solar", "Heat Pump"] },
  { name: "Food Catering", categories: ["Solo", "Grill", "Convection", "Built-in"] },
  { name: "Photo&Video", categories: ["Solo", "Grill", "Convection", "Built-in"] },
  { name: "Chakali", categories: ["Solo", "Grill", "Convection", "Built-in"] },
]

export default function EventManagementLayout({
  children,
}: {
  children: React.ReactNode
}) {
  const [selectedAppliance, setSelectedAppliance] = useState(eventmanagement[0])

  return (
    <div className="flex flex-col md:flex-row">
      <aside className="w-full md:w-64 bg-gray-100 p-4">
        <nav>
          <ul>
            {eventmanagement.map((management) => (
              <li key={management.name} className="mb-2">
                <button
                  onClick={() => setSelectedAppliance(management)}
                  className={`flex items-center justify-between w-full p-2 rounded-md ${
                    selectedAppliance.name === management.name
                      ? "bg-blue-500 text-white"
                      : "bg-white text-gray-800 hover:bg-gray-200"
                  }`}
                >
                  {management.name}
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
            <div key={category} className="p-4 bg-gray-300 rounded-lg shadow-md">
              {category}
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

