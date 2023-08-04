import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";
interface DashboardGarageItemsProps {
  items?: object | undefined;
}
export default function GarageNoVehicle({
  items,
}: DashboardGarageItemsProps) {
  return (
    <div className=' rounded-md w-full mx-5'>
      <div className='flex justify-center  bg-white rounded-md'>
        <div className='flex flex-col p-20 gap-4'>
          <h4 className='text-center text-sm text-gray-600'>
            You don't have any Vehicle yet.
          </h4>
         
          <Button variant='blackWide'>
          <Link href='/dashboard/garage/addvehicle' className="w-full">
          Add Vehicle
          </Link>
          </Button>
          
        </div>
      </div>
    </div>
  );
}
