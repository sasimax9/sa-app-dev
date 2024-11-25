 "use client"

import { useEffect, useState } from "react";
import { AiFillStar } from "react-icons/ai";
import "tailwindcss/tailwind.css";

const reviews = [
  {
    id: 1,
    name: "Ravi",
    rating: 4.5,
    comment: "Great Service, absolutely loved it! Highly recommended.",
  },
  {
    id: 2,
    name: "Chandana",
    rating: 5,
    comment: "cctv Technician Did Good Work.I Give Him 5 Star Rating.",
  },
  {
    id: 3,
    name: "Suresh",
    rating: 5,
    comment: "Fantastic service! Exceeded expectations.",
  },
  {
    id: 4,
    name: "Suma",
    rating: 4,
    comment: "All Services At One Place Is A Good Idea.Instant & Hassal-Free Services.",
  },

  {
    id: 5,
    name: "Srinivas",
    rating: 5,
    comment: "I Got Best Website OutPut From You.You Did A Good Job, All The Best.",
  },
  // Add more reviews here as needed
];

const RatingsAndReviews = () => {
  const [currentIndex, setCurrentIndex] = useState(0);

  useEffect(() => {
    const interval = setInterval(() => {
      setCurrentIndex((prevIndex) => (prevIndex + 1) % reviews.length);
    }, 5000); // Change slide every 5 seconds

    return () => clearInterval(interval);
  }, []);

  return (
    <div className="max-w-xl mx-auto p-4">
      <h2 className="text-2xl font-bold text-center mb-6">Ratings & Reviews</h2>
      <div className="relative p-6 bg-white rounded-lg shadow-md transition-transform duration-500">
        <div key={reviews[currentIndex].id} className="w-full text-center">
          <div className="flex justify-center mb-4">
            {[...Array(5)].map((_, i) => (
              <AiFillStar
                key={i}
                className={`text-2xl ${i < Math.floor(reviews[currentIndex].rating) ? "text-yellow-400" : "text-gray-300"}`}
              />
            ))}
          </div>
          <p className="text-lg font-semibold mb-2">{reviews[currentIndex].name}</p>
          <p className="text-gray-600">{reviews[currentIndex].comment}</p>
        </div>
      </div>
    </div>
  );
};

export default RatingsAndReviews;

// Tailwind CSS styles will make this responsive. Add further customizations if needed.
