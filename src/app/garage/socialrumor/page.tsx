"use client";

import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";

import Link from "next/link";
import Image from "next/image";
import SocialRumorTable from "@/components/garage/SocialRumorTable";
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
      <div className="xl:flex xl:justify-center">
      <div className='lg:ml-[16rem] max-w-7xl grow'>
        <div className='mx-10 mt-10'>
          <div className='bg-white rounded-full shadow-lg p-4 w-[60px] h-[60px] max-w-[60px] max-h-[60px] hover:scale-[.9] transition-all duration-500'>
            <Link
              href='/garage/garageservices'
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

        <div className='pt-10 mx-10 '>
          <SocialRumorTable />
        </div>
      </div>
      </div>
    </div>
  );
}
