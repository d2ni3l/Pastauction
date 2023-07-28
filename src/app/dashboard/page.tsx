import { DashbordSidebar } from '@/components/dashboard/DashbordSidebar'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar'
import React from 'react'
import DashboardIntro from '@/components/dashboard/DashboardIntro'
import UpgradePlan from '@/components/dashboard/UpgradePlan'
import WalletInterface from '@/components/dashboard/WalletInterface'

export default function page() {
  return (
    <div className='bg-[#d8dbde] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar page='home'/>
        <DashbordSidebar/>

        <div className="max-w-7xl">
        <div className="ml-[16rem] mr-7">
          <DashboardIntro/>
        </div>

        <div className="ml-[16rem] mr-4 flex justify-around space-x-5 xl:space-x-5">
          <UpgradePlan/>
          <WalletInterface/>
        </div>
        </div>
    </div>
  )
}
