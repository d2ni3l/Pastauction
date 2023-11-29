import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface DashboardGarageItemsProps {
  items?: object | undefined;
}
export default function DashboardGarageNoItems({
  items,
}: DashboardGarageItemsProps) {
  return (
    <div className='bg-white rounded-md shadow-md'>
      <div className='flex justify-center '>
        <div className='flex flex-col p-14 py-20 gap-5'>
          <h4 className='text-center text-sm text-gray-600 font-medium'>
            You don't have any Garage yet.
          </h4>
         
          <Button variant='blackWide'>
          <Link href='/garage/creategarage' className="w-full">
          Add garage
          </Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
}
