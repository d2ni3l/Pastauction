import React from "react";
import { inter } from "@/app/fonts";
import Image from 'next/image'
export default function DashboardIntro() {
  return (
    <div className={inter.className}>
      <div className='flex bg-white shadow-lg p-5 rounded-lg mt-7 max-w-5xl sm:mx-auto mx-3 justify-between items-center '>
        <div className='flex flex-col gap-2 mx-5'>
          <h1 className=' text-2xl md:text-4xl font-semibold '> Hi Gianfranco!</h1>
          <p className='font-medium flex flex-col text-xs sm:text-sm'>
          
            In PastAuction, you will be able to search and filter relevant data
            for our next classic car purchase.
           
          </p>
        </div>
        <div className="sm:mx-5">
            <Image 
            src='/images/intro.svg'
            alt='Welcome to Past Auction'
            width='270'
            height='270'
            className='-mb-7'
            />
        </div>
      </div>
    </div>
  );
}
