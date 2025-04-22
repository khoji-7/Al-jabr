"use client";

import Link from "next/link";
import React, { useState } from "react";
import Navbar from "../../components/dashboard/navbar";
import Footer from "../../components/dashboard/footer.jsx";
import {
  FiSearch,
  FiHeart,
  FiShoppingCart,
  FiBell,
  FiArrowLeft,
  FiFolderPlus,
  FiVideo,
  FiClock,
  FiPlay,
  FiArrowUp,
  FiCheck,
  FiArrowUpCircle,
  FiPause,
  FiDownload,
  FiFile,
  FiArrowRight,
  FiUser,
  FiSend,
} from "react-icons/fi";
const MundarijaPage = () => {
  const [isExpanded, setIsExpanded] = useState(false);
  const [activeTab, setActiveTab] = useState("maruza");
  const [isModalOpen, setIsModalOpen] = useState(false);
  const [selectedExercise, setSelectedExercise] = useState(null);
  const [isChatOpen, setIsChatOpen] = useState(false);

  const toggleExpand = () => {
    setIsExpanded(!isExpanded);
  };

  const openModal = (exercise) => {
    setSelectedExercise(exercise);
    setIsModalOpen(true);
  };

  const closeModal = () => {
    setIsModalOpen(false);
    setSelectedExercise(null);
  };

  const toggleChat = () => {
    setIsChatOpen(!isChatOpen);
    const mainContent = document.querySelector("main");
    if (!isChatOpen) {
      mainContent.style.marginRight = "558px"; // Adjust the margin to make space for the chat
    } else {
      mainContent.style.marginRight = "0"; // Reset the margin when chat is closed
    }
  };

  return (
    <div>
      <Navbar />
      <main className="container mx-auto px-4 py-6">
        <div className="flex items-center justify-between mb-6">
          <div className="flex items-center gap-4">
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black">
              <option value="matematika">Matematika</option>
              <option value="fizika">Fizika</option>
              <option value="kimyo">Kimyo</option>
            </select>
            <select className="border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 bg-white text-black">
              <option value="5-sinf">5-sinf</option>
              <option value="6-sinf">6-sinf</option>
              <option value="7-sinf">7-sinf</option>
            </select>
            <div className="relative flex-1" style={{ width: "424px" }}>
              <input
                type="text"
                placeholder="Qidiruv"
                className="border border-gray-300 rounded-md px-10 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500 w-full bg-white text-black"
              />
              <span className="absolute left-3 top-1/2 transform -translate-y-1/2 text-gray-500">
                <FiSearch className="w-5 h-5" />
              </span>
            </div>
          </div>
          <div className="flex items-center gap-4">
            <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-200 bg-white text-black">
              Kurslarim
            </button>
            <FiHeart className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-600" />
            <FiShoppingCart className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-600" />
            <FiBell className="h-5 w-5 text-gray-500 cursor-pointer hover:text-gray-600" />
          </div>
        </div>

        <div className="flex items-center justify-between bg-gray-100 p-4 rounded-lg shadow-md mb-6">
          <div className="flex items-center gap-4">
            <Link href="/darslar2">
            <button className="p-2 rounded-full bg-white shadow-md cursor-pointer hover:shadow-lg">
              <FiArrowLeft className="h-5 w-5 text-gray-500" />
            </button>
            </Link>
            <div>
              <h2 className="text-lg font-bold">
                Natural sonlarning bo'linishi: Bo'linuvchanlikning asosiy
                xossalari
              </h2>
              <div className="flex items-center gap-2 text-sm text-gray-500 mt-1">
                <span className="flex items-center gap-1">
                  <FiFolderPlus className="h-4 w-4 text-red-500" /> 2-bob
                </span>
                <span className="flex items-center gap-1">
                  <FiVideo className="h-4 w-4 text-blue-500" /> 17ta dars
                </span>
                <span className="flex items-center gap-1">
                  <FiClock className="h-4 w-4 text-yellow-500" /> 19h 37m
                </span>
              </div>
            </div>
          </div>
          <div className="flex items-center gap-2">
            <button className="px-4 py-2 text-sm rounded-md bg-white border border-gray-300 hover:bg-gray-200">
              Avvalgi
            </button>
            <button className="px-4 py-2 text-sm rounded-md bg-green-500 text-white hover:bg-green-600">
              Keyingisi
            </button>
          </div>
        </div>

        <div className="grid grid-cols-2 md:grid-cols-2 gap-70 items-start">
          <div className="col-span-1">
            <div className="w-full h-auto rounded-lg shadow-md">
              <iframe
                src="https://www.youtube.com/embed/doel364QuhU?si=Hb3D1x2i0J9IbF1e"
                title="YouTube video player"
                frameBorder="0"
                allow="accelerometer; autoplay; clipboard-write; encrypted-media; gyroscope; picture-in-picture; web-share"
                referrerPolicy="strict-origin-when-cross-origin"
                allowFullScreen
                className="w-[830px] h-[510px] object-cover"
              ></iframe>
            </div>
            <h2 className="text-2xl font-bold mt-4">
              2. Bo’linuvchanlikning asosiy xossalari.
            </h2>
            <p className="text-gray-600 mt-2">2-bob | 17ta dars | 19h 37m</p>
          </div>

          <div
            className="bg-white p-4 rounded-lg shadow-md"
            style={{ width: "555px" }}
          >
            <div className="flex items-center justify-between mb-4">
              <h3 className="text-lg font-bold">Mundarija</h3>
              <span className="text-sm text-green-500 font-medium">
                15% Completed
              </span>
            </div>
            <div className="w-full bg-gray-200 rounded-full h-2 mb-6">
              <div
                className="bg-green-500 h-2 rounded-full"
                style={{ width: "25%" }}
              ></div>
            </div>
            <ul className="space-y-4">
              <li className="pb-2">
                <div
                  className="flex items-center justify-between bg-gray-50 p-4 rounded-md shadow-md cursor-pointer"
                  onClick={toggleExpand}
                >
                  <div className="flex items-center gap-2">
                    <FiArrowUpCircle
                      className={`text-orange-500 ${
                        isExpanded ? "rotate-180" : ""
                      }`}
                    />
                    <span className="text-orange-500 font-bold">Boshlash</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiVideo className="h-4 w-4" /> 4 dars
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 51m
                    </span>
                    <span className="flex items-center gap-1 text-sm text-green-500">
                      <FiCheck className="h-4 w-4" /> 25% finish (1/4)
                    </span>
                  </div>
                </div>
                {isExpanded && (
                  <ul className="space-y-4 bg-white rounded-md">
                    <li className="hover:bg-gray-100 p-2 mt-4">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <div className="relative">
                            <input
                              type="checkbox"
                              checked
                              readOnly
                              className="peer h-5 w-5 appearance-none rounded-sm bg-orange-500 border-none checked:bg-orange-500"
                            />
                            <svg
                              className="absolute left-[3px] top-[2px] w-3.5 h-3.5 text-white peer-checked:opacity-100 opacity-0 pointer-events-none"
                              fill="none"
                              stroke="currentColor"
                              strokeWidth="3"
                              viewBox="0 0 24 24"
                            >
                              <path
                                strokeLinecap="round"
                                strokeLinejoin="round"
                                d="M5 13l4 4L19 7"
                              />
                            </svg>
                          </div>
                          <span className="text-gray-700">
                            Natural sonning bo'luvchisi
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <FiPlay className="text-blue-500" />
                          <span className="text-sm text-gray-500">07:31</span>
                        </div>
                      </div>
                    </li>
                    <li className="bg-[#FFEEE8] hover:bg-gray-100 p-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-[#FF6636]"
                            disabled
                          />
                          <span className="text-gray-700">
                            Bo'linuvchanlikning asosiy xossalari
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <FiPause className="text-blue-500" />
                          <span className="text-sm text-gray-500">07:31</span>
                        </div>
                      </div>
                    </li>
                    <li className="hover:bg-gray-100 p-2">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-[#FF6636]"
                            disabled
                          />
                          <span className="text-gray-700">
                            Tub va murakkab sonlar
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <FiPlay className="text-blue-500" />
                          <span className="text-sm text-gray-500">07:31</span>
                        </div>
                      </div>
                    </li>
                    <li className="hover:bg-gray-100 p-2 border-b-2 border-gray-200">
                      <div className="flex items-center justify-between">
                        <div className="flex items-center gap-2">
                          <input
                            type="checkbox"
                            className="form-checkbox h-5 w-5 text-[#FF6636]"
                            disabled
                          />
                          <span className="text-gray-700">
                            2,3,4,5,9 ga bo'linish belgisi
                          </span>
                        </div>
                        <div className="flex items-center gap-4">
                          <FiPlay className="text-blue-500" />
                          <span className="text-sm text-gray-500">07:31</span>
                        </div>
                      </div>
                    </li>
                  </ul>
                )}
              </li>
              <ul className="space-y-4">
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">Daraja</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 52 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 5m 49s
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">
                      Natural sonlarni tub ko'paytuvchilari
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 43 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 51m
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">
                      EKUK va EKUB
                    </span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 137 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 10h 6m
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">Kasrlar</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 21 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 38m
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">Foiz</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 39 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 1h 31m
                    </span>
                  </div>
                </li>
                <li className="flex items-center justify-between p-4 bg-white rounded-md shadow-md">
                  <div className="flex items-center gap-2">
                    <FiArrowUp className="text-gray-500" />
                    <span className="font-bold text-gray-700">Burchaklar</span>
                  </div>
                  <div className="flex items-center gap-4">
                    <span className="flex items-center gap-1 text-sm text-blue-500">
                      <FiPlay className="h-4 w-4" /> 7 lectures
                    </span>
                    <span className="flex items-center gap-1 text-sm text-orange-500">
                      <FiClock className="h-4 w-4" /> 1h 17m
                    </span>
                  </div>
                </li>
              </ul>
            </ul>
          </div>
        </div>
        <div className="mt-4 max-w-[830px]">
          <div className="flex border-b border-t  border-gray-300">
            <button
              className={`px-4 py-4 font-bold focus:outline-none ${
                activeTab === "maruza"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              onClick={() => setActiveTab("maruza")}
            >
              Ma'ruza
            </button>
            <button
              className={`px-4 py-4 font-bold focus:outline-none ${
                activeTab === "mashqlar"
                  ? "text-orange-500 border-b-2 border-orange-500"
                  : "text-gray-500 hover:text-orange-500"
              }`}
              onClick={() => setActiveTab("mashqlar")}
            >
              Mashqlar
            </button>
          </div>
          <div className="mt-10">
            {activeTab === "maruza" && (
              <div>
                <h3 className="text-lg font-bold">Lectures Description</h3>
                <p className="text-gray-600 mt-2 text-justify">
                  Bu mavzuda o‘quvchilar sonlarning bo‘linuvchanligi haqida
                  asosiy tushunchalarni o‘rganadilar. Dars davomida bo‘linish
                  alomatlari (2, 3, 5, 9, 10 ga bo‘linish) va
                  bo‘linuvchanlikning xossalari haqida misollar orqali
                  tushuntiriladi. O‘quvchilar sonlar qanday hollarda boshqa
                  songa bo‘linishini aniqlashni o‘rganadilar. Dars oxirida esa
                  o‘quvchilar mustaqil misollar yechib, bilimlarini mustahkamlab
                  oladilar.
                </p>
                <div className="flex items-center justify-between">
                  <h3 className="text-lg font-bold">Lecture Notes</h3>
                  <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-500 rounded-md shadow-md hover:bg-orange-200">
                    <FiDownload className="h-5 w-5" /> Download Notes
                  </button>
                </div>
                <p className="text-gray-600 mt-2 text-justify">
                  🧐 1. Bo‘linish nima? <br /> Bo‘linish — bu bir sonni boshqa songa
                  ajratish, ya’ni bo‘lish amali. <br /> Misol: 👉 12 : 3 = 4 (bu yerda
                  12 – bo‘linuvchi, 3 – bo‘luvchi, 4 – bo‘linma natijasi) <br /> <br />
                  ✅ <strong> 2. Bo‘linish alomatlari </strong>  <br />
Quyidagi belgilar orqali sonning boshqa songa bo‘linishini bilib olamiz:
                </p>
                <ul className="list-disc pl-5 mt-4 text-gray-600">
                  <li>
                    2 ga bo‘linish alomati: Son juft raqam bilan tugasa (0, 2, 4, 6, 8). <br />
                    <strong> Misol:</strong> 38 (oxiri 8 – juft), demak 2 ga bo‘linadi.
                  </li>
                  <li>
                  3 ga bo‘linish alomati: Sonning raqamlari yig‘indisi 3 ga bo‘linadigan bo‘lsa. <br />
                  <strong> Misol:</strong> 123 → 1 + 2 + 3 = 6 → 6 : 3 = 2 → demak 123 soni 3 ga bo‘linadi.
                  </li>
                  <li>5 ga bo‘linish alomati: Son 0 yoki 5 raqami bilan tugasa. <br />
                  <strong> Misol:</strong> 75 (oxiri 5), 60 (oxiri 0) → ikkalasi ham 5 ga bo‘linadi.</li>
                  <li>
                  9 ga bo‘linish alomati: Sonning raqamlari yig‘indisi 9 ga bo‘linadigan bo‘lsa. <br />
                  <strong> Misol:</strong> 729 → 7 + 2 + 9 = 18 → 18 : 9 = 2 → demak 729 soni 9 ga bo‘linadi.
                  </li>
                  <li>
                  10 ga bo‘linish alomati: Son 0 bilan tugasa. <br />
                  <strong> Misol:</strong> 80, 100, 340 – hammasi 10 ga bo‘linadi.
                  </li>
                </ul>
                <p className="text-gray-600 mt-4 text-justify">
                👆❗ 3. Bo‘linuvchanlikning asosiy xossalari <br />
Agar a va b sonlar bo‘linadigan bo‘lsa, u holda ularning yig‘indisi ham bo‘linadi. <br />
Misol: 12 va 18 – har ikkalasi 3 ga bo‘linadi → 12 + 18 = 30 → 30 ham 3 ga bo‘linadi. <br /> <br />

Agar son boshqa bir songa bo‘linadigan bo‘lsa, uning har qanday ko‘paytmasi ham bo‘linadi. <br />
Misol: 5 ga bo‘linadigan son – 10. Unda 10 × 2 = 20 ham 5 ga bo‘linadi. <br /> <br />

Agar son a boshqa songa bo‘linmasa, u holda uning har qanday ko‘paytmasi ham bo‘linmasligi mumkin. <br />
Misol: 7 soni 3 ga bo‘linmaydi, 7 × 2 = 14 ham 3 ga bo‘linmaydi.
                </p>
                <h3 className="text-lg font-bold mt-6">Attach Files (01)</h3>
                <div className="flex items-center justify-between p-4 bg-gray-100 rounded-md mt-2">
                  <div className="flex items-center gap-4">
                    <FiFile className="h-6 w-6 text-orange-500" />
                    <div>
                      <p className="text-gray-700 font-bold">
                        Create account on webflow.pdf
                      </p>
                      <p className="text-gray-500 text-sm">12.6 MB</p>
                    </div>
                  </div>
                  <button className="flex items-center gap-2 px-4 py-2 bg-orange-100 text-orange-500 rounded-md shadow-md hover:bg-orange-200">
                    <FiDownload className="h-5 w-5" /> Download File
                  </button>
                </div>
              </div>
            )}
            {activeTab === "mashqlar" && (
              <div className="grid grid-cols-7 gap-4 mt-4">
                {[...Array(14)].map((_, index) => {
                  const difficulty =
                    index < 5 ? "Oson" : index < 10 ? "O‘rtacha" : "Qiyin";
                  const finishedImage =
                    index < 5 ? "/Reload.png" : "/finish_icon.png"; // Replace with the actual image path
                  return (
                    <div
                      key={index}
                      className="relative flex flex-col items-center justify-center w-20 h-20 text-white font-bold rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200"
                      style={{
                        background:
                          "radial-gradient(112.5% 111.22% at 104.39% 0%, #DEFD88 0%,rgb(30, 137, 96) 100%)",
                      }}
                      onClick={() =>
                        openModal({ number: index + 1, difficulty })
                      }
                    >
                      <span>{index + 1}</span>
                      <span className="text-xs mt-1">{difficulty}</span>
                      <img
                        src={finishedImage}
                        alt="Finished"
                        className="absolute top-0 right-0 w-[25px] h-[25px]"
                      />
                    </div>
                  );
                })}
              </div>
            )}
          </div>
        </div>
        <div className="mt-30"></div>
      </main>
      <Footer />
      {isModalOpen && (
        <div
          style={{ backgroundColor: "rgba(72, 71, 71, 0.75)" }}
          className="fixed inset-0  flex items-center justify-center z-50"
        >
          <div className="bg-white w-[1376px] h-[600px] rounded-lg shadow-lg p-6 relative">
            <button
              className="absolute top-4 right-4 text-gray-500 hover:text-gray-700 cursor-pointer"
              onClick={closeModal}
            >
              ✕
            </button>
            <h2 className="text-xl font-bold mb-4">
              Mashq {selectedExercise?.number}
            </h2>
            <p className="text-gray-600 mb-4">
              Qiyinlik darajasi: {selectedExercise?.difficulty}
            </p>
            <div className="text-center">
              <p className="text-lg">
                Faqat juft sonlardan iborat qatorni ko‘rsating.
              </p>
              <ul className="mt-4 space-y-2">
                <li>
                  <input type="radio" name="answer" /> A) 9; 26; 31; 47; 37
                </li>
                <li>
                  <input type="radio" name="answer" /> B) 7; 14; 33; 53; 43
                </li>
                <li>
                  <input type="radio" name="answer" /> C) 3; 22; 41; 20; 34
                </li>
                <li>
                  <input type="radio" name="answer" /> D) 1; 14; 30; 34; 22
                </li>
              </ul>
              <div className="mt-6 flex justify-center gap-4">
                <div className="flex items-center gap-2 px-4 py-2 border-2 border-blue-500 rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img
                    src="/video_instruct.png"
                    alt="Video tushuntirish"
                    className="h-14 w-14"
                  />
                  <span className="text-[#564ffd] font-bold">Tushuntirish</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border-2 border-orange-400 rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img
                    src="/yechimi.png"
                    alt="Yechimni ko‘rsatish"
                    className="h-12 w-12"
                  />
                  <span className="text-[#f98c3d] font-bold">Yechilishi</span>
                </div>
                <div className="flex items-center gap-2 px-4 py-2 border-2 border-green-500 rounded-md shadow-md cursor-pointer hover:scale-105 transition-transform duration-200">
                  <img
                    src="/tekshirish_pointer.png"
                    alt="Tekshirish"
                    className="h-14 w-14"
                  />
                  <span className="text-green-500 font-bold">Tekshirish</span>
                </div>
              </div>
            </div>
            <div className="mt-6 flex justify-center items-center gap-4">
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <FiArrowLeft className="h-5 w-5 text-gray-500" />
              </button>
              <div className="flex gap-2">
                {[...Array(4)].map((_, i) => (
                  <div
                    key={i}
                    className={`w-4 h-4 rounded-full ${
                      i === 0 ? "bg-blue-500" : "bg-gray-300"
                    }`}
                  ></div>
                ))}
              </div>
              <button className="p-2 rounded-full bg-gray-200 hover:bg-gray-300">
                <FiArrowRight className="h-5 w-5 text-gray-500" />
              </button>
            </div>
            <div
              className="fixed bottom-30 right-30 w-[90px] h-[90px] border border-blue-400 rounded-full shadow-lg flex items-center justify-center cursor-pointer hover:scale-105 shadow-xl transition-shadow duration-200"
              onClick={toggleChat}
            >
              <img
                src="/ai_mentor.png"
                alt="AI Mentor"
                className="w-[60px] h-[60px] object-contain"
              />
            </div>
          </div>
        </div>
      )}
      {isChatOpen && (
        <div className="fixed bottom-18 right-60 w-[558px] h-[600px] bg-white rounded-lg shadow-lg z-50">
          <div className="flex items-center justify-between p-4 border-b border-gray-300">
            <h3 className="text-lg font-bold">AI Mentor chat</h3>
            <button
              className="text-gray-500 hover:text-gray-700"
              onClick={toggleChat}
            >
              ✕
            </button>
          </div>
          <div className="flex flex-col justify-between h-[550px]">
            <div className="p-4">
              <div className="flex flex-col items-start mb-4">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  🤖
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm">Assalomu Alaykum Fotima!</p>
                </div>
                <div className="bg-gray-100 mt-2 p-2 rounded-lg">
                  <p className="text-sm">Men Al-Jabr ning AI-Mentoriman! 🤖</p>
                </div>
              </div>
              <div className="flex justify-end items-start gap-2">
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm">Menga yordaming kerak!</p>
                </div>
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  <FiUser className="h-6 w-6 text-white-500" />
                </div>
              </div>
              <div className="flex items-start gap-2">
                <div className="w-8 h-8 bg-blue-500 rounded-full flex items-center justify-center text-white font-bold">
                  🤖
                </div>
                <div className="bg-gray-100 p-2 rounded-lg">
                  <p className="text-sm">...</p>
                </div>
              </div>
            </div>
            <div className="p-4 flex gap-2 border-t border-gray-300">
              <input
                type="text"
                placeholder="Ask your question here"
                className="w-full border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
              />
              <div className="w-10 h-10 bg-blue-400 rounded-full flex items-center justify-center text-white font-bold cursor-pointer">
                <FiSend className="h-6 w-6 text-white-500" />
              </div>
            </div>
          </div>
        </div>
      )}
    </div>
  );
};

export default MundarijaPage;
