import React from 'react'
import { alertUpgradePlan } from '@/app/atoms/atoms'
import {useAtom} from 'jotai'
import Image from 'next/image'
import { Button } from '../ui/button'
import Link from 'next/link'

export default function AlertUpgradevehicle() {
    const [modal, setModal] = useAtom(alertUpgradePlan)
    console.log(modal)
  return (
    <div>
        <div
      id='staticModal'
      data-modal-backdrop='static'
      aria-hidden='true'
      className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-sm bg-white rounded-lg shadow p-10'>
         

          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image
                src='/images/alertupgradeplan.svg'
                alt='upgrade plane'
                width='160'
                height='160'
              />
            </div>

            <div className='flex flex-col gap-3 pt-4 items-center'>
              <h2 className='font-semibold text-lg text-black'>
                Want to add another garage?
              </h2>
              <p className='text-sm text-gray-600 text-center tracking-wide'>
                Please upgrade your plan to create more garages.
              </p>
            </div>

            <div className='pt-8 flex gap-3'>
              {" "}
              <Button
                onClick={() => {
                  setModal(false);
                }}
                variant='blackWide'
                className='px-9 bg-gray-200 hover:bg-gray-300'>
                <span className='text-sm text-black'>Cancel</span>{" "}
              </Button>
              <Link href='/'>
                <Button variant='blackWide' className=''>
                  <span className='text-sm'>Upgrade plan</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
    </div>
  )
}
