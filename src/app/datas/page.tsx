"use client";

import HiddenSidenav from "@/components/HiddenSidenav";
import React, { useState } from "react";
import { HiddenSideNavPage, maisonAuctionEventsArea } from "../atoms/atoms";
import { useAtom } from "jotai";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import MaisonAuctionEvents from "@/components/datas/MaisonAuctionEvents";
import Maison from "@/components/datas/Maison";
import AuctionEvents from "@/components/datas/AuctionEvents";
export default function page() {
  const [, setPage] = useAtom(HiddenSideNavPage);
  const [mobileSidebar, setMobileSideBar] = useState(false);
  const [currentPage, setCurrentPage] = useState('Maison & Auction Events')
  const [area, setArea ]= useAtom(maisonAuctionEventsArea)
  setPage("datas");
  // set's button bg color in hidden nav
  return (
    <main className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
      <div className='lg:ml-[5rem]'>
        <DashboardNavbar
          page={currentPage}
          position={true}
          mobileSidebar={mobileSidebar}
          setMobileSidebar={setMobileSideBar}
        />
      </div>

      <HiddenSidenav />


      <div className="2xl:grid 2xl:place-content-center ">
      <div className="flex gap-10  w-full lg:ml-[8rem]  pt-2 mt-12 px-5">
        <h4 onClick={() => {setArea('Maison & Auction Events'); setCurrentPage('Maison & Auction Events')}} className={`${area === 'Maison & Auction Events' ? 'text-[#0D6EFD]' : 'text-[#6C757D]'} flex flex-col gap-[2px] cursor-pointer font-semibold text-base lg:text-lg`}><span>Maison & Auction Events</span> {area === 'Maison & Auction Events' && (<span className="bg-[#0D6EFD] h-[2px] rounded-md"></span>)}</h4>
        <h4 onClick={() => {setArea('Maison'); setCurrentPage('Maison')}} className={`${area === 'Maison' ? 'text-[#0D6EFD]' : 'text-[#6C757D]'} flex flex-col gap-[2px] cursor-pointer font-semibold text-base lg:text-lg`}><span>Maison</span> {area === 'Maison' && (<span className="bg-[#0D6EFD] h-[2px] rounded-md"></span>)}</h4>
        <h4 onClick={() => {setArea('Auction Events'); setCurrentPage('Auction Events')}} className={`${area === 'Auction Events' ? 'text-[#0D6EFD]' : 'text-[#6C757D]'} flex flex-col gap-[2px] cursor-pointer font-semibold text-base lg:text-lg`}><span>Auction Events</span> {area === 'Auction Events' && (<span className="bg-[#0D6EFD] h-[2px] rounded-md"></span>)}</h4>
       
      </div>

      <div className="pt-12 p-5 lg:ml-[8rem] ">
        {area === 'Maison & Auction Events' && (<MaisonAuctionEvents/>)}
        {area === 'Maison' && (<Maison/>)}
        {area === 'Auction Events' && (<AuctionEvents/>)}
      </div>
      </div>
    </main>
  );
}

