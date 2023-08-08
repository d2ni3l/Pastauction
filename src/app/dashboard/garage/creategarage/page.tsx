"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import GarageArea from "@/components/garage/GarageArea";
import Image from "next/image";
import Link from "next/link";
import GarageInfoCard from "@/components/garage/CreateGarageCard";
export default function page() {
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

      <div className='lg:ml-[16rem]'>
      <div className='mx-10 mt-10'>
          <div className='bg-white rounded-full shadow-lg p-4 w-[60px] h-[60px] max-w-[60px] max-h-[60px] hover:scale-[.9] transition-all duration-500'>
            <Link
              href='/dashboard/garage/'
              className='w-[60px] h-[60px] max-w-[60px] max-h-[60px] '>
              <Image
                src='/images/blackbgarrowleft.svg'
                alt='go back'
                width='25'
                height='25'
                className='mt-[2px] ml-[1px]'
              />
            </Link>
          </div>
        </div>
        <div className='flex flex-col gap-4 justify-center items-center pt-9'>
          <h1 className='font-semibold sm:text-2xl text-lg text-center'>
            Create garage
          </h1>
          <p className='text-gray-500 sm:text-sm text-xs text-center'>
            Organize your vehicles in a more comfortable way by creating a
            garage.
          </p>
        </div>

        <div className='justify-center flex'>
          <GarageInfoCard />
        </div>
      </div>
    </div>
  );
}
