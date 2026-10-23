"use client";

import React, { useState, useEffect, useRef } from "react";
import Image from "next/image";
import Link from "next/link";
import testimonialsData from "@/data/testimonials.json";

const GoogleIcon: React.FC<{ className?: string }> = ({ className = "h-4 w-4" }) => (
  <svg className={className} viewBox="0 0 24 24">
    <path
      fill="#4285F4"
      d="M22.56 12.25c0-.78-.07-1.53-.2-2.25H12v4.26h5.92c-.26 1.37-1.04 2.53-2.21 3.31v2.77h3.57c2.08-1.92 3.28-4.74 3.28-8.09z"
    />
    <path
      fill="#34A853"
      d="M12 23c2.97 0 5.46-.98 7.28-2.66l-3.57-2.77c-.98.66-2.23 1.06-3.71 1.06-2.86 0-5.29-1.93-6.16-4.53H2.18v2.84C3.99 20.53 7.7 23 12 23z"
    />
    <path
      fill="#FBBC05"
      d="M5.84 14.09c-.22-.66-.35-1.36-.35-2.09s.13-1.43.35-2.09V7.06H2.18C1.43 8.55 1 10.22 1 12s.43 3.45 1.18 4.94l2.85-2.22.81-.63z"
    />
    <path
      fill="#EA4335"
      d="M12 5.38c1.62 0 3.06.56 4.21 1.64l3.15-3.15C17.45 2.09 14.97 1 12 1 7.7 1 3.99 3.47 2.18 7.06l3.66 2.84c.87-2.6 3.3-4.52 6.16-4.52z"
    />
  </svg>
);

interface Testimonial {
  name: string;
  avatar?: string;
  review: string;
  rooms?: string;
  service?: string;
  location?: string;
  hotelHighlights?: string;
  roomsDetail?: string;
  safety?: string;
}

