import React from "react";
import Navbar from "./navbar/Navbar";
import Image from "next/image";
import { Button } from "@/components/ui/button";
import bg from "../../public/images/Herobackground.png";
export default function Header() {
  return (
    <>
      <Navbar transparent />

      <div className='w-screen h-screen background-home bg-black/30 flex items-center'>
        <div className='flex justify-center flex-col gap-10 mx-6 md:mx-16 lg:mx-24 '>
          <h1 className='text-white text-3xl md:text-6xl font-bold tracking-wide flex flex-col gap-4'>
            <span>Where classic car</span>
            <span>enthusiasts find </span>
            <span>their dream rides</span>
          </h1>
          <p className='text-white text-base font-medium  flex flex-col items-start'>
            <span>
              Explore the history and value of classic cars with PastAuction,
            </span>
            <span>build your Charts and find the best match</span>
          </p>
        
          <div className='flex relative items-center'>
            <input
              type='text'
              className='rounded-full px-8 w-full py-4 bg-white placeholder:text-black'
              placeholder='Your best email'
            />
            <div className='absolute right-10'>
              <Button variant='rounded'><span className="px-6">Sign In</span></Button>
            </div>
          </div>

          <div className="flex justify-between">
          <p className='text-white text-base font-medium flex flex-col'>
            <span>Take a look at the features and find out what</span>
          <span>PastAuction can do for you on Youtube</span>
</p>
           <Image
           src='/images/youtube.svg'
           alt='youtube link'
           width='40'
           height='40'
           />
          </div>
        </div>
      </div>
    </>
  );
}
