"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import AddVehicleComp from "@/components/garage/AddVehicleComp";
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
        <div className='flex flex-col gap-4 justify-center items-center pt-12'>
          <h1 className='font-semibold sm:text-3xl text-lg'>
            Add vehicles
          </h1>
          <p className='text-gray-500 sm:text-sm text-xs'>
            Fill in the folowing data to add your vehicle to the garage
          </p>
        </div>
                  <div className="pt-10"></div>
        <div className="justify-center flex ">
        <AddVehicleComp/>
        </div>

      </div>
    </div>
  );
}
