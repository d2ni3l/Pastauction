'use client'

import { DashbordSidebar } from '@/components/dashboard/DashbordSidebar'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import React, { useState } from 'react'
import DashboardIntro from '@/components/dashboard/DashboardIntro'
import UpgradePlan from '@/components/dashboard/UpgradePlan'
import WalletInterface from '@/components/dashboard/WalletInterface'
import DashboardFooter from '@/components/dashboard/DashboardFooter'

export default function page() {
  const [mobileSidebar, setMobileSideBar] = useState(false)
  return (
    <div className='bg-[#d8dbde] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar page='home' mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSideBar}/>
        <DashbordSidebar  mobileSidebar={mobileSidebar} setMobileSidebar={setMobileSideBar}/>

        <div className="max-w-7xl">
        <div className="lg:ml-[16rem] lg:mr-7">
          <DashboardIntro/>
        </div>

        <div className="lg:ml-[16rem] mr-4 flex flex-col xl:flex-row  lg:justify-around  justify-center item-center space-x-5 xl:space-x-5">
          <UpgradePlan/>
          <div className='md:mx-auto w-full'>
          <WalletInterface/>
          </div>
        </div>

        <div className="lg:ml-[16rem] mr-4 pb-12">
          <DashboardFooter/>

        </div>
        </div>
    </div>
  )
}
