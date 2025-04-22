"use client"

import { useState } from "react";
import Image from "next/image";
import { FiSearch, FiShoppingCart, FiHeart, FiStar } from "react-icons/fi"  ;
import Navbar from "../../components/dashboard/navbar";
import Footer from "../../components/dashboard/footer.jsx";

// Mock data for courses
const coursesData = {
  programming: [
    {
      id: "1",
      title: "PYTHON COURSE",
      image: "/dars1.png",
      instructor: "John Doe",
      rating: 4.7,
      reviews: 174,
      price: 26.92,
      originalPrice: 129.99,
      badges: [],
      category: "programming",
    },
    {
      id: "2",
      title: "COMPUTER SCIENCE COURSES",
      image: "/dars2.png",
      instructor: "Jane Smith",
      rating: 4.8,
      reviews: 204,
      price: 24.92,
      originalPrice: 139.99,
      badges: [],
      category: "programming",
    },
    {
      id: "3",
      title: "MOBILE DEV REACT NATIVE",
      image: "/dars3.png",
      instructor: "Alex Johnson",
      rating: 4.6,
      reviews: 150,
      price: 24.92,
      originalPrice: 99.99,
      badges: ["NEW"],
      category: "programming",
    },
    {
      id: "4",
      title: "WEBSITE DEV ZERO TO HERO",
      image: "/dars4.png",
      instructor: "Sarah Williams",
      rating: 4.9,
      reviews: 320,
      price: 24.92,
      originalPrice: 129.99,
      badges: ["HOT"],
      category: "programming",
    },
  ],
  math: [
    {
      id: "5",
      title: "Geometry Course",
      image: "/dars5.png",
      instructor: "Michael Brown",
      rating: 4.7,
      reviews: 190,
      price: 26.92,
      originalPrice: 119.99,
      badges: [],
      category: "math",
    },
    {
      id: "6",
      title: "Calculus Course",
      image: "/dars6.png",
      instructor: "Emily Davis",
      rating: 4.8,
      reviews: 210,
      price: 24.92,
      originalPrice: 129.99,
      badges: ["NEW", "HOT"],
      category: "math",
    },
    {
      id: "7",
      title: "Linear Algebra Course",
      image: "/dars7.png",
      instructor: "David Wilson",
      rating: 4.6,
      reviews: 180,
      price: 24.92,
      originalPrice: 99.99,
      badges: ["NEW"],
      category: "math",
    },
    {
      id: "8",
      title: "Graph Theory",
      image: "/dars8.png",
      instructor: "Lisa Anderson",
      rating: 4.7,
      reviews: 145,
      price: 24.92,
      originalPrice: 109.99,
      badges: ["NEW", "HOT"],
      category: "math",
    },
  ],
  data: [
    {
      id: "9",
      title: "Exploring Data Visually Course",
      image: "/dars9.png",
      instructor: "Robert Taylor",
      rating: 4.7,
      reviews: 174,
      price: 26.92,
      originalPrice: 129.99,
      badges: [],
      category: "data",
    },
    {
      id: "10",
      title: "Introduction to Probability",
      image: "/dars10.png",
      instructor: "Jennifer Clark",
      rating: 4.8,
      reviews: 204,
      price: 24.92,
      originalPrice: 139.99,
      badges: [],
      category: "data",
    },
    {
      id: "11",
      title: "Predicting with Probability",
      image: "/dars11.png",
      instructor: "Thomas Moore",
      rating: 4.6,
      reviews: 150,
      price: 24.92,
      originalPrice: 99.99,
      badges: ["NEW"],
      category: "data",
    },
    {
      id: "12",
      title: "Casino Probability",
      image: "/dars12.png",
      instructor: "Amanda Lewis",
      rating: 4.9,
      reviews: 320,
      price: 24.92,
      originalPrice: 129.99,
      badges: ["HOT"],
      category: "data",
    },
  ],
  science: [
    {
      id: "13",
      title: "Scientific Thinking Course",
      image: "/dars13.png",
      instructor: "Daniel Harris",
      rating: 4.7,
      reviews: 190,
      price: 26.92,
      originalPrice: 119.99,
      badges: [],
      category: "science",
    },
    {
      id: "14",
      title: "Quantum Mechanics",
      image: "/dars14.png",
      instructor: "Olivia Martin",
      rating: 4.8,
      reviews: 210,
      price: 24.92,
      originalPrice: 129.99,
      badges: [],
      category: "science",
    },
    {
      id: "15",
      title: "Special Relativity",
      image: "/dars15.png",
      instructor: "William Thompson",
      rating: 4.6,
      reviews: 180,
      price: 24.92,
      originalPrice: 99.99,
      badges: ["SPECIAL"],
      category: "science",
    },
    {
      id: "16",
      title: "Beyond The Nutshell",
      image: "/dars16.png",
      instructor: "Sophia Walker",
      rating: 4.7,
      reviews: 145,
      price: 24.92,
      originalPrice: 109.99,
      badges: ["NEW"],
      category: "science",
    },
  ],
}


