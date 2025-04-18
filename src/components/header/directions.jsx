import React from "react";
import { LuMonitor } from "react-icons/lu";
import { BiMath } from "react-icons/bi";
import { BiBrain } from "react-icons/bi";
import { ImStatsDots } from "react-icons/im";
import { SlChemistry } from "react-icons/sl";
import { FaDatabase } from "react-icons/fa";






const directions = () => {
  return (
    <section className='max-w-[1440px] mx-auto bg-[url("/direcbg.png")] mt-10 h-[900px]'>
      <div className="w-[88%] mx-auto py-16">
        <h1 className="text-white text-[55px] font-normal text-center">
          Yo'nalishlarimiz
        </h1>

        <div className="grid grid-cols-3 justify-center items-center gap-12 mt-14">
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <BiMath className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Matematika</p>
          </div>
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <LuMonitor className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Kompyuter fanlari</p>
          </div>
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <BiBrain className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Tanqidiy fikrlash</p>
          </div>
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <ImStatsDots className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Statistika va tahlil</p>
          </div>
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <FaDatabase className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Data Science</p>
          </div>
          <div className="bg-white cursor-pointer  w-[400px] h-[300px] rounded-2xl flex flex-col justify-center items-center ease-in hover:bg-[#04AA6D] hover:text-white">
            <SlChemistry className="w-[86px] h-[86px]" />
            <p className="mt-4 text-[30px]">Streonometriya</p>
          </div>
        </div>
      </div>
    </section>
  );  
};

export default directions;
