import Image from 'next/image'
import React from 'react'
import { Button } from '../ui/button'

export default function PasswordChangedModal() {
  return (
    
<div id="staticModal" data-modal-backdrop="static"  aria-hidden="true" className="fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full">
    <div className="relative w-full  h-full flex justify-center items-center">
        <div className="relative max-w-xl bg-white rounded-lg shadow p-10">
          <div className="flex justify-end">
            <Image 
            src='/images/x.svg'
            alt='password saved'
            width='15'
            height='15' 
            className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className="flex flex-col items-center justify-center">
          <div>
          <Image 
            src='/images/savedcheckedmark.svg'
            alt='password saved'
            width='70'
            height='70' 
            />
          </div>

          <div className="flex flex-col gap-3 pt-4 items-center">
          <h2 className='font-semibold text-xl'>
            Saved changes
          </h2>
          <p className='text-sm'>
            Your password has been successfully changed
          </p>
          </div>

          <div className="pt-8">
            <Button variant='blackWide' className='px-32'>Accept</Button>
          </div>
          </div>
            
           
        </div>
    </div>
</div>

  )
}
