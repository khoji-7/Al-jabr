import React from "react";

const about = () => {
  return (
    <section className="max-w-[1440px] w-[88%] bg-white mx-auto mt-5 py-8">
      <h1 className="text-center text-[36px] text-[#2F327D]  font-bold">
        Hammasi Bir Joyda{" "}
        <span className="text-[#00CBB8]">Al-Jabr Ta’lim Platformasi.</span>
      </h1>
      <p className="text-[#696984] text-[24px] w-[800px] text-center mx-auto mt-5 font-medium">
        Matematika va raqamli fanlarni o‘rganish uchun barcha kerakli
        vositalarni jamlagan yagona platforma. Endi ta’lim olish innovatsion va
        qiziqarli!
      </p>
      <div className="mt-24 flex justify-between ">
        <div className="rounded-xl w-[400px] p-5 text-center bg-white drop-shadow-2xl relative   flex-row justify-center">
          <div className="w-[115px] h-[115px] bg-[#5B72EE] rounded-full flex items-center justify-center absolute top-[-85px] left-[140px]">
            <img src="ajp.png" alt="" className="w-[84px] h-[84px]" />
          </div>
          <p className="text-[#2F327D] text-[30px] font-normal mt-3">
            Interaktiv Darslar va STEM Fanlari
          </p>
          <p className="text-[#696984] text-[20px] mt-3 leading-relaxed">
            Zamonaviy texnologiyalar asosida yaratilgan interaktiv darslar
            orqali fanlarni o‘rganish jarayonini yanada qiziqarli va samarali
            qilamiz. O‘quvchilar STEM (Science, Technology, Engineering, Math)
            yo‘nalishlaridagi asosiy tushunchalarni 3D modellash, animatsiyalar
            va virtual laboratoriyalar orqali o‘zlashtiradi.
          </p>
        </div>
        <div className="rounded-xl w-[400px] p-5 text-center bg-white drop-shadow-2xl relative   flex-row justify-center items-center">
          <div className="w-[115px] h-[115px] bg-[#00CBB8] rounded-full flex items-center justify-center absolute top-[-85px] left-[140px]">
            <img src="ajp1.png" alt="" className="w-[84px] h-[84px]" />
          </div>
          <p className="text-[#2F327D] text-[30px] w-[340px] font-normal mt-3">
          AI Mentor va Shaxsiy Ta’lim Yo‘llari
          </p>
          <p className="text-[#696984] text-[20px] w-[340px] mt-3 leading-relaxed">
          Sun’iy intellekt asosidagi shaxsiy mentor sizga mos ta’lim yo‘nalishini yaratadi. Bilim darajangizga moslashtirilgan mashg‘ulotlar va testlar orqali rivojlaning.
          </p>
        </div>
        <div className="rounded-xl w-[400px] p-5 text-center bg-white drop-shadow-2xl relative   flex-row justify-center items-center">
          <div className="w-[115px] h-[115px] bg-[#29B9E7] rounded-full flex items-center justify-center absolute top-[-85px] left-[140px]">
            <img src="ajp2.png" alt="" className="w-[80px] h-[80px]" />
          </div>
          <p className="text-[#2F327D] text-[30px] font-normal mt-3">
          Statistika va Ma’lumotlarni
          Tahlil Qilish          </p>
          <p className="text-[#696984] text-[20px] mt-3 leading-relaxed w-[320px] mx-auto">
          Ma’lumotlarni yig‘ish, tahlil qilish va xulosa chiqarishni o‘rganing. 3D grafikalar va interaktiv diagrammalar orqali statistik fikrlashni rivojlantiring hamda real hayotiy vaziyatlarda qaror qabul qilish ko‘nikmalarini oshiring.
          </p>
        </div>
      </div>
    </section>
  );
};

export default about;
