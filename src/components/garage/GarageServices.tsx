import React from "react";
import GarageInfoCard from "./GarageInfoCard";
import ServiceAvailable from "./ServiceAvailable";
import VehicleCards from "./VehicleCards";
import { Order_AddGarage } from "./Order_AddGarage";
import { inter } from "@/app/fonts";

export default function GarageServices() {
  return (
    <div className={inter.className}>
      <div className='flex flex-col '>
        <GarageInfoCard />
        <div className="pt-16"></div>
        <ServiceAvailable/>
        <div className="pt-10"></div>
        <div className="mx-5"><Order_AddGarage/></div>
        <div className="pt-8"></div>


        <div className="lg:mx-16 mx-5">
        <div className="pb-5 justify-center lg:justify-start flex">
        <h2 className='text-blue-500 font-bold text-xl '>Vehicles (6)</h2>
      </div>
        <div className="flex  gap-8 flex-wrap justify-center lg:justify-start">
        <VehicleCards/>
        <VehicleCards/>
        <VehicleCards/>
        <VehicleCards/>
        <VehicleCards/>
        <VehicleCards/>
        </div>
        </div>
        
      </div>
    </div>
  );
}
