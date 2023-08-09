import React, { useState } from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
import VehicleCards from "./VehicleCards";
export default function GarageViewDetails() {
  const [deleteVehicle, setDeleteVehicle] = useState(false);


  return (
    <div>
      <VehicleCards
        noMod={true}
        setDeleteVehicle={setDeleteVehicle}
        deleteVehicle={deleteVehicle}
      />

      <div className="pb-5 pt-10  flex justify-center"><h2 className='text-xl font-semibold text-black'>Reporting view</h2></div>

      <Table>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Added
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Type
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  w-[150px]'>
              Free update
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Status
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Date
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Purchase
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Avg 24 mo
            </TableHead>

            <TableHead className='font-semibold lg:text-sm text-black '>
              Avg 6 mo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              %
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Result
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>04/23/2022</TableCell>
                <TableCell className='bg-red-400 text-black text-sm font-medium'>Garage</TableCell>
                <TableCell className=' text-black text-sm font-medium'>Subcribtion</TableCell>
                <TableCell className=' text-black text-sm font-medium'>5 concours</TableCell>
                <TableCell className=' text-black text-sm font-medium'>06-2002</TableCell>
                <TableCell className=' text-black text-sm font-medium'>150,554</TableCell>
                <TableCell className=' text-black text-sm font-medium'>133,454</TableCell>
                <TableCell className=' text-black text-sm font-medium'>133,454</TableCell>
                <TableCell className=' text-black text-sm font-medium'>325</TableCell>
                <TableCell className=' text-black text-sm font-medium'>107,399</TableCell>
               
                
              </TableRow>
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>04/13/2022</TableCell>
                <TableCell className='bg-yellow-400 text-black text-sm font-medium'>Rumors</TableCell>
                <TableCell className='  text-sm font-medium text-red-500'>Expired</TableCell>
                <TableCell className=' text-black text-sm font-medium'>23 news</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>04/03/2022</TableCell>
                <TableCell className='bg-blue-400 text-black text-sm font-medium'>Dashboard</TableCell>
                <TableCell className='  text-sm font-medium text-black'>26 days</TableCell>
                <TableCell className=' text-black text-sm font-medium'>Family</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>04/02/2022</TableCell>
                <TableCell className='bg-blue-400 text-black text-sm font-medium'>Dashboard</TableCell>
                <TableCell className='  text-sm font-medium text-black'>56 days</TableCell>
                <TableCell className=' text-black text-sm font-medium'>Model</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>06/02/2022</TableCell>
                <TableCell className='bg-blue-400 text-black text-sm font-medium'>Dashboard</TableCell>
                <TableCell className='  text-sm font-medium text-black'>73 days</TableCell>
                <TableCell className=' text-black text-sm font-medium'>Brand</TableCell>
              </TableRow>
              <TableRow>
                <TableCell className='text-black text-sm font-medium'>14/03/2022</TableCell>
                <TableCell className='bg-gray-400 text-black text-sm font-medium'>Details</TableCell>
                <TableCell className='  text-sm font-medium text-black'>n/a</TableCell>
                <TableCell className=' text-black text-sm font-medium'>370 nr.</TableCell>
              </TableRow>
           
        </TableBody>
      </Table>

      <div className="pt-12"></div>
    </div>
  );
}
