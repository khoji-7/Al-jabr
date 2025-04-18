"use client";

import {useState} from "react";
import Image from "next/image";

export function Programm() {
    const [activeCategory, setActiveCategory] = useState("Math");

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
                {title: "Sof matematika", image: "/pmath1.png"},
                {title: "Algebra", image: "/pmath2.png"},
                {title: "Geometry", image: "/pmath3.png"},
                {title: "Solving Equations", image: "/pmath4.png"},
                {title: "Real World Algebra", image: "/pmath5.png"},
                {title: "Graph Theory", image: "/pmath6.png"},
                {title: "Probability", image: "/pmath7.png"},
                {title: "inear Algebra", image: "/pmath8.png"},
                {title: "Calculus", image: "/pmath9.png"},
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
                {title: "Thinking in Cod", image: "/image10.png"},
                {title: "Programming with Python", image: "/image (1).png"},
                {title: "Coding", image: "/image (2).png"},
                {title: "Programming with Variables", image: "/image (3).png"},
                {title: "Computer Science", image: "/image (4).png"},
                {title: "Neural Networks", image: "/image (5).png"},
                {title: "How LLMs Work", image: "/image (6).png"},
                {title: "How Technology Works", image: "/image (7).png"},
                {title: "Search Engines", image: "/image (8).png"},
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
                {title: "Data Analysis", image: "/pdata.png"},
                {title: "Exploring Data Visually", image: "/pdata1.png"},
                {title: "Introduction to Probability", image: "/pdata2.png"},
                {title: "Predicting with Probability", image: "/pdata3.png"},
                {title: "Regression and Classification", image: "/pdata4.png"},
                {title: "Casino Probability", image: "/pdata5.png"},
            ],
        },
        Science: {
            name: "Science",
            topics: [
                "Scientific Thinking",
                "Physics of the Everyday  ",
                "Quantum  Mechanics ",
                ,
                "Special Relativity",
                "Quantum Computing",
                "Beyond The Nutshell",
            ],
            cards: [
                {title: "Scientific Thinking", image: "/psciense1.png"},
                {title: "Physics of the Everyday ", image: "/psciense2.png"},
                {title: "Quantum  Mechanics", image: "/psciense3.png"},
                {title: "Special Relativity", image: "/psciense4.png"},
                {title: "Quantum Computing", image: "/psciense5.png"},
                {title: "Beyond The Nutshell", image: "/psciense6.png"},
            ],
        },
    };

    return (
        <div className="bg-[#2D2F36] text-white max-w-[1440px] h-[850px]">
            <div className="container mx-auto px-4 py-8 w-[88%]">
                <h1 className="text-4xl font-bold text-center mb-8">AL-Jabr o‘z ichiga oladi.</h1>

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
                        <h2 className="text-xl font-bold mb-4 cursor-pointer">{categories[activeCategory].name}</h2>
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
                                    <div className="relative flex  group w-[150px] h-[150px] mx-auto items-center">
                                        <Image
                                            src={card.image}
                                            alt={card.title}
                                            width={100}
                                            height={100}
                                            className="object-contain w-[150px] h-[150px]"
                                            priority
                                        />
                                        <div className="absolute inset-0 text-xl flex items-center justify-center bg-gray-300 bg-opacity-50 text-black  opacity-0 group-hover:opacity-80 hover:text-black transition-opacity">
                                            {card.title}
                                        </div>
                                    </div>
                                </div>
                            ))}
                        </div>
                    </div>
                </div>
            </div>
        </div>
    );
}
export default Programm;
