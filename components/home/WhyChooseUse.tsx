import React from "react";

interface FeatureItem {
  id: string;
  title: string;
  icon: React.ReactNode;
}

export const WhyChooseUse: React.FC = () => {
  const features: FeatureItem[] = [
    {
      id: "secure-stay",
      title: "Secure Stay",
      icon: (
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.85)) drop-shadow(0 2px 3px rgba(0,0,0,0.9))",
          }}
        >
          <defs>
            <linearGradient id="shieldChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="20%" stopColor="#e4ecf5" />
              <stop offset="55%" stopColor="#96a4b5" />
              <stop offset="85%" stopColor="#556272" />
              <stop offset="100%" stopColor="#2e3742" />
            </linearGradient>
            <linearGradient id="checkChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#dce5f0" />
              <stop offset="100%" stopColor="#718092" />
            </linearGradient>
          </defs>

          {/* Shield Dark Under-shadow */}
          <path
            d="M32 7.5L14 14V29C14 42.5 21.8 53 32 57.5C42.2 53 50 42.5 50 29V14L32 7.5Z"
            stroke="#0d1117"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, 1.5)"
          />

          {/* Hollow 3D Chrome Shield Tube */}
          <path
            d="M32 7.5L14 14V29C14 42.5 21.8 53 32 57.5C42.2 53 50 42.5 50 29V14L32 7.5Z"
            stroke="url(#shieldChrome)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Top Specular Rim Highlight */}
          <path
            d="M32 8.5L15.5 14.5V29C15.5 36.5 19 44.5 25.5 49.5"
            stroke="#ffffff"
            strokeWidth="1.6"
            strokeLinecap="round"
            strokeOpacity="0.85"
          />

          {/* 3D Checkmark Shadow */}
          <path
            d="M24 30.5L29.5 36.5L40 24"
            stroke="#0d1117"
            strokeWidth="4.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            transform="translate(0, 1.5)"
          />

          {/* 3D Chrome Checkmark Tube */}
          <path
            d="M24 30.5L29.5 36.5L40 24"
            stroke="url(#checkChrome)"
            strokeWidth="3.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />

          {/* Checkmark Specular Core Highlight */}
          <path
            d="M24 30.5L29.5 36.5L40 24"
            stroke="#ffffff"
            strokeWidth="1.5"
            strokeLinecap="round"
            strokeLinejoin="round"
            strokeOpacity="0.9"
          />
        </svg>
      ),
    },
    {
      id: "top-rating",
      title: "Top Rating",
      icon: (
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.85)) drop-shadow(0 2px 3px rgba(0,0,0,0.9))",
          }}
        >
          <defs>
            <linearGradient id="starOuterRim" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e2ebf4" />
              <stop offset="65%" stopColor="#8d9baa" />
              <stop offset="100%" stopColor="#3d4959" />
            </linearGradient>
            <linearGradient id="starFacetL" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="60%" stopColor="#cbd7e5" />
              <stop offset="100%" stopColor="#8494a7" />
            </linearGradient>
            <linearGradient id="starFacetD" x1="0%" y1="0%" x2="100%" y2="100%">
              <stop offset="0%" stopColor="#9baec1" />
              <stop offset="50%" stopColor="#556475" />
              <stop offset="100%" stopColor="#2c3643" />
            </linearGradient>
            <linearGradient id="starFacetM" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#e2ecf7" />
              <stop offset="100%" stopColor="#67778b" />
            </linearGradient>
          </defs>

          {/* Star Under Shadow */}
          <path
            d="M32 5L40.2 21.8L59 24.3L45.2 37.3L48.6 55.8L32 46.8L15.4 55.8L18.8 37.3L5 24.3L23.8 21.8L32 5Z"
            fill="#0d1117"
            transform="translate(0, 2)"
          />

          {/* Outer Star Molded Rim */}
          <path
            d="M32 5L40.2 21.8L59 24.3L45.2 37.3L48.6 55.8L32 46.8L15.4 55.8L18.8 37.3L5 24.3L23.8 21.8L32 5Z"
            fill="url(#starOuterRim)"
            stroke="#ffffff"
            strokeWidth="1.2"
            strokeLinejoin="round"
          />

          {/* Facets radiating from center (32, 33.5) */}
          <polygon points="32,7 32,33.5 24.5,22.8" fill="url(#starFacetL)" />
          <polygon points="32,7 32,33.5 39.5,22.8" fill="url(#starFacetD)" />
          <polygon points="57,24.8 32,33.5 39.5,22.8" fill="url(#starFacetL)" />
          <polygon points="57,24.8 32,33.5 44.5,37.2" fill="url(#starFacetD)" />
          <polygon points="47.2,54 32,33.5 44.5,37.2" fill="url(#starFacetL)" />
          <polygon points="47.2,54 32,33.5 32,45.5" fill="url(#starFacetD)" />
          <polygon points="16.8,54 32,33.5 32,45.5" fill="url(#starFacetL)" />
          <polygon points="16.8,54 32,33.5 19.5,37.2" fill="url(#starFacetD)" />
          <polygon points="7,24.8 32,33.5 19.5,37.2" fill="url(#starFacetL)" />
          <polygon points="7,24.8 32,33.5 24.5,22.8" fill="url(#starFacetM)" />
        </svg>
      ),
    },
    {
      id: "modern-amenities",
      title: "Modern Amenities",
      icon: (
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.85)) drop-shadow(0 2px 3px rgba(0,0,0,0.9))",
          }}
        >
          <defs>
            <linearGradient id="windowChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e2ebf5" />
              <stop offset="60%" stopColor="#92a0b1" />
              <stop offset="100%" stopColor="#435061" />
            </linearGradient>
            <linearGradient id="badgeChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="40%" stopColor="#cbd7e6" />
              <stop offset="100%" stopColor="#4d5c6f" />
            </linearGradient>
          </defs>

          {/* Window Dark Shadow */}
          <rect
            x="7"
            y="11"
            width="46"
            height="38"
            rx="6"
            stroke="#0d1117"
            strokeWidth="4.2"
            transform="translate(0, 1.5)"
          />

          {/* Hollow 3D Chrome Browser Frame */}
          <rect
            x="7"
            y="11"
            width="46"
            height="38"
            rx="6"
            stroke="url(#windowChrome)"
            strokeWidth="3.4"
          />

          {/* Header Divider Line */}
          <line
            x1="8"
            y1="23"
            x2="52"
            y2="23"
            stroke="url(#windowChrome)"
            strokeWidth="2.2"
          />

          {/* 3 Header Dots */}
          <circle cx="15" cy="17" r="2" fill="#ffffff" />
          <circle cx="21" cy="17" r="2" fill="#d2dce8" />
          <circle cx="27" cy="17" r="2" fill="#9db0c4" />

          {/* Checklist rows */}
          <circle cx="15" cy="30" r="1.8" fill="#ffffff" />
          <rect x="21" y="28.5" width="20" height="3" rx="1.5" fill="url(#windowChrome)" />

          <circle cx="15" cy="37" r="1.8" fill="#ffffff" />
          <rect x="21" y="35.5" width="15" height="3" rx="1.5" fill="url(#windowChrome)" />

          <circle cx="15" cy="44" r="1.8" fill="#ffffff" />
          <rect x="21" y="42.5" width="10" height="3" rx="1.5" fill="url(#windowChrome)" />

          {/* Lower Right 3D Chrome Check Badge */}
          <circle
            cx="46"
            cy="43"
            r="12.5"
            fill="#343d48"
            stroke="url(#badgeChrome)"
            strokeWidth="2.8"
          />
          <path
            d="M40.5 43L44.5 47L51.5 39"
            stroke="#ffffff"
            strokeWidth="2.6"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
    {
      id: "best-rates",
      title: "Best Rates",
      icon: (
        <svg
          viewBox="0 0 64 64"
          className="h-14 w-14 sm:h-20 sm:w-20 md:h-24 md:w-24 lg:h-28 lg:w-28 transition-transform duration-300 group-hover:scale-105"
          fill="none"
          xmlns="http://www.w3.org/2000/svg"
          style={{
            filter: "drop-shadow(0 6px 8px rgba(0,0,0,0.85)) drop-shadow(0 2px 3px rgba(0,0,0,0.9))",
          }}
        >
          <defs>
            <linearGradient id="rateChrome" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#ffffff" />
              <stop offset="25%" stopColor="#e3ebf5" />
              <stop offset="60%" stopColor="#92a1b2" />
              <stop offset="100%" stopColor="#435061" />
            </linearGradient>
            <linearGradient id="coinFace" x1="0%" y1="0%" x2="0%" y2="100%">
              <stop offset="0%" stopColor="#5c6776" />
              <stop offset="50%" stopColor="#3c4654" />
              <stop offset="100%" stopColor="#252d37" />
            </linearGradient>
          </defs>

          {/* Coin Floating Above Hand */}
          <circle
            cx="40"
            cy="19"
            r="13"
            fill="url(#coinFace)"
            stroke="url(#rateChrome)"
            strokeWidth="2.8"
          />
          {/* Inner Dashed Ring */}
          <circle
            cx="40"
            cy="19"
            r="10.2"
            fill="none"
            stroke="url(#rateChrome)"
            strokeWidth="1.2"
            strokeDasharray="1.6 1.6"
          />
          {/* Dollar Sign */}
          <text
            x="40"
            y="24.5"
            textAnchor="middle"
            fill="#ffffff"
            fontSize="15"
            fontWeight="bold"
            fontFamily="sans-serif"
            className=""
            style={{
              filter: "drop-shadow(0 1.5px 2px rgba(0,0,0,0.9))",
            }}
          >
            $
          </text>

          {/* Outstretched Hand Outline */}
          {/* Sleeve Cuff */}
          <rect
            x="6"
            y="39"
            width="6"
            height="14"
            rx="2"
            fill="url(#coinFace)"
            stroke="url(#rateChrome)"
            strokeWidth="2.4"
          />
          {/* Hand Silhouette */}
          <path
            d="M13 43H25C27 43 28.5 41.8 30 40L34 35C35 33.8 37 33.8 38 35C39 36.2 38.5 38 37 39.5L31 44.5L34 44.5C36 44.5 44 44.5 48 45C51 45.4 52.5 48 50 50L40 54.5C35 56.5 28 55.5 22 55L13 54"
            fill="url(#coinFace)"
            stroke="url(#rateChrome)"
            strokeWidth="2.4"
            strokeLinecap="round"
            strokeLinejoin="round"
          />
        </svg>
      ),
    },
  ];

  return (
    <section
      id="why-choose-us"
      className="relative w-full overflow-hidden bg-gradient-to-b from-[#141921] via-[#0d1117] to-[#080b0f] py-10 sm:py-16 lg:py-16"
    >
      {/* Background ambient radial light */}
      <div
        className="pointer-events-none absolute inset-0 bg-[radial-gradient(ellipse_75%_50%_at_50%_35%,rgba(75,90,112,0.18),transparent)]"
        aria-hidden="true"
      />

      <div className="relative z-10 mx-auto max-w-7xl px-4 sm:px-6 lg:px-8">
        {/* 3D Chrome Embossed Section Headline */}
        <div className="mb-8 sm:mb-14 text-center">
          <h2
            className="text-[21px] sm:text-4xl md:text-5xl lg:text-5xl font-black uppercase tracking-wider text-transparent bg-clip-text bg-gradient-to-r from-white from-45% via-[#ff4d58] via-75% to-[#c40e17] "
            style={{
              filter:
                "drop-shadow(0 4px 8px rgba(0,0,0,0.95)) drop-shadow(0 10px 24px rgba(0,0,0,0.85)) drop-shadow(0 0 24px rgba(196,14,23,0.35))",
            }}
          >
            WHY CHOOSE TERRA INN
          </h2>
        </div>

        {/* 4 Cards: Compact 2x2 Grid on Mobile, 4 Columns on Desktop */}
        <div className="grid grid-cols-2 gap-3 sm:gap-6 lg:grid-cols-4 lg:gap-6">
          {features.map((feature) => (
            <div key={feature.id} className="group relative flex justify-center">
              {/* Diffuse Ambient White/Silver Halo Glow behind the card */}
              <div
                className="pointer-events-none absolute -inset-2.5 rounded-[28px] sm:rounded-[32px] bg-white/30 blur-xl opacity-60 transition-opacity duration-300 group-hover:opacity-90"
                aria-hidden="true"
              />

              {/* Outer 3D Silver Tubular Rail Frame */}
              <div className="relative h-full w-full rounded-[20px] sm:rounded-[26px] p-[3.5px] sm:p-[5px] bg-gradient-to-b from-[#f8fafc] via-[#a8b5c4] to-[#475569] shadow-[0_12px_24px_rgba(0,0,0,0.9),0_4px_10px_rgba(0,0,0,0.6)] sm:shadow-[0_18px_38px_rgba(0,0,0,0.95),0_6px_14px_rgba(0,0,0,0.7)] transition-transform duration-300 group-hover:-translate-y-1">
                {/* Dark Recessed Inset Trench / Groove */}
                <div className="h-full w-full rounded-[17px] sm:rounded-[22px] p-[2px] sm:p-[3px] bg-gradient-to-b from-[#14181e] via-[#0d1014] to-[#202730] shadow-[inset_0_2px_4px_rgba(0,0,0,0.95),inset_0_-1px_2px_rgba(255,255,255,0.18)]">
                  {/* Inner Satin Titanium Metal Plate */}
                  <div className="relative flex h-[145px] sm:h-[190px] lg:h-[210px] w-full flex-col items-center justify-center overflow-hidden rounded-[15px] sm:rounded-[19px] bg-gradient-to-b from-[#5c6775] via-[#47515d] to-[#323a44] px-2 sm:px-4 py-3 sm:py-6 shadow-[inset_0_1.5px_1px_rgba(255,255,255,0.45),inset_0_-2px_4px_rgba(0,0,0,0.7)]">
                    {/* Top Specular Cylindrical Sheen */}
                    <div
                      className="pointer-events-none absolute inset-x-0 top-0 h-[48%] bg-gradient-to-b from-white/25 via-white/5 to-transparent rounded-t-[15px] sm:rounded-t-[19px]"
                      aria-hidden="true"
                    />

                    {/* 3D Chrome Icon Container */}
                    <div className="relative z-10 mb-2 sm:mb-3 flex items-center justify-center">
                      {feature.icon}
                    </div>

                    {/* Label */}
                    <h3 className="relative z-10 text-center text-xs sm:text-base md:text-lg lg:text-xl font-bold tracking-wide text-white drop-shadow-[0_2px_4px_rgba(0,0,0,0.95)] leading-tight">
                      {feature.title}
                    </h3>
                  </div>
                </div>
              </div>
            </div>
          ))}
        </div>
      </div>
    </section>
  );
};

export default WhyChooseUse;