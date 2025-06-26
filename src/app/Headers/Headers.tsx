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
        "flex flex-row items-center justify-between w-full relative " +
        className
      }
    >
      <div className="flex items-center gap-2 min-w-[80px] sm:min-w-[120px] lg:min-w-[180px] pt-0 bg-transparent">
        <Image src="/vector.svg" alt="Fish Sound Logo" width={108} height={93} className="w-12 h-10 sm:w-16 sm:h-14 lg:w-[108px] lg:h-[93px]" />
      </div>
      
      {/* Desktop Navigation */}
      <div className="hidden lg:block shrink-0 w-[400px] xl:w-[600px] 2xl:w-[916px] h-14 relative">
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-0 top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative flex items-center justify-center hover:underline">
            Biznes tipləri
          </a>
          <div
            className="shrink-0 w-6 h-6 relative overflow-hidden"
            style={{ aspectRatio: "1" }}
          ></div>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[100px] xl:left-[150px] 2xl:left-[217px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative flex items-center justify-center hover:underline">
            Qiymətlər
          </a>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[180px] xl:left-[250px] 2xl:left-[373px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative flex items-center justify-center hover:underline">
            Faq
          </a>
        </div>
        <div className="flex flex-row gap-[5px] items-center justify-start absolute left-[230px] xl:left-[320px] 2xl:left-[470px] top-[15px]">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative flex items-center justify-center hover:underline">
            Əlaqə
          </a>
        </div>
        <div className="pt-[11px] pr-[15px] pb-[11px] pl-[15px] flex flex-row gap-2.5 items-center justify-center absolute left-[280px] xl:left-[380px] 2xl:left-[587px] top-1 overflow-hidden">
          <a href="#" className="text-black-100 text-center font-['SpaceGrotesk-Bold',_sans-serif] text-sm xl:text-xl font-bold relative flex items-center justify-center hover:underline">
            Daxil ol
          </a>
        </div>
        <button className="bg-red-500 text-white rounded-full px-4 xl:px-6 2xl:px-8 py-2 xl:py-3 text-sm xl:text-lg font-semibold shadow-none hover:bg-red-600 transition absolute left-[350px] xl:left-[480px] 2xl:left-[749px] top-0" style={{ minWidth: 120 }}>
          Pulsuz yoxla
        </button>
      </div>

      {/* Mobile Menu Button */}
      <div className="lg:hidden">
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

      {/* Mobile Menu */}
      <div className={`lg:hidden absolute top-full left-0 right-0 bg-white shadow-lg transition-all duration-300 ${isMenuOpen ? 'opacity-100 visible' : 'opacity-0 invisible'}`}>
        <div className="flex flex-col py-4 px-6 space-y-4">
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors">Biznes tipləri</a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors">Qiymətlər</a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors">Faq</a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors">Əlaqə</a>
          <a href="#" className="text-black font-bold text-lg hover:text-red-500 transition-colors">Daxil ol</a>
          <button className="bg-red-500 text-white rounded-full px-6 py-3 text-lg font-semibold hover:bg-red-600 transition mt-4">
            Pulsuz yoxla
          </button>
        </div>
      </div>
    </div>
  );
};
