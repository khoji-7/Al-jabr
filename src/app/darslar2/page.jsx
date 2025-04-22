import Link from 'next/link'
import React from "react";
import Navbar from "../../components/dashboard/navbar";
import Footer from "../../components/dashboard/footer.jsx";
import { FiHeart, FiShoppingCart, FiBell } from "react-icons/fi";

const categories = [
  "1 sinf",
  "2 sinf",
  "3 sinf",
  "4 sinf",
  "5 sinf",
  "6 sinf",
  "7 sinf",
  "8 sinf",
  "9 sinf",
  "10 sinf",
  "11 sinf",
  "Qo’shimcha fanlar",
];

const filters = [
  "Hammasi",
  "Matematika",
  "STEM",
  "Olimpiada",
  "Ixtisoslashgan maktabga tayyorgarlik",
  "Milliy sertifikat",
];

const Darslar2 = () => {
return (
    <div className="min-h-screen bg-gray-100">
        <Navbar />
        <main className="container mx-auto px-4 py-6">
            <div className="w-[88%] mx-auto">
                <div className="flex items-center justify-between mb-6">
                    <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black">
                        <option value="all">Hammasi</option>
                        <option value="matematika">Matematika</option>
                        <option value="stem">STEM</option>
                        <option value="olimpiada">Olimpiada</option>
                        <option value="special">Ixtisoslashgan maktabga tayyorgarlik</option>
                        <option value="certificate">Milliy sertifikat</option>
                    </select>
                    <input
                        type="text"
                        placeholder="Qidiruv"
                        className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 flex-1 mx-4 bg-white text-black"
                    />
                    <div className="flex items-center gap-4">
                        <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-200 bg-white text-black">
                            Kurslarim
                        </button>
                        <FiHeart className="h-5 w-5 cursor-pointer hover:text-gray-600 text-gray-500" />
                        <FiShoppingCart className="h-5 w-5 cursor-pointer hover:text-gray-600 text-gray-500" />
                        <FiBell className="h-5 w-5 cursor-pointer hover:text-gray-600 text-gray-500" />
                    </div>
                </div>

                <div className="flex items-center gap-2 mb-6">
                    {filters.map((filter, index) => (
                        <button
                            key={index}
                            className={`px-4 py-2 text-sm rounded-md transition-shadow hover:shadow-md border border-gray-300 bg-white text-black hover:bg-gray-100 ${
                                filter === "Matematika" ? "bg-[#04AA6D] text-white" : ""
                            }`}
                            style={filter === "Matematika" ? { backgroundColor: "#04AA6D", color: "white" } : {}}
                        >
                            {filter}
                        </button>
                    ))}
                </div>

                <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 gap-2 justify-items-center">
                    {categories.map((category, index) => (
                        <Link href="/mundarija">
                        <div
                            key={index}
                            className="border border-gray-300 rounded-lg p-6 text-center cursor-pointer hover:shadow-md transition-all w-[387px] h-[205px] bg-white relative hover:bg-[#04AA6D] hover:text-white group"
                        >
                            <img src="/monitor-icon.png" alt="Monitor Icon" className="absolute top-2 left-2 w-10 h-10 group-hover:filter group-hover:brightness-0 group-hover:invert" />
                            <div className="flex flex-col items-center justify-center h-full">
                                <h1 className="text-4xl font-bold mb-2">{category.split(" ")[0]}</h1>
                                <p className="text-lg font-medium">{category.split(" ")[1]}</p>
                            </div>
                        </div>
                        </Link>
                    ))}
                </div>
            </div>
        </main>
        <Footer />
    </div>
);
};

export default Darslar2;