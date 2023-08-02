import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
import { inter } from '@/app/fonts'
export default function UpgradePlan() {
  return (
    <div className={inter.className}>
      <div className='flex bg-white shadow-lg p-5 pb-10 rounded-lg mx-2 mt-3 max-w-5xl   justify-between items-center'>
     <div className="flex flex-col w-full">
       <div className="flex justify-between px-2 w-full">
        <div className="flex  gap-2 font-semibold  items-center  pb-2 justify-between w-full">
          <h3 className='text-xl md:text-2xl '>Current plan</h3>
          
          <Button variant='blackWide' > <span className='text-xs xl:text-base '>Upgrade my plan </span></Button>
        
          
        </div>
        
      </div>

      <div className='flex gap-3 flex-col lg:pr-24 '>
      <p className='font-semibold text-base pb-6'>Plan Free</p>

      <PlanBenefits text='Includes free services limited to 3 vehicles'/>
      <PlanBenefits text='Access to Social Rumors and Auction Alert'/>
      <PlanBenefits text='Access to view information on up to 10 vehicles'/>
      <PlanBenefits text='Access to 3 Single Charts and 1 Dashboard '/>
      <PlanBenefits text='Access to the roadmap with option to save 100 routes'/>
      </div>
     </div>

    </div>
    </div>
  )
}

interface PLaneBenefitProps{
  text: string
}
function PlanBenefits ({text} : PLaneBenefitProps){
  return(
    <div className='flex gap-3 items-center px-2 '>
      <Image
      src='/images/checkmark.svg'
      alt='plane benefit'
      width='20'
      height='20'
      />

      <span className=' text-sm md:text-base md:whitespace-nowrap text-gray-700'>{text}</span>

    </div>
  )
}


//mt-5 bg-white flex flex-col justify-center p-3  lg:max-w-5xl w-full gap-2  rounded-lg sm:mx-auto px-5 