"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import roomsData from "@/data/rooms.json";

interface Room {
  id: string;
  title: string;
  price: string;
  period: string;
  image: string;
  features: string[];
}

export const Rooms: React.FC = () => {
  const rooms: Room[] = roomsData;
  const [currentIndex, setCurrentIndex] = useState(rooms.length);
  const [enableTransition, setEnableTransition] = useState(true);
  const [isPaused, setIsPaused] = useState(false);
  const [isDesktop, setIsDesktop] = useState(true);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  // Extended rooms array for seamless infinite looping with safety buffer
  const extendedRooms = [
    ...rooms,
    ...rooms,
    ...rooms,
    ...rooms,
    ...rooms,
    ...rooms,
  ];
  const isAnimating = useRef(false);
  const animTimeoutRef = useRef<NodeJS.Timeout | null>(null);

  useEffect(() => {
    const handleResize = () => {
      setIsDesktop(window.innerWidth >= 768);
    };
    handleResize();
    window.addEventListener("resize", handleResize);
    return () => window.removeEventListener("resize", handleResize);
  }, []);

  // Pause auto-sliding when document is hidden (background tab) to avoid runaway transitions
  useEffect(() => {
    const handleVisibilityChange = () => {
      setIsPaused(document.hidden);
    };
    document.addEventListener("visibilitychange", handleVisibilityChange);
    return () => document.removeEventListener("visibilitychange", handleVisibilityChange);
  }, []);

  // Clean up any pending animation timers on unmount
  useEffect(() => {
    return () => {
      if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    };
  }, []);

  const handleNext = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setEnableTransition(true);
    setCurrentIndex((prev) => prev + 1);

    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev >= rooms.length * 2) {
          setEnableTransition(false);
          return prev - rooms.length;
        }
        return prev;
      });
      isAnimating.current = false;
    }, 480);
  };

  const handlePrev = () => {
    if (isAnimating.current) return;
    isAnimating.current = true;

    setEnableTransition(true);
    setCurrentIndex((prev) => prev - 1);

    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      setCurrentIndex((prev) => {
        if (prev < rooms.length) {
          setEnableTransition(false);
          return prev + rooms.length;
        }
        return prev;
      });
      isAnimating.current = false;
    }, 480);
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

  // Continuous auto-slide forward in one direction
  useEffect(() => {
    if (isPaused) return;

    const timer = setInterval(() => {
      handleNext();
    }, 3800);

    return () => clearInterval(timer);
  }, [isPaused]);

  // Seamless snap when sliding past cloned sets
  const handleTransitionEnd = (e?: React.TransitionEvent<HTMLDivElement>) => {
    // Only respond to transitions on the track itself, not bubbled child transitions
    if (e && (e.target !== e.currentTarget || e.propertyName !== "transform")) {
      return;
    }
    setCurrentIndex((prev) => {
      if (prev >= rooms.length * 2) {
        setEnableTransition(false);
        return prev - rooms.length;
      }
      if (prev < rooms.length) {
        setEnableTransition(false);
        return prev + rooms.length;
      }
      return prev;
    });
    isAnimating.current = false;
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
    if (isAnimating.current) return;
    isAnimating.current = true;
    setEnableTransition(true);
    setCurrentIndex(rooms.length + idx);
    if (animTimeoutRef.current) clearTimeout(animTimeoutRef.current);
    animTimeoutRef.current = setTimeout(() => {
      isAnimating.current = false;
    }, 480);
  };

  return (
    <section
      id="rooms"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#141921] via-[#0e1217] to-[#080b0f] py-8 sm:py-16 lg:py-16"
    >
      {/* Ambient background light gradients */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_20%,rgba(65,80,102,0.18),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl">
        {/* 3D Chrome Embossed Section Headline */}
        <div className="mb-10 sm:mb-14 text-center">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white from-45% via-[#ff4d58] via-75% to-[#c40e17] "
            style={{
              filter:
                "drop-shadow(0 4px 8px rgba(0,0,0,0.95)) drop-shadow(0 10px 24px rgba(0,0,0,0.85)) drop-shadow(0 0 24px rgba(196,14,23,0.35))",
            }}
          >
            DISCOVER OUR ROOMS
          </h2>
        </div>

        {/* Carousel Container */}
        <div
          className="relative w-full overflow-hidden"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Slider Track (Shows 2 cards at a time on md+ screens) */}
          <div
            className={`flex ${enableTransition ? "transition-transform duration-[450ms] ease-out" : ""
              }`}
            style={{
              transform: `translateX(-${currentIndex * (isDesktop ? 50 : 100)}%)`,
            }}
            onTransitionEnd={handleTransitionEnd}
          >
            {extendedRooms.map((room, idx) => (
              <div
                key={`${room.id}-${idx}`}
                className="w-full flex-shrink-0 px-2 sm:px-3 md:w-1/2"
              >
                {/* Solid 3D Silver / Chrome Tubular Beveled Frame */}
                <div className="h-full rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_16px_36px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)]">
                  {/* Card Interior Split 50/50: Image on Left, Details on Right */}
                  <div className="relative flex h-full min-h-[300px] sm:min-h-[315px] flex-col overflow-hidden rounded-[19px] sm:rounded-[23px] bg-gradient-to-b from-[#384353] via-[#27303d] to-[#181f28] shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)] backdrop-blur-xl sm:flex-row">
                    {/* Top Cylindrical Gloss / Specular Sheen */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[19px] sm:rounded-t-[23px] bg-gradient-to-b from-white/25 via-white/5 to-transparent z-10"
                      aria-hidden="true"
                    />

                    {/* Left: Room Image */}
                    <div className="relative aspect-[16/10] w-full sm:aspect-auto sm:w-1/2 overflow-hidden bg-slate-900">
                      <Image
                        src={room.image}
                        alt={room.title}
                        fill
                        sizes="(max-width: 768px) 100vw, 35vw"
                        className="object-cover object-center transition-transform duration-500 hover:scale-105"
                      />
                    </div>

                    {/* Right: Room Details & Actions */}
                    <div className="relative z-10 flex w-full flex-col justify-between p-3.5 sm:p-5 sm:w-1/2">
                      <div>
                        {/* Room Title */}
                        <h3 className="text-base sm:text-lg lg:text-xl font-bold leading-snug tracking-tight text-white drop-shadow-[0_1.5px_2px_rgba(0,0,0,0.9)]">
                          {room.title}
                        </h3>

                        {/* Features List */}
                        <div className="mt-2.5 sm:mt-3.5 grid grid-cols-2 sm:grid-cols-1 gap-1.5 sm:gap-2">
                          {room.features.map((feature, featureIdx) => (
                            <div
                              key={featureIdx}
                              className="group/item flex items-center gap-2 rounded-lg bg-white/[0.04] px-2 py-1.5 sm:px-2.5 sm:py-1.5 border border-white/[0.07] backdrop-blur-sm transition-all duration-200 hover:bg-white/[0.08] hover:border-white/15 hover:translate-x-0.5"
                            >
                              <span className="flex h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 items-center justify-center rounded-full bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] text-white shadow-[0_1.5px_3px_rgba(0,0,0,0.6),inset_0_1px_1px_rgba(255,255,255,0.45)]">
                                <svg
                                  className="h-2 w-2 sm:h-2.5 sm:w-2.5"
                                  fill="none"
                                  viewBox="0 0 24 24"
                                  stroke="currentColor"
                                  strokeWidth="3"
                                >
                                  <path
                                    strokeLinecap="round"
                                    strokeLinejoin="round"
                                    d="M4.5 12.75l6 6 9-13.5"
                                  />
                                </svg>
                              </span>
                              <span className="text-[11px] sm:text-[13px] font-medium tracking-wide text-slate-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-colors group-hover/item:text-white leading-tight truncate">
                                {feature}
                              </span>
                            </div>
                          ))}
                        </div>
                      </div>

                      {/* Bottom Action Buttons */}
                      <div className="mt-3 sm:mt-4 pt-1 sm:pt-2 flex items-center gap-2 sm:gap-2.5">
                        {/* 3D Virtual Tour Button */}
                        <Link
                          href="#tour"
                          className="group relative flex-1 sm:flex-initial flex items-center justify-center rounded-xl p-[1.5px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_3px_8px_rgba(0,0,0,0.6)] transition-all hover:scale-105 active:translate-y-0.5"
                        >
                          <div className="w-full text-center rounded-[10.5px] bg-gradient-to-b from-[#2e3947] via-[#1d2530] to-[#11171f] px-3 py-1.5 text-xs sm:text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.3)] whitespace-nowrap">
                            View Details
                          </div>
                        </Link>

                        {/* Book Now Button */}
                        <Link
                          href="#book"
                          className="group relative flex-1 sm:flex-initial flex items-center justify-center rounded-xl p-[1.5px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_3px_8px_rgba(0,0,0,0.7)] transition-all hover:scale-105 active:translate-y-0.5"
                        >
                          <div className="w-full text-center rounded-[10.5px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-3.5 py-1.5 text-xs sm:text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.45)] whitespace-nowrap">
                            Book Now
                          </div>
                        </Link>
                      </div>
                    </div>
                  </div>
                </div>
              </div>
            ))}
          </div>

          {/* Carousel Arrows Controls (Desktop / Tablet) */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous rooms"
            className="hidden sm:flex absolute left-1 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full p-[2px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:translate-y-[-45%]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2e3947] to-[#11171f] text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
              </svg>
            </div>
          </button>

          <button
            type="button"
            onClick={handleNext}
            aria-label="Next rooms"
            className="hidden sm:flex absolute right-1 top-1/2 -translate-y-1/2 z-20 h-10 w-10 items-center justify-center rounded-full p-[2px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:translate-y-[-45%]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2e3947] to-[#11171f] text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Slide Indicator Dots & Mobile Swipe Guide */}
        <div className="mt-4 sm:mt-6 flex flex-col items-center gap-2">
          {/* Mobile Swipe Cue */}
          <div className="flex sm:hidden items-center gap-1.5 text-[11px] font-semibold text-rose-400">
            <span>Swipe to explore rooms</span>
            <svg className="h-3 w-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
            </svg>
          </div>

          {/* Dots */}
          <div className="flex items-center justify-center gap-1.5 sm:gap-2">
            {rooms.map((_, idx) => {
              const isActive = (currentIndex % rooms.length) === idx;
              return (
                <button
                  key={idx}
                  type="button"
                  onClick={() => goToSlide(idx)}
                  className={`h-2 transition-all duration-300 rounded-full cursor-pointer ${
                    isActive
                      ? "w-6 sm:w-7 bg-gradient-to-r from-[#ff4d58] to-[#c40e17] shadow-[0_0_8px_rgba(229,29,40,0.6)]"
                      : "w-2 bg-slate-600/70 hover:bg-slate-500"
                  }`}
                  aria-label={`Go to room ${idx + 1}`}
                />
              );
            })}
          </div>
        </div>


        {/* View All Rooms Action Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="#rooms"
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
                View All Rooms
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

export default Rooms;