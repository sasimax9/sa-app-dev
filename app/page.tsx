import { Carousel } from "@/components/carosel"
import { Hero } from "@/components/hero"
import { ServiceGrid } from "@/components/service-grid"

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <ServiceGrid />
    </div>
  )
}

