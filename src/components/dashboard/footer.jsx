import React from "react";
import { FaInstagram, FaFacebook, FaYoutube } from "react-icons/fa";
import { FaXTwitter } from "react-icons/fa6";

const footer = () => {
  return (
    <section className="bg-[#282A35] max-w-[1440px] mx-auto py-16">
      <div className="w-[88%] mx-auto flex justify-between gap-10">
        <div className="w-sm">
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

          <div className="text-white flex gap-6 mt-4">
            <FaInstagram className="text-3xl" />
            <FaXTwitter className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <FaYoutube className="text-3xl" />
          </div>
        </div>
        <div className="w-sm">
          <img
            src="/footerlogo.png"
            alt="Al-Jabr Logo"
            width={150}
            height={100}
          />

          <p className="text-[22px] text-white font-normal text-left">
            “Al-Jabr” yordamida algebra, geometriya, stereometriya, Data Science
            va boshqa zamonaviy fanlar oson va interaktiv tarzda o‘rgatiladi.
            Yoshlarni raqamli dunyoda muvaffaqiyatga tayyorlash va matematikaga
            bo‘lgan qiziqishni oshirishdir.
          </p>

          <div className="text-white flex gap-6 mt-4">
            <FaInstagram className="text-3xl" />
            <FaXTwitter className="text-3xl" />
            <FaFacebook className="text-3xl" />
            <FaYoutube className="text-3xl" />
          </div>
        </div>
        <div className="w-sm">
          <img
            src="/footerlogo.png"
            alt="Al-Jabr Logo"
            width={150}
            height={100}
          />

          <p className="text-[22px] text-white font-normal text-left">
            “Al-Jabr” yordamida algebra, geometriya, stereometriya, Data Science
            va boshqa zamonaviy fanlar oson va interaktiv tarzda o‘rgatiladi.
            Yoshlarni raqamli dunyoda muvaffaqiyatga tayyorlash va matematikaga
            bo‘lgan qiziqishni oshirishdir.
          </p>

          
        </div>
      </div>
    </section>
  );
};

export default footer;
