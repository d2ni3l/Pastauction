"use client";
import React, { Dispatch, useState } from "react";
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
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
export default function SingleDetailsView() {
  const [deleteVehicle, setDeleteVehicle] = useState(false);
  const [period, setPeriod] = useState("month");

  const dataPlaceholder = [
    {
      id: 1,
      year: "1986",
      brand: "Porsche",
      serie: "911-II",
      date: "06-02-2022",
      q_ty: "150",
    },
    {
      id: 2,

      year: "1999",
      brand: "Mercedes Benz",
      serie: "SL- L - 300",
      date: "06-02-2022",
      q_ty: "150",
    },
    {
      id: 3,

      year: "1876",
      brand: "Jaguar",
      serie: "E type -II",
      date: "06-02-2022",
      q_ty: "80",
    },
    {
      id: 4,

      year: "1995",
      brand: "Chevrolet",
      serie: "Corvette C7",
      date: "06-02-2022",
      q_ty: "90",
    },
    {
      id: 5,
      year: "1987",
      brand: "Fiat",
      serie: "500 jolly",
      date: "06-02-2022",
      q_ty: "90",
    },
  ];

  return (
    <div>
      <VehicleCards
        noMod={true}
        setDeleteVehicle={setDeleteVehicle}
        deleteVehicle={deleteVehicle}
      />

      <div className='pb-5 pt-10  flex justify-center'>
        <h2 className='text-xl font-semibold text-black'>Reporting view</h2>
      </div>

      <div className='mt-2 mb-3 border-black border-2'></div>

      <div className='grid 2xl:grid-cols-6 grid-cols-3 grid-flow-row gap-2'>
        <Button
          onClick={() => {
            setPeriod("yestarday");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "yestarday" ? "blue" : "blackWide"}>
          Yesterday
        </Button>
        <Button
          onClick={() => {
            setPeriod("week");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "week" ? "blue" : "blackWide"}>
          Week
        </Button>
        <Button
          onClick={() => {
            setPeriod("month");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "month" ? "blue" : "blackWide"}>
          Month
        </Button>
        <Button
          onClick={() => {
            setPeriod("quartar");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "quartar" ? "blue" : "blackWide"}>
          Quarter
        </Button>
        <Button
          onClick={() => {
            setPeriod("year");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "year" ? "blue" : "blackWide"}>
          Year
        </Button>
        <Button
          onClick={() => {
            setPeriod("all");
          }}
          className='lg:px-24 sm:px-10 rounded-sm'
          variant={period === "all" ? "blue" : "blackWide"}>
          All
        </Button>
      </div>

      <div className='mt-2 mb-3 border-black border-2'></div>

      <Table className=''>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black   '>
              Year
            </TableHead>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black   '>
              Brand
            </TableHead>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black   '>
              Serie
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black   '>
              Q.ty
            </TableHead>
            
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black   '>
              Date
            </TableHead>
            
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data, i) => {
            return (
              <TableRow key={i}>
                <TableCell className='font-medium'>{data.year}</TableCell>
                <TableCell className='font-medium '>
                  <Link href='/'>{data.brand}</Link>
                </TableCell>
                <TableCell className='font-medium'>{data.serie}</TableCell>
                <TableCell className='font-medium'>{data.q_ty}</TableCell>
                <TableCell className='font-medium'>{data.date}</TableCell>
              </TableRow>
            );
          })}

          <TableRow className='bg-yellow-200 font-semibold'>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>Totals</TableCell>
            <TableCell>5</TableCell>

            <TableCell>770</TableCell>

            <TableCell>42</TableCell>
            
          </TableRow> 
        </TableBody>
      </Table>

      <div className='pt-12'></div>
    </div>
  );
}

// interface ImageProp {
//   fill: boolean;
//   setFill: Dispatch<React.SetStateAction<boolean>>;
// }
