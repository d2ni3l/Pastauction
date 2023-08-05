import React from "react";
import GarageInfoCard from "./GarageInfoCard";
import ServiceAvailable from "./ServiceAvailable";

export default function GarageServices() {
  return (
    <div>
      <div className='flex flex-col gap-16'>
        <GarageInfoCard />
        <ServiceAvailable/>
      </div>
    </div>
  );
}
