import Image from "next/image";
import React from "react";

export default function ModelVehicles() {
  return (
    <div>
      <div className='flex gap-10'>
        <div className='flex flex-col xl:flex-row gap-2'>
          <Image
            src='/images/flagenglandplaceholder.svg'
            alt='flag'
            width='100'
            height='50'
          />
          <Image
            src='/images/jaguarlogo.svg'
            alt='brand logo'
            width='100'
            height='50'
          />
        </div>

        <div className='flex flex-col gap-3 xl:flex-row  items-end xl:gap-[100px] w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>family</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                E TYPE
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>model</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                E TYPE SERIES III
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>from</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                1969
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>to</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                1970
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>yrs product</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                2
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>nr products</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-1'>
                18,809
              </button>
            </div>
          </div>
        </div>

        
      </div>

      <div className="bg-white shadow-md">
            
        </div>
    </div>
  );
}

const cardModel = () => {
  return <div></div>;
};
