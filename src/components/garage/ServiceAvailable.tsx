import Image from "next/image";
import React from "react";
import Link from 'next/link'
export default function ServiceAvailable() {
  return (
    <div className="mx-5">
      <div className='pt-5'></div>
      <div className='flex flex-col gap-6'>
        <h1 className='font-semibold text-xl'>Sevices available</h1>
        <p className='text-gray-600 text-sm '>
          Click on the available services to obtain more detailed information
          about the vehicles
        </p>
      </div>
      <div className='pt-8'></div>
      <div className='xl:grid-cols-7  grid-cols-3 place-content-center flex flex-wrap md:grid-cols-4  sm:grid gap-4 px-6  items-center justify-center  py-5 bg-white rounded-lg'>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/secondaryintro'>

          
          <Image
            src='/images/garageview.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Garage view
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/socialrumor'>

          
          <Image
            src='/images/socialrumors.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Social Rumors
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/auctionalert'>

          
          <Image
            src='/images/auctionalert.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Auction Alert
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/singlechart'>

          
          <Image
            src='/images/singlechart.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Single Charts
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/minidashboard'>

          
          <Image
            src='/images/minidashboard.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Mini Dashboard
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/dashboard'>

          
          <Image
            src='/images/dashboard.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Dashboard
          </p>
          </Link>
          <Link className='min-w-[138px] max-h-[80px] sm:min-w-0 scale-hover cursor-pointer border-black border-2 flex flex-col items-center justify-center gap-3 px-3 xl:px-0 bg-gray-200  rounded-md py-2' href='/garage/singledetails'>

          
          <Image
            src='/images/singledatas.svg'
            height='30'
            width='30'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-sm '>
            Single Details
          </p>
          </Link>
      </div>
    </div>
  );
}
