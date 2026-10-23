"use client";

import React, { useState } from "react";
import Image from "next/image";
import Link from "next/link";

interface PhotoItem {
  src: string;
  alt: string;
}

export const Gallery: React.FC = () => {
  const [selectedImage, setSelectedImage] = useState<string | null>(null);

  // Far Left: Main Pool
  const card1: PhotoItem = {
    src: "/images/gallery/PXL_20260315_165904563.jpg",
    alt: "Terra Inn Sparkling Swimming Pool",
  };

  // Mid-Left Stacked
  const card2Top: PhotoItem = {
    src: "/images/gallery/PXL_20260315_171319187.jpg",
    alt: "Terra Inn Pool Courtyard View",
  };
  const card2Bottom: PhotoItem = {
    src: "/images/gallery/PXL_20260315_171103925.jpg",
    alt: "Terra Inn Pool & Pines",
  };

  // Center Hero: Courtyard Patio
  const card3: PhotoItem = {
    src: "/images/gallery/PXL_20261020_012124217.jpg",
    alt: "Terra Inn Outdoor Pergola & Courtyard Patio",
  };

  // Mid-Right Stacked: Suites & Lounge
  const card4Top: PhotoItem = {
    src: "/images/gallery/PXL_20260315_170353541.jpg",
    alt: "Terra Inn Executive Suite",
  };
  const card4Bottom: PhotoItem = {
    src: "/images/gallery/PXL_20260315_165922122.jpg",
    alt: "Terra Inn Living Room Lounge",
  };

  // Far Right: Lobby & Front Desk
  const card5: PhotoItem = {
    src: "/images/gallery/PXL_20261021_143047334.jpg",
    alt: "Terra Inn Front Desk & Lobby",
  };

  // Mobile curated photo showcase list
  const allPhotos: PhotoItem[] = [
    card3, // Courtyard Patio (Hero)
    card1, // Pool
    card4Top, // Executive Suite
    card2Top, // Courtyard View
    card4Bottom, // Lounge
    card2Bottom, // Pool & Pines
    card5, // Lobby & Front Desk
  ];

  const renderCard = (photo: PhotoItem, key: string) => (
    <div
      key={key}
      onClick={() => setSelectedImage(photo.src)}
      className="w-[245px] flex-shrink-0 cursor-pointer group"
    >
      <div className="rounded-[22px] p-[3px] bg-gradient-to-b from-white via-[#a6b4c3] to-[#3a4552] shadow-[0_16px_36px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)] transition-all duration-300">
        <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[19px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)]">
          <Image
            src={photo.src}
            alt={photo.alt}
            fill
            sizes="250px"
            className="object-cover object-center filter brightness-[1.02] contrast-[1.04]"
          />

          {/* Top Specular Sheen */}
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 via-white/8 to-transparent rounded-t-[19px] z-10"
            aria-hidden="true"
          />
        </div>
      </div>
    </div>
  );

  return (
    <section
      id="gallery"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#141921] via-[#0d1117] to-[#080b0f] py-10 sm:py-16 lg:py-16"
    >
      {/* Background ambient radial glow */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_80%_50%_at_50%_35%,rgba(65,80,102,0.18),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3D Chrome Embossed Section Headline */}
        <div className="mb-8 sm:mb-14 text-center">
          <h2
            className="text-2xl sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white from-45% via-[#ff4d58] via-75% to-[#c40e17] "
            style={{
              filter:
                "drop-shadow(0 4px 8px rgba(0,0,0,0.95)) drop-shadow(0 10px 24px rgba(0,0,0,0.85)) drop-shadow(0 0 24px rgba(196,14,23,0.35))",
            }}
          >
            OUR PHOTO GALLERY
          </h2>
        </div>

        {/* ======================================================== */}
        {/* MOBILE VIEW: Continuous Infinite Running Tape (Marquee)   */}
        {/* ======================================================== */}
        <div className="relative overflow-hidden md:hidden py-2 -mx-4 sm:-mx-6">
          {/* Continuous Running Animation Keyframes */}
          <style>{`
            @keyframes galleryContinuousRunning {
              0% { transform: translate3d(0, 0, 0); }
              100% { transform: translate3d(-50%, 0, 0); }
            }
          `}</style>

          <div
            className="flex w-max active:[animation-play-state:paused] hover:[animation-play-state:paused]"
            style={{
              animation: "galleryContinuousRunning 25s linear infinite",
              willChange: "transform",
            }}
          >
            {/* First Set */}
            <div className="flex gap-3.5 pr-3.5">
              {allPhotos.map((photo, idx) =>
                renderCard(photo, `set1-${idx}`)
              )}
            </div>

            {/* Cloned Second Set for Seamless Infinite Loop */}
            <div className="flex gap-3.5 pr-3.5" aria-hidden="true">
              {allPhotos.map((photo, idx) =>
                renderCard(photo, `set2-${idx}`)
              )}
            </div>
          </div>
        </div>

        {/* ======================================================== */}
        {/* DESKTOP VIEW: 5-Card Layered Overlapping Collage Layout  */}
        {/* ======================================================== */}
        <div className="hidden md:flex relative mx-auto w-full items-center justify-center py-4">
          {/* Light Whitish Ambient Effect Behind Images */}
          <div
            className="pointer-events-none absolute left-1/2 top-1/2 -translate-x-1/2 -translate-y-1/2 w-[92%] max-w-5xl h-[110%] rounded-full bg-[radial-gradient(ellipse_at_center,rgba(255,255,255,0.25)_0%,rgba(255,255,255,0.12)_40%,rgba(255,255,255,0.03)_65%,transparent_75%)] blur-2xl sm:blur-3xl z-0"
            aria-hidden="true"
          />

          <div className="flex w-full items-center justify-center lg:overflow-visible pb-6 lg:pb-0 scrollbar-none">
            <div className="flex min-w-[900px] lg:min-w-0 w-full items-center justify-center">
              {/* CARD 1: Far Left (Front Layer, z-20) */}
              <div
                onClick={() => setSelectedImage(card1.src)}
                className="group relative z-20 w-[28%] flex-shrink-0 cursor-pointer transition-all duration-300 hover:z-30 hover:scale-105"
              >
                <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-white via-[#a6b4c3] to-[#3a4552] shadow-[0_20px_45px_rgba(0,0,0,0.92),0_6px_14px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)]">
                    <Image
                      src={card1.src}
                      alt={card1.alt}
                      fill
                      sizes="(max-width: 1024px) 300px, 28vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 via-white/8 to-transparent rounded-t-[19px] sm:rounded-t-[23px] z-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 2: Mid-Left Stack (Back Layer, z-10, overlaps Card 1 & Card 3) */}
              <div className="group relative z-10 -ml-12 lg:-ml-16 w-[20%] flex-shrink-0 transition-all duration-300 hover:z-30 hover:scale-105">
                <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-white via-[#a6b4c3] to-[#3a4552] shadow-[0_16px_36px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)]">
                  <div className="relative flex flex-col h-[280px] sm:h-[320px] lg:h-[340px] w-full overflow-hidden rounded-[19px] sm:rounded-[23px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45)]">
                    {/* Top Image */}
                    <div
                      onClick={() => setSelectedImage(card2Top.src)}
                      className="relative h-1/2 w-full cursor-pointer overflow-hidden border-b-2 border-slate-700/80"
                    >
                      <Image
                        src={card2Top.src}
                        alt={card2Top.alt}
                        fill
                        sizes="(max-width: 1024px) 200px, 20vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Bottom Image */}
                    <div
                      onClick={() => setSelectedImage(card2Bottom.src)}
                      className="relative h-1/2 w-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={card2Bottom.src}
                        alt={card2Bottom.alt}
                        fill
                        sizes="(max-width: 1024px) 200px, 20vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Specular gloss */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/25 to-transparent rounded-t-[19px] sm:rounded-t-[23px] z-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 3: Center Hero Courtyard Patio (Front Layer, z-20) */}
              <div
                onClick={() => setSelectedImage(card3.src)}
                className="group relative z-20 -ml-12 lg:-ml-16 w-[34%] flex-shrink-0 cursor-pointer transition-all duration-300 hover:z-30 hover:scale-105"
              >
                <div className="rounded-[24px] sm:rounded-[28px] p-[3.5px] bg-gradient-to-b from-white via-[#b4c1cf] to-[#3a4552] shadow-[0_24px_50px_rgba(0,0,0,0.95),0_8px_18px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[16/11] w-full overflow-hidden rounded-[21px] sm:rounded-[25px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.55)]">
                    <Image
                      src={card3.src}
                      alt={card3.alt}
                      fill
                      sizes="(max-width: 1024px) 360px, 34vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/35 via-white/8 to-transparent rounded-t-[21px] sm:rounded-t-[25px] z-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 4: Mid-Right Stack (Back Layer, z-10, overlaps Card 3 & Card 5) */}
              <div className="group relative z-10 -ml-12 lg:-ml-16 w-[20%] flex-shrink-0 transition-all duration-300 hover:z-30 hover:scale-105">
                <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-white via-[#a6b4c3] to-[#3a4552] shadow-[0_16px_36px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)]">
                  <div className="relative flex flex-col h-[280px] sm:h-[320px] lg:h-[340px] w-full overflow-hidden rounded-[19px] sm:rounded-[23px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45)]">
                    {/* Top Suite Image */}
                    <div
                      onClick={() => setSelectedImage(card4Top.src)}
                      className="relative h-1/2 w-full cursor-pointer overflow-hidden border-b-2 border-slate-700/80"
                    >
                      <Image
                        src={card4Top.src}
                        alt={card4Top.alt}
                        fill
                        sizes="(max-width: 1024px) 200px, 20vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Bottom Lounge Image */}
                    <div
                      onClick={() => setSelectedImage(card4Bottom.src)}
                      className="relative h-1/2 w-full cursor-pointer overflow-hidden"
                    >
                      <Image
                        src={card4Bottom.src}
                        alt={card4Bottom.alt}
                        fill
                        sizes="(max-width: 1024px) 200px, 20vw"
                        className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                      />
                    </div>
                    {/* Specular gloss */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[35%] bg-gradient-to-b from-white/25 to-transparent rounded-t-[19px] sm:rounded-t-[23px] z-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>

              {/* CARD 5: Far Right Front Desk & Lobby (Front Layer, z-20) */}
              <div
                onClick={() => setSelectedImage(card5.src)}
                className="group relative z-20 -ml-12 lg:-ml-16 w-[28%] flex-shrink-0 cursor-pointer transition-all duration-300 hover:z-30 hover:scale-105"
              >
                <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-white via-[#a6b4c3] to-[#3a4552] shadow-[0_20px_45px_rgba(0,0,0,0.92),0_6px_14px_rgba(0,0,0,0.7)]">
                  <div className="relative aspect-[4/3] w-full overflow-hidden rounded-[19px] sm:rounded-[23px] bg-slate-900 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.5)]">
                    <Image
                      src={card5.src}
                      alt={card5.alt}
                      fill
                      sizes="(max-width: 1024px) 300px, 28vw"
                      className="object-cover object-center transition-transform duration-500 group-hover:scale-105"
                    />
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[45%] bg-gradient-to-b from-white/30 via-white/8 to-transparent rounded-t-[19px] sm:rounded-t-[23px] z-10"
                      aria-hidden="true"
                    />
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>

        {/* View All Gallery Action Button */}
        <div className="mt-8 sm:mt-10 flex justify-center">
          <Link
            href="#gallery"
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
                View All Gallery
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

        {/* Lightbox Modal */}
        {selectedImage && (
          <div
            onClick={() => setSelectedImage(null)}
            className="fixed inset-0 z-50 flex items-center justify-center bg-black/90 p-3 sm:p-4 backdrop-blur-md transition-opacity duration-300"
          >
            <div
              onClick={(e) => e.stopPropagation()}
              className="relative max-h-[90vh] max-w-5xl overflow-hidden rounded-2xl p-[3px] bg-gradient-to-b from-white via-[#94a3b8] to-[#334155] shadow-2xl"
            >
              <div className="relative aspect-[16/10] w-[90vw] sm:w-[85vw] max-w-4xl max-h-[80vh] overflow-hidden rounded-[14px]">
                <Image
                  src={selectedImage}
                  alt="Enlarged gallery photo"
                  fill
                  className="object-contain"
                />
              </div>
              <button
                type="button"
                onClick={() => setSelectedImage(null)}
                aria-label="Close modal"
                className="absolute top-3 right-3 sm:top-4 sm:right-4 flex h-8 w-8 sm:h-9 sm:w-9 items-center justify-center rounded-full bg-slate-900/80 text-white shadow-lg backdrop-blur-sm transition-transform hover:scale-110"
              >
                ✕
              </button>
            </div>
          </div>
        )}
      </div>
    </section>
  );
};

export default Gallery;