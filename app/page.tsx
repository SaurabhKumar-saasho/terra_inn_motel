import React from "react";
import Hero from "@/components/home/Hero";
import AboutUs from "@/components/home/AboutUs";
import Rooms from "@/components/home/Rooms";
import Attractions from "@/components/home/Attractions";
import WhyChooseUse from "@/components/home/WhyChooseUse";
import Gallery from "@/components/home/Gallery";
import Testimonials from "@/components/home/Testimonials";
import Footer from "@/components/layouts/Footer";

export default function Page() {
  return (
    <main className="min-h-screen bg-slate-950 flex flex-col">
      <Hero />
      <AboutUs />
      <Rooms />
      <Attractions />
      <WhyChooseUse />
      <Testimonials />
      <Gallery />
      <Footer />
    </main>
  );
}






