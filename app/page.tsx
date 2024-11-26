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
      <div>
      {/* Using Next.js Image Component */}
      <img
        src="/ceiling.png"  // Path relative to the public directory
        alt="Logo"
        width={100}       // Provide width
        height={100}      // Provide height
      />

      {/* Using standard HTML <img> tag */}
      <img
        src="/clean.png"  // Path relative to the public directory
        alt="Logo"
        width="100"
        height="100"
      />
    </div>
    </div>
  );
}
