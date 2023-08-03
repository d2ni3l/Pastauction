'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
interface DashboardNavbar {
  mobileSidebar : boolean;
  setMobileSidebar : (value: boolean) => void
}

export default function DashboardNavbar({ setMobileSidebar, mobileSidebar }: DashboardNavbar) {
    
    const genericHamburgerLine = `h-1 w-6 my-[2px] rounded-full bg-black transition ease transform duration-300`;

  return (
    <div className='max-w-[1500px]'>
      <nav className='  w-full bg-transparent border-b-[3px] border-gray-400 sm:py-5 py-3 flex justify-between lg:ml-[12rem]'>
        <div className='sm:mx-12 mx-5'>
          <h1 className='text-neutral-800 sm:text-[40px] text-2xl  font-semibold leading-[48px]'>
            Home
          </h1>
        </div>


        <button
      className="flex flex-col h-12 w-12  rounded justify-center items-center group md:hidden mx-5"
      onClick={() => setMobileSidebar(!mobileSidebar)}
    >
      <div
        className={`${genericHamburgerLine} ${
          mobileSidebar
            ? "rotate-45 translate-y-2  group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          mobileSidebar ? "opacity-0" : " group-hover:opacity-100"
        }`}
      />
      <div
        className={`${genericHamburgerLine} ${
          mobileSidebar
            ? "-rotate-45 -translate-y-2  group-hover:opacity-100"
            : " group-hover:opacity-100"
        }`}
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

