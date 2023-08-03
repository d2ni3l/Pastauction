'use client'

import React, { useState } from 'react'
import ServiceAvailable from '@/components/garage/ServiceAvailable'
import { DashbordSidebar } from '@/components/dashboard/DashbordSidebar'
import DashboardNavbar from '@/components/dashboard/DashboardNavbar';
export default function page() {
    const [mobileSidebar, setMobileSideBar] = useState(false);

  return (
    <div className='bg-[#d8dbde] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <DashbordSidebar
      page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />

      <div className="lg:ml-[16rem]">
        <ServiceAvailable/>
      </div>
      </div>
  )
}
