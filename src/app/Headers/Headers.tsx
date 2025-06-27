import Image from "next/image";
import { JSX, useState } from "react";

export interface IHeadersProps {
  className?: string;
}

export const Headers = ({
  className,
}: IHeadersProps): JSX.Element => {
  const [isMenuOpen, setIsMenuOpen] = useState(false);

  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={
        "flex flex-row items-center justify-between w-full relative px-4 pb-2" +
        (className || "")
      }
    >
      {/* Logo on the far left */}
      <div className="flex items-center gap-2 bg-transparent">
        <Image src="/vector.svg" alt="Fish Sound Logo" width={90} height={70} className="w-10 h-8 sm:w-14 sm:h-12 lg:w-[90px] lg:h-[70px]" />
      </div>
      {/* Hamburger Menu Button on the far right */}
      <div className="lg:hidden flex items-center">
        <button
          onClick={toggleMenu}
          className="text-black p-2"
          aria-label="Toggle menu"
        >
          <div className="w-6 h-6 flex flex-col justify-center items-center">
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'rotate-45 translate-y-1' : '-translate-y-1'}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? 'opacity-0' : 'opacity-100'}`}></span>
            <span className={`block w-5 h-0.5 bg-black transition-all duration-300 ${isMenuOpen ? '-rotate-45 -translate-y-1' : 'translate-y-1'}`}></span>
          </div>
        </button>
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block shrink-0 w-[400px] xl:w-[600px] 2xl:w-[916px] h-14 relative">
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-0 top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative group pb-1 flex items-center justify-center">
            Biznes tipləri
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <div
            className="shrink-0 w-6 h-6 relative overflow-hidden"
            style={{ aspectRatio: "1" }}
          ></div>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[100px] xl:left-[150px] 2xl:left-[217px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative group pb-1 flex items-center justify-center">
            Qiymətlər
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[180px] xl:left-[250px] 2xl:left-[373px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative group pb-1 flex items-center justify-center">
            Faq
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[230px] xl:left-[320px] 2xl:left-[470px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative group pb-1 flex items-center justify-center">
            Əlaqə
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
        </div>
        <div className="pt-[11px] pr-[15px] pb-[11px] pl-[15px] flex flex-row gap-2.5 items-center justify-center absolute left-[280px] xl:left-[380px] 2xl:left-[587px] top-1 overflow-hidden">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative group pb-1 flex items-center justify-center">
            Daxil ol
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
        </div>
        <button className="bg-red-500 text-white rounded-full px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 text-sm xl:text-lg font-semibold shadow-none hover:bg-red-600 transition absolute left-[350px] xl:left-[480px] 2xl:left-[749px] top-0" style={{ minWidth: 120 }}>
          Pulsuz yoxla
        </button>
      </div>

      {/* Mobile Menu */}
      <div className={`lg:hidden fixed top-0 right-0 h-full w-1/2 max-w-[400px] bg-white shadow-lg z-50 transition-transform duration-300 ${isMenuOpen ? 'translate-x-0' : 'translate-x-full'}`} style={{ minWidth: 220 }}>
        {/* X Close Button */}
        <button
          onClick={() => setIsMenuOpen(false)}
          className="absolute top-4 right-4 text-3xl text-black focus:outline-none"
          aria-label="Close menu"
        >
          &times;
        </button>
        <div className="flex flex-col py-4 px-6 space-y-4 mt-12">
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors duration-200 transform hover:scale-105 focus:scale-105 focus:outline-none relative group pb-1">Biznes tipləri
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors duration-200 transform hover:scale-105 focus:scale-105 focus:outline-none relative group pb-1">Qiymətlər
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors duration-200 transform hover:scale-105 focus:scale-105 focus:outline-none relative group pb-1">Faq
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors duration-200 transform hover:scale-105 focus:scale-105 focus:outline-none relative group pb-1">Əlaqə
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors duration-200 transform hover:scale-105 focus:scale-105 focus:outline-none relative group pb-1">Daxil ol
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <button className="bg-red-500 text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-red-600 transition mt-4">
            Pulsuz yoxla
          </button>
        </div>
      </div>
    </div>
  );
};
