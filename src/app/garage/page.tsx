"use client";
import React, { useState } from "react";
import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import GarageArea from "@/components/garage/GarageArea";
import { useAtom } from "jotai";
import GarageInfoCard from "@/components/garage/GarageInfoCard";
import Link from "next/link";
import Image from "next/image";
import { currentUserAtom } from "../atoms/atoms";
export default function page() {
  //im garage
  const [mobileSidebar, setMobileSideBar] = useState(false);
  const [currentUser,] = useAtom(currentUserAtom)

  console.log(currentUser)
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
      <div className="flex justify-center ">
      <div className='lg:ml-[16rem] grow max-w-7xl'>
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
          <h1 className='font-semibold sm:text-2xl text-center text-lg'>
            Welcome to the garage area
          </h1>
          <p className='text-gray-500 sm:text-sm text-center text-xs'>
            Automatically track the potential value of the car you own.
          </p>
        </div>
                  <div className="pt-10"></div>
        <GarageInfoCard/>

        <GarageArea />
      </div>
      </div>
    </div>
  );
}
