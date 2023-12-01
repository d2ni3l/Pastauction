import React from "react";
import DashboardGarageNoItems from "./DashboardGarageNoItems";
import DashboardGarageItems from "./DashboardGarageItems";
import { Button } from "../ui/button";
import Link from "next/link";

export interface DashboardFooterProps {
  garageItems?: {
    items: never[];
    total: number;
    page: number;
    size: number;
    pages: number;
  };
}


export default function DashboardFooter({ garageItems }: DashboardFooterProps) {
 
  return (
    <div className='bg-transparent mt-7  rounded-lg mx-3 '>
      <div className='flex-col flex justify-between sm:flex-row'>
        <div className='flex gap-12'>
          <div className='flex flex-col gap-1 justify-center items-center group'>
            <span className='text-blue-600 text-sm font-medium sm:text-lg cursor-pointer flex gap-2'>
              Garage <span>(0)</span>
            </span>
            <span className='w-full h-1 bg-blue-600 rounded-lg '></span>
          </div>
          <div className='flex flex-col gap-1 justify-center  items-center group'>
            <span className='group-hover:text-blue-600 text-sm font-medium sm:text-lg cursor-pointer flex gap-2'>
              Locate <span>(0)</span>
            </span>
            <span className='w-full h-1 group-hover:bg-blue-600 rounded-lg '></span>
          </div>
          <div className='flex flex-col gap-1 justify-center items-center group'>
            <span className='group-hover:text-blue-600 text-sm font-medium sm:text-lg cursor-pointer flex gap-2'>
              Charts <span>(0)</span>
            </span>
            <span className='w-full h-1 group-hover:bg-blue-600 rounded-lg '></span>
          </div>
        </div>

      {!garageItems?.items  ? (
          <Link href='/garage'>
            <Button
              className='px-12 max-w-[210px] mt-6 sm:mt-0'
              variant='blackWide'>
              View more
            </Button>
          </Link>
        ) : null}
      </div>
      <div className='pt-5'></div>
      {garageItems?.items?.length === 0 ? (
        <DashboardGarageNoItems />
      ) : (
        <DashboardGarageItems garageInfo={garageItems} />
      )}
    </div>
  );
}
