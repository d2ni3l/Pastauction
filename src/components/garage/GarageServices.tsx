import React from "react";
import GarageInfoCard from "./GarageInfoCard";
import ServiceAvailable from "./ServiceAvailable";
import VehicleCards from "./VehicleCards";

export default function GarageServices() {
  return (
    <div>
      <div className='flex flex-col gap-16'>
        <GarageInfoCard />
        <ServiceAvailable/>
        <VehicleCards/>
        
      </div>
    </div>
  );
}
