"use client"

import { FiSearch, FiPlus, FiMoreHorizontal, FiSettings, FiUser, FiArrowRight, FiPaperclip, FiMic } from "react-icons/fi"
import { FaKeyboard } from "react-icons/fa6";


// Custom Button Component
const CustomButton = ({ variant = "default", className = "", children, onClick, ...props }) => {
  const baseStyles = "inline-flex items-center justify-center rounded-md text-sm font-medium transition-colors focus:outline-none disabled:opacity-50 disabled:pointer-events-none"
  
  const variants = {
    default: "bg-emerald-600 text-white hover:bg-emerald-700",
    outline: "bg-gray-800 text-white border-gray-700 hover:bg-gray-700"
  }

  const variantStyles = variants[variant] || variants.default
  
  return (
    <button
      className={`${baseStyles} ${variantStyles} ${className}`}
      onClick={onClick}
      {...props}
    >
      {children}
    </button>
  )
}

export default function AIMentor() {
  return (
    <div className="flex h-screen dark">
      {/* Sidebar */}
      <div className="w-80 flex-shrink-0 flex flex-col bg-gray-900">
        {/* Sidebar Header */}
        <div className="p-4 flex items-center justify-between">
          <div className="text-white text-2xl">≡</div>
          <div className="flex items-center gap-4">
            <FiMoreHorizontal className="text-white" size={20} />
          </div>
        </div>

        {/* New Chat Button */}
        <div className="px-4 py-2">
          <CustomButton
            variant="outline"
            className="w-full justify-between bg-gray-800 text-white border-gray-700 py-2"
          >
            <span>Yangi Chatni boshlang</span>
            <FiPlus size={16} />
          </CustomButton>
        </div>

        {/* Search */}
        <div className="px-4 py-2">
          <div className="flex items-center gap-2 px-3 py-2 rounded-md bg-gray-800">
            <FiSearch size={18} className="text-gray-400" />
            <input
              type="text"
              placeholder="Qidiruv"
              className="bg-transparent border-none outline-none text-sm text-gray-300 w-full"
            />
          </div>
        </div>

        {/* Categories */}
        <div className="px-4 py-2">
          <div className="text-sm text-gray-300 mb-2">Category</div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="w-1 h-5 bg-blue-500 rounded-full"></div>
            <div className="flex-1 text-white text-sm">Umumiy Savollar</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="w-1 h-5 bg-indigo-500 rounded-full"></div>
            <div className="flex-1 text-white text-sm">Mavzu tushuntirish</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="w-1 h-5 bg-green-500 rounded-full"></div>
            <div className="flex-1 text-white text-sm">Misollarni yechish</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="w-1 h-5 bg-pink-500 rounded-full"></div>
            <div className="flex-1 text-white text-sm">Formulalar va Qoidalar</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Recent Chats */}
        <div className="px-4 py-2">
          <div className="text-sm text-gray-300 mb-2">Recent Chats</div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="text-gray-400">💬</div>
            <div className="flex-1 text-white text-sm truncate">Kvadrat tenglamalarni...</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="text-gray-400">💬</div>
            <div className="flex-1 text-white text-sm truncate">Bu integralni qanday yech...</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>

          <div className="flex items-center gap-2 px-3 py-2 rounded-md mb-1 hover:bg-gray-800">
            <div className="text-gray-400">💬</div>
            <div className="flex-1 text-white text-sm truncate">Sinus va kosinus qoidalari...</div>
            <FiMoreHorizontal size={16} className="text-gray-400" />
          </div>
        </div>

        {/* Profile */}
        <div className="mt-auto p-4">
          <CustomButton
            variant="outline"
            className="w-full flex justify-between bg-gray-800 text-white border-gray-700 py-2"
          >
            <div className="flex items-center gap-2">
              <FiUser size={16} />
              <span>Foydalanuvchi Profili</span>
            </div>
          </CustomButton>
        </div>
      </div>

      {/* Main Content */}
      <div className="flex-1 flex flex-col bg-gray-800">
        {/* Header */}
        <div className="p-4 flex items-center justify-between border-b border-gray-700">
          <div className="text-xl font-bold text-emerald-500">AI Mentor</div>
          <button className="p-2">
            <div className="w-6 h-0.5 bg-gray-400 mb-1"></div>
            <div className="w-6 h-0.5 bg-gray-400"></div>
          </button>
        </div>

        {/* Content */}
        <div className="flex-1 overflow-auto p-6">
          {/* Heading */}
          <div className="text-center mb-6">
            <h1 className="text-3xl font-bold mb-4 text-white">Bugun qanday yordam kerak?</h1>
            <p className="text-gray-300 max-w-2xl mx-auto">
              Matematika bo'yicha AI coach sizga murakkab tushunchalarni osonroq tushuntiradi. Qaysi bo'lim sizga
              kerakligini tanlang va savollaringizni bering!
            </p>
          </div>

          {/* Cards */}
          <div className="grid grid-cols-1 md:grid-cols-2 lg:grid-cols-4 gap-4 max-w-4xl mx-auto mt-8">
            {/* Card 1 */}
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-white">Mavzular tushuntirishi</h3>
                <div className="p-1 rounded-full border border-gray-700">
                  <FiArrowRight size={16} className="text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Algebra, geometriya, trigonometriya va boshqa mavzular bo'yicha tushuntirib oling
              </p>
            </div>

            {/* Card 2 */}
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-white">Murakkab misollar</h3>
                <div className="p-1 rounded-full border border-gray-700">
                  <FiArrowRight size={16} className="text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Misollari qanday yechish kerakligini qiynalgan va murakkab masalalar ustida ishlang
              </p>
            </div>

            {/* Card 3 */}
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-white">Formulalar va qoidalar</h3>
                <div className="p-1 rounded-full border border-gray-700">
                  <FiArrowRight size={16} className="text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Muhim matematik formulalar va qoidalarni o'rganing
              </p>
            </div>

            {/* Card 4 */}
            <div className="border border-gray-700 rounded-lg p-4 hover:shadow-md transition-shadow">
              <div className="flex justify-between items-start mb-4">
                <h3 className="font-medium text-white">Umumiy savollar</h3>
                <div className="p-1 rounded-full border border-gray-700">
                  <FiArrowRight size={16} className="text-gray-400" />
                </div>
              </div>
              <p className="text-xs text-gray-400">
                Boshqa matematik masalalar bo'yicha yordam kerakmi? Savol bering!
              </p>
            </div>
          </div>
        </div>

        {/* Input Area */}
        <div className="p-4 border-t border-gray-700">
          <div className="max-w-4xl mx-auto">
            <div className="flex items-center gap-2 px-4 py-3 rounded-full bg-gray-700">
              <FiPaperclip size={20} className="text-gray-400" />
              <input
                type="text"
                placeholder="Matematik savolingizni kiriting..."
                className="bg-transparent border-none outline-none flex-1 text-gray-200"
              />
              <FaKeyboard size={20} className="text-gray-400 mr-2"/>
              <FiMic size={20} className="text-gray-400 mr-2" />
              <div className="p-2 rounded-full bg-emerald-600">
                <FiArrowRight size={20} className="text-white" />
              </div>
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}