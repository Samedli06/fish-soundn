import React from "react";
import { motion } from "framer-motion";

const baseRow1 = [
  { img1: "/image3.png", title: "Yay Havası mahnıları", isTitle2: true },
  { img1: "/image5.png", title: "Retro mahnılar", vector: "/spotify-logo0.svg" },
  { img1: "/image7.png", title: "Retro mahnılar", vector: "/spotify-logo1.svg" },
  { img1: "/image9.png", title: "Retro mahnılar", vector: "/spotify-logo2.svg" },
  { img1: "/image3.png", title: "Yay Havası mahnıları", isTitle2: true },
  { img1: "/image5.png", title: "Retro mahnılar", vector: "/spotify-logo0.svg" },
  { img1: "/image7.png", title: "Retro mahnılar", vector: "/spotify-logo1.svg" },
  { img1: "/image9.png", title: "Retro mahnılar", vector: "/spotify-logo2.svg" },
];
const baseRow2 = [
  { img1: "/image13.png", title: "Yay Havası mahnıları", isTitle2: true },
  { img1: "/image15.png", title: "Retro mahnılar", vector: "/spotify-logo3.svg" },
  { img1: "/image17.png", title: "Retro mahnılar", vector: "/spotify-logo4.svg" },
  { img1: "/image19.png", title: "Retro mahnılar", vector: "/spotify-logo5.svg" },
  { img1: "/image13.png", title: "Yay Havası mahnıları", isTitle2: true },
  { img1: "/image15.png", title: "Retro mahnılar", vector: "/spotify-logo3.svg" },
  { img1: "/image17.png", title: "Retro mahnılar", vector: "/spotify-logo4.svg" },
  { img1: "/image19.png", title: "Retro mahnılar", vector: "/spotify-logo5.svg" },
];

// Helper to duplicate for seamless loop
const looped = (arr: typeof baseRow1) => [...arr, ...arr];

const distance = 1200; // px, adjust to match total row width for seamless loop
const rowAnimLTR = {
    animate: {
      x: [-distance, 0],
      transition: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 18,
        ease: 'linear' as const,
      },
    },
  };

// Animation for right-to-left
const rowAnimRTL = {
  animate: {
    x: [0, -distance],
    transition: {
      repeat: Infinity,
      repeatType: "loop" as const,
      duration: 18,
      ease: "linear" as const,
    },
  },
};

const MusiqiSeImiTindir = () => {
  return (
    <section className="w-full py-10 px-2 sm:py-16 sm:px-4">
      <div className="max-w-7xl mx-auto flex flex-col md:flex-row items-center gap-8 md:gap-4 mb-10 w-full px-2">
        <motion.h2
          className="text-3xl sm:text-4xl md:text-5xl lg:text-[64px] font-bold text-black text-center md:text-left flex-1"
          initial={{ opacity: 0, x: -40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6 }}
        >
          Musiqi seçimi
          <br />
          çətindir?
        </motion.h2>
        <motion.p
          className="text-lg sm:text-2xl md:text-[28px] font-semibold text-black text-center md:text-left flex-1"
          initial={{ opacity: 0, x: 40 }}
          whileInView={{ opacity: 1, x: 0 }}
          viewport={{ once: true }}
          transition={{ duration: 0.6, delay: 0.1 }}
        >
          Biznesinizə uyğun 1500+ pleylistlə rahat<br />
          şəkildə müəssisənizdə musiqiləri səsləndirə<br />
          bilərsiniz.
        </motion.p>
      </div>
      {/* Row 1 */}
      <div className="relative w-full overflow-hidden mb-8">
        <motion.div
          className="flex min-w-max gap-x-4 sm:gap-x-6"
          {...rowAnimLTR}
        >
          {looped(baseRow1).map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl shadow-lg bg-white w-56 h-56 sm:w-72 sm:h-72 flex flex-col justify-end overflow-hidden group transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl min-w-[14rem] sm:min-w-[18rem]"
            >
              <img
                src={card.img1}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
              {card.vector && (
                <img
                  src={card.vector}
                  alt="vector"
                  className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 z-30 opacity-80"
                />
              )}
              <div className="relative z-30 p-2 sm:p-4 text-center w-full">
                {card.isTitle2 ? (
                  <span className="text-lg sm:text-2xl font-bold">
                    <span className="text-yellow-400">Yay </span>
                    <span className="text-white">Havası mahnıları</span>
                  </span>
                ) : (
                  <span className="text-base sm:text-xl font-bold text-white drop-shadow-lg">
                    {card.title}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
      {/* Row 2 */}
      <div className="relative w-full overflow-hidden">
        <motion.div
          className="flex min-w-max gap-x-4 sm:gap-x-6"
          {...rowAnimRTL}
        >
          {looped(baseRow2).map((card, i) => (
            <div
              key={i}
              className="relative rounded-2xl shadow-lg bg-white w-56 h-56 sm:w-72 sm:h-72 flex flex-col justify-end overflow-hidden group transition-transform duration-200 hover:-translate-y-2 hover:shadow-2xl min-w-[14rem] sm:min-w-[18rem]"
            >
              <img
                src={card.img1}
                alt={card.title}
                className="absolute inset-0 w-full h-full object-cover z-0 transition-transform duration-300 group-hover:scale-105"
              />
              <div className="absolute inset-0 bg-gradient-to-t from-black/70 via-black/30 to-transparent z-20" />
              {card.vector && (
                <img
                  src={card.vector}
                  alt="vector"
                  className="absolute top-4 left-4 w-8 h-8 sm:w-10 sm:h-10 z-30 opacity-80"
                />
              )}
              <div className="relative z-30 p-2 sm:p-4 text-center w-full">
                {card.isTitle2 ? (
                  <span className="text-lg sm:text-2xl font-bold">
                    <span className="text-yellow-400">Yay </span>
                    <span className="text-white">Havası mahnıları</span>
                  </span>
                ) : (
                  <span className="text-base sm:text-xl font-bold text-white drop-shadow-lg">
                    {card.title}
                  </span>
                )}
              </div>
            </div>
          ))}
        </motion.div>
      </div>
    </section>
  );
};

export default MusiqiSeImiTindir;