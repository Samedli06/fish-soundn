import Image from "next/image";
import { JSX } from "react";

export interface IHeadersProps {
  className?: string;
  isMenuOpen: boolean;
  setIsMenuOpen: (open: boolean) => void;
}

export const Headers = ({
  className,
  isMenuOpen,
  setIsMenuOpen,
}: IHeadersProps): JSX.Element => {
  const toggleMenu = () => {
    setIsMenuOpen(!isMenuOpen);
  };

  return (
    <div
      className={
        "flex flex-row items-center justify-between w-full relative px-4" +
        (className || "")
      }
      style={{ minHeight: '64px' }}
    >
      {/* Logo on the far left */}
      <div className="flex items-center gap-2 bg-transparent">
        <Image src="/vector.svg" alt="Fish Sound Logo" width={80} height={65} className="w-10 h-8 sm:w-14 sm:h-12 lg:w-[80px] lg:h-[65px]" />
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
      <div className="hidden lg:flex shrink-0 h-14 items-center justify-end">
        <nav className="flex flex-row items-center gap-[62px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-base font-bold relative group pb-1 flex items-center justify-center">
            Biznes tipləri
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-base font-bold relative group pb-1 flex items-center justify-center">
            Qiymətlər
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-base font-bold relative group pb-1 flex items-center justify-center">
            Faq
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-base font-bold relative group pb-1 flex items-center justify-center">
            Əlaqə
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-base font-bold relative group pb-1 flex items-center justify-center">
            Daxil ol
            <span className="pointer-events-none absolute left-0 bottom-0 h-0.5 bg-red-500 transition-all duration-300 w-0 group-hover:w-full group-focus:w-full"></span>
          </a>
          <button className="bg-red-500 text-white rounded-full px-6 py-1.5 text-base font-semibold shadow-none hover:bg-red-600 transition flex items-center justify-center" style={{ minWidth: 100 }}>
            <span>Pulsuz yoxla</span>
          </button>
        </nav>
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
