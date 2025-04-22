import Link from "next/link";
import React from "react";
import { FaFacebook } from "react-icons/fa6";
import { FcGoogle } from "react-icons/fc";



const Signup = () => {
    return (
        <section className='w-full mx-auto bg-[url("/bgimg.png")] bg-cover bg-center p-9  items-center flex'>
            <img src="Al-Jabr_sign.png" alt="" className=" " />
            <div className="ml-24 rounded-2xl bg-white p-5 w-[550px] flex-row justify-center  ">
              <h1 className="text-[48px] underline text-center">
                Kirish
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
                  Email
                </p>
                <input type="email" placeholder="user@email.com" className="bg-[#EFEFEF] py-2 px-4 rounded-2xl text-[20px] w-[477px] mt-3" />
                <p className="text-[32px] mt-3">
                  
                  Parol
                </p>
                <input type="password" placeholder="*********" className="bg-[#EFEFEF] py-2 px-4 rounded-2xl text-[20px] w-[477px] mt-3" />
              </div>
              <button className="w-[477px] py-2 text-[36px] font-normal bg-[#FFCF52] rounded-2xl mt-10 ">
                Kirish
              </button>
              <p className="text-center text-[20px] mt-6">
              Akkauntingiz yo’qmi? Unda  <Link href="/login" className="text-[#00A3FF] underline">Ro’yxatdan o’ting</Link>
              </p>

             </div>
            </div>
        </section>
    );
};

export default Signup;
