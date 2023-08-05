"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import GarageArea from "@/components/garage/GarageArea";
import GarageCard from "@/components/garage/GarageCard";
import Link from "next/link";
import Image from "next/image";
export default function page() {
  //im garage
  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
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
      <Link href='/dashboard/'>
        <div className='flex justify-start mx-10 mt-10'>
          <div className="bg-white rounded-full p-4 hover:scale-[.9] transition-all duration-500">
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
            Welcome to the garage area
          </h1>
          <p className='text-gray-500 sm:text-sm text-xs'>
            Automatically track the potential value of the car you own.
          </p>
        </div>
                  <div className="pt-10"></div>
        <GarageCard/>

        <GarageArea />
      </div>
    </div>
  );
}
