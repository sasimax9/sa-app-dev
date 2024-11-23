"use client"

import { useSearchParams } from "next/navigation"
import Link from "next/link"

const allServices = [
  { name: "Fridge Repair", category: "Home Appliance" },
  { name: "Washing Machine Repair", category: "Home Appliance" },
  { name: "TV Repair", category: "Home Appliance" },
  { name: "House Construction", category: "Construction" },
  { name: "Wedding Planning", category: "Event Management" },
  // Add more services here
]

export function SearchResults() {
  const searchParams = useSearchParams()
  const query = searchParams.get("q")

  const filteredServices = allServices.filter(
    (service) =>
      service.name.toLowerCase().includes(query?.toLowerCase() || "") ||
      service.category.toLowerCase().includes(query?.toLowerCase() || "")
  )

  return (
    <div>
      <h1 className="text-3xl font-bold mb-4">Search Results for "{query}"</h1>
      {filteredServices.length > 0 ? (
        <ul className="space-y-4">
          {filteredServices.map((service, index) => (
            <li key={index} className="bg-card text-card-foreground p-4 rounded-lg shadow magic-hover">
              <Link href={`/services/${service.category.toLowerCase()}/${service.name.toLowerCase().replace(/\s+/g, "-")}`}>
                <h2 className="text-xl font-semibold magic-text">{service.name}</h2>
                <p className="text-muted-foreground">{service.category}</p>
              </Link>
            </li>
          ))}
        </ul>
      ) : (
        <p className="text-muted-foreground">No results found for "{query}". Please try a different search term.</p>
      )}
    </div>
  )
}

