
import Image from "next/image";
import Navbar from "../components/dashboard/navbar";
import Header from "../components/dashboard/header";
import HeaderBanner from "../components/header/headerBanner";
import Directions from "../components/header/directions";
import About from "../components/header/about";
import Programm from "../components/header/program";
import Wework from "../components/header/wework";
import Footer from "../components/dashboard/footer";
import Link from "next/link";
import { GiTeacher } from "react-icons/gi";


export default function Home() {
  return (
    <div className="max-w-[1440px] w-[100%] mx-auto relative">
       <Navbar/>
       <Header/>
       <HeaderBanner/>
       <Directions/>
       <About/>
       <Programm/>
       <Wework/>
       <Footer/>
       <Link href="/aipage">
       <div className="bg-white w-[128px] h-11 rounded-full flex items-center fixed z-10 drop-shadow-xl  top-[550px] p-2 gap-2  right-[100px]">
          <span className="w-9 h-9 rounded-full bg-[#04AA6D] flex justify-center items-center">
            <GiTeacher className="text-white text-xl"/>
          </span>
          <p className="text-[12px] text-black font-semibold">
          AI Mentor
          </p>

       </div>
       </Link>
    </div>
  );
}
 
