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
        <div className="sm:ml-[16rem] sm:mr-7">
          <DashboardIntro/>
        </div>

        <div className="sm:ml-[16rem] mr-4 flex flex-col md:flex-row md:justify-around justify-center iteme-center space-x-5 xl:space-x-5">
          <UpgradePlan/>
          <WalletInterface/>
        </div>

        <div className="sm:ml-[16rem] mr-4">
          <DashboardFooter/>

        </div>
        </div>
    </div>
  )
}
