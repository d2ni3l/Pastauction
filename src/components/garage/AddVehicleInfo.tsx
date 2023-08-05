import React from "react";
import { Button } from "../ui/button";
import Link from "next/link";

export default function AddVehicleInfo() {
  return (
    <div className='justify-center flex mx-6'>
      <div className='flex flex-col gap-16 '>

        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center mx-2'>
            <h3 className='font-semibold text-xl'>Vehicle photos</h3>
            <Button className='text-blue-600' variant='transparent'>
              Edit
            </Button>
          </div>
          <div className='grid grid-flow-row lg:grid-cols-5 xl:grid-cols-6 mx-3 sm:grid-cols-3 grid-cols-2  grid-rows-2 gap-3'>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder1.svg")` }} className=' background-img scale-hover   col-span-2 row-span-2  rounded-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder2.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder3.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder4.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/addvehicleplaceholder5.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
          </div>
        </div>


        <div className="bg-white p-5 mt-5 flex flex-col mx-5 pb-6 rounded-lg gap-3 justify-center ">
        <div className='flex justify-between items-center pt-6 mx-9'>
            <div className="flex flex-col gap-3">
            <h3 className='font-semibold text-xl'>Specs</h3>
             <p className="text-gray-600 text-sm font-medium ">Details about this vehicle.</p>
            </div>
            <Button className='text-blue-600 self-start' variant='transparent'>
              Edit
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 grid-flow-row pt-5 mx-9">
            <div className='flex justify-between items-center'>
                <div className='space-y-5'>
                <p className="font-semibold text-sm">Year</p>
                <p className="font-semibold text-sm">Make</p>
                <p className="font-semibold text-sm">Family</p>
                <p className="font-semibold text-sm">Model</p>
                <p className="font-semibold text-sm">Varient</p>
                <p className="font-semibold text-sm">Series</p>
                </div>

                <div className="space-y-5">
                    <p className="text-gray-600 font-medium text-sm">2014</p>
                    <p className="text-gray-600 font-medium text-sm">Acura</p>
                    <p className="text-gray-600 font-medium text-sm">RLX</p>
                    <p className="text-gray-600 font-medium text-sm">M-RLX</p>
                    <p className="text-gray-600 font-medium text-sm">A-Spec</p>
                    <p className="text-gray-600 font-medium text-sm">2014</p>
                </div>

            </div>
            <div className='flex justify-between  items-center'>
                <div className='space-y-5'>
                <p className="font-semibold text-sm">Vehicle type</p>
                <p className="font-semibold text-sm">Body</p>
                <p className="font-semibold text-sm">Doors</p>
                <p className="font-semibold text-sm">Transimission</p>
                <p className="font-semibold text-sm">Power</p>
                <p className="font-semibold text-sm">Engine capacity</p>
                </div>

                <div className="space-y-5">
                    <p className="text-gray-600 font-medium text-sm">Automobile</p>
                    <p className="text-gray-600 font-medium text-sm">Sedan</p>
                    <p className="text-gray-600 font-medium text-sm">4</p>
                    <p className="text-gray-600 font-medium text-sm">Manual</p>
                    <p className="text-gray-600 font-medium text-sm">450 hp</p>
                    <p className="text-gray-600 font-medium text-sm">-</p>

                </div>

            </div>

            <div className='flex justify-between items-center'>
                <div className='space-y-5'>
                <p className="font-semibold text-sm">Driver's side</p>
                <p className="font-semibold text-sm">Exterior color</p>
                <p className="font-semibold text-sm">Interior color</p>
                <p className="font-semibold text-sm">Originality</p>
                <p className="font-semibold text-sm">Status</p>
                </div>

                <div className="space-y-5">
                    <p className="text-gray-600 font-medium text-sm">-</p>
                    <p className="text-gray-600 font-medium text-sm flex gap-2"><span>Black</span> <span className='w-5 bg-black rounded-full'></span></p>
                    <p className="text-gray-600 font-medium text-sm flex gap-2"><span>Cream</span> <span className='w-5 bg-[#ffe5d0] rounded-full'></span></p>
                    <p className="text-gray-600 font-medium text-sm">-</p>
                    <p className="text-gray-600 font-medium text-sm">-</p>
                </div>

            </div>

          </div>

          

         

        </div>


        <div className="bg-white p-5 mt-5 flex flex-col mx-5 pb-6 rounded-lg gap-3 justify-center ">
        <div className='flex justify-between items-center pt-6 mx-9'>
            <div className="flex flex-col gap-3">
            <h3 className='font-semibold text-xl'>Details</h3>
             <p className="text-gray-600 text-sm font-medium ">Details about this vehicle.</p>
            </div>
            <Button className='text-blue-600 self-start' variant='transparent'>
              Edit
            </Button>
          </div>

          <div className="grid lg:grid-cols-3 sm:grid-cols-2 grid-cols-1 gap-14 grid-flow-row items-start pt-5 mx-9">
            <div className='flex justify-between items-center'>
                <div className='space-y-5'>
                <p className="font-semibold text-sm">Mileage</p>
                <p className="font-semibold text-sm">Original</p>
                <p className="font-semibold text-sm">Locate</p>
                
                </div>

                <div className="space-y-5">
                    <p className="text-gray-600 font-medium text-sm">-</p>
                    <p className="text-gray-600 font-medium text-sm">Yes</p>
                    <p className="text-gray-600 font-medium text-sm">Italy</p>
                    
                </div>

            </div>
            <div className='flex justify-between  items-center'>
                <div className='space-y-5'>
                <p className="font-semibold text-sm">Plate numb</p>
                <p className="font-semibold text-sm">Vin</p>
                
                </div>

                <div className="space-y-5">
                    <p className="text-gray-600 font-medium text-sm">WZATR100FFRT44</p>
                    <p className="text-gray-600 font-medium text-sm">-</p>
                  

                </div>

            </div>

            <div className='flex justify-between items-center'>

            </div>

          </div>

          

         

        </div>


        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center mx-2'>
            <h3 className='font-semibold text-xl'>Registration certificate</h3>
            <Button className='text-blue-600' variant='transparent'>
              Edit
            </Button>
          </div>
          <div className='grid grid-flow-row lg:grid-cols-5 xl:grid-cols-6 mx-3 sm:grid-cols-3 grid-cols-2   gap-3'>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/registrationphotoplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
          </div>
        </div>


        
        <div className='flex flex-col gap-2'>
          <div className='flex justify-between items-center mx-2'>
            <h3 className='font-semibold text-xl'>Service book</h3>
            <Button className='text-blue-600' variant='transparent'>
              Edit
            </Button>
          </div>

          <div className='grid grid-flow-row lg:grid-cols-5 xl:grid-cols-6 mx-3 sm:grid-cols-3 grid-cols-2   gap-3'>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
            <div style={{backgroundImage: `url("/images/servicebookplaceholder.svg")` }} className=' background-img scale-hover  rounded-lg shadow-lg px-20 py-20'></div>
          </div>
        </div>
          <div className='flex justify-between items-center gap-2 pb-16'>
            <Link href='/dashboard/garage/'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold bg-white hover:bg-black text-black hover:text-white border-black border'>
                Cancel
              </Button>
            </Link>

            <Link href='/dashboard/garage/addvehicledetails'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold'>
                Add vehicle
              </Button>
            </Link>
          </div>
      </div>
    </div>
  );
}
