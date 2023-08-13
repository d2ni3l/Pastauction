import React from "react";

import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";

export default function GarageInfoCard() {
  return (
    <div className='mx-5'>
      <div className='flex sm:flex-row flex-col sm:justify-between justify-center items-center sm:items-start bg-white rounded-md'>
        <div className='flex flex-col mx-10'>

          <div className='flex gap-2 pb-3  items-center pt-16'>
            <Image
              src='/images/garagaphoto.svg'
              alt='image'
              width='50'
              height='50'
            />
            <h2 className='font-semibold sm:text-lg'>Garage GTC Full</h2>
          </div>
          
          <div className='flex flex-col '>
            <div className='flex gap-1 pb-6'>
              <Image
                src='/images/italy.svg'
                alt='image'
                width='15'
                height='15'
              />
              <h2 className='text-sm'>Italy</h2>
            </div>

            <div className='flex gap-2 pb-5'>
              <h4 className='text-center text-sm text-gray-600'>
                Garage capacity:
              </h4>
              <h4 className='text-center font-bold text-sm text-black'>10</h4>
            </div>

            <div className='flex flex-col gap-2 pt-2 sm:pt-0 sm:flex-row sm:gap-2  pb-14'>
              <h4 className='sm:text-center text-sm text-gray-600'>
                Additional description:
              </h4>
              <h4 className='sm:text-center font-bold text-sm text-black'>
                Lorem ipsum dolor sit.
              </h4>
            </div>
          </div>
        </div>

        <Link href='/garage/creategarage'>
          {" "}
          <Button
            className='px-20 sm:mt-6 mb-10 sm:mb-0 mx-10'
            variant='blackWide'>
            Edit
          </Button>
        </Link>
      </div>
    </div>
  );
}
