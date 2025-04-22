import React from 'react'
import Link from "next/link";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";

const login = () => {
  return (
    <section className='w-full mx-auto bg-[url("/bgimg.png")] bg-cover bg-center p-9  items-center flex'>
            <div className="mr-20 rounded-2xl bg-white p-5 w-[550px] flex-row justify-center ml-10 ">
              <h1 className="text-[48px] underline text-center">
                Ro'yxatdan O'tish
              </h1>
             <div className="mt-12 flex-col  ">
                  <button className=" flex text-[28px] text-[#333333]  tracing-[28px] items-center w-[477px] p-4 border rounded-4xl justify-center gap-4 ">
                      <FaFacebook className="text-[#0f82ee] w-8 h-8  "/> 
                     Facebook orqali kirish
                  </button>
                  <button className="mt-5 flex text-[28px] text-[#333333]  tracing-[28px] items-center w-[477px] p-4 border rounded-4xl justify-center gap-4 ">
                      <FcGoogle className="text-[#0f82ee] w-8 h-8  "/> 
                       Google orqali kirish
                  </button>
             </div>
             <div>
              <div className="mt-7">
              <p className="text-[32px]">
                  Ismingiz
                </p>
                <input type="text" placeholder="User Name" className="bg-[#EFEFEF] py-2 px-4 rounded-2xl text-[20px] w-[477px] mt-3" />
                <p className="text-[32px] mt-3">
                  Email Kiriting
                </p>
                <input type="email" placeholder="user@email.com" className="bg-[#EFEFEF] py-2 px-4 rounded-2xl text-[20px] w-[477px] mt-3" />
                <p className="text-[32px] mt-3">
                  Parol Yarating
                </p>
                <input type="password" placeholder="*********" className="bg-[#EFEFEF] py-2 px-4 rounded-2xl text-[20px] w-[477px] mt-3" />
              </div>
              <button className="w-[477px] py-2 text-[36px] font-normal bg-[#FFCF52] rounded-2xl mt-10 ">
                Ro'yxatdan O'tish
              </button>
              <p className="text-center text-[20px] mt-6">
              Akkauntingiz bormi ? <Link href="/signup" className="text-[#00A3FF] underline">Kirish </Link>
              </p>

             </div>
            </div>
            <img src="login_2.png" alt="" className="round-2xl " />

        </section>
  )
}

export default login
