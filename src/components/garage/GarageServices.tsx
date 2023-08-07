import React, { Dispatch, SetStateAction } from "react";
import GarageInfoCard from "./GarageInfoCard";
import ServiceAvailable from "./ServiceAvailable";
import VehicleCards from "./VehicleCards";
import { Order_AddGarage } from "./Order_AddGarage";
import { inter } from "@/app/fonts";
import {useState} from 'react'
import Image from "next/image";
import { Button } from "../ui/button";
import AlertUpgradevehicle from "./AlertUpgradevehicle";
import {useAtom} from 'jotai'
import { alertUpgradePlan } from "@/app/atoms/atoms";
export default function GarageServices() {
  const [deleteVehicle, setDeleteVehicle] = useState(false)
  const [modal, setModal] = useAtom(alertUpgradePlan)
  console.log(modal)
  console.log()
  return (
    <div className={inter.className}>
      {
        deleteVehicle && (<DeleteVehicle deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>)
      }

      {
        modal && (
          <AlertUpgradevehicle/>
        )
      }
      <div className='flex flex-col '>
        <GarageInfoCard />
        <div className="pt-16"></div>
        <ServiceAvailable/>
        <div className="pt-10"></div>
        <div className="mx-5"><Order_AddGarage/></div>
        <div className="pt-8"></div>


        <div className=" mx-5">
        <div className="pb-5 justify-center lg:justify-start flex">
        <h2 className='text-blue-500 font-bold text-xl '>Vehicles (6)</h2>
      </div>
        <div className="grid grid-cols-1 sm:grid-cols-2  gap-8 xl:grid-cols-3 min-[2000px]:grid-cols-4 justify-center lg:justify-start">
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        <VehicleCards deleteVehicle={deleteVehicle} setDeleteVehicle={setDeleteVehicle}/>
        </div>
        </div>
        
      </div>
    </div>
  );
}

interface DeleteVehicle {
  setDeleteVehicle:Dispatch<SetStateAction<boolean>>
  deleteVehicle: boolean


}
const DeleteVehicle = ({deleteVehicle, setDeleteVehicle}: DeleteVehicle) => {
 
  return(
    <div className="fixed bg-black/50 top-0 left-0 right-0  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full z-50">
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-md bg-white rounded-lg shadow px-5 py-5 '>
       
          <div className="flex justify-center relative items-center pt-5 pb-3">
          <h2 className="font-semibold text-xl">Delete vehicle</h2>
         

         <Image
           src='/images/x.svg'
           onClick={() => {setDeleteVehicle(false)}}
           alt='password saved'
           width='15'
           height='15'
           className='hover:scale-[.9] absolute right-0 transition-all duration-300 cursor-pointer'
         />
          </div>

          <div className="flex justify-center">
            <p className="text-center text-gray-600 text-sm px-1 pb-3">
              Are you sure you want to delete your vehicle? this action cannot be undone.
            </p>
          </div>
          


         
          

          <div className='flex flex-col items-center justify-center'>
            <VehicleCards deleteVehicle={deleteVehicle} noMod={true} setDeleteVehicle={setDeleteVehicle} />

            <div className='pt-8 flex gap-3 pb-5'>
              
                <Button onClick={() => {setDeleteVehicle(false)}}  variant='blackWide' className='px-9 bg-gray-200 hover:bg-gray-300'>
                  <span className='text-sm text-black'>Cancel</span>
                </Button>

              <Button  onClick={() => { }}  variant='blackWide' className='px-10'>
              
              <span className="text-sm">
                    Delete
                  </span>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}

