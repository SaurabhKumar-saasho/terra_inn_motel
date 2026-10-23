"use client";

import React, { useState } from "react";
import Image from "next/image";

interface FeatureItem {
  label: string;
}

const features: FeatureItem[] = [
  { label: "Premium Hospitality" },
  { label: "Modern Amenities" },
  { label: "Comfortable Suites" },
  { label: "Scenic Surroundings" },
];

const mosaicPhotos = [
  { src: "/images/gallery/PXL_20260315_165904563.jpg", alt: "Terra Inn Motel Room Interior" },
  { src: "/images/gallery/PXL_20260315_170353541.jpg", alt: "Terra Inn Motel Suite" },
  { src: "/images/gallery/PXL_20260315_170530583.jpg", alt: "Terra Inn Motel Scenic View Room" },
  { src: "/images/gallery/PXL_20260315_170818417.jpg", alt: "Terra Inn Motel Scenic Nature Surroundings" },
  { src: "/images/gallery/PXL_20260315_165922122.jpg", alt: "Terra Inn Motel Living Area" },
  { src: "/images/gallery/PXL_20260315_171103925.jpg", alt: "Terra Inn Motel Guest Bedroom" },
];

export const AboutUs: React.FC = () => {
  const [showFullText, setShowFullText] = useState(false);
  return (
    <section
      id="about"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#f1f5f9] via-[#f8fafc] to-[#e2e8f0] pt-10 sm:pt-18 lg:pt-18 pb-16 sm:pb-18 lg:pb-18"
    >
      {/* Subtle Ambient Radial Highlight */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_60%_at_50%_15%,rgba(255,255,255,0.9),transparent)]"
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
          priority
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
          priority
          className="w-full h-auto object-contain "
        />
      </div>

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        <div className="grid grid-cols-1 items-center gap-6 lg:grid-cols-12 lg:gap-10 xl:gap-10">
          {/* Left Column: Heading, Description & 3D Feature Pills */}
          <div className="lg:col-span-5 flex flex-col justify-center">


            {/* 3D Embossed Section Headline */}
            <h2
              className="text-[21px] sm:text-3xl md:text-3xl lg:text-3xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-[#0f172a] via-[#c40e17] to-[#e51d28] leading-[1.15]"
              style={{
                filter:
                  "drop-shadow(0 1px 0 rgba(255,255,255,0.95)) drop-shadow(0 3px 6px rgba(196,14,23,0.22)) drop-shadow(0 8px 16px rgba(0,0,0,0.1))",
              }}
            >
              WELCOME TO
              
              TERRA INN
            </h2>

            {/* Description - Clear, Readable, and Contemporary */}
            <div className="mt-2 space-y-2 text-sm sm:text-[15px] leading-relaxed">
              <p className="text-left font-normal text-slate-800">
                <span className="font-semibold text-slate-950">Nestled in a peaceful setting</span>, Terra Inn Motel is your premier destination for a relaxing and memorable getaway. We take pride in delivering genuine hospitality, personal attention, and an inviting atmosphere where every guest feels immediately at home. Whether you are traveling for business, embarking on a family road trip, or enjoying a restful weekend escape, our property combines modern convenience with timeless comfort.
              </p>
              <div className={`${showFullText ? "block" : "hidden sm:block"} space-y-2`}>
                <p className="text-left font-normal text-slate-600">
                  Each of our thoughtfully designed guest rooms features plush bedding, contemporary furnishings, high-speed Wi-Fi, and convenient in-room essentials designed to help you recharge in quiet tranquility. Step outside to explore rich local attractions, dining, and scenic landscapes, or simply unwind in the comfort of our well-maintained surroundings with dedicated 24/7 service.
                </p>
              </div>
              <button
                type="button"
                onClick={() => setShowFullText(!showFullText)}
                className="sm:hidden text-xs font-bold text-rose-600 hover:text-rose-700 flex items-center gap-1 pt-0.5 cursor-pointer"
              >
                <span>{showFullText ? "Show Less" : "Read More..."}</span>
              </button>
            </div>

            {/* 2x2 Feature Checkpoint Grid with Glass Cards & Crisp Checkmarks */}
            <div className="mt-3 grid grid-cols-2 gap-2 sm:gap-3.5">
              {features.map((feature) => (
                <div
                  key={feature.label}
                  className="flex items-center gap-2 sm:gap-3 rounded-xl border border-slate-200/80 bg-white/70 px-2.5 py-2 sm:px-3.5 sm:py-2.5 shadow-[0_2px_8px_rgba(15,23,42,0.04)] backdrop-blur-sm transition-all duration-200 hover:border-slate-300 hover:bg-white hover:shadow-md"
                >
                  {/* 3D Metallic Round Badge with Crisp Checkmark */}
                  <div className="relative flex h-5 w-5 sm:h-6 sm:w-6 shrink-0 items-center justify-center rounded-full p-[1.5px] bg-gradient-to-b from-[#cbd5e1] via-[#94a3b8] to-[#475569] shadow-[0_2px_6px_rgba(0,0,0,0.2),inset_0_1px_1px_rgba(255,255,255,0.8)]">
                    <div className="flex h-full w-full items-center justify-center rounded-full bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] shadow-[inset_0_1px_1.5px_rgba(0,0,0,0.5)]">
                      <svg className="h-2.5 w-2.5 sm:h-3 sm:w-3 text-white" fill="none" viewBox="0 0 24 24" stroke="currentColor" strokeWidth="3">
                        <path strokeLinecap="round" strokeLinejoin="round" d="M5 13l4 4L19 7" />
                      </svg>
                    </div>
                  </div>
                  <span className="text-[11px] sm:text-sm font-bold tracking-wide text-slate-800 leading-tight">
                    {feature.label}
                  </span>
                </div>
              ))}
            </div>

            {/* Mobile Touch-Friendly Swipeable Photo Reel */}
            <div className="sm:hidden mt-5">
              <div className="flex items-center justify-between mb-2 px-1">
                <span className="text-[11px] font-bold uppercase tracking-wider text-slate-500">
                  Property Highlights
                </span>
                <span className="text-[11px] font-semibold text-rose-600 flex items-center gap-1">
                  Swipe photos
                  <svg className="h-3 w-3 animate-pulse" fill="none" viewBox="0 0 24 24" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                  </svg>
                </span>
              </div>
              <div className="flex gap-3 overflow-x-auto pb-3 pt-1 snap-x snap-mandatory scrollbar-none -mx-4 px-4">
                {mosaicPhotos.map((photo, i) => (
                  <div
                    key={i}
                    className="w-[72vw] max-w-[270px] shrink-0 snap-center rounded-[20px] p-[2.5px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_10px_24px_rgba(0,0,0,0.4)]"
                  >
                    <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[17px]">
                      <Image
                        src={photo.src}
                        alt={photo.alt}
                        fill
                        quality={95}
                        sizes="270px"
                        className="object-cover object-center"
                      />
                    </div>
                  </div>
                ))}
              </div>
            </div>
          </div>

          {/* Right Column: 3D Beveled Photo Mosaic (Visible on Tablet & Desktop) */}
          <div className="hidden sm:grid lg:col-span-7 sm:grid-cols-3 gap-3.5 sm:gap-4 items-center">
            {/* Mosaic Column 1 */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Photo 1 (Top Left) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_30px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_165904563.jpg"
                    alt="Terra Inn Motel Room Interior"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Photo 2 (Bottom Left) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_30px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_165922122.jpg"
                    alt="Terra Inn Motel Living Area"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Mosaic Column 2 (Middle: Top Photo + TALL Portrait Photo below) */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Photo 3 (Top Middle) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_30px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_170353541.jpg"
                    alt="Terra Inn Motel Suite"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Photo 4 (Bottom Middle: TALL portrait image extending downwards) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_16px_34px_rgba(0,0,0,0.9),0_4px_12px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[3/5] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_170530583.jpg"
                    alt="Terra Inn Motel Scenic View Room"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>

            {/* Mosaic Column 3 */}
            <div className="flex flex-col gap-3.5 sm:gap-4">
              {/* Photo 5 (Top Right) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_30px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_170818417.jpg"
                    alt="Terra Inn Motel Scenic Nature Surroundings"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>

              {/* Photo 6 (Bottom Right) */}
              <div className="group rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_30px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-transform duration-300 hover:scale-[1.02]">
                <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px]">
                  <Image
                    src="/images/gallery/PXL_20260315_171103925.jpg"
                    alt="Terra Inn Motel Guest Bedroom"
                    fill
                    quality={95}
                    sizes="(max-width: 768px) 100vw, 33vw"
                    className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                  />
                </div>
              </div>
            </div>
          </div>
        </div>
      </div>
    </section>
  );
};

export default AboutUs;