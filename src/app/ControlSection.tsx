import React from "react";

const ControlSection = () => {
  return (
    <section className="w-full py-32 px-2 relative overflow-hidden flex items-center justify-center min-h-[600px]">
      <div className="max-w-7xl mx-auto flex flex-col items-center justify-center h-full relative z-10 w-full">
        <h2 className="text-5xl md:text-6xl font-bold text-black text-center mb-12">
          İdarə etmə tam olaraq sizin əlinizdədir
        </h2>
        <div className="flex flex-col md:flex-row items-center justify-center gap-12 w-full">
          {/* Red rectangle */}
          <div style={{ width: 526, height: 465 }} className="bg-red-500" />
          <div className="flex flex-col gap-8 items-center md:items-end max-w-xl justify-center">
            <p className="text-[40px] font-semibold text-black text-center md:text-left">
              Öncedən cədvəl qurun, anlıq olaraq musiqidə dəyişikliklər edin və ya sözləri saniyələr içində filtirləyin
            </p>
            <button className="bg-black text-white rounded-full px-10 py-3 text-lg font-semibold shadow hover:bg-gray-900 transition w-fit md:self-end">
              Pulsuz yoxla
            </button>
          </div>
        </div>
      </div>
    </section>
  );
};

export default ControlSection; 