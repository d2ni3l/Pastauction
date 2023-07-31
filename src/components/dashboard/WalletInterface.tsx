import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function WalletInterface() {
  return (
    <div className='flex bg-white shadow-lg p-5 rounded-lg mx-2 mt-3 max-w-5xl   justify-center items-center'>
      <div className='flex-col flex items-center justify-center gap-1 p-4 '>
        <h1 className=' text-lg md:text-2xl  font-semibold '>My wallet</h1>
        <p className=' flex flex-col justify-center items-center  text-sm font-semibold pt-1 text-center'>
          Add coins to your virtual wallet and get access to exclusive plans!
        </p>
        <div className='flex flex-col items-center pt-2'>
          <Image
            src='/images/moner-credit.svg'
            alt='credit'
            width='80'
            height='80'
          />
          <h4 className='text-gray-500 text-sm font-medium'>0 credit</h4>
        </div>
        <Button variant='blackWide' className='px-32 mt-7 whitespace-nowrap'>Add coins</Button>
      </div>
    </div>
  );
}
