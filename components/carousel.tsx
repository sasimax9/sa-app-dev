"use client"

import { useState, useEffect } from "react"
import { ChevronLeft, ChevronRight } from 'lucide-react'

type Slide = {
  id: number;
  content: string;
  image: string;
};


const slides = [
  { id: 1, content: "Slide 1 content", image: "/images/slide1.jpg" },
  { id: 2, content: "Slide 2 content", image: "/images/slide1.jpg" },
  { id: 3, content: "Slide 3 content", image: "/images/slide1.jpg"},
]

export function Carousel() {
  const [currentSlide, setCurrentSlide] = useState(0)

  useEffect(() => {
    const timer = setInterval(() => {
      setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)
    }, 5000)
    return () => clearInterval(timer)
  }, [])

  return (
    <div className="relative w-full h-64 overflow-hidden">
      {slides.map((slide, index) => (
        <div
          key={slide.id}
          className={`absolute top-0 left-0 w-full h-full transition-opacity duration-500 ${
            index === currentSlide ? "opacity-100" : "opacity-0"
          }`}
        >
          <div className="flex items-center justify-center h-full bg-gray-200">
            <p className="text-2xl">{slide.content}</p>
          </div>
        </div>
      ))}
      <button
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide - 1 + slides.length) % slides.length)}
        className="absolute top-1/2 left-4 transform -translate-y-1/2 bg-white rounded-full p-2"
      >
        <ChevronLeft className="h-6 w-6" />
      </button>
      <button
        onClick={() => setCurrentSlide((prevSlide) => (prevSlide + 1) % slides.length)}
        className="absolute top-1/2 right-4 transform -translate-y-1/2 bg-white rounded-full p-2"
      >
        <ChevronRight className="h-6 w-6" />
      </button>
    </div>
  )
}

