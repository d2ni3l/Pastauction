import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function WalletInterface() {
  return (
    <div className='bg-white mx-w-lg flex flex-col mt-5 rounded-lg px-3'>
      <div className='flex-col flex items-center justify-center gap-1 p-5 '>
        <h1 className='text-lg  font-semibold'>My wallet</h1>
        <p className=' flex flex-col justify-center items-center font-medium xl:text-base text-xs text-center'>
          Add coins to your virtual wallet
          and get access to exclusive plans!
        </p>
        <div className='flex flex-col items-center'>
          <Image
            src='/images/moner-credit.svg'
            alt='credit'
            width='100'
            height='100'
          />
          <h4 className='text-gray-500 text-sm font-medium'>0 credit</h4>
        </div>
        <Button variant='blackWide'>Add coins</Button>
      </div>
    </div>
  );
}
