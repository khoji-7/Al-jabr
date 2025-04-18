import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <section className="bg-[#282A35] max-w-[1440px] mx-auto py-16">
      <div className="w-[88%] mx-auto flex justify-evenly gap-10 items-center">
        <div className="w-[470px]">
          <img
            src="/footerlogo.png"
            alt="Al-Jabr Logo"
            width={150}
            height={100}
          />

          <p className="text-[22px] text-white font-normal text-left mt-[44px]">
            “Al-Jabr” yordamida algebra, geometriya, stereometriya, Data Science
            va boshqa zamonaviy fanlar oson va interaktiv tarzda o‘rgatiladi.
            Yoshlarni raqamli dunyoda muvaffaqiyatga tayyorlash va matematikaga
            bo‘lgan qiziqishni oshirishdir.
          </p>

          <div className="text-white flex gap-7 mt-24 cursor-pointer">
            <FaInstagram className="w-11 h-11" />
            <FaXTwitter className="w-11 h-11" />
            <FaFacebook className="w-11 h-11" />
            <FaYoutube className="w-11 h-11" />
          </div>
        </div>
       <div>
        <p className="text-[40px] font-semibold  text-white">
          Biz Haqimizda
        </p>
        <p className="text-[27px] text-white font-medium mt-10">
          Qanday ishlaymiz?
        </p>
        <p className="text-[27px] text-white font-medium mt-10">
          Foydalanish shartlari
        </p><p className="text-[27px] text-white font-medium mt-10">
          Xizmatlar
        </p>
       </div>
       <div>
        <p className="text-[40px] font-semibold  text-white">
          Resurslar
        </p>
        <p className="text-[27px] text-white font-medium mt-10">
          Biz bilan bog'lanish
        </p>
        <p className="text-[27px] text-white font-medium mt-10">
          Savollarga javoblar
        </p><p className="text-[27px] text-white font-medium mt-10">
          Tavsiyalar
        </p>
       </div>
      </div>
    </section>
  );
};

export default footer;
