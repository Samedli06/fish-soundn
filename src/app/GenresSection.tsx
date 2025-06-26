"use client";
import Image from "next/image";
import { motion } from "framer-motion";

const genres = [
  { name: "Rock", emoji: "🎸" },
  { name: "Rap", emoji: "🕶️" },
  { name: "Metal", emoji: "🤘" },
  { name: "Jazz", emoji: "🎷" },
  { name: "Blues", emoji: "🎷" },
  { name: "Lo-Fi", emoji: "🧘" },
  { name: "Instrumental", emoji: "🎹" },
  { name: "Dubstep", emoji: "🔊" },
  { name: "RnB", emoji: "👑" },
  { name: "Disco", emoji: "🕺" },
  { name: "Classical", emoji: "🎹" },
  { name: "İnstrumental", emoji: "🎷" },
  { name: "Country", emoji: "🪕" },
  { name: "Ambient", emoji: "🌌" },
  { name: "Gospel", emoji: "🕊️" },
  { name: "World Music", emoji: "🪘" },
  { name: "Chill", emoji: "🧘" },
  { name: "Nature Sounds", emoji: "🏞️" },
  { name: "Experimental", emoji: "👾" },
  { name: "Psychedelic", emoji: "🧠" },
  { name: "Workout", emoji: "🏋️" },
  { name: "Children", emoji: "🎂" },
  { name: "Holiday", emoji: "🎄" },
];

export default function GenresSection() {
  // Split genres into two halves for two rows
  const mid = Math.ceil(genres.length / 2);
  const firstRow = genres.slice(0, mid);
  const secondRow = genres.slice(mid);

  // Helper to duplicate genres for seamless looping
  const looped = (arr: typeof genres) => [...arr, ...arr];

  // Animation settings
  const distance = 1000; // Adjust this value to match the total width of the row for a seamless loop
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
  const rowAnimRTL = {
    animate: {
      x: [0, -distance],
      transition: {
        repeat: Infinity,
        repeatType: 'loop' as const,
        duration: 36,
        ease: 'linear' as const,
      },
    },
  };

  return (
    <section className="flex flex-col items-center py-8 sm:py-12 px-2 sm:px-4 w-full">
      <h2 className="text-2xl sm:text-3xl md:text-4xl lg:text-[40px] font-bold text-center mb-4 sm:mb-6 text-black">
        Müəssisənizin Tipinə və Zövqünüzə Uyğun AI Pleylistləri ilə   <br /> Zaman Qazanın
      </h2>
      <div className="mx-auto mb-6 sm:mb-8 flex items-center justify-center w-full max-w-xs sm:max-w-lg md:max-w-2xl lg:max-w-4xl xl:max-w-5xl">
        <Image src="/Mascot.png" alt="Mascot" width={923} height={307} className="w-full h-auto object-contain" />
      </div>
      <h3 className="text-xl sm:text-2xl md:text-3xl lg:text-[40px] font-bold text-center mb-4 sm:mb-6 text-black">
        Fish Sound hər janrda musiqi və pleylistə sahibdir
      </h3>
      <div className="flex flex-col gap-2 w-full">
        {/* First row */}
        <div className="relative w-full overflow-hidden py-2">
          <motion.div
            className="flex gap-2 sm:gap-4 min-w-max"
            {...rowAnimLTR}
          >
            {looped(firstRow).map((g, i) => (
              <span
                key={g.name + i}
                className="bg-[#12A8FF] text-white rounded-[16px] px-4 py-2 sm:px-8 sm:py-3 flex items-center gap-2 text-base sm:text-lg font-bold shadow-none whitespace-nowrap min-w-max"
              >
                {g.name} <span>{g.emoji}</span>
              </span>
            ))}
          </motion.div>
        </div>
        {/* Second row (mirrored direction by reversing array) */}
        <div className="relative w-full overflow-hidden py-2">
          <motion.div
            className="flex gap-2 sm:gap-4 min-w-max"
            {...rowAnimRTL}
          >
            {looped([...secondRow].reverse()).map((g, i) => (
              <span
                key={g.name + i}
                className="bg-[#12A8FF] text-white rounded-[16px] px-4 py-2 sm:px-8 sm:py-3 flex items-center gap-2 text-base sm:text-lg font-bold shadow-none whitespace-nowrap min-w-max"
              >
                {g.name} <span>{g.emoji}</span>
              </span>
            ))}
          </motion.div>
        </div>
      </div>
    </section>
  );
} 