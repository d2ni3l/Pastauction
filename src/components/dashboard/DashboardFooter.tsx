import React from 'react'
import DashboardGarageItems from './DashboardGarageItems'
export default function DashboardFooter() {
  return (
    <div className='bg-white mt-7 mb-5 rounded-lg p-5'>

        <div className="flex gap-12">
        <div className="flex flex-col gap-1 justify-center items-center group">
            <span className='group-hover:text-blue-500 cursor-pointer'>Garage (0)</span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center group">
            <span className='group-hover:text-blue-500 cursor-pointer'>Locate (0)</span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center group">
            <span className='group-hover:text-blue-500 cursor-pointer'>Charts (0)</span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        </div>

        <DashboardGarageItems />
       

    </div>
  )
}
