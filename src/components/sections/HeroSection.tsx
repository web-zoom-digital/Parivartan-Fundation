"use client";

import * as React from "react";
import Image from "next/image";
import { ChevronLeft, ChevronRight } from "lucide-react";

const heroImages = [
  {
    src: "/images/about/home1.png",
    alt: "PWS volunteer serving hot curry from a large pot to beneficiaries in a queue during a community food drive — banner reads: Just ₹250 can feed 10 hungry people",
    width: 1983,
    height: 793,
  },
  {
    src: "/images/about/home2.png",
    alt: "A young girl from an underserved family receiving a plate of food during an PWS meal distribution drive — Hindi text reads: Will you feed a hungry person today?",
    width: 1500,
    height: 600,
  },
  {
    src: "/images/about/home3.png",
    alt: "Malnourished children at a roadside settlement receiving hot meals directly from an PWS volunteer's hands during a community food outreach",
    width: 1500,
    height: 600,
  },
];

export function HeroSection() {
  const [currentSlide, setCurrentSlide] = React.useState(0);
  const [isPaused, setIsPaused] = React.useState(false);

  const goPrev = () => {
    setCurrentSlide(
      (prev) => (prev - 1 + heroImages.length) % heroImages.length,
    );
  };

  const goNext = React.useCallback(() => {
    setCurrentSlide((prev) => (prev + 1) % heroImages.length);
  }, []);

  React.useEffect(() => {
    if (isPaused) return;
    const timer = setInterval(goNext, 4000);
    return () => clearInterval(timer);
  }, [goNext, isPaused]);

  const slide = heroImages[currentSlide];

  return (
    <section
      className="relative w-full bg-[#1b2916] overflow-hidden mt-[4.25rem] sm:mt-[5rem] md:mt-[7.25rem]"
      aria-label="Parivartan Welfare Society hero"
      onMouseEnter={() => setIsPaused(true)}
      onMouseLeave={() => setIsPaused(false)}
      onTouchStart={() => setIsPaused(true)}
      onTouchEnd={() => setTimeout(() => setIsPaused(false), 2500)}
    >
      <h1 className="sr-only">
        Parivartan Welfare Society — free food, education support, and cow welfare
        across Delhi NCR and Uttar Pradesh
      </h1>
      <div className="relative w-full">
        <img
          src={heroImages[currentSlide].src}
          alt={heroImages[currentSlide].alt}
          className="w-full h-auto block max-h-[78vh] object-cover bg-[#1b2916] mx-auto"
          draggable={false}
        />

        <div className="absolute inset-x-0 bottom-0 h-14 bg-gradient-to-t from-black/40 to-transparent pointer-events-none" />

        <button
          type="button"
          onClick={goPrev}
          aria-label="Previous image"
          className="absolute left-2 sm:left-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 flex items-center justify-center"
        >
          <ChevronLeft className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>
        <button
          type="button"
          onClick={goNext}
          aria-label="Next image"
          className="absolute right-2 sm:right-4 top-1/2 -translate-y-1/2 z-20 w-9 h-9 sm:w-11 sm:h-11 rounded-full bg-black/40 hover:bg-black/60 border border-white/30 flex items-center justify-center"
        >
          <ChevronRight className="w-5 h-5 sm:w-6 sm:h-6 text-white" />
        </button>

        <div className="absolute bottom-3 left-0 right-0 z-20 flex justify-center gap-2">
          {heroImages.map((_, idx) => (
            <button
              key={idx}
              type="button"
              aria-label={`Go to slide ${idx + 1}`}
              onClick={() => setCurrentSlide(idx)}
              className={`rounded-full transition-all ${
                idx === currentSlide
                  ? "w-6 h-2 bg-white"
                  : "w-2 h-2 bg-white/55"
              }`}
            />
          ))}
        </div>
      </div>
    </section>
  );
}
