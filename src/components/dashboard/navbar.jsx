import Link from 'next/link'
import React from 'react'


const navbar = () => {
  return (
    <section className='w-[100%] h-[60px] bg-[#282A35] flex  items-center  ' >
        <div className='w-[88%] mx-auto flex justify-between flex-row  '> 
            <Link href="/">
            <img src="logo.png" alt="" />

            </Link>
            <ul className='flex items-center gap-12 cursor-pointer'>
                
                <li className='text-white capitalize'>
                    darslar
                </li>
               <Link href="/darslar">
                <li className='text-white capitalize'>
                    Kurslar
                </li>
                </Link>
                <li className='text-white capitalize'>
                    testlar
                </li>
                <li className='text-white capitalize'>
                    yutuqlar
                </li>
                <li className='text-white capitalize'>
                    obuna
                </li>
            </ul>
            <button className='w-[100px] text-white rounded-[100px] bg-[#04AA6D] cursor-pointer '>
               <Link href="/signup">
               Sign Up
               </Link>
            </button>
        </div>
    </section>
  )
}

export default navbar
