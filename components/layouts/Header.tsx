"use client";

import React, { useState, useEffect } from "react";
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

export const Header: React.FC = () => {
  const [mobileMenuOpen, setMobileMenuOpen] = useState(false);
  const [isScrolled, setIsScrolled] = useState(false);
  const [activeNav, setActiveNav] = useState<string>("/");

  useEffect(() => {
    if (typeof window !== "undefined" && window.location.hash) {
      setActiveNav(window.location.hash);
    }

    const handleScroll = () => {
      setIsScrolled(window.scrollY > 30);

      const sections = [
        { id: "gallery", href: "#gallery" },
        { id: "attractions", href: "#attractions" },
        { id: "rooms", href: "#rooms" },
        { id: "about", href: "#about" },
      ];

      const scrollPosition = window.scrollY + 200;

      let currentSection = "/";
      for (const section of sections) {
        const el = document.getElementById(section.id);
        if (el) {
          if (scrollPosition >= el.offsetTop) {
            currentSection = section.href;
            break;
          }
        }
      }

      setActiveNav(currentSection);
    };

    handleScroll();
    window.addEventListener("scroll", handleScroll, { passive: true });

    const handleHashChange = () => {
      if (window.location.hash) {
        setActiveNav(window.location.hash);
      }
    };
    window.addEventListener("hashchange", handleHashChange);

    return () => {
      window.removeEventListener("scroll", handleScroll);
      window.removeEventListener("hashchange", handleHashChange);
    };
  }, []);

  return (
    <header className="relative z-50 w-full">
      {/* Full-Width Attached Topbar */}
      <div className="relative w-full border-b border-[#8c9baa]/35 bg-gradient-to-b from-[#48576c]/80 via-[#2f3b4c]/85 to-[#18212c]/90 backdrop-blur-md px-4 py-2 sm:px-6 lg:px-8 shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_2px_10px_rgba(0,0,0,0.45)]">
        {/* Top Specular Sheen for Glassy Effect */}
        <div
          className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/20 via-white/5 to-transparent"
          aria-hidden="true"
        />
        <div className="relative z-10 mx-auto flex max-w-7xl flex-col sm:flex-row items-center justify-between gap-1.5 sm:gap-4 text-xs sm:text-sm">
          {/* Left: Address (Clickable Google Maps link) */}
          <a
            href="https://maps.app.goo.gl/c9dc5AHTdUTf5ZR96"
            target="_blank"
            rel="noopener noreferrer"
            className="group flex items-center gap-2 text-white font-medium drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)] transition-colors hover:text-rose-300"
          >
            <svg
              className="h-4 w-4 shrink-0 text-rose-400 transition-transform duration-200 group-hover:scale-110"
              fill="none"
              viewBox="0 0 24 24"
              stroke="currentColor"
            >
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M17.657 16.657L13.414 20.9a1.998 1.998 0 01-2.827 0l-4.244-4.243a8 8 0 1111.314 0z"
              />
              <path
                strokeLinecap="round"
                strokeLinejoin="round"
                strokeWidth="2"
                d="M15 11a3 3 0 11-6 0 3 3 0 016 0z"
              />
            </svg>
            <span className="text-white tracking-wide transition-colors group-hover:text-rose-200">
              225 E U.S. Hwy 70, Safford, AZ 85546
            </span>
          </a>

          {/* Right: Contact */}
          <div className="flex items-center gap-3 sm:gap-5 text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.85)]">
            <a
              href="tel:+19283480011"
              className="group flex items-center gap-2 font-semibold text-white tracking-wide transition-colors hover:text-rose-300"
            >
              <svg className="h-4 w-4 shrink-0 text-rose-400 transition-transform duration-200 group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2 3a1 1 0 011-1h2.153a1 1 0 01.986.836l.74 4.435a1 1 0 01-.54 1.06l-1.548.773a11.037 11.037 0 006.105 6.105l.774-1.548a1 1 0 011.059-.54l4.435.74a1 1 0 01.836.986V17a1 1 0 01-1 1h-2C7.82 18 2 12.18 2 4V3z" />
              </svg>
              <span className="transition-colors group-hover:text-rose-200">+1 (928) 348-0011</span>
            </a>

            <span className="hidden sm:inline-block h-3.5 w-px bg-slate-500/60" aria-hidden="true" />

            <a
              href="mailto:gilaholdings@gmail.com"
              className="group hidden sm:flex items-center gap-2 font-medium text-white/90 tracking-wide transition-colors hover:text-white"
            >
              <svg className="h-4 w-4 shrink-0 text-rose-400 transition-transform group-hover:scale-110" fill="currentColor" viewBox="0 0 20 20">
                <path d="M2.003 5.884L10 9.882l7.997-3.998A2 2 0 0016 4H4a2 2 0 00-1.997 1.884z" />
                <path d="M18 8.118l-8 4-8-4V14a2 2 0 002 2h12a2 2 0 002-2V8.118z" />
              </svg>
              <span>gilaholdings@gmail.com</span>
            </a>
          </div>
        </div>
      </div>

      {/* Main Navbar Container */}
      <div
        className={`w-full transition-all duration-300 ${
          isScrolled
            ? "fixed top-0 left-0 right-0 z-50 border-b border-[#8c9baa]/35 bg-gradient-to-b from-[#48576c]/90 via-[#2f3b4c]/95 to-[#18212c]/95 backdrop-blur-md shadow-[inset_0_1px_1px_rgba(255,255,255,0.3),0_4px_16px_rgba(0,0,0,0.6)]"
            : "pt-3 sm:pt-4"
        }`}
      >
        {isScrolled && (
          <div
            className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/20 via-white/5 to-transparent"
            aria-hidden="true"
          />
        )}
        <div className={isScrolled ? "mx-auto max-w-7xl px-4 sm:px-6 lg:px-8" : "mx-auto max-w-7xl px-3 sm:px-6"}>
          {/* Solid 3D Silver / Chrome Tubular Beveled Frame */}
          <div
            className={
              isScrolled
                ? ""
                : "rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_14px_32px_rgba(0,0,0,0.85),0_4px_10px_rgba(0,0,0,0.6)]"
            }
          >
            {/* Main Slate-Steel Blue Metallic Glass Panel */}
            <nav
              aria-label="Main Navigation"
              className={
                isScrolled
                  ? "relative py-2 sm:py-2.5"
                  : "relative rounded-[19px] sm:rounded-[23px] bg-gradient-to-b from-[#48576c] via-[#2f3b4c] to-[#18212c] px-3 py-2 sm:px-5 sm:py-2.5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)] backdrop-blur-xl"
              }
            >
              {!isScrolled && (
                <div
                  className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[19px] sm:rounded-t-[23px] bg-gradient-to-b from-white/28 via-white/8 to-transparent"
                  aria-hidden="true"
                />
              )}

            <div className="relative z-10 flex items-center justify-between gap-2 lg:gap-4">
              {/* Left: Logo Badge (Overlapping Bottom Border) */}
              <Link
                href="/"
                className="group relative z-30 flex shrink-0 items-center translate-y-3 sm:translate-y-4 md:translate-y-5 -mb-3 sm:-mb-4 md:-mb-5 transition-transform duration-200 hover:scale-105"
                aria-label="Terra Inn Motel"
              >
                <Image
                  src="/images/logo/Terra-Inn-Motel-Sign.webp"
                  alt="Terra Inn Motel Sign"
                  width={220}
                  height={87}
                  priority
                  className="h-14 sm:h-16 md:h-20 w-auto object-contain drop-shadow-[0_8px_18px_rgba(0,0,0,0.9)]"
                />
              </Link>

              {/* Center: Navigation Links in Crisp White with 3D Drop Shadow & Active Red Swoosh */}
              <div className="hidden items-center gap-3.5 lg:gap-5 xl:gap-8 md:flex">
                {navItems.map((item) => {
                  const isActive =
                    activeNav === item.href ||
                    (item.href === "/" && (activeNav === "/" || activeNav === "" || activeNav === "#home"));

                  return (
                    <Link
                      key={item.label}
                      href={item.href}
                      onClick={() => setActiveNav(item.href)}
                      className="group relative flex flex-col items-center px-2 py-1.5 text-xs lg:text-[18px] xl:text-[19px] font-bold tracking-wide transition-all duration-200"
                    >
                      <span
                        className={`relative z-10 transition-all duration-200 ${
                          isActive
                            ? "text-white font-extrabold drop-shadow-[0_2px_4px_rgba(0,0,0,0.95),0_0_12px_rgba(255,77,88,0.5)]"
                            : "text-slate-200 drop-shadow-[0_1.5px_3px_rgba(0,0,0,0.9)] group-hover:text-white group-hover:-translate-y-0.5"
                        }`}
                      >
                        {item.label}
                      </span>

                      {/* Red Swoosh Bottom-Left Pattern Below Active / Hover Nav */}
                      <div
                        className={`pointer-events-none absolute -bottom-2 left-1/2 -translate-x-1/2 w-[115%] min-w-[58px] max-w-[96px] h-[10px] transition-all duration-300 ${
                          isActive
                            ? "opacity-100 scale-100 drop-shadow-[0_2px_8px_rgba(229,29,40,0.95)]"
                            : "opacity-0 scale-75 group-hover:opacity-75 group-hover:scale-95 group-hover:drop-shadow-[0_1px_5px_rgba(229,29,40,0.7)]"
                        }`}
                        aria-hidden="true"
                      >
                        <Image
                          src="/images/logo/red-swoosh-bottom-left.png"
                          alt=""
                          fill
                          className="object-contain"
                        />
                      </div>

                      {/* Subtle Ambient Hover Glow Pill */}
                      <div
                        className={`pointer-events-none absolute inset-0 -z-10 rounded-xl bg-white/5 blur-sm transition-opacity duration-200 ${
                          isActive ? "opacity-100" : "opacity-0 group-hover:opacity-100"
                        }`}
                        aria-hidden="true"
                      />
                    </Link>
                  );
                })}
              </div>

              {/* Right: 3D Beveled "Book Now" Button */}
              <div className="flex items-center gap-3">
                <Link
                  href="#book"
                  className="group relative hidden sm:inline-flex items-center justify-center rounded-xl p-[2.5px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_12px_rgba(0,0,0,0.75),inset_0_1px_1px_rgba(255,255,255,0.8)] transition-all duration-200 hover:scale-105 active:translate-y-0.5"
                >
                  <div className="relative flex items-center justify-center rounded-[9.5px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-5 py-2 text-xs md:text-sm font-bold tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                    {/* Button Gloss */}
                    <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[8px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                    <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">
                      Book Now
                    </span>
                  </div>
                </Link>

                {/* Mobile Hamburger Button */}
                <button
                  type="button"
                  onClick={() => setMobileMenuOpen(!mobileMenuOpen)}
                  className="inline-flex items-center justify-center rounded-xl border border-white/20 bg-white/10 p-2 text-slate-200 shadow-md hover:bg-white/15 md:hidden"
                  aria-expanded={mobileMenuOpen}
                  aria-label="Toggle navigation"
                >
                  {mobileMenuOpen ? (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M6 18L18 6M6 6l12 12" />
                    </svg>
                  ) : (
                    <svg className="h-6 w-6" fill="none" viewBox="0 0 24 24" strokeWidth="2" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M3.75 6.75h16.5M3.75 12h16.5m-16.5 5.25h16.5" />
                    </svg>
                  )}
                </button>
              </div>
            </div>

            {/* Mobile Dropdown */}
            {mobileMenuOpen && (
              <div className="mt-3 border-t border-white/10 pt-3 md:hidden">
                <div className="flex flex-col space-y-2">
                  {navItems.map((item) => {
                    const isActive =
                      activeNav === item.href ||
                      (item.href === "/" && (activeNav === "/" || activeNav === "" || activeNav === "#home"));

                    return (
                      <Link
                        key={item.label}
                        href={item.href}
                        onClick={() => {
                          setActiveNav(item.href);
                          setMobileMenuOpen(false);
                        }}
                        className={`group relative flex items-center justify-between rounded-lg px-3 py-2 text-sm font-bold tracking-wide transition-all ${
                          isActive
                            ? "bg-red-500/15 text-white border border-red-500/35 shadow-[0_2px_8px_rgba(196,14,23,0.3)]"
                            : "text-slate-200 hover:bg-white/10 hover:text-white"
                        }`}
                      >
                        <span>{item.label}</span>
                        {isActive && (
                          <div className="relative h-3 w-12">
                            <Image
                              src="/images/logo/red-swoosh-bottom-left.png"
                              alt=""
                              fill
                              className="object-contain drop-shadow-[0_1px_4px_rgba(229,29,40,0.9)]"
                            />
                          </div>
                        )}
                      </Link>
                    );
                  })}
                  <div className="pt-2">
                    <Link
                      href="#book"
                      onClick={() => setMobileMenuOpen(false)}
                      className="flex w-full items-center justify-center rounded-xl p-[2px] bg-gradient-to-b from-[#f1f5f9] to-[#3a4554]"
                    >
                      <div className="w-full rounded-[10px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] py-2.5 text-center text-sm font-bold text-white shadow-[inset_0_1px_1px_rgba(255,255,255,0.35)]">
                        Book Now
                      </div>
                    </Link>
                  </div>
                </div>
              </div>
            )}
          </nav>
        </div>
      </div>
    </div>

      {/* Layout Spacer when Navbar is Fixed on Scroll */}
      {isScrolled && (
        <div className="h-[74px] sm:h-[84px] w-full" aria-hidden="true" />
      )}
    </header>
  );
};

export default Header;
