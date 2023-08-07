"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import Link from "next/link";
import Image from "next/image";
import AddVehicleInfo from "@/components/garage/AddVehicleInfo";
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

        

        <div className="pt-10">
            
        </div>
       
      </div>
    </div>
  );
}
