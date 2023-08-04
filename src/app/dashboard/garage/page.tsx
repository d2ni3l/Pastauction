"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import GarageArea from "@/components/garage/GarageArea";
import GarageCard from "@/components/garage/GarageCard";
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
