"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import Link from "next/link";
import Image from "next/image";
import AddVehiclePhoto from "@/components/garage/AddVehiclePhoto";
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
        <Link href='/dashboard/garage'>
          <div className='flex justify-start mx-10 mt-10'>
            <Image
              src='/images/blackbgarrowleft.svg'
              alt='go back'
              width='25'
              height='25'
            />
          </div>
        </Link>

        <div className='pt-10'></div>
        <AddVehiclePhoto />
      </div>
    </div>
  );
}
