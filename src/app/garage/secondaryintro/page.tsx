"use client";

import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import React, { useState } from "react";
import UpgradePlan from "@/components/dashboard/UpgradePlan";
import WalletInterface from "@/components/dashboard/WalletInterface";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import { Order_AddGarage } from "@/components/garage/Order_AddGarage";

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

      <div className="xl:flex justify-center">
      <div className='max-w-7xl xl:-ml-[3rem] xl:grow'>
        <div className='lg:ml-[16rem] text-center text-3xl font-semibold pt-10 pb-6'>
          <h1>My Garage</h1>
        </div>

        <div className='lg:ml-[16rem]   flex flex-col xl:flex-row  lg:justify-around  justify-center items-center mx-3'>
          <div className=' w-full'>
            <UpgradePlan />
          </div>
          <div className='w-full'>
            <WalletInterface />
          </div>
        </div>

        <div className='lg:ml-[16rem] mx-5 pt-12'>
          <Order_AddGarage />
        </div>
        <div className='lg:ml-[16rem]  pb-12'>
          <DashboardFooter />
        </div>
      </div>
      </div>
    </div>
  );
}
