import React from 'react'
import DashboardGarageItems from './DashboardGarageItems'
export default function DashboardFooter() {
  return (
    <div className='bg-white mt-7  rounded-lg p-5 mx-2'>

        <div className="flex gap-12">
        <div className="flex flex-col gap-1 justify-center items-center group">
            <span className='group-hover:text-blue-500 text-sm sm:text-lg cursor-pointer flex gap-2'>Garage <span>
              (0)</span></span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        <div className="flex flex-col gap-1 justify-center  items-center group">
            <span className='group-hover:text-blue-500 text-sm sm:text-lg cursor-pointer flex gap-2'>Locate <span>
              (0)</span></span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        <div className="flex flex-col gap-1 justify-center items-center group">
            <span className='group-hover:text-blue-500 text-sm sm:text-lg cursor-pointer flex gap-2'>Charts <span>
              (0)</span></span>
            <span className='w-full h-1 group-hover:bg-blue-500 rounded-lg '></span>
        </div>
        </div>

        <DashboardGarageItems />
       

    </div>
  )
}
