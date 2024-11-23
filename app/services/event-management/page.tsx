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

export default function HomeAppliancePage() {
  const [selectedAppliance, setSelectedAppliance] = useState(eventmanagement[0])

  return (
    <div className="flex flex-col md:flex-row p-4">
      <aside className="w-full md:w-64 bg-accent rounded-lg p-4 mb-4 md:mb-0 md:mr-4">
        <nav>
          <ul className="space-y-2">
            {eventmanagement.map((appliance) => (
              <li key={appliance.name}>
                <button
                  onClick={() => setSelectedAppliance(appliance)}
                  className={`flex items-center justify-between w-full p-2 rounded-md transition-colors ${
                    selectedAppliance.name === appliance.name
                      ? "bg-primary text-primary-foreground"
                      : "hover:bg-accent-foreground/10"
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
      <main className="flex-1">
        <h1 className="text-3xl font-bold mb-4">{selectedAppliance.name} Categories</h1>
        <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-3 gap-4">
          {selectedAppliance.categories.map((category) => (
            <div key={category} className="p-4 bg-card text-card-foreground rounded-lg shadow-md hover:shadow-lg transition-shadow">
              <h2 className="text-xl font-semibold mb-2">{category}</h2>
              <p className="text-sm text-muted-foreground">Click to view {category} {selectedAppliance.name} services</p>
            </div>
          ))}
        </div>
      </main>
    </div>
  )
}

