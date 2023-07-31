import React from "react";
import { Button } from "../ui/button";
import Image from "next/image";
export default function WalletInterface() {
  return (
    <div className='bg-white max-w-lg flex flex-col mt-5 rounded-lg  mr-5 sm:mx-auto sm:ml-12 md:ml-[6rem] walletinterface xl:ml-0'>
      <div className='flex-col flex items-center justify-center gap-1 p-5 '>
        <h1 className=' text-lg md:text-2xl  font-semibold pt-2'>My wallet</h1>
        <p className=' flex flex-col justify-center items-center  text-sm font-semibold pt-3 text-center'>
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
        <Button variant='blackWide' className='px-32 mt-7'>Add coins</Button>
      </div>
    </div>
  );
}
