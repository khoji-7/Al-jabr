"use client"

import { useState } from "react"
import Image from "next/image"

export function Programm() {
  const [activeCategory, setActiveCategory] = useState("Math")

  const categories = {
    Math: {
      name: "Sof matematika",
      topics: [
        "Algebra",
        "Geometry",
        "Solving Equations",
        "Real World Algebra",
        "Graph Theory",
        "Probability",
        "Linear Algebra",
        "Calculus",
      ],
      cards: [
        { title: "Math Concepts", image: "/pmath1.png" },
        { title: "Data Charts", image: "/pmath2.png" },
        { title: "Geometry Tools", image: "/pmath3.png" },
        { title: "Classroom Learning", image: "/pmath4.png" },
        { title: "Function Graphs", image: "/pmath5.png" },
        { title: "Probability Dice", image: "/pmath6.png" },
        { title: "AI Learning", image: "/pmath7.png" },
        { title: "Computer Science", image: "/pmath8.png" },
        { title: "Sports Math", image: "/pmath9.png" },
      ],
    },
    "CS & Programming": {
      name: "Kompyuter Fanlari",
      topics: [
        "Thinking in Code",
        "Programming with Python",
        "Programming with Variables",
        "Computer Science",
        "Neural Networks",
        "How LLMs Work",
        "How Technology Works",
        "Search Engines",
      ],
      cards: [
        { title: "Brain and Code", image: "/image10.png" },
        { title: "Python", image: "/image (1).png" },
        { title: "Coding", image: "/image (2).png" },
        { title: "Data Visualization", image: "/image (3).png" },
        { title: "Network Graphs", image: "/image (4).png" },
        { title: "AI Brain", image: "/image (5).png" },
        { title: "Robot Learning", image: "/image (6).png" },
        { title: "Network Connections", image: "/image (7).png" },
        { title: "SEO Optimization", image: "/image (8).png" },
      ],
    },
    "Data Analysis": {
        name: "Data Analysis",
        topics: [
          "Exploring Data Visually",
          "Introduction to Probability ",
          "Predicting with Probability",
          "Regression and Classification",
          "Casino Probability",
          
        ],
        cards: [
          { title: "Brain and Code", image: "/pdata.png" },
          { title: "Python", image: "/pdata1.png" },
          { title: "Coding", image: "/pdata2.png" },
          { title: "Data Visualization", image: "/pdata3.png" },
          { title: "Network Graphs", image: "/pdata4.png" },
          { title: "AI Brain", image: "/pdata5.png" },
         
        ],
      },
      "Science": {
        name: "Science",
        topics: [
          "Scientific Thinking",
          "Physics of the Everyday  ",
          "Quantum  Mechanics ",
          ,"Special Relativity",
          "Quantum Computing",
          "Beyond The Nutshell",
          
        ],
        cards: [
          { title: "Brain and Code", image: "/psciense1.png" },
          { title: "Python", image: "/psciense2.png" },
          { title: "Coding", image: "/psciense3.png" },
          { title: "Data Visualization", image: "/psciense4.png" },
          { title: "Network Graphs", image: "/psciense5.png" },
          { title: "AI Brain", image: "/psciense6.png" },
         
        ],
      },
  }

  return (
    <div className="bg-[#2D2F36] text-white max-w-[1440px] h-[850px]">
      <div className="container mx-auto px-4 py-8 w-[88%]">
        <h1 className="text-4xl font-bold text-center mb-8">
          AL-Jabr o‘z ichiga oladi.
        </h1>

        <div className="flex justify-center mb-8">
          <div className="bg-[#f5f5f7e0] rounded-full p-1 inline-flex">
            {Object.keys(categories).map((category) => (
              <button
                key={category}
                onClick={() => setActiveCategory(category)}
                className={`px-6 py-2 rounded-full text-sm font-medium transition-colors cursor-pointer ${
                  activeCategory === category
                    ? "bg-white text-black"
                    : "text-gray-700 hover:text-gray-800"
                }`}
              >
                {category}
              </button>
            ))}
          </div>
        </div>

        <div className="flex flex-col md:flex-row gap-8">
          <div className="w-full md:w-64 shrink-0">
            <h2 className="text-xl font-bold mb-4 cursor-pointer">
              {categories[activeCategory].name}
            </h2>
            <ul className="space-y-4">
              {categories[activeCategory].topics.map((topic) => (
                <li key={topic} className="hover:text-blue-400 cursor-pointer">
                  {topic}
                </li>
              ))}
            </ul>
          </div>

          <div className="flex-1">
            <div className="grid grid-cols-3 sm:grid-cols-3 gap-4">
              {categories[activeCategory].cards.map((card, index) => (
                <div
                  key={index}
                  className="bg-white rounded-lg overflow-hidden cursor-pointer hover:shadow-lg transition-shadow"
                >
                  <div className="p-4 flex items-center justify-center h-48 bg-white">
                    <Image
                      src={card.image}
                      alt={card.title}
                      width={150}
                      height={150}
                      className="object-contain"
                      priority
                    />
                  </div>
                </div>
              ))}
            </div>
          </div>
        </div>
      </div>
    </div>
  )
}
export default Programm