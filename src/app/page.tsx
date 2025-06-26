"use client";
import Image from "next/image";
import MusiqiSeImiTindir from "./MusiqiSeImiTindir";
import { motion } from "framer-motion";
import GenresSection from "./GenresSection";
import ControlSection from "./ControlSection";
import { Headers } from "./Headers/Headers";
import { useEffect, useState } from "react";

export default function Home() {
  const [scrolled, setScrolled] = useState(false);

  useEffect(() => {
    const onScroll = () => {
      setScrolled(window.scrollY > 10);
    };
    window.addEventListener("scroll", onScroll);
    return () => window.removeEventListener("scroll", onScroll);
  }, []);

  return (
    <div className="min-h-screen bg-gradient-to-br from-[#f7f7ff] via-[#c1b6f7] to-[#fff] overflow-x-hidden">
      {/* Header */}
      <motion.div
        initial={{ y: -60, opacity: 0 }}
        animate={{ y: 0, opacity: 1 }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className={`fixed top-0 left-0 right-0 z-50 transition-colors duration-300 ${
          scrolled ? "bg-white/80 backdrop-blur-sm shadow-sm" : "bg-transparent"
        }`}
      >
        <div className="px-[100px] py-4">
          <Headers />
        </div>
      </motion.div>
      
      {/* Spacer to prevent content from being hidden behind fixed navbar */}
      <div className="h-32 sm:h-24"></div>
      
      {/* Hero Section */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto mt-8 sm:mt-14 px-2 sm:px-4 mb-[62px]"
      >
        <h1 className="text-2xl sm:text-4xl md:text-6xl font-bold mb-6 sm:mb-10 text-black text-center">Biznesiniz üçün Mükəmməl Fon Musiqisi</h1>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 mb-6 sm:mb-10 place-content-center">
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/cafe.jpg" alt="Cafe" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/gym.jpg" alt="Gym" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/hotel.jpg" alt="Hotel" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/restaurant.jpg" alt="Restaurant" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
        </div>
        <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-4 gap-6 sm:gap-10 place-content-center">
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/barber1.jpg" alt="Barber 1" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/barber2.jpg" alt="Barber 2" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/barber3.jpg" alt="Barber 3" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
          <div className="group bg-transparent border-none shadow-none">
            <Image src="/barber4.jpg" alt="Barber 4" width={340} height={200} className="rounded-xl object-cover w-full h-auto max-w-xs mx-auto transition-transform duration-300 group-hover:scale-105 bg-transparent border-none shadow-none" />
          </div>
        </div>
      </motion.section>
      <motion.div
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut", delay: 0.2 }}
      >
        <MusiqiSeImiTindir />
      </motion.div>
      <GenresSection />
      <ControlSection />
      {/* More sections will be added here */}
    </div>
  );
}
