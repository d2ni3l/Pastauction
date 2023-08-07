"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import Link from "next/link";
import Image from "next/image";
import AddServiceBookPhoto from "@/components/garage/AddServiceBookPhoto";
import { montserrat } from "@/app/fonts";
import { Button } from "@/components/ui/button";
export default function page() {
  //im garage
  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
    <div className={montserrat.className}>
        <div className='bg-[#eef0f1] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar
        page='garage'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <DashbordSidebar
        page='garage'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <div className='lg:ml-[16rem] '>
        <Link href='/dashboard/garage'>
          <div className='flex justify-start mx-10 mt-10'>
          <div className="bg-white rounded-full p-4 hover:scale-[.9] max-w-[60px] max-h-[60px] transition-all duration-500">
          <Image
            src='/images/blackbgarrowleft.svg'
            alt='go back'
            width='25'
            height='25'
            
          />
          </div>
          </div>
        </Link>
        <div className='flex flex-col gap-4 justify-center items-center pt-9'>
          <h1 className='font-semibold sm:text-2xl text-lg'>
        Add photos
          </h1>
          <p className='text-gray-500 sm:text-sm text-xs'>
            Add a photo of your photo and your documents.
          </p>
        </div>

        <div className='pt-10'></div>
        <div className="flex flex-col gap-16 pb-20">
        
        <AddServiceBookPhoto/>
        
        </div>

        <div className='pt-20'></div>
          <div className='flex justify-between items-center gap-2 pb-10 mx-5'>
            <Link href='/dashboard/garage/addvehicledetails'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold bg-white hover:bg-black text-black hover:text-white border-black border'>
                Cancel
              </Button>
            </Link>

            <Link href='/dashboard/garage/addvehicleinfo'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold'>
                Continue
              </Button>
            </Link>
          </div>
      </div>
    </div>
    </div>
  );
}