const categories = [
  { name: "Math", courses: "2,786 Courses" },
  { name: "CS & Programming", courses: "14,568 Courses" },
  { name: "Data Analysis", courses: "4,786 Courses" },
  { name: "Science", courses: "12,644 Courses" },
]

const keywords = [
  "Thinking in Code",
  "Programming with Python",
  "Computer Science",
  "Neural Networks",
  "Programming",
  "Search Engines",
  "Technology",
]

// Header Component
function Header() {
  const [language, setLanguage] = useState("browse")

  return (
    <header className="border-b border-gray-200 py-3">
      <Navbar/>
      <div className="container mx-auto flex items-center justify-between px-4 mt-2">
        <div className="flex items-center gap-4 w-full max-w-xl">
          <select
            value={language}
            onChange={(e) => setLanguage(e.target.value)}
            className="w-[120px] border border-gray-300 rounded-md px-3 py-2 text-sm focus:outline-none focus:ring-2 focus:ring-blue-500"
          >
            <option value="browse">Browse</option>
            <option value="uzbek">O'zbekcha</option>
            <option value="english">English</option>
          </select>

          <div className="relative flex-1">
            <FiSearch className="absolute left-3 top-1/2 h-4 w-4 -translate-y-1/2 text-gray-500" />
            <input
              className="w-full pl-10 pr-3 py-2 border border-gray-300 rounded-md focus:outline-none focus:ring-2 focus:ring-blue-500"
              placeholder="What do you want to learn..."
            />
          </div>
        </div>

        <div className="flex items-center gap-4">
          <button className="border border-gray-300 rounded-full px-4 py-2 text-sm hover:bg-gray-100">
            Kurslarim
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiHeart className="h-5 w-5" />
          </button>
          <button className="p-2 hover:bg-gray-100 rounded-full">
            <FiShoppingCart className="h-5 w-5" />
          </button>
        </div>
      </div>
    </header>
  )
}

// Category Navigation Component
function CategoryNav() {
  return (
    <div className="my-6">
      <h2 className="text-xl font-semibold mb-4">Category</h2>
      <div className="grid grid-cols-2 md:grid-cols-4 gap-4">
        {categories.map((category) => (
          <div
            key={category.name}
            className="border border-gray-200 rounded-lg p-6 text-center hover:shadow-md transition-shadow cursor-pointer"
          >
            <h3 className="font-medium">{category.name}</h3>
            <p className="text-sm text-gray-500">{category.courses}</p>
          </div>
        ))}
      </div>
    </div>
  )
}

// Popular Keywords Component
function PopularKeywords() {
  return (
    <div className="my-6">
      <h2 className="text-sm font-medium mb-3">Popular keywords:</h2>
      <div className="flex flex-wrap gap-2">
        {keywords.map((keyword, index) => (
          <button
            key={keyword}
            className={`px-3 py-1 text-sm rounded-md ${
              index === 1
                ? "bg-orange-500 text-white hover:bg-orange-600"
                : "border border-gray-300 hover:bg-gray-100"
            }`}
          >
            {keyword}
          </button>
        ))}
      </div>
    </div>
  )
}

