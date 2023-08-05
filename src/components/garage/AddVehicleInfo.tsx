import React from "react";
import { Button } from "../ui/button";

export default function AddVehicleInfo() {
  return (
    <div className='justify-center flex mx-6'>
      <div className='flex flex-col gap-16'>
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center'>
            <h3 className='font-semibold text-xl'>Vehicle photos</h3>
            <Button className='text-blue-600' variant='transparent'>
              Edit
            </Button>
          </div>
          <div className='grid grid-flow-row grid-cols-6 grid-rows-2 gap-3'>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder1.svg")` }} className=' background-img scale-hover   col-span-2 row-span-2  rounded-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder2.svg")` }} className=' background-img scale-hover  rounded-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder3.svg")` }} className=' background-img scale-hover  rounded-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder4.svg")` }} className=' background-img scale-hover  rounded-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder5.svg")` }} className=' background-img scale-hover  rounded-lg px-20 py-20'></div>
          </div>
        </div>
      </div>
    </div>
  );
}
