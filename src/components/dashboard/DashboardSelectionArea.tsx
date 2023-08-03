import React from 'react'
import { selectionAreaModal } from '@/app/atoms/atoms'
import { useAtom } from 'jotai'
import Image from 'next/image'

export default function DashboardSelectionArea() {
    const [modal, setModal] = useAtom(selectionAreaModal)
    console.log(modal)
  return (
<div
      id='staticModal'
      data-modal-backdrop='static'
      aria-hidden='true'
      className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-2xl md:pb-16 bg-white rounded-lg shadow p-10'>
          <div className='flex justify-end'>
            <Image
              src='/images/x.svg'
              onClick={() => {setModal(false)}} 
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='flex flex-col items-center justify-center gap-2 pt-6'>
            <h2 className='font-bold text-lg text-center'>Which area do you want to manage?</h2>
            <p className="text-gray-600 text-base font-light text-center">Select one of the options to visualize the information</p>
            


          </div>

          <div className="flex flex-col sm:flex-row justify-center gap-6 pt-5">

            <div onClick={() => {setModal(false)}} className="flex flex-col items-center hover:scale-[.95] duration-300 transition-all cursor-pointer  rounded-lg border-[1.5px] shadow-sm border-gray-500 py-4 px-11">
                <Image
                src='/images/userarea.svg'
                width='50'
                height='50'
                alt='user area'
                />

                <h4 className='text-center text-black pt-2 font-medium'>User area</h4>
                <p className="text-center  text-gray-600 pt-1 text-xs sm:text-sm">Select if you want to manage your Garage, Charts area, Find parts and much more</p>
            </div>


            <div onClick={() => {setModal(false)}}  className="flex flex-col items-center hover:scale-[.95] duration-300 transition-all cursor-pointer  rounded-lg border-[1.5px] shadow-sm border-gray-500 py-4 px-11">
                <Image
                src='/images/entityarea.svg'
                width='50'
                height='50'
                alt='entity area'
                />

                <h4 className='text-center text-black pt-2 font-medium'>Entity area</h4>
                <p className="text-center text-xs sm:text-sm text-gray-600 pt-1">Select if you want to manage Events, Services, Opening time, user and much more</p>
            </div>
          </div>

        </div>
      </div>
    </div>
  )
}
