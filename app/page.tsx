import { Carousel } from "@/components/carousel"
import { Hero } from "@/components/hero"
import { ServiceGrid } from "@/app/services/service-grid"
import React from "react";
import Image from "next/image";
import MenuGrid from "@/components/ui/MenuGrid";
import RatingsAndReviews from "./services/ratingandreviews";
import ConstructionSubmenu from "@/app/services/construction/page";

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <ServiceGrid />
      <RatingsAndReviews />
      <ConstructionSubmenu />
 
    </div>
  )
}