export const Testimonials: React.FC = () => {
  const testimonials: Testimonial[] = testimonialsData;
  const [currentIndex, setCurrentIndex] = useState(0);
  const [isPaused, setIsPaused] = useState(false);
  const autoPlayRef = useRef<NodeJS.Timeout | null>(null);
  const touchStartX = useRef<number | null>(null);
  const touchEndX = useRef<number | null>(null);

  const total = testimonials.length;

  useEffect(() => {
    if (isPaused) return;

    autoPlayRef.current = setInterval(() => {
      setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
    }, 4800);

    return () => {
      if (autoPlayRef.current) clearInterval(autoPlayRef.current);
    };
  }, [isPaused, total]);

  const handlePrev = () => {
    setCurrentIndex((prev) => (prev <= 0 ? total - 1 : prev - 1));
  };

  const handleNext = () => {
    setCurrentIndex((prev) => (prev >= total - 1 ? 0 : prev + 1));
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

  const current = testimonials[currentIndex];

  return (
    <section
      id="testimonials"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#e2e8f0] py-10 sm:py-16 lg:py-16"
    >
      {/* Background ambient radial highlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_70%_50%_at_50%_35%,rgba(255,255,255,0.95),transparent)]"
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
        <div className="mb-8 sm:mb-14 text-center">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#c40e17] to-[#e51d28] "
            style={{
              filter:
                "drop-shadow(0 1px 0 rgba(255,255,255,0.95)) drop-shadow(0 3px 6px rgba(196,14,23,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
            }}
          >
            GUEST EXPERIENCE
          </h2>
        </div>

        {/* Continuous White Glowing Border Animation */}
        <style>{`
          @keyframes borderBeamRotate {
            0% { transform: rotate(0deg); }
            100% { transform: rotate(360deg); }
          }
        `}</style>

        {/* Testimonial Card Container with Touch Swipe support */}
        <div
          className="relative mx-auto max-w-2xl sm:max-w-3xl"
          onMouseEnter={() => setIsPaused(true)}
          onMouseLeave={() => setIsPaused(false)}
          onTouchStart={handleTouchStart}
          onTouchMove={handleTouchMove}
          onTouchEnd={handleTouchEnd}
        >
          {/* Main 3D Card with Continuous White Glowing Running Border */}
          <div className="group relative w-full rounded-[24px] sm:rounded-[30px] p-[3.5px] overflow-hidden shadow-[0_24px_55px_rgba(15,23,42,0.22),0_8px_20px_rgba(15,23,42,0.14),0_0_0_1px_rgba(30,41,59,0.32)] transition-all duration-300">
            {/* Base Metallic Border Layer */}
            <div className="absolute inset-0 bg-gradient-to-b from-[#64748b] via-[#cbd5e1] to-[#1e2632]" />

            {/* Soft Ambient White Glow Beam running continuously around border */}
            <div
              className="pointer-events-none absolute -inset-[150%] origin-center blur-md opacity-95"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 270deg, rgba(255, 255, 255, 0.4) 310deg, rgba(255, 255, 255, 0.95) 345deg, #ffffff 360deg)",
                animation: "borderBeamRotate 4s linear infinite",
              }}
              aria-hidden="true"
            />

            {/* Intense Sharp White Core Beam running continuously around border */}
            <div
              className="pointer-events-none absolute -inset-[150%] origin-center"
              style={{
                background:
                  "conic-gradient(from 0deg at 50% 50%, transparent 0deg, transparent 280deg, rgba(255, 255, 255, 0.7) 325deg, #ffffff 360deg)",
                animation: "borderBeamRotate 4s linear infinite",
              }}
              aria-hidden="true"
            />

            {/* Top-Right Specular Lens Flare / Gleam */}
            <div
              className="pointer-events-none absolute -top-1.5 right-8 sm:right-14 h-3.5 w-32 sm:w-44 bg-gradient-to-r from-transparent via-white to-transparent blur-[1px] opacity-100 z-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -top-2.5 right-16 sm:right-26 h-5 w-16 sm:w-20 bg-white/80 blur-md z-20"
              aria-hidden="true"
            />

            {/* Bottom Specular Lens Flare */}
            <div
              className="pointer-events-none absolute -bottom-1.5 left-1/3 h-2.5 w-32 sm:w-44 bg-gradient-to-r from-transparent via-white/85 to-transparent blur-[1.5px] opacity-90 z-20"
              aria-hidden="true"
            />
            <div
              className="pointer-events-none absolute -bottom-3 left-[38%] h-5 w-16 bg-white/50 blur-md z-20"
              aria-hidden="true"
            />

            {/* Card Face: Slate-Charcoal Glass interior */}
            <div className="relative flex min-h-[170px] sm:min-h-[190px] w-full flex-col sm:flex-row items-center sm:items-start gap-3.5 sm:gap-6 overflow-hidden rounded-[20px] sm:rounded-[26px] bg-gradient-to-b from-[#343e4c] via-[#222a34] to-[#121820] p-4 sm:p-7 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.85)] backdrop-blur-xl">
              {/* Top Specular Cylindrical Gloss */}
              <div
                className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[20px] sm:rounded-t-[26px] bg-gradient-to-b from-white/28 via-white/6 to-transparent z-10"
                aria-hidden="true"
              />

              {/* Left: 3D Chrome Circular Ring with Avatar */}
              <div className="relative z-20 flex-shrink-0">
                <div className="relative h-14 w-14 sm:h-20 sm:w-20 rounded-full p-[2.5px] bg-gradient-to-b from-white via-[#cbd5e1] to-[#475569] shadow-[0_6px_16px_rgba(0,0,0,0.7)]">
                  <div className="relative h-full w-full overflow-hidden rounded-full bg-gradient-to-b from-[#2e3947] to-[#141b24] shadow-[inset_0_1px_2px_rgba(0,0,0,0.9)]">
                    {current.avatar ? (
                      <Image
                        src={current.avatar}
                        alt={current.name}
                        fill
                        sizes="80px"
                        className="object-cover"
                      />
                    ) : (
                      <div className="flex h-full w-full items-center justify-center font-bold text-white text-base sm:text-xl drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        {current.name
                          .split(" ")
                          .map((n) => n[0])
                          .slice(0, 2)
                          .join("")}
                      </div>
                    )}
                  </div>
                </div>
              </div>

              {/* Right: Review Details */}
              <div className="relative z-20 flex flex-1 flex-col text-center sm:text-left">
                {/* 5 Gold Stars & Google Review Badge */}
                <div className="flex flex-wrap items-center justify-center sm:justify-start gap-2 sm:gap-2.5">
                  <div className="flex items-center gap-0.5 sm:gap-1">
                    {[...Array(5)].map((_, i) => (
                      <svg
                        key={i}
                        className="h-3.5 w-3.5 sm:h-5 sm:w-5 fill-amber-400 drop-shadow-[0_1px_2px_rgba(0,0,0,0.8)]"
                        viewBox="0 0 20 20"
                      >
                        <path d="M9.049 2.927c.3-.921 1.603-.921 1.902 0l1.07 3.292a1 1 0 00.95.69h3.462c.969 0 1.371 1.24.588 1.81l-2.8 2.034a1 1 0 00-.364 1.118l1.07 3.292c.3.921-.755 1.688-1.54 1.118l-2.8-2.034a1 1 0 00-1.175 0l-2.8 2.034c-.784.57-1.838-.197-1.539-1.118l1.07-3.292a1 1 0 00-.364-1.118L2.98 8.72c-.783-.57-.38-1.81.588-1.81h3.461a1 1 0 00.951-.69l1.07-3.292z" />
                      </svg>
                    ))}
                  </div>

                  <span className="inline-flex items-center gap-1.5 rounded-full bg-white/10 px-2 py-0.5 text-[11px] sm:text-xs font-semibold text-slate-200 border border-white/15 shadow-sm">
                    <GoogleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5 shrink-0" />
                    <span>Google Review</span>
                  </span>
                </div>

                {/* Review Text */}
                <p className="mt-2 text-xs sm:text-base font-normal text-slate-100 leading-relaxed drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  &ldquo;{current.review}&rdquo;
                </p>

                {/* Author Name */}
                <p className="mt-1.5 sm:mt-2 text-xs sm:text-sm font-semibold text-slate-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                  - {current.name}
                </p>

                {/* Sub-ratings & Highlights Pill */}
                {(current.hotelHighlights || current.rooms) && (
                  <div className="mt-2.5 sm:mt-3 flex flex-wrap items-center justify-center sm:justify-start gap-1.5 sm:gap-2">
                    {current.rooms && (
                      <span className="rounded-md bg-white/10 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-medium text-slate-300 border border-white/10">
                        Rooms {current.rooms} · Service {current.service} · Location {current.location}
                      </span>
                    )}
                    {current.hotelHighlights && (
                      <span className="rounded-md bg-[#801b2a]/40 px-2 sm:px-2.5 py-0.5 text-[10px] sm:text-[11px] font-semibold text-rose-200 border border-rose-400/20">
                        {current.hotelHighlights}
                      </span>
                    )}
                  </div>
                )}
              </div>
            </div>
          </div>

          {/* Desktop Side Arrows: Hidden on Mobile to prevent overlapping card edges */}
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="hidden sm:flex absolute -left-5 sm:-left-7 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full p-[2px] bg-gradient-to-b from-white via-[#8c9baa] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:translate-y-[-45%]"
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
            aria-label="Next testimonial"
            className="hidden sm:flex absolute -right-5 sm:-right-7 top-1/2 -translate-y-1/2 z-30 h-10 w-10 items-center justify-center rounded-full p-[2px] bg-gradient-to-b from-white via-[#8c9baa] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.8)] transition-all hover:scale-110 active:translate-y-[-45%]"
          >
            <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#2e3947] to-[#11171f] text-white">
              <svg className="h-5 w-5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
              </svg>
            </div>
          </button>
        </div>

        {/* Mobile Navigation Controls & Slide Indicator Dots */}
        <div className="mt-4 flex items-center justify-center gap-2 sm:hidden">
          <button
            type="button"
            onClick={handlePrev}
            aria-label="Previous testimonial"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:text-white border border-white/10 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>
          <div className="flex items-center gap-1.5 px-2">
            {testimonials.map((_, idx) => (
              <button
                key={idx}
                type="button"
                onClick={() => setCurrentIndex(idx)}
                aria-label={`Go to slide ${idx + 1}`}
                className={`h-2 rounded-full transition-all duration-300 ${
                  currentIndex === idx
                    ? "w-6 bg-gradient-to-r from-[#c40e17] to-[#e51d28] shadow-[0_0_8px_rgba(196,14,23,0.6)]"
                    : "w-2 bg-slate-400/50 hover:bg-slate-400"
                }`}
              />
            ))}
          </div>
          <button
            type="button"
            onClick={handleNext}
            aria-label="Next testimonial"
            className="flex h-7 w-7 items-center justify-center rounded-full bg-slate-800 text-slate-300 hover:text-white border border-white/10 active:scale-95"
          >
            <svg className="h-3.5 w-3.5" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Desktop Indicator Dots */}
        <div className="hidden sm:flex mt-5 justify-center items-center gap-2">
          {testimonials.map((_, idx) => (
            <button
              key={idx}
              type="button"
              onClick={() => setCurrentIndex(idx)}
              aria-label={`Go to slide ${idx + 1}`}
              className={`h-2 rounded-full transition-all duration-300 ${
                currentIndex === idx
                  ? "w-7 bg-gradient-to-r from-[#c40e17] to-[#e51d28] shadow-[0_0_8px_rgba(196,14,23,0.6)]"
                  : "w-2 bg-slate-400 hover:bg-slate-500"
              }`}
            />
          ))}
        </div>

        {/* Action Buttons: Write a Review & Read More */}
        <div className="mt-7 sm:mt-10 flex flex-wrap items-center justify-center gap-3 sm:gap-4">
          {/* Write a Review Button */}
          <Link
            href="https://www.google.com/search?q=terra+inn+motel+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_14px_rgba(0,0,0,0.6)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(196,14,23,0.45),0_0_15px_rgba(229,29,40,0.3)] active:translate-y-0"
          >
            <div className="relative flex items-center justify-center gap-2.5 overflow-hidden rounded-[9.5px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-base font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
              {/* Button Specular Gloss */}
              <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/40 via-white/10 to-transparent z-10" />

              {/* Smooth Luminous Light Gleam Sweep Animation */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/40 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full z-20"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white shadow-sm p-0.5">
                <GoogleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>

              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] transition-colors duration-300 group-hover:text-rose-50">
                Write a Review
              </span>

              <svg
                className="relative z-10 h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
                fill="none"
                viewBox="0 0 24 24"
                stroke="currentColor"
              >
                <path
                  strokeLinecap="round"
                  strokeLinejoin="round"
                  strokeWidth="2.5"
                  d="M15.232 5.232l3.536 3.536m-2.036-5.036a2.5 2.5 0 113.536 3.536L6.5 21.036H3v-3.572L16.732 3.732z"
                />
              </svg>
            </div>
          </Link>

          {/* Read More Button */}
          <Link
            href="https://www.google.com/search?q=terra+inn+motel+reviews"
            target="_blank"
            rel="noopener noreferrer"
            className="group relative inline-flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_14px_rgba(0,0,0,0.5)] transition-all duration-500 ease-out hover:-translate-y-1 hover:shadow-[0_12px_28px_rgba(15,23,42,0.4)] active:translate-y-0"
          >
            <div className="relative flex items-center justify-center gap-2.5 overflow-hidden rounded-[9.5px] bg-gradient-to-b from-[#2e3947] via-[#1d2530] to-[#11171f] px-5 py-2.5 sm:px-7 sm:py-3 text-xs sm:text-base font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(255,255,255,0.3)] transition-colors group-hover:from-[#374455] group-hover:to-[#171e28]">
              {/* Button Specular Gloss */}
              <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/30 via-white/5 to-transparent z-10" />

              {/* Smooth Luminous Light Gleam Sweep Animation */}
              <div
                className="pointer-events-none absolute inset-0 -translate-x-full bg-gradient-to-r from-transparent via-white/35 to-transparent transition-transform duration-700 ease-in-out group-hover:translate-x-full z-20"
                aria-hidden="true"
              />

              <div className="relative z-10 flex h-4 w-4 sm:h-5 sm:w-5 items-center justify-center rounded-full bg-white shadow-sm p-0.5">
                <GoogleIcon className="h-3 w-3 sm:h-3.5 sm:w-3.5" />
              </div>

              <span className="relative z-10 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                Read More
              </span>

              <svg
                className="relative z-10 h-4 w-4 transform transition-transform duration-300 ease-out group-hover:translate-x-1"
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

export default Testimonials;