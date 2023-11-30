import React from "react";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";


interface GarageInfoCard{
  
    garageInfo?: [
      {
        name: string,
        description: string,
        country: string,
        photo: string,
        vehicle_capacity: number,
        id: number
      }
    ],
    
}
export default function GarageInfoCard({garageInfo}: GarageInfoCard) {

  console.log(garageInfo)
  return (
    <div className='mx-5'>
      <div className=' bg-white rounded-md '>

       

        

        

        <div className="flex sm:flex-row flex-col sm:justify-between justify-center items-center mx-10">
        <div className='flex gap-2 pb-3  items-center pt-16'>
           <div className='overflow-hidden h-[50px] w-[50px] flex relative'>
           <Image
              src={garageInfo?.[0].photo ? garageInfo?.[0].photo : `https://placehold.co/600x400?text=${garageInfo?.[0].name || 'GarageImage'}`}
              fill
              objectFit="cover"
              alt='garage image'
              className='rounded-full'
            />
           </div>
            <h2 className='font-semibold sm:text-lg  lg:text-2xl'>{garageInfo?.[0].name}</h2>
          </div>

        <Link href={`/garage/editgarage?id=${garageInfo?.[0].id}`}>
          {" "}
          <Button
            className='px-20 sm:mt-6 mb-10 sm:mb-0 mx-10'
            variant='blackWide'>
            Edit
          </Button>
        </Link>
        </div>

        <div className='flex flex-col mx-10'>
            <div className='flex gap-1 pb-6'>
              <Image
                src='/images/italy.svg'
                alt='image'
                width='15'
                height='15'
              />
              <h2 className='text-sm'>{garageInfo?.[0].country}</h2>
            </div>

            <div className='flex gap-2 pb-5'>
              <h4 className='text-center text-sm text-gray-500 font-medium'>
                Garage capacity:
              </h4>
              <h4 className='text-center font-bold text-sm text-black'>{garageInfo?.[0].vehicle_capacity}</h4>
            </div>

            <div className='flex flex-col gap-2 pt-2 sm:pt-0 sm:flex-row sm:gap-2  pb-14'>
              <h4 className='sm:text-center text-sm text-gray-500 font-medium'>
                Additional description:
              </h4>
              <h4 className='sm:text-center font-bold text-sm text-black'>
                {garageInfo?.[0].description}
              </h4>
            </div>
          </div>




      </div>
    </div>
  );
}
