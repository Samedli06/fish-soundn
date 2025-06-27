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
      
      {/* New Section - Vaxtınıza və enerjinizə qənaət edən musiqi həlli */}
      <motion.section
        initial={{ opacity: 0, y: 40 }}
        whileInView={{ opacity: 1, y: 0 }}
        viewport={{ once: true }}
        transition={{ duration: 0.7, ease: "easeOut" }}
        className="max-w-7xl mx-auto px-4 sm:px-6 mb-16 py-8"
      >
        <div className="flex flex-col gap-[34px] items-start justify-start relative min-h-[500px]">
          <div className="text-black text-center font-bold text-4xl sm:text-5xl md:text-6xl lg:text-[64px] relative self-stretch flex items-center justify-center">
            Vaxtınıza və enerjinizə qənaət edən musiqi həlli
          </div>
          <div className="self-stretch shrink-0 h-auto sm:h-[730px] relative">
            <div className="flex flex-col lg:flex-row items-center gap-8 lg:gap-12">
              {/* Image Section */}
              <div className="w-full lg:w-[651px] h-[400px] lg:h-[705px] relative flex items-center justify-center">
                <Image
                  src="/Watch.png"
                  alt="Music Solution"
                  width={651}
                  height={705}
                  className="w-full h-full object-cover rounded-xl"
                />
              </div>
              
              {/* Content Section */}
              <div className="w-full lg:w-[610px] h-auto lg:h-[730px] relative flex flex-col justify-center">
                <div className="text-center font-bold text-2xl sm:text-3xl md:text-4xl lg:text-[40px] mb-8 lg:mb-12">
                  <span>
                    <span className="text-black">
                      Musiqi
                    </span>
                    <span className="text-black">
                      {" "}adminliyini{" "}
                    </span>
                    <span className="text-black">
                      asanlıqla idarə edin;
                      <br />
                      vahid bir idarəetmə panelindən bütün məkanlarınızdakı fəaliyyətə
                      nəzarət edin.
                    </span>
                  </span>
                </div>
                <div className="bg-black rounded-[69px] px-6 py-4 flex flex-row gap-2.5 items-center justify-center w-fit mx-auto overflow-hidden hover:bg-gray-800 transition-colors duration-300 cursor-pointer">
                  <div className="text-white text-center font-bold text-lg sm:text-xl relative flex items-center justify-center">
                    Pulsuz yoxla
                  </div>
                </div>
              </div>
            </div>
          </div>
        </div>
      </motion.section>
      
      {/* Business Playlist Section */}
      <section className="relative h-[705px] w-full flex justify-center items-start mb-16">
        {/* Purple background with sliding business types (3 rows) */}
        <div className="bg-[#c1b6f7] w-full h-[341px] absolute left-0 top-0 overflow-hidden flex flex-col justify-center">
          <div className="flex flex-col gap-[20px] w-full h-full py-6">
            {/* Row 1 */}
            <div className="relative w-full overflow-hidden">
              <div className="flex flex-row gap-[43px] items-center whitespace-nowrap animate-marquee" style={{ animation: 'marquee 18s linear infinite' }}>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>IDMAN ZALI</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>XƏSTƏXANA</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>STOMOTOLOJİ KLİNİKALAR</span>
                {/* Duplicate for seamless loop */}
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>IDMAN ZALI</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>XƏSTƏXANA</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>STOMOTOLOJİ KLİNİKALAR</span>
              </div>
            </div>
            {/* Row 2 */}
            <div className="relative w-full overflow-hidden">
              <div className="flex flex-row gap-[43px] items-center whitespace-nowrap animate-marquee" style={{ animation: 'marquee 20s linear infinite' }}>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>MAĞAZA</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>MARKET</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>TİCARƏT MƏRKƏZLƏRO</span>
                {/* Duplicate for seamless loop */}
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>MAĞAZA</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>MARKET</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>TİCARƏT MƏRKƏZLƏRO</span>
              </div>
            </div>
            {/* Row 3 */}
            <div className="relative w-full overflow-hidden">
              <div className="flex flex-row gap-[43px] items-center whitespace-nowrap animate-marquee" style={{ animation: 'marquee 22s linear infinite' }}>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>COFFESHOP</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>RESTORAN</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>OTELLƏR</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>BAR</span>
                {/* Duplicate for seamless loop */}
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>COFFESHOP</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>RESTORAN</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>OTELLƏR</span>
                <span className="text-white text-center font-[SpaceGrotesk-Regular,sans-serif] text-8xl leading-[88%] font-normal" style={{ letterSpacing: '-0.04em' }}>BAR</span>
              </div>
            </div>
          </div>
        </div>
        {/* White card with text and button */}
        <div className="bg-white w-full pt-12 pr-[100px] pb-12 pl-[100px] flex flex-col gap-2.5 items-start justify-start absolute left-0 top-[341px] overflow-hidden shadow">
          <div className="flex flex-row gap-[18px] items-end justify-between w-full">
            <div className="text-black text-center font-[SpaceGrotesk-Regular,sans-serif] text-5xl leading-[88%] font-normal w-[1240px]" style={{ letterSpacing: '-0.04em' }}>
              Sizin biznesiniz, sizin pleylistiniz. İndi yaradın və ya tapın.
            </div>
            <button className="bg-black rounded-[69px] px-[23px] py-[15px] flex items-center justify-center w-[167px] text-white text-xl font-bold font-[SpaceGrotesk-Bold,sans-serif]">
              Pulsuz yoxla
            </button>
          </div>
        </div>
      </section>
      
      {/* More sections will be added here */}
    </div>
  );
}
