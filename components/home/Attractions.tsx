"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";

interface Attraction {
  id: string;
  title: string;
  subtitle: string;
  category: string;
  distance: string;
  description: string;
  image: string;
}

export const Attractions: React.FC = () => {
  const attractions: Attraction[] = [
    {
      id: "natural-trails",
      title: "Glenn Meadows Park",
      subtitle: "Glenn Meadows & Nature Parks",
      category: "Scenic Outdoors",
      distance: "5 min drive",
      description:
        "Wander through peaceful nature paths, scenic parklands, and shaded green spaces ideal for morning walks and family picnics.",
      image: "/images/attractions/Glenn Meadows Park.webp",
    },
    {
      id: "downtown-hub",
      title: "Graham County Fairgrounds",
      subtitle: "Graham County Fairgrounds",
      category: "Events & Culture",
      distance: "8 min drive",
      description:
        "Experience vibrant community events, seasonal fairs, festive rodeos, and local shopping just moments from your door.",
      image: "/images/attractions/Graham County Fairgrounds.png",
    },
    {
      id: "fine-dining",
      title: "Casa Mañana",
      subtitle: "Casa Mañana & Local Eateries",
      category: "Dining & Cuisine",
      distance: "6 min drive",
      description:
        "Savor authentic regional flavors, celebrated Southwestern culinary specialties, and a relaxed, welcoming evening ambiance.",
      image: "/images/attractions/Casa Mañana.webp",
    },
  ];

  // Extended array for seamless infinite looping in mobile view
  const extendedAttractions = [...attractions, ...attractions, ...attractions];
  const [currentIndex, setCurrentIndex] = useState(attractions.length);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const handleNext = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);
  };

  const handlePrev = () => {
    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);
  };

  const handleTouchStart = (e: React.TouchEvent) => {
    setIsPaused(true);
    touchStartX.current = e.targetTouches[0].clientX;
  };

  const handleTouchMove = (e: React.TouchEvent) => {
    touchEndX.current = e.targetTouches[0].clientX;
  };

  const handleTouchEnd = () => {
    setIsPaused(false);
    if (!touchStartX.current || !touchEndX.current) return;
    const distance = touchStartX.current - touchEndX.current;
    if (distance > 45) {
      handleNext();
    } else if (distance < -45) {
      handlePrev();
    }
    touchStartX.current = null;
    touchEndX.current = null;
  };

  // Continuous auto-slide forward in one direction on mobile
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3500);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless snap when sliding past cloned sets
  const handleTransitionEnd = () => {
    if (currentIndex >= attractions.length * 2) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev - attractions.length);
    } else if (currentIndex < attractions.length) {
      setEnableTransition(false);
      setCurrentIndex((prev) => prev + attractions.length);
    }
  };

  // Re-enable transition after snapping
  useEffect(() => {
    if (!enableTransition) {
      const id = requestAnimationFrame(() => {
        requestAnimationFrame(() => {
          setEnableTransition(true);
        });
      });
      return () => cancelAnimationFrame(id);
    }
  }, [enableTransition]);

  const goToSlide = (idx: number) => {
    setEnableTransition(true);
    setCurrentIndex(attractions.length + idx);
  };

  const activeDot =
    ((currentIndex % attractions.length) + attractions.length) %
    attractions.length;

  const renderCard = (attraction: Attraction) => (
    <div className="relative flex flex-col h-full w-full rounded-[24px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_16px_36px_rgba(15,23,42,0.3),0_4px_12px_rgba(15,23,42,0.18)] group-hover:shadow-[0_24px_48px_rgba(15,23,42,0.42)] transition-all duration-300">
      {/* Inner Metallic Graphite Card Container */}
      <div className="relative flex flex-col h-full w-full overflow-hidden rounded-[21px] sm:rounded-[23px] bg-gradient-to-b from-[#384353] via-[#27303d] to-[#181f28] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)] p-1.5 sm:p-2">
        {/* Top Cylindrical Gloss / Specular Sheen */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[45%] rounded-t-[21px] sm:rounded-t-[23px] bg-gradient-to-b from-white/25 via-white/5 to-transparent z-10"
          aria-hidden="true"
        />

        {/* Photo Display Frame */}
        <div className="relative aspect-[16/10] sm:aspect-[4/3] w-full overflow-hidden rounded-[18px] sm:rounded-[20px] bg-slate-950 shadow-[inset_0_2px_4px_rgba(0,0,0,0.8),0_2px_8px_rgba(0,0,0,0.5)] border border-white/15">
          <Image
            src={attraction.image}
            alt={attraction.title}
            fill
            sizes="(max-width: 768px) 100vw, 33vw"
            className="object-cover object-center filter brightness-[1.02] contrast-[1.04] transition-transform duration-700 ease-out group-hover:scale-108"
          />

          {/* Floating Informative Badges: Category & Distance */}
          <div className="absolute top-2.5 inset-x-2.5 flex items-center justify-between z-10 pointer-events-none">
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-950/85 backdrop-blur-md px-2.5 py-1 text-[10px] sm:text-[11px] font-bold text-rose-300 border border-white/20 shadow-sm">
              <span className="h-1.5 w-1.5 rounded-full bg-rose-500 animate-pulse" />
              {attraction.category}
            </span>
            <span className="inline-flex items-center gap-1 rounded-full bg-slate-900/85 backdrop-blur-md px-2.5 py-1 text-[10px] sm:text-[11px] font-semibold text-white border border-white/15 shadow-sm">
              <svg
                className="h-3 w-3 text-rose-400"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M12 8v4l3 3m6-3a9 9 0 11-18 0 9 9 0 0118 0z"
                />
              </svg>
              {attraction.distance}
            </span>
          </div>
        </div>

        {/* Card Content - Title & Button */}
        <div className="relative z-10 flex flex-1 flex-col justify-between pt-3 sm:pt-4 pb-2 px-2 sm:px-3 text-center">
          <h3 className="text-base sm:text-[20px] md:text-[22px] font-bold tracking-wide text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)] group-hover:text-rose-100 transition-colors">
            {attraction.title}
          </h3>

          {/* Single Button (3D Beveled Brand Red Button) */}
          <div className="mt-3.5 sm:mt-5">
            <Link
              href="#attractions"
              className="group/btn relative flex items-center justify-center w-full rounded-xl p-[2px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.6)] transition-all hover:scale-[1.02] active:translate-y-0.5"
            >
              <div className="relative flex items-center justify-center gap-2 w-full rounded-[9.5px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-5 py-2.5 text-xs sm:text-sm font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover/btn:brightness-110 transition-all">
                {/* Button Gloss */}
                <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  Explore Details
                </span>
                <svg
                  className="relative h-4 w-4 transform transition-transform group-hover/btn:translate-x-1"
                  fill="none"
                  viewBox="0 0 24 24"
                  stroke="currentColor"
                >
                  <path
                    strokeLinecap="round"
                    strokeLinejoin="round"
                    strokeWidth="2.5"
                    d="M14 5l7 7m0 0l-7 7m7-7H3"
                  />
                </svg>
              </div>
            </Link>
          </div>
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="attractions"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#e2e8f0] py-10 sm:py-20 lg:py-18"
    >
      {/* Background ambient radial highlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(255,255,255,0.95),transparent)]"
        aria-hidden="true"
      />

      {/* Brand Red Swoosh Pattern - Top Right (Exact Pattern & Color from Logo) */}
      <div
        className="pointer-events-none absolute -top-1 -right-4 sm:top-0 sm:right-0 w-[240px] sm:w-[350px] lg:w-[440px] xl:w-[500px] z-0 "
        aria-hidden="true"
      >
        <Image
          src="/images/logo/red-swoosh-top-right.png"
          alt=""
          width={1053}
          height={186}
          className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(196,14,23,0.18)]"
        />
      </div>

      {/* Brand Red Swoosh Pattern - Bottom Left (Exact Pattern & Color from Logo) */}
      <div
        className="pointer-events-none absolute -bottom-2 -left-4 sm:bottom-0 sm:left-0 w-[260px] sm:w-[380px] lg:w-[480px] xl:w-[540px] z-0 "
        aria-hidden="true"
      >
        <Image
          src="/images/logo/red-swoosh-bottom-left.png"
          alt=""
          width={1053}
          height={186}
          className="w-full h-auto object-contain drop-shadow-[0_8px_20px_rgba(196,14,23,0.18)]"
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3D Graphite / Chrome Embossed Section Headline */}
        <div className="mb-6 sm:mb-8 text-center">
          <h2
            className="text-2xl sm:text-4xl md:text-4xl lg:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#c40e17] to-[#e51d28] "
            style={{
              filter:
                "drop-shadow(0 1px 0 rgba(255,255,255,0.95)) drop-shadow(0 3px 6px rgba(196,14,23,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
            }}
          >
            EXPLORE LOCAL ATTRACTIONS
          </h2>
          <p className="mt-2 sm:mt-3 mx-auto max-w-2xl text-xs sm:text-base text-slate-600 font-medium">
            Discover the best dining, scenic parks, and cultural highlights
            surrounding Terra Inn Motel.
          </p>
        </div>

        {/* Desktop View: Exact 3-Column Grid */}
        <div className="hidden md:grid md:grid-cols-3 gap-6 lg:gap-8">
          {attractions.map((attraction) => (
            <div
              key={attraction.id}
              className="group relative flex flex-col transition-all duration-300 hover:-translate-y-2"
            >
              {renderCard(attraction)}
            </div>
          ))}
        </div>

        {/* Mobile View: Infinite Auto-Slide Carousel in One Direction */}
        <div
          className="relative w-full overflow-hidden md:hidden"
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          <div
            className={`flex ${
              enableTransition
                ? "transition-transform duration-700 ease-in-out"
                : ""
            }`}
            style={{
              transform: `translateX(-${currentIndex * 100}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedAttractions.map((attraction, idx) => (
              <div
                key={`${attraction.id}-${idx}`}
                className="w-full flex-shrink-0 px-2 group"
              >
                {renderCard(attraction)}
              </div>
            ))}
          </div>
        </div>

        {/* Mobile Carousel Indicators */}
        <div className="mt-4 flex flex-col items-center gap-2 md:hidden">
          <div className="flex items-center gap-2">
            {attractions.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => goToSlide(idx)}
                aria-label={`View attraction ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  activeDot === idx
                    ? "w-7 bg-gradient-to-r from-[#c40e17] to-[#e51d28] shadow-[0_0_8px_rgba(196,14,23,0.6)]"
                    : "w-2 bg-slate-300 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
        </div>

        {/* See All Attractions Action Button */}
        <div className="mt-8 sm:mt-12 flex justify-center">
          <Link
            href="#attractions"
            className="group relative inline-flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_14px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(196,14,23,0.45),0_0_15px_rgba(229,29,40,0.3)] active:translate-y-0"
          >
            <div className="relative flex items-center justify-center gap-2.5 overflow-hidden rounded-[9.5px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-7 py-2.5 sm:px-9 sm:py-3 text-sm sm:text-base font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
              {/* Button Specular Gloss */}
              <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/40 via-white/10 to-transparent z-10" />

              {/* Smooth Luminous Light Gleam Sweep Animation */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full z-20"
                aria-hidden="true"
              />

              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-rose-50">
                See All Attractions
              </span>

              <svg
                className="relative z-10 h-4 w-4 sm:h-5 sm:w-5 transform transition-transform duration-300 ease-out group-hover:translate-x-1.5"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M14 5l7 7m0 0l-7 7m7-7H3"
                />
              </svg>
            </div>
          </Link>
        </div>
      </div>
    </section>
  );
};

export default Attractions;