"use client";

import HiddenSidenav from "@/components/HiddenSidenav";
import React, { useState } from "react";
import { useAtom } from "jotai";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import { HiddenSideNavPage} from "@/app/atoms/atoms";
import BrandProduction from "@/components/datas/BrandProduction";
import ModelVehicles from "@/components/datas/ModelVehicles";
export default function page() {
  const [, setPage] = useAtom(HiddenSideNavPage);
  const [mobileSidebar, setMobileSideBar] = useState(false);

  setPage("datas");
  return (
    <main className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
      <div className='lg:ml-[5rem]'>
        <DashboardNavbar
          page='Model Vehicle'
          position={true}
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSideBar}
        />
      </div>

      <HiddenSidenav />

      <div className="2xl:grid 2xl:place-content-center  ">
      <div className=" lg:ml-[7rem]  pt-2 mt-12 px-5 ">
        <ModelVehicles/>
      </div>
      </div>


    
    </main>
  );
}

