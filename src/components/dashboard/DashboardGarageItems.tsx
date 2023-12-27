import { inter } from "@/app/fonts";
import Image from "next/image";
import React from "react";
import {useRouter} from 'next/navigation'

export interface DashboardGarageItemsProps {
  garageInfo?: {
    items: [{name : string, description: string, vehicle_capacity: number, country: string, id: number}];
    total: number;
    page: number;
    size: number;
    pages: number;
  };
}
export default function DashboardGarageItems({garageInfo}: DashboardGarageItemsProps) {
 const router = useRouter()
  return (
    <div className={inter.className} >
      <div className='flex gap-6  items-center justify-center flex-col sm:flex-row'>
        <div  onClick={() =>  {router.push('/garage/garageservices')}} className='cardbody cursor-pointer min-[400px]:w-[400px] shadow-xl sm:max-w-sm scale-hover'>
          <Image
            src='/images/garage-img1.svg'
            alt='garage car'
            width='400'
            height='208'
            className='rounded-t-lg'
          />
          <div className='flex flex-col bg-white px-7 rounded-b-lg'>
            <h1 className='font-semibold text-xl pt-5'></h1>
            <p className=' text-gray-600 pt-3'>
              The best types of antique cars
            </p>
            <p className='flex gap-2 text-sm font-medium text-gray-600 py-3 pb-7'>
              <span>•</span> <span>Number of vehicles:</span>
              <span className='text-black font-semibold'>10</span>
            </p>
          </div>
        </div>
        <div  onClick={() =>  {router.push('/garage/garageservices')}} className='cardbody cursor-pointer min-[400px]:w-[400px] shadow-xl sm:max-w-sm scale-hover'>
          <Image
            src='/images/garage-img2.svg'
            alt='garage car'
            width='400'
            height='208'
            className='rounded-t-lg'
          />
          <div className='flex flex-col bg-white px-7 rounded-b-lg'>
            <h1 className='font-semibold text-xl pt-5'>Garage 2 full stack</h1>
            <p className=' text-gray-600 pt-3'>
              The best types of antique cars
            </p>
            <p className='flex gap-2 text-sm font-medium text-gray-600 py-3 pb-7'>
              <span>•</span> <span>Number of vehicles:</span>
              <span className='text-black font-semibold'>10</span>
            </p>
          </div>
        </div>
        <div  onClick={() =>  {router.push('/garage/garageservices')}} className='cardbody cursor-pointer min-[400px]:w-[400px] shadow-xl sm:max-w-sm scale-hover'>
          <Image
            src='/images/garage-img-3.svg'
            alt='garage car'
            width='400'
            height='208'
            className='rounded-t-lg'
          />

          <div className='flex flex-col bg-white px-7 rounded-b-lg'>
            <h1 className='font-semibold text-xl pt-5'>Garage 3 full stack</h1>
            <p className=' text-gray-600 pt-3'>
              The best types of antique cars
            </p>
            <p className='flex gap-2 text-sm font-medium text-gray-600 py-3 pb-7'>
              <span>•</span> <span>Number of vehicles:</span>
              <span className='text-black font-semibold'>10</span>
            </p>
          </div>
        </div>
      </div>
    </div>
  );
}
