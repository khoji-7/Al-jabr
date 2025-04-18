import React from 'react'
import Image from "next/image"

const header = () => {
  return (
    <section className='w-[100%] bg-[#04AA6D] h-[620px]'>
        <div className='w-[88%] mx-auto relative'>
            <h1 className='font-bold text-[45px] text-white w-[746px] pt-36'>
            Al - Jabr – bilim va muvaffaqiyat
            sari birinchi qadam!
            </h1>
            <p className='text-[22px] text-white pt-4  font-medium  '>
            Sinflar bo‘yicha darslar, masalalar va testlar – <br /> hammasi bir platformada!
            </p>
            <div className='pt-20 w-[440px] border-none rounded-2xl '>
                <input type="text" name="" id="" placeholder='Fan yoki sinfni tanlang ...'  className='bg-white  rounded-l-xl h-10 w-[340px] px-2.5 py-1.5'/>
                <button type='submit' className='w-24 cursor-pointer  h-10 bg-yellow-400 rounded-r-xl' >
                    Qidirish
                </button>
            </div>
            <img src="/Image.png" alt="" className='absolute top-[33px] right-[20px]' />
        </div>
    </section>
  )
}

export default header
