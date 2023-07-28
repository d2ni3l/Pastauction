import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
export default function UpgradePlan() {
  return (
    <div className='mt-5 bg-white flex flex-col p-3 max-w-xl gap-2  rounded-lg'>
     <div className="flex flex-col ">
       <div className="flex justify-between ">
        <div className="flex flex-col  gap-2 font-semibold pb-2">
          <h3 className='text-2xl md:text-2xl'>Current plan</h3>
          <p className=''>Plan Free</p>
        </div>
        <div className=''>
          <Button variant='blackWide' > <span className='text-sm xl:text-base'>Upgrade my plan </span></Button>
        </div>
      </div>

      <div className='flex gap-2 flex-col lg:pr-24'>

      <PlanBenefits text='Includes free services limited to 3 vehicles'/>
      <PlanBenefits text='Access to Social Rumors and Auction Alert'/>
      <PlanBenefits text='Access to view information on up to 10 vehicles'/>
      <PlanBenefits text='Access to 3 Single Charts and 1 Dashboard '/>
      <PlanBenefits text='Access to the roadmap '/>
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
    <div className='flex gap-3 items-center'>
      <Image
      src='/images/checkmark.svg'
      alt='plane benefit'
      width='20'
      height='20'
      />

      <span className='xl:text-base text-sm'>{text}</span>

    </div>
  )
}
