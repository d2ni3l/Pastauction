import Image from "next/image";
import React from "react";

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
      <div className='flex flex-wrap gap-4  items-center justify-center px-3 py-5 bg-white rounded-lg'>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/garageview.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Garage view
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/socialrumors.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Social Rumors
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/auctionalert.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Auction Alert
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/singlechart.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Single Charts
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/minidashboard.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Mini Dashboard
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/dashboard.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Dashboard
          </p>
        </div>
        <div className='border-black border-2 flex flex-col items-center justify-center gap-3 bg-gray-200 px-8 rounded-md py-3'>
          <Image
            src='/images/singledatas.svg'
            height='25'
            width='25'
            alt='garage view'
          />
          <p className='text-gray-900 tracking-wide text-xs font-semibold'>
            Single Details
          </p>
        </div>
      </div>
    </div>
  );
}
