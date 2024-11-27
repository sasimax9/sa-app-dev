import { Carousel } from "@/components/carousel";
import { Hero } from "@/components/hero";
import { ServiceGrid } from "@/app/services/service-grid";
import React from "react";

import RatingsAndReviews from "./services/ratingandreviews";

export default function Home() {
  return (
    <div>
      <Hero />
      <Carousel />
      <ServiceGrid />
      <RatingsAndReviews />
    </div>
  );
}
