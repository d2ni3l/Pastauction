"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import AddVehicleDetails from "@/components/garage/AddVehicleDetails";
import Link from "next/link";
import Image from "next/image";
export default function page() {
  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
    <div className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
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
      <div className="xl:flex xl:justify-center">
      <div className='lg:ml-[16rem] max-w-7xl grow'>
      <div className='mx-10 mt-10'>
          <div className='bg-white rounded-full shadow-lg p-4 w-[60px] h-[60px] max-w-[60px] max-h-[60px] hover:scale-[.9] transition-all duration-500'>
            <Link
              href='/garage/addvehicle'
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
          <h1 className='font-semibold sm:text-2xl text-lg'>
            Details
          </h1>
          <p className='text-gray-500 sm:text-sm text-xs text-center'>
          These additional specs will help us provide the most accurate components.
          </p>
        </div>
                  <div className="pt-10"></div>
        <AddVehicleDetails/>
      </div>
      </div>

    </div>
  );
}
