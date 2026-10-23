"use client";

import React, { useState, useRef, useEffect } from "react";
import Image from "next/image";
import Header from "@/components/layouts/Header";

const guestOptions = [
  { value: "All", label: "All Guests" },
  { value: "1", label: "1 Guest" },
  { value: "2", label: "2 Guests" },
  { value: "3", label: "3 Guests" },
  { value: "4+", label: "4+ Guests" },
];

const roomTypeOptions = [
  { value: "All types", label: "All Room Types" },
  { value: "Standard King", label: "Standard King" },
  { value: "Double Queen", label: "Double Queen" },
  { value: "Suite", label: "Suite" },
];

const formatDateDisplay = (dateStr: string) => {
  if (!dateStr) return "Select Date";
  try {
    const [year, month, day] = dateStr.split("-").map(Number);
    if (!year || !month || !day) return dateStr;
    const date = new Date(year, month - 1, day);
    return date.toLocaleDateString("en-US", {
      month: "short",
      day: "numeric",
      year: "numeric",
    });
  } catch {
    return dateStr;
  }
};

interface CalendarPickerProps {
  selectedDate: string;
  onSelectDate: (dateStr: string) => void;
  minDate?: string;
}

const CalendarPicker: React.FC<CalendarPickerProps> = ({
  selectedDate,
  onSelectDate,
  minDate,
}) => {
  const initialDate = selectedDate ? new Date(selectedDate) : new Date();
  const [currentMonth, setCurrentMonth] = useState<Date>(
    new Date(
      isNaN(initialDate.getTime()) ? new Date().getFullYear() : initialDate.getFullYear(),
      isNaN(initialDate.getTime()) ? new Date().getMonth() : initialDate.getMonth(),
      1
    )
  );

  const year = currentMonth.getFullYear();
  const month = currentMonth.getMonth();

  const monthNames = [
    "January", "February", "March", "April", "May", "June",
    "July", "August", "September", "October", "November", "December",
  ];

  const daysOfWeek = ["Su", "Mo", "Tu", "We", "Th", "Fr", "Sa"];

  const handlePrevMonth = () => {
    setCurrentMonth(new Date(year, month - 1, 1));
  };

  const handleNextMonth = () => {
    setCurrentMonth(new Date(year, month + 1, 1));
  };

  const firstDayIndex = new Date(year, month, 1).getDay();
  const daysInMonth = new Date(year, month + 1, 0).getDate();

  return (
    <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-[280px] sm:w-[290px] rounded-[18px] p-[2px] bg-gradient-to-b from-[#8c9baa] via-[#48576c] to-[#18212c] shadow-[0_16px_40px_rgba(0,0,0,0.95),0_6px_16px_rgba(0,0,0,0.8)] backdrop-blur-xl animate-in fade-in zoom-in-95 duration-150">
      <div className="rounded-[16px] bg-gradient-to-b from-[#18202c] via-[#10151e] to-[#080b0f] p-3 shadow-[inset_0_1px_1px_rgba(255,255,255,0.18)]">
        {/* Month Navigation */}
        <div className="mb-2.5 flex items-center justify-between px-1">
          <button
            type="button"
            onClick={handlePrevMonth}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-rose-600/30 hover:text-white cursor-pointer"
            aria-label="Previous month"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M15 19l-7-7 7-7" />
            </svg>
          </button>

          <span className="text-xs sm:text-sm font-bold tracking-wide text-white drop-shadow">
            {monthNames[month]} {year}
          </span>

          <button
            type="button"
            onClick={handleNextMonth}
            className="flex h-7 w-7 items-center justify-center rounded-lg bg-white/10 text-slate-200 transition-colors hover:bg-rose-600/30 hover:text-white cursor-pointer"
            aria-label="Next month"
          >
            <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" stroke="currentColor">
              <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M9 5l7 7-7 7" />
            </svg>
          </button>
        </div>

        {/* Days of Week Header */}
        <div className="grid grid-cols-7 gap-1 text-center mb-1">
          {daysOfWeek.map((d) => (
            <span key={d} className="text-[10px] font-bold uppercase tracking-wider text-slate-400 py-0.5">
              {d}
            </span>
          ))}
        </div>

        {/* Days Grid */}
        <div className="grid grid-cols-7 gap-1">
          {Array.from({ length: firstDayIndex }).map((_, i) => (
            <div key={`blank-${i}`} className="h-7 w-7" />
          ))}

          {Array.from({ length: daysInMonth }).map((_, i) => {
            const dayNumber = i + 1;
            const dateStr = `${year}-${String(month + 1).padStart(2, "0")}-${String(dayNumber).padStart(2, "0")}`;
            const isSelected = dateStr === selectedDate;
            const isDisabled = minDate ? dateStr < minDate : false;

            return (
              <button
                key={dateStr}
                type="button"
                disabled={isDisabled}
                onClick={() => onSelectDate(dateStr)}
                className={`flex h-7 w-7 sm:h-8 sm:w-8 items-center justify-center rounded-lg text-xs transition-all duration-150 ${isSelected
                  ? "bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] text-white font-bold shadow-[0_2px_8px_rgba(229,29,40,0.8),inset_0_1px_1px_rgba(255,255,255,0.4)] scale-105"
                  : isDisabled
                    ? "text-slate-600 opacity-40 cursor-not-allowed"
                    : "text-slate-200 font-medium hover:bg-white/15 hover:text-white cursor-pointer"
                  }`}
              >
                {dayNumber}
              </button>
            );
          })}
        </div>
      </div>
    </div>
  );
};

export const Hero: React.FC = () => {
  const [checkIn, setCheckIn] = useState("2026-10-24");
  const [checkOut, setCheckOut] = useState("2026-10-25");
  const [guests, setGuests] = useState("All");
  const [roomType, setRoomType] = useState("All types");
  const [checkInOpen, setCheckInOpen] = useState(false);
  const [checkOutOpen, setCheckOutOpen] = useState(false);
  const [guestsDropdownOpen, setGuestsDropdownOpen] = useState(false);
  const [roomTypeDropdownOpen, setRoomTypeDropdownOpen] = useState(false);
  const checkInRef = useRef<HTMLDivElement>(null);
  const checkOutRef = useRef<HTMLDivElement>(null);
  const guestsRef = useRef<HTMLDivElement>(null);
  const roomTypeRef = useRef<HTMLDivElement>(null);

  useEffect(() => {
    const handleClickOutside = (event: MouseEvent) => {
      if (checkInRef.current && !checkInRef.current.contains(event.target as Node)) {
        setCheckInOpen(false);
      }
      if (checkOutRef.current && !checkOutRef.current.contains(event.target as Node)) {
        setCheckOutOpen(false);
      }
      if (guestsRef.current && !guestsRef.current.contains(event.target as Node)) {
        setGuestsDropdownOpen(false);
      }
      if (roomTypeRef.current && !roomTypeRef.current.contains(event.target as Node)) {
        setRoomTypeDropdownOpen(false);
      }
    };

    document.addEventListener("mousedown", handleClickOutside);
    return () => {
      document.removeEventListener("mousedown", handleClickOutside);
    };
  }, []);

  return (
    <section id="home" className="relative min-h-[90vh] sm:min-h-screen w-full flex flex-col justify-between bg-slate-950">
      {/* Background Banner Image */}
      <div className="absolute inset-0 z-0 overflow-hidden">
        {/* Mobile View Banner */}
        <Image
          src="/images/banner/mobile-banner.webp"
          alt="Terra Inn Motel"
          fill
          priority
          className="object-cover object-center brightness-[0.95] md:hidden"
        />
        {/* Desktop / Tablet View Banner */}
        <Image
          src="/images/banner/banner2.png"
          alt="Terra Inn Motel"
          fill
          priority
          className="hidden object-cover object-center brightness-[0.95] md:block"
        />
        {/* Subtle Vignette Gradient for Depth and Contrast */}
        {/* <div className="absolute inset-0 bg-gradient-to-b from-black/45 via-transparent to-black/60 pointer-events-none" /> */}
      </div>

      {/* Top Floating Navbar */}
      <div className="relative z-50 w-full">
        <Header />
      </div>

      {/* Center 3D Metallic Heading & Subtitle */}
      <div className="relative z-10 mx-auto max-w-5xl px-4 py-10 sm:py-16 text-center">
        {/* 3D Chrome Embossed Main Headline */}
        {/* <h1
          className="text-4xl sm:text-5xl md:text-5xl lg:text-6xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-b from-white via-[#dce3ec] to-[#7f8b9d] "
          style={{
            filter:
              "drop-shadow(0 2px 0 rgba(255,255,255,0.7)) drop-shadow(0 4px 6px rgba(0,0,0,0.95)) drop-shadow(0 12px 24px rgba(0,0,0,0.9))",
          }}
        >
          ELEVATE YOUR STAY
        </h1> */}


      </div>

      {/* Bottom Floating 3D Quick Booking Form (Positioned over Hero section) */}
      <div className="hidden md:block relative z-30 mx-auto max-w-6xl w-full px-3 sm:px-6 pb-8 sm:pb-12 lg:pb-14">

        {/* Solid 3D Silver / Chrome Tubular Beveled Frame */}
        <div className="rounded-[22px] sm:rounded-[26px] p-[3px] bg-gradient-to-b from-[#e8edf5] via-[#8c9baa] to-[#3a4554] shadow-[0_18px_38px_rgba(0,0,0,0.9),0_4px_12px_rgba(0,0,0,0.6)]">
          {/* Main Slate-Steel Blue Metallic Glass Panel Interior */}
          <div className="relative rounded-[19px] sm:rounded-[23px] bg-gradient-to-b from-[#48576c] via-[#2f3b4c] to-[#18212c] px-4 py-4 sm:px-7 sm:py-5 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)] backdrop-blur-xl">
            {/* Top Cylindrical Gloss / Specular Sheen */}
            <div
              className="pointer-events-none absolute inset-x-0 top-0 h-[48%] rounded-t-[19px] sm:rounded-t-[23px] bg-gradient-to-b from-white/28 via-white/8 to-transparent"
              aria-hidden="true"
            />

            {/* Form Title & Guarantee Badge */}
            <div className="relative z-10 mb-4 flex flex-col sm:flex-row sm:items-center sm:justify-between gap-1.5 border-b border-white/10 pb-3">
              <div className="flex items-center gap-2.5">
                <span className="flex h-7 w-7 items-center justify-center rounded-lg bg-gradient-to-b from-[#e51d28] to-[#990c13] text-white shadow-[0_2px_6px_rgba(196,14,23,0.6),inset_0_1px_1px_rgba(255,255,255,0.4)]">
                  <svg className="h-4 w-4" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.253 18.75m3-18.75H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3zM3.75 9h16.5" />
                  </svg>
                </span>
                <h2 className="text-base sm:text-lg md:text-xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white from-45% via-[#ff6b74] to-[#c40e17] drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)]">
                  Quick Booking
                </h2>
              </div>
              <span className="text-[10px] sm:text-[11px] font-bold uppercase tracking-wider text-slate-300 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] flex items-center gap-1.5">
                <span className="inline-block h-1.5 w-1.5 rounded-full bg-emerald-400 shadow-[0_0_6px_rgba(52,211,153,0.8)]" />
                Best Rate Guarantee • Direct Reservation
              </span>
            </div>

            {/* Form Controls Grid */}
            <form
              onSubmit={(e) => {
                e.preventDefault();
                window.location.href = "#rooms";
              }}
              className="relative z-10 grid grid-cols-1 gap-3 sm:grid-cols-2 lg:grid-cols-5 lg:gap-4 items-end"
            >
              {/* Check-In */}
              <div>
                <label
                  htmlFor="hero-check-in"
                  className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 drop-shadow"
                >
                  <svg className="h-3.5 w-3.5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.253 18.75m3-18.75H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3zM3.75 9h16.5m-3 6.75l-3 3m0 0l-3-3m3 3V12" />
                  </svg>
                  <span>Check-In</span>
                </label>
                <div ref={checkInRef} className="relative">
                  <button
                    id="hero-check-in"
                    type="button"
                    onClick={() => {
                      setCheckInOpen(!checkInOpen);
                      setCheckOutOpen(false);
                      setGuestsDropdownOpen(false);
                      setRoomTypeDropdownOpen(false);
                    }}
                    className={`group/field relative w-full rounded-[14px] p-[2px] transition-all duration-200 cursor-pointer ${checkInOpen
                      ? "bg-gradient-to-b from-[#ff4d58] to-[#c40e17] shadow-[0_0_16px_rgba(229,29,40,0.5)]"
                      : "bg-gradient-to-b from-[#8c9baa]/70 via-[#48576c]/60 to-[#18212c]/90 shadow-[0_4px_12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:from-white/70"
                      }`}
                  >
                    <div className="relative flex h-[44px] w-full items-center justify-between rounded-[12px] bg-gradient-to-b from-[#131922] via-[#0f141c] to-[#0a0d13] px-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),inset_0_-1px_1px_rgba(255,255,255,0.08)]">
                      <div className="pointer-events-none absolute inset-x-2 top-0.5 h-[38%] rounded-t-[10px] bg-gradient-to-b from-white/12 to-transparent" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate">
                        {formatDateDisplay(checkIn)}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${checkInOpen ? "scale-110 text-rose-400" : "text-slate-300 group-hover/field:text-rose-400"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>

                  {/* Custom Calendar Dropdown */}
                  {checkInOpen && (
                    <CalendarPicker
                      selectedDate={checkIn}
                      onSelectDate={(date) => {
                        setCheckIn(date);
                        setCheckInOpen(false);
                        if (checkOut <= date) {
                          const [y, m, d] = date.split("-").map(Number);
                          const nextDay = new Date(y, m - 1, d + 1);
                          const nextStr = `${nextDay.getFullYear()}-${String(nextDay.getMonth() + 1).padStart(2, "0")}-${String(nextDay.getDate()).padStart(2, "0")}`;
                          setCheckOut(nextStr);
                        }
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Check-Out */}
              <div>
                <label
                  htmlFor="hero-check-out"
                  className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 drop-shadow"
                >
                  <svg className="h-3.5 w-3.5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M6.75 3v2.25M17.25 3v2.253 18.75m3-18.75H3.75a2.25 2.25 0 00-2.25 2.25v13.5A2.25 2.25 0 003.75 21h16.5A2.25 2.25 0 0022.5 18.75V5.25A2.25 2.25 0 0020.25 3zM3.75 9h16.5m3 3.75l3 3m0 0l3-3m-3 3V12" />
                  </svg>
                  <span>Check-Out</span>
                </label>
                <div ref={checkOutRef} className="relative">
                  <button
                    id="hero-check-out"
                    type="button"
                    onClick={() => {
                      setCheckOutOpen(!checkOutOpen);
                      setCheckInOpen(false);
                      setGuestsDropdownOpen(false);
                      setRoomTypeDropdownOpen(false);
                    }}
                    className={`group/field relative w-full rounded-[14px] p-[2px] transition-all duration-200 cursor-pointer ${checkOutOpen
                      ? "bg-gradient-to-b from-[#ff4d58] to-[#c40e17] shadow-[0_0_16px_rgba(229,29,40,0.5)]"
                      : "bg-gradient-to-b from-[#8c9baa]/70 via-[#48576c]/60 to-[#18212c]/90 shadow-[0_4px_12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:from-white/70"
                      }`}
                  >
                    <div className="relative flex h-[44px] w-full items-center justify-between rounded-[12px] bg-gradient-to-b from-[#131922] via-[#0f141c] to-[#0a0d13] px-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),inset_0_-1px_1px_rgba(255,255,255,0.08)]">
                      <div className="pointer-events-none absolute inset-x-2 top-0.5 h-[38%] rounded-t-[10px] bg-gradient-to-b from-white/12 to-transparent" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate">
                        {formatDateDisplay(checkOut)}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${checkOutOpen ? "scale-110 text-rose-400" : "text-slate-300 group-hover/field:text-rose-400"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2" d="M8 7V3m8 4V3m-9 8h10M5 21h14a2 2 0 002-2V7a2 2 0 00-2-2H5a2 2 0 00-2 2v12a2 2 0 002 2z" />
                      </svg>
                    </div>
                  </button>

                  {/* Custom Calendar Dropdown */}
                  {checkOutOpen && (
                    <CalendarPicker
                      selectedDate={checkOut}
                      minDate={checkIn}
                      onSelectDate={(date) => {
                        setCheckOut(date);
                        setCheckOutOpen(false);
                      }}
                    />
                  )}
                </div>
              </div>

              {/* Guests */}
              <div>
                <label
                  htmlFor="hero-guests"
                  className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 drop-shadow"
                >
                  <svg className="h-3.5 w-3.5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M15.75 6a3.75 3.75 0 11-7.5 0 3.75 3.75 0 017.5 0zM4.501 20.118a7.5 7.5 0 0114.998 0A17.933 17.933 0 0112 21.75c-2.676 0-5.216-.584-7.499-1.632z" />
                  </svg>
                  <span>Guests</span>
                </label>
                <div ref={guestsRef} className="relative">
                  <button
                    id="hero-guests"
                    type="button"
                    onClick={() => {
                      setGuestsDropdownOpen(!guestsDropdownOpen);
                      setRoomTypeDropdownOpen(false);
                    }}
                    className={`group/field relative w-full rounded-[14px] p-[2px] transition-all duration-200 cursor-pointer ${guestsDropdownOpen
                      ? "bg-gradient-to-b from-[#ff4d58] to-[#c40e17] shadow-[0_0_16px_rgba(229,29,40,0.5)]"
                      : "bg-gradient-to-b from-[#8c9baa]/70 via-[#48576c]/60 to-[#18212c]/90 shadow-[0_4px_12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:from-white/70"
                      }`}
                  >
                    <div className="relative flex h-[44px] w-full items-center justify-between rounded-[12px] bg-gradient-to-b from-[#131922] via-[#0f141c] to-[#0a0d13] px-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),inset_0_-1px_1px_rgba(255,255,255,0.08)]">
                      <div className="pointer-events-none absolute inset-x-2 top-0.5 h-[38%] rounded-t-[10px] bg-gradient-to-b from-white/12 to-transparent" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate">
                        {guestOptions.find((o) => o.value === guests)?.label || "Select Guests"}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${guestsDropdownOpen ? "rotate-180 text-rose-400" : "text-slate-300 group-hover/field:text-rose-400"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {guestsDropdownOpen && (
                    <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-full min-w-[170px] rounded-[16px] p-[2px] bg-gradient-to-b from-[#8c9baa] via-[#48576c] to-[#18212c] shadow-[0_14px_36px_rgba(0,0,0,0.95),0_4px_12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                      <div className="overflow-hidden rounded-[14px] bg-gradient-to-b from-[#18202c] via-[#10151e] to-[#0a0d13] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                        {guestOptions.map((option) => {
                          const isSelected = guests === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setGuests(option.value);
                                setGuestsDropdownOpen(false);
                              }}
                              className={`group flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-xs sm:text-sm transition-all duration-150 cursor-pointer ${isSelected
                                ? "bg-gradient-to-r from-red-600/35 via-red-700/25 to-red-900/30 text-white font-bold border border-red-500/40 shadow-[0_0_10px_rgba(229,29,40,0.25)]"
                                : "text-slate-200 font-medium hover:bg-white/10 hover:text-white"
                                }`}
                            >
                              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{option.label}</span>
                              {isSelected && (
                                <svg className="h-4 w-4 text-rose-400 drop-shadow" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* Room Type */}
              <div>
                <label
                  htmlFor="hero-room-type"
                  className="mb-1.5 flex items-center gap-1.5 text-[11px] font-bold uppercase tracking-wider text-slate-200 drop-shadow"
                >
                  <svg className="h-3.5 w-3.5 text-rose-400 shrink-0" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                    <path strokeLinecap="round" strokeLinejoin="round" d="M2.25 12l8.954-8.955c.44-.439 1.152-.439 1.591 0L21.75 12M4.5 9.75v10.125c0 .621.504 1.125 1.125 1.125H9.75v-4.875c0-.621.504-1.125 1.125-1.125h2.25c.621 0 1.125.504 1.125 1.125V21h4.125c.621 0 1.125-.504 1.125-1.125V9.75M8.25 21h8.25" />
                  </svg>
                  <span>Room Type</span>
                </label>
                <div ref={roomTypeRef} className="relative">
                  <button
                    id="hero-room-type"
                    type="button"
                    onClick={() => {
                      setRoomTypeDropdownOpen(!roomTypeDropdownOpen);
                      setGuestsDropdownOpen(false);
                    }}
                    className={`group/field relative w-full rounded-[14px] p-[2px] transition-all duration-200 cursor-pointer ${roomTypeDropdownOpen
                      ? "bg-gradient-to-b from-[#ff4d58] to-[#c40e17] shadow-[0_0_16px_rgba(229,29,40,0.5)]"
                      : "bg-gradient-to-b from-[#8c9baa]/70 via-[#48576c]/60 to-[#18212c]/90 shadow-[0_4px_12px_rgba(0,0,0,0.65),inset_0_1px_1px_rgba(255,255,255,0.3)] hover:from-white/70"
                      }`}
                  >
                    <div className="relative flex h-[44px] w-full items-center justify-between rounded-[12px] bg-gradient-to-b from-[#131922] via-[#0f141c] to-[#0a0d13] px-3.5 shadow-[inset_0_2px_4px_rgba(0,0,0,0.85),inset_0_-1px_1px_rgba(255,255,255,0.08)]">
                      <div className="pointer-events-none absolute inset-x-2 top-0.5 h-[38%] rounded-t-[10px] bg-gradient-to-b from-white/12 to-transparent" aria-hidden="true" />
                      <span className="text-xs sm:text-sm font-semibold tracking-wide text-white drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] truncate">
                        {roomTypeOptions.find((o) => o.value === roomType)?.label || "Select Room Type"}
                      </span>
                      <svg
                        className={`h-4 w-4 shrink-0 transition-transform duration-200 drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)] ${roomTypeDropdownOpen ? "rotate-180 text-rose-400" : "text-slate-300 group-hover/field:text-rose-400"
                          }`}
                        fill="none"
                        viewBox="0 0 24 24"
                        stroke="currentColor"
                      >
                        <path strokeLinecap="round" strokeLinejoin="round" strokeWidth="2.5" d="M19 9l-7 7-7-7" />
                      </svg>
                    </div>
                  </button>

                  {/* Dropdown Menu */}
                  {roomTypeDropdownOpen && (
                    <div className="absolute left-0 top-[calc(100%+6px)] z-50 w-full min-w-[190px] rounded-[16px] p-[2px] bg-gradient-to-b from-[#8c9baa] via-[#48576c] to-[#18212c] shadow-[0_14px_36px_rgba(0,0,0,0.95),0_4px_12px_rgba(0,0,0,0.7)] backdrop-blur-xl">
                      <div className="overflow-hidden rounded-[14px] bg-gradient-to-b from-[#18202c] via-[#10151e] to-[#0a0d13] p-1.5 shadow-[inset_0_1px_1px_rgba(255,255,255,0.15)]">
                        {roomTypeOptions.map((option) => {
                          const isSelected = roomType === option.value;
                          return (
                            <button
                              key={option.value}
                              type="button"
                              onClick={() => {
                                setRoomType(option.value);
                                setRoomTypeDropdownOpen(false);
                              }}
                              className={`group flex w-full items-center justify-between rounded-[10px] px-3 py-2 text-xs sm:text-sm transition-all duration-150 cursor-pointer ${isSelected
                                ? "bg-gradient-to-r from-red-600/35 via-red-700/25 to-red-900/30 text-white font-bold border border-red-500/40 shadow-[0_0_10px_rgba(229,29,40,0.25)]"
                                : "text-slate-200 font-medium hover:bg-white/10 hover:text-white"
                                }`}
                            >
                              <span className="drop-shadow-[0_1px_2px_rgba(0,0,0,0.9)]">{option.label}</span>
                              {isSelected && (
                                <svg className="h-4 w-4 text-rose-400 drop-shadow" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                                  <path strokeLinecap="round" strokeLinejoin="round" d="M4.5 12.75l6 6 9-13.5" />
                                </svg>
                              )}
                            </button>
                          );
                        })}
                      </div>
                    </div>
                  )}
                </div>
              </div>

              {/* 3D Beveled "Check Availability" Button */}
              <div>
                <button
                  type="submit"
                  className="group relative flex w-full items-center justify-center rounded-[14px] p-[2px] bg-gradient-to-b from-[#f1f5f9] via-[#8f9cae] to-[#3a4554] shadow-[0_4px_16px_rgba(196,14,23,0.5),0_2px_6px_rgba(0,0,0,0.8),inset_0_1px_1px_rgba(255,255,255,0.9)] transition-all duration-200 hover:scale-[1.02] active:translate-y-0.5 cursor-pointer"
                >
                  <div className="relative flex h-[44px] w-full items-center justify-center gap-1.5 sm:gap-2 rounded-[12px] bg-gradient-to-b from-[#e51d28] via-[#c40e17] to-[#880b12] px-2 text-[11px] sm:text-xs xl:text-xs font-black uppercase tracking-wide text-white shadow-[inset_0_1.5px_2px_rgba(0,0,0,0.5),inset_0_1px_1px_rgba(255,255,255,0.4)] group-hover:brightness-110 whitespace-nowrap">
                    {/* Button Gloss */}
                    <div className="pointer-events-none absolute inset-x-1 top-0.5 h-[42%] rounded-t-[10px] bg-gradient-to-b from-white/40 via-white/10 to-transparent" />
                    <span className="relative drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] whitespace-nowrap">
                      Check Availability
                    </span>
                    <svg className="relative h-3.5 w-3.5 sm:h-4 sm:w-4 shrink-0 drop-shadow-[0_1px_2px_rgba(0,0,0,0.95)] transition-transform duration-200 group-hover:translate-x-1" fill="none" viewBox="0 0 24 24" strokeWidth="2.5" stroke="currentColor">
                      <path strokeLinecap="round" strokeLinejoin="round" d="M13.5 4.5L21 12m0 0l-7.5 7.5M21 12H3" />
                    </svg>
                  </div>
                </button>
              </div>
            </form>
          </div>
        </div>
      </div>
    </section>
  );
};

export default Hero;