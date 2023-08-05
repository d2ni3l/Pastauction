"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import Link from "next/link";
import Image from "next/image";
import GarageServices from "@/components/garage/GarageServices";
export default function page() {
  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
    <div className='bg-[#eef0f1] overflow-x-hidden w-screen '>
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
        <Link href='/dashboard/garage/addvehicle'>
          <div className="mx-10 mt-10">
          <div className='bg-white rounded-full p-4 max-w-[60px] max-h-[60px] hover:scale-[.9] transition-all duration-500'>
            <Image
              src='/images/blackbgarrowleft.svg'
              alt='go back'
              width='25'
              height='25'
            />
          </div>
          </div>
        </Link>

        <div className='flex flex-col gap-4 justify-center items-center '>
          <h1 className='font-semibold sm:text-2xl text-lg'>My garage</h1>
          <p className='text-gray-500 sm:text-sm text-xs'>
            Use the search filter to filter your vehicles.
           
          </p>
        </div>

        <div className="pt-10">
            <GarageServices/>
        </div>
       
      </div>
    </div>
  );
}
