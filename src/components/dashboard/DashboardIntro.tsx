import React from "react";
import { inter } from "@/app/fonts";
import Image from 'next/image'
export default function DashboardIntro() {
  return (
    <div className={inter.className}>
      <div className='flex bg-white shadow-lg p-5 rounded-lg mt-7 max-w-5xl mx-auto justify-between items-center '>
        <div className='flex flex-col gap-2 mx-5'>
          <h1 className='text-sm sm:text-lg md:text-4xl font-semibold '> Hi Gianfranco !</h1>
          <p className='font-medium flex flex-col text-sm'>
            <span>
            In PastAuction, you will be able to search and filter relevant data
            for</span>
            <span>our next classic car purchase.</span>
          </p>
        </div>
        <div className="mx-5">
            <Image 
            src='/images/intro.svg'
            alt='Welcome to Past Auction'
            width='250'
            height='250'
            />
        </div>
      </div>
    </div>
  );
}
