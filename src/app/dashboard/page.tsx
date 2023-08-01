"use client";

import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import React, { useState } from "react";
import DashboardIntro from "@/components/dashboard/DashboardIntro";
import UpgradePlan from "@/components/dashboard/UpgradePlan";
import WalletInterface from "@/components/dashboard/WalletInterface";
import DashboardFooter from "@/components/dashboard/DashboardFooter";
import { useAtom } from "jotai";
import { completeProfileModal } from "../atoms/atoms";
import CompleteProfileModal from "@/components/dashboard/CompleteProfileModal";
import { inter } from "../fonts";

export default function page() {
  const [modal, setModal] = useAtom(completeProfileModal);

  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
    <div className='bg-[#d8dbde] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar
        page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <DashbordSidebar
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />

      <div className='max-w-7xl'>
        <div className='lg:ml-[16rem] '>
          <DashboardIntro />
        </div>

        <div className='lg:ml-[16rem]   flex flex-col xl:flex-row  lg:justify-around  justify-center items-center  xl:space-x-5'>
          <div className=' w-full'>
            <UpgradePlan />
          </div>
          <div className='w-full'>
            <WalletInterface />
          </div>
        </div>

        <div className='lg:ml-[16rem]  pb-12'>
          <DashboardFooter />
        </div>
      </div>
      {modal && (
        <div className={inter.className}>
          <CompleteProfileModal />
        </div>
      )}
    </div>
  );
}
