import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";

export default function VehicleCards() {
  const backgroundImages = [
    {
      url: "/images/vehicleplaceholder.svg",
    },
    {
      url: "/images/vehicleplaceholder2.svg",
    },
    {
      url: "/images/vehicleplaceholder3.svg",
    },
  ];

  return (
    <div>
      <div className='wrapper max-w-xs'>
        <div
          className='h-[200px] bg-purple-700 rounded-t-lg'
          style={{ backgroundImage: `url(${backgroundImages[0].url})` }}></div>

        <div className='flex gap-3 flex-col mx-7'>
          <div>
            <h3 className='font-semibold text-lg pt-4'>Mercedes Benz</h3>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='flex gap-2 text-sm text-gray-600'>
              <span>•</span> <span>657mi(TMU)</span>
              <span>•</span> <span>Manual</span>
              <span>•</span> <span>LHD</span>
            </p>
            <p className='flex gap-2 text-sm text-gray-600'>
              <span>•</span> <span>Restored-Modified</span>
            </p>
          </div>
          <div className='flex gap-2 pb-4'>
            <Image src='/images/italy.svg' alt='image' width='15' height='15' />
            <h2 className='text-sm'>Italy</h2>
          </div>

          <Button
            className='text-black border-black scale-hover border-2 '
            variant='transparent'>
            Search spare parts
          </Button>
        </div>
      </div>
    </div>
  );
}
