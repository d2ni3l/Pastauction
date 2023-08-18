"use client";

import HiddenSidenav from "@/components/HiddenSidenav";
import React, { useState } from "react";
import { HiddenSideNavPage } from "../atoms/atoms";
import { useAtom } from "jotai";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
export default function page() {
  const [, setPage] = useAtom(HiddenSideNavPage);
  const [mobileSidebar, setMobileSideBar] = useState(false);
  setPage("datas");
  return (
    <main className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
      <div className='lg:ml-[5rem]'>
        <DashboardNavbar
          page='Maison & Auction Events'
          position={true}
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSideBar}
        />
      </div>

      <HiddenSidenav />


      <div className="flex gap-10 bg-red-400 w-full lg:ml-[6rem] pt-2 mt-12">
        <h4 className="text-gray-600 font-semibold text-base">hello</h4>
        <h4 className="text-gray-600 font-semibold text-base">hello</h4>
        <h4 className="text-gray-600 font-semibold text-base">hello</h4>

      </div>
    </main>
  );
}
