import { Carousel } from "@/components/carousel"
import { Hero } from "@/components/hero"
import { ServiceGrid } from "@/components/service-grid"
import React from "react";
import Image from "next/image";
import MenuGrid from "@/components/ui/MenuGrid";
import RatingsAndReviews from "./services/ratingandreviews";
export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <ServiceGrid />
      <RatingsAndReviews />
    </div>
  )
}

