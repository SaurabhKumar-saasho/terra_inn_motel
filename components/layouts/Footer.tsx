"use client";

import React from "react";
import Image from "next/image";
import Link from "next/link";

interface NavItem {
  label: string;
  href: string;
}

const navItems: NavItem[] = [
  { label: "Home", href: "/" },
  { label: "About Us", href: "#about" },
  { label: "Rooms", href: "#rooms" },
  { label: "Attractions", href: "#attractions" },
  { label: "Gallery", href: "#gallery" },
];

export const Footer: React.FC = () => {
  return (
    <footer className="w-full pt-6 sm:pt-8">
      <div className="mx-auto max-w-7xl px-3 sm:px-6">
        {/* Solid 3D Silver / Chrome Tubular Beveled Frame */}
        <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_32px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)]">
          {/* Main Slate-Steel Blue Metallic Glass Panel */}
          <div className="relative overflow-hidden rounded-[19px] sm:rounded-[23px] bg-gradient-to-b from-[#48576c] via-[#2f3b4c] to-[#18212c] px-4 py-4 sm:px-8 sm:py-5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            {/* Top Cylindrical Gloss / Specular Sheen */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[19px] sm:rounded-t-[23px] bg-gradient-to-b from-white/28 via-white/8 to-transparent"
              aria-hidden="true"
            />

                <div className="relative z-10 flex flex-col items-center justify-between gap-6 md:flex-row md:items-start md:gap-4">
                  {/* Left: Logo Section + Quote */}
                  <div className="flex shrink-0 flex-col items-center md:items-start text-center md:text-left w-full md:w-auto">
                    <Link
                      href="/"
                      className="group flex items-center transition-transform duration-200 hover:scale-[1.02]"
                      aria-label="Terra Inn Motel"
                    >
                      <Image
                        src="/images/logo/Terra-Inn-Motel-Sign.webp"
                        alt="Terra Inn Motel"
                        width={220}
                        height={87}
                        priority
                        className="h-14 sm:h-16 md:h-18 lg:h-20 w-auto object-contain drop-shadow-[0_4px_10px_rgba(0,0,0,0.7)]"
                      />
                    </Link>

                    {/* Stylish Brand Quote */}
                    <div className="mt-2.5 max-w-[260px] md:max-w-[240px]">
                      <div className="mb-1.5 h-[1.5px] w-12 bg-gradient-to-r from-[#e51d28] via-[#ff6b75] to-transparent mx-auto md:mx-0 rounded-full" />
                      <p className="text-xs sm:text-[12.5px] italic font-medium leading-relaxed tracking-wide text-slate-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
                        <span className="font-serif text-sm sm:text-base text-rose-400 select-none mr-0.5">“</span>
                        A peaceful sanctuary of comfort & heartfelt hospitality.
                        <span className="font-serif text-sm sm:text-base text-rose-400 select-none ml-0.5">”</span>
                      </p>
                    </div>
                  </div>

                  {/* Divider on mobile */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:hidden" />

                  {/* Quick Navigation Links */}
                  <div className="w-full md:w-auto">
                    <p className="text-center md:text-left text-[11px] md:hidden font-bold uppercase tracking-wider text-rose-400 mb-2.5">
                      Quick Links
                    </p>
                    <nav
                      className="grid grid-cols-2 gap-2 w-full max-w-xs mx-auto md:max-w-none md:flex md:flex-col md:items-start md:space-y-2 md:gap-0"
                      aria-label="Footer Navigation"
                    >
                      {navItems.map((item, index) => (
                        <Link
                          key={item.label}
                          href={item.href}
                          className={`group relative flex items-center justify-center md:justify-start gap-2 py-2.5 px-3 md:py-0.5 md:px-0 rounded-xl md:rounded-none bg-slate-900/40 md:bg-transparent border border-white/10 md:border-0 text-xs sm:text-[15px] font-semibold tracking-wide text-slate-200 md:text-slate-300 transition-all duration-200 active:scale-[0.98] md:active:scale-100 hover:text-white md:hover:translate-x-1.5 ${
                            index === navItems.length - 1 && navItems.length % 2 !== 0 ? "col-span-2" : ""
                          }`}
                        >
                          {/* Glowing Red Dash Indicator on Hover (Desktop) */}
                          <span
                            className="hidden md:inline-block h-[3px] w-0 rounded-full bg-gradient-to-r from-[#e51d28] to-[#ff4d58] opacity-0 transition-all duration-200 group-hover:w-3 group-hover:opacity-100 shadow-[0_0_8px_rgba(229,29,40,0.9)]"
                            aria-hidden="true"
                          />
                          <span className="drop-shadow-[0_2px_4px_rgba(0,0,0,0.9)] transition-all duration-200 group-hover:text-white group-hover:drop-shadow-[0_0_10px_rgba(255,255,255,0.4)]">
                            {item.label}
                          </span>
                        </Link>
                      ))}
                    </nav>
                  </div>

                  {/* Divider on mobile */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:hidden" />

                  {/* Center: Contact Info (Optimized as touch-friendly interactive cards on mobile) */}
                  <div className="w-full md:w-auto">
                    <p className="text-center md:text-left text-[11px] md:hidden font-bold uppercase tracking-wider text-rose-400 mb-2.5">
                      Contact & Location
                    </p>
                    <div className="flex flex-col space-y-2.5 sm:space-y-3 md:space-y-5 text-xs sm:text-[15px] w-full max-w-sm mx-auto md:mx-0">
                      {/* Phone - Prominent Call Action on Mobile */}
                      <a
                        href="tel:+19283480011"
                        className="group flex items-center justify-between p-2.5 md:p-0 rounded-xl md:rounded-none bg-gradient-to-r from-red-950/40 via-slate-900/50 to-slate-900/40 md:bg-transparent md:bg-none border border-red-500/25 md:border-0 hover:border-red-400/50 md:hover:border-transparent md:hover:bg-transparent transition-all duration-200 active:scale-[0.98] md:active:scale-100"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/20 md:bg-red-500/15 border border-red-400/40 md:border-red-400/30 text-rose-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-200 group-hover:scale-105 group-hover:bg-red-500/25">
                            <svg className="h-4 w-4 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
                            </svg>
                          </span>
                          <div className="text-left">
                            <span className="block md:hidden text-[10px] font-semibold text-rose-300 uppercase tracking-wider">
                              Call Reception
                            </span>
                            <span className="font-bold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] group-hover:text-rose-300 transition-colors text-xs sm:text-[15px]">
                              +1 (928) 348-0011
                            </span>
                          </div>
                        </div>
                        <span className="md:hidden text-[11px] font-bold px-2 py-0.5 rounded-md bg-red-600/30 text-red-200 border border-red-500/30">
                          Call Now
                        </span>
                      </a>

                      {/* Address with Google Maps link */}
                      <a
                        href="https://maps.app.goo.gl/c9dc5AHTdUTf5ZR96"
                        target="_blank"
                        rel="noopener noreferrer"
                        className="group flex items-center justify-between p-2.5 md:p-0 rounded-xl md:rounded-none bg-slate-900/40 md:bg-transparent md:bg-none border border-white/10 md:border-0 hover:border-red-400/30 md:hover:border-transparent md:hover:bg-transparent transition-all duration-200 active:scale-[0.98] md:active:scale-100"
                        title="View on Google Maps"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15 border border-red-400/30 text-rose-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-200 group-hover:scale-105 group-hover:bg-red-500/25">
                            <svg className="h-4 w-4 md:h-4 md:w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                              <path strokeLinecap="round" strokeLinejoin="round" d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z" />
                              <path strokeLinecap="round" strokeLinejoin="round" d="M15 11a3 3 0 11-6 0 3 3 0 016 0z" />
                            </svg>
                          </span>
                          <div className="text-left">
                            <span className="block md:hidden text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                              Location
                            </span>
                            <span className="font-medium tracking-wide text-slate-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] group-hover:text-white transition-colors text-xs sm:text-[15px]">
                              225 E U.S. Hwy 70, Safford, AZ 85546
                            </span>
                          </div>
                        </div>
                        <span className="md:hidden text-[11px] font-medium text-rose-400 flex items-center gap-0.5">
                          Map ↗
                        </span>
                      </a>

                      {/* Email */}
                      <a
                        href="mailto:gilaholdings@gmail.com"
                        className="group flex items-center justify-between p-2.5 md:p-0 rounded-xl md:rounded-none bg-slate-900/40 md:bg-transparent md:bg-none border border-white/10 md:border-0 hover:border-red-400/30 md:hover:border-transparent md:hover:bg-transparent transition-all duration-200 active:scale-[0.98] md:active:scale-100"
                      >
                        <div className="flex items-center gap-3">
                          <span className="flex h-9 w-9 md:h-8 md:w-8 shrink-0 items-center justify-center rounded-lg bg-red-500/15 border border-red-400/30 text-rose-400 shadow-[inset_0_1px_1px_rgba(255,255,255,0.25)] transition-all duration-200 group-hover:scale-105 group-hover:bg-red-500/25">
                            <svg className="h-4 w-4 md:h-4 md:w-4" fill="currentColor" viewBox="0 0 20 20">
                              <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                              <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
                            </svg>
                          </span>
                          <div className="text-left">
                            <span className="block md:hidden text-[10px] font-semibold text-slate-400 uppercase tracking-wider">
                              Email Us
                            </span>
                            <span className="font-medium tracking-wide text-slate-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] group-hover:text-white transition-colors text-xs sm:text-[15px]">
                              gilaholdings@gmail.com
                            </span>
                          </div>
                        </div>
                        <span className="md:hidden text-[11px] font-medium text-rose-400 flex items-center gap-0.5">
                          Mail ↗
                        </span>
                      </a>
                    </div>
                  </div>

                  {/* Divider on mobile */}
                  <div className="w-full h-px bg-gradient-to-r from-transparent via-white/15 to-transparent md:hidden" />

                  {/* Right: Booking Action + Social Media Links */}
                  <div className="flex flex-col items-center md:items-end justify-center gap-3.5 sm:gap-4 w-full md:w-auto">
                    {/* Booking Prompt Text */}
                    <div className="text-center md:text-right space-y-0.5">
                      <p className="text-[11px] font-bold uppercase tracking-wider text-rose-400 drop-shadow">
                        Direct Reservation
                      </p>
                      <p className="text-xs sm:text-[15px] font-bold text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                        Plan Your Stay With Us
                      </p>
                    </div>

                    {/* 3D Beveled "Book Your Stay" Button */}
                    <Link
                      href="#rooms"
                      className="group relative inline-flex items-center justify-center rounded-xl p-[2px] bg-gradient-to-b from-[#f8fafc] via-[#a8b5c4] to-[#475569] shadow-[0_4px_12px_rgba(0,0,0,0.7),inset_0_1px_1px_rgba(255,255,255,0.85)] transition-all duration-200 hover:scale-105 active:translate-y-0.5 w-full sm:w-auto max-w-xs md:max-w-[240px]"
                    >
                      <div className="relative flex items-center justify-center gap-2 rounded-[10px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-6 py-3 sm:px-4 sm:py-2 text-sm sm:text-sm font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] w-full">
                        {/* Specular gloss */}
                        <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                        <svg className="h-4 w-4 sm:h-4 sm:w-4 text-white drop-shadow" fill="none" viewBox="0 0 24 24" strokeWidth="2.2" stroke="currentColor">
                          <path strokeLinecap="round" strokeLinejoin="round" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                        </svg>
                        <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                          Book Your Stay
                        </span>
                      </div>
                    </Link>

                    {/* Social Media Links with comfortable mobile touch targets */}
                    <div className="flex items-center justify-center gap-3 sm:gap-3.5 mt-1 sm:mt-0.5">
                      {/* Facebook */}
                      <a
                        href="https://facebook.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Facebook"
                        className="group flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-800/40 md:bg-transparent border border-white/10 md:border-0 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                      >
                        <Image
                          src="/images/logo/facebook.png"
                          alt="Facebook"
                          width={36}
                          height={36}
                          className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>

                      {/* Instagram */}
                      <a
                        href="https://instagram.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="Instagram"
                        className="group flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-800/40 md:bg-transparent border border-white/10 md:border-0 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                      >
                        <Image
                          src="/images/logo/instagram.png"
                          alt="Instagram"
                          width={36}
                          height={36}
                          className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>

                      {/* YouTube */}
                      <a
                        href="https://youtube.com"
                        target="_blank"
                        rel="noopener noreferrer"
                        aria-label="YouTube"
                        className="group flex h-10 w-10 sm:h-9 sm:w-9 items-center justify-center rounded-xl bg-slate-800/40 md:bg-transparent border border-white/10 md:border-0 transition-transform duration-200 hover:-translate-y-0.5 active:scale-95"
                      >
                        <Image
                          src="/images/logo/youtube.png"
                          alt="YouTube"
                          width={36}
                          height={36}
                          className="h-7 w-7 sm:h-8 sm:w-8 object-contain drop-shadow-[0_2px_6px_rgba(0,0,0,0.6)] transition-transform duration-200 group-hover:scale-110"
                        />
                      </a>
                    </div>
                  </div>
                </div>
              </div>
            </div>
          </div>

      {/* Full-Width Footer Bottom Bar: Copyright & Powered by WXPERTS */}
      <div className="mt-6 w-full border-t border-slate-800/80 bg-[#070b12] py-4 px-4 sm:px-8 lg:px-12">
        <div className="mx-auto max-w-7xl flex w-full flex-col items-center justify-between gap-3 text-xs sm:text-sm text-slate-400 md:flex-row">
          <p className="tracking-wide text-center md:text-left text-[11px] sm:text-xs md:text-sm text-slate-400">
            Copyright © 2026 Terra Inn Motel. All Rights Reserved.
          </p>
          <div className="flex flex-col sm:flex-row items-center justify-center gap-2 sm:gap-2.5 tracking-wide text-slate-400 text-[11px] sm:text-xs">
            <div className="flex flex-wrap items-center justify-center gap-1.5 sm:gap-2">
              <span>Powered by:</span>
              <a
                href="https://wxperts.co"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Website Development
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://wxperts.co"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Hosting
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://wxperts.co"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                SEO
              </a>
              <span className="text-slate-600">|</span>
              <a
                href="https://wxperts.co"
                target="_blank"
                rel="noopener noreferrer"
                className="transition-colors hover:text-white"
              >
                Digital Marketing
              </a>
            </div>
            <a
              href="https://wxperts.co"
              target="_blank"
              rel="noopener noreferrer"
              className="inline-flex shrink-0 items-center transition-transform hover:scale-105"
            >
              <Image
                src="/images/logo/wxperts_powerdby.avif"
                alt="Powered by wxperts.co"
                width={120}
                height={36}
                className="h-6 sm:h-7 md:h-8 w-auto object-contain"
              />
            </a>
          </div>
        </div>
      </div>
    </footer>
  );
};

export default Footer;

