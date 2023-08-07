'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface DashboardNavbar {
  mobileSidebar : boolean;
  page: string;
  setMobileSidebar : (value: boolean) => void
}

export default function DashboardNavbar({ setMobileSidebar, mobileSidebar, page }: DashboardNavbar) {
    

  return (
    <div className=''>
      <nav className='  w-full bg-[#d8dbde] border-b-[3px] border-gray-400 sm:py-5 py-3 flex justify-between lg:ml-[12rem]'>
        <div className='sm:mx-12 mx-5'>
          <h1 className='text-neutral-800 capitalize sm:text-[40px] text-2xl  font-semibold leading-[48px]'>
            {page}
          </h1>
        </div>


        <button onClick={() => {setMobileSidebar(true)}}  className='sm:mx-12 mx-5 md:hidden '>
          <Image
          src='/images/hamburgermenu.svg'
          alt='hamburger menu'
          width='50'
          height='50'
          />
        </button>

   

        <div className='lg:mr-[15rem] mx-5 md:flex items-center gap-5 hidden'>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
              src='/images/chat-bubble.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
              src='/images/report.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bookmark-heart.svg'
              alt='chat bubble'
              width='23'
              height='23'
            />
          </Button>

          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/moneyacc.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bell.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <div>
            <Image
              src='/images/avatar.png'
              alt='chat bubble'
              width='40'
              height='40'
              className=''
            />
          </div>
        </div>
      </nav>
    </div>
  );
}

