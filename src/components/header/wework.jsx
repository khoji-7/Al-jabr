import Link from "next/link";
import React from "react";


const wework = () => {
  return (
    <section className='max-w-[1440px] mx-auto bg-[url("/wework.png")] bg-center bg-cover'>
      <div className="w-[88%] mx-auto py-20 flex">
        <div className="w-[540px]">
          <h1 className="text-[#282A35] text-[55px] font-bold">
            Qanday Ishlaymiz?
          </h1>
          <p className="text-[22px] italic font-bold mt-3">
            Biz o’quvchilar duch keladigan qiyinchiliklarni tushunamiz va ularga
            muvaffaqiyat sari yo‘l ko‘rsatamiz.
          </p>
          <p className="text-[22px] font-normal mt-[28px]">
            Agar siz test, uy vazifasi, loyiha yoki imtihon tayyorgarligida
            qiynalayotgan bo‘lsangiz, bizning keng qamrovli xizmatlarimiz aynan
            siz uchun!
          </p>
          <div>
            <div className="flex items-center mt-20">
                <p className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-[25px]">
                    1
                </p>
                <p className="text-[22px] text-black font-semibold ml-3">
                Bilim sari birinchi qadamingizni qo‘ying!
                </p>
            </div>
            <div className="flex items-center mt-5">
                <p className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-[25px]">
                    2
                </p>
                <p className="text-[22px] text-black font-semibold ml-3">
                O’zingizga mos fan va sinfni tanlang
                </p>
            </div>
            <div className="flex items-center mt-5">
                <p className="w-16 h-16 rounded-full bg-green-700 text-white flex items-center justify-center text-[25px]">
                    3
                </p>
                <p className="text-[22px] text-black font-semibold ml-3">
                Darslarni boshlang va natijaga erishing!
                </p>
            </div>
          </div>
          <Link href="/login"><p className="w-52 h-11 rounded-2xl bg-[#FFCF52] text-[20px] font-bold flex items-center justify-center mt-14">
            Ro'yxatdan O'tish</p></Link>
        </div>
        <img src="/wework1.png" alt="" />
      </div>
    </section>
  );
};

export default wework;
