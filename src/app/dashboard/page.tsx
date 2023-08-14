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
import { selectionAreaModal } from "../atoms/atoms";
import CompleteProfileModal from "@/components/dashboard/CompleteProfileModal";
import { inter } from "../fonts";
import DashboardSelectionArea from "@/components/dashboard/DashboardSelectionArea";

export default function page() {
  const [completeprofileModal, setCompleteProfileModal] = useAtom(completeProfileModal);
  const [selectionAreamodal, setselectionAreamodal] = useAtom(selectionAreaModal);
  const [mobileSidebar, setMobileSideBar] = useState(false);
  return (
    <div className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar
      page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <DashbordSidebar
      page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />

      <div className="xl:flex xl:justify-center ">
      <div className='max-w-7xl xl:ml-[5rem] xl:grow'>
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
      </div>
      
      {completeprofileModal && (
        <div className={inter.className}>
          <CompleteProfileModal />
        </div>
      )}

 {
       selectionAreamodal && (
        <div className={inter.className}>
          <DashboardSelectionArea />
        </div>) 
      } 

     
    </div>
  );
}