// Course Card Component
function CourseCard({ title, image, instructor, rating, reviews, price, originalPrice, badges = [] }) {
  return (
    <div className="group cursor-pointer">
      <div className="relative aspect-video overflow-hidden rounded-lg mb-2">
        {badges.length > 0 && (
          <div className="absolute top-2 left-2 z-10 flex gap-1">
            {badges.map((badge) => (
              <span
                key={badge}
                className="inline-block bg-green-500 text-white text-xs px-2 py-1 rounded-md"
              >
                {badge}
              </span>
            ))}
          </div>
        )}
        <Image
          src={image || "/placeholder.svg"}
          alt={title}
          fill
          sizes="(max-width: 768px) 100vw, (max-width: 1200px) 50vw, 33vw"
          className="object-cover transition-transform group-hover:scale-105"
        />
      </div>

      <h3 className="font-medium line-clamp-2 text-sm mb-1">{title}</h3>
      <p className="text-xs text-gray-500 mb-1">{instructor}</p>

      <div className="flex items-center gap-1 mb-1">
        <span className="font-medium text-amber-500">{rating.toFixed(1)}</span>
        <div className="flex">
          {[...Array(5)].map((_, i) => (
            <FiStar
              key={i}
              className={`h-3 w-3 ${
                i < Math.floor(rating) ? "fill-amber-500 text-amber-500" : "fill-gray-200 text-gray-200"
              }`}
            />
          ))}
        </div>
        <span className="text-xs text-gray-500">({reviews})</span>
      </div>

      <div className="flex items-center gap-2">
        <span className="font-bold">${price.toFixed(2)}</span>
        {originalPrice > price && (
          <span className="text-xs text-gray-500 line-through">${originalPrice.toFixed(2)}</span>
        )}
      </div>
    </div>
  )
}

// Course Section Component
function CourseSection({ title, subtitle, category }) {
  const courses = coursesData[category] || []

  return (
    <div className="my-8">
      <div className="mb-4">
        <h2 className="text-xl font-semibold">{title}</h2>
        <p className="text-sm text-gray-500">{subtitle}</p>
      </div>

      <div className="grid grid-cols-1 sm:grid-cols-2 md:grid-cols-3 lg:grid-cols-4 gap-4">
        {courses.map((course) => (
          <CourseCard key={course.id} {...course} />
        ))}
      </div>
    </div>
  )
}

// Promotional Banner Component
function PromotionalBanner() {
  return (
    <div className="my-8 rounded-lg bg-blue-600 p-6 text-white relative overflow-hidden">
      <div className="relative z-10 max-w-3xl mx-auto text-center">
        <h2 className="text-2xl font-bold mb-2">Yangiliklardan xabardor bo'ling!</h2>
        <p className="mb-4">Yangi kurslar, chegirmalar uchun obuna bo'ling!</p>

        <div className="flex flex-col sm:flex-row gap-2 max-w-md mx-auto">
          <input
            className="bg-white text-black px-3 py-2 rounded-md w-full"
            placeholder="Email Address"
          />
          <button className="bg-green-500 hover:bg-green-600 text-white px-4 py-2 rounded-md">
            Subscribe
          </button>
        </div>
      </div>

      <div className="absolute right-0 bottom-0 w-32 h-32 bg-blue-500 rounded-full opacity-50 -mr-10 -mb-10"></div>
      <div className="absolute left-10 top-10 w-16 h-16 bg-yellow-300 rounded-full opacity-20"></div>
      <div className="absolute right-1/4 top-1/3 w-8 h-8 bg-red-400 rounded-full opacity-30"></div>
    </div>
  )
}

// Main Page Component
export default function HomePage() {
  return (
    <div className="min-h-screen bg-white">
      <Header />
      <main className="container mx-auto px-4 py-6">
        <CategoryNav />
        <PopularKeywords />

        <CourseSection
          title="CS & Programming bo'yicha kurslar"
          subtitle="Eng so'nggi kurslar va amalga oshirilgan"
          category="programming"
        />

        <CourseSection
          title="Math bo'yicha kurslar"
          subtitle="Eng so'nggi kurslar va amalga oshirilgan"
          category="math"
        />

        <CourseSection
          title="Data Analysis bo'yicha kurslar"
          subtitle="Eng so'nggi kurslar va amalga oshirilgan"
          category="data"
        />

        <CourseSection
          title="Science bo'yicha kurslar"
          subtitle="Eng so'nggi kurslar va amalga oshirilgan"
          category="science"
        />

        <PromotionalBanner />
      </main>
      <Footer/>
    </div>
  )
}