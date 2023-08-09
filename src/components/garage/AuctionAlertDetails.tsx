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
import { Button } from "../ui/button";
import Image from "next/image";
import Link from "next/link";
export default function AuctionAlertDetails() {
  const [deleteVehicle, setDeleteVehicle] = useState(false);
  const [period, setPeriod] = useState("month");
  const [fill, setFill] = setState(false)

  const dataPlaceholder = [
    {
      year: "1986",
      shape: "Replica Coupè",
      auctioneer: "RM Sotheby",
      country: "USA",
      Events: "Fourt Lauderiare",
      date: "05/03/23",
      lot: "2103",
      min_val: "207,443",
      max_val: "25",
      riserve: "",
      total: "120",
      auction_currency: "US$",
    },
    {
      year: "1999",
      shape: "Convertible",
      auctioneer: "Bonhams",
      country: "USA",
      Events: "Les grandes...",
      date: "05/03/23",
      lot: "",
      min_val: "20,453",
      max_val: "208,453",
      riserve: "",
      total: "10",
      auction_currency: "EUR",
    },
    {
      year: "1876",
      shape: "Convertible",
      auctioneer: "Mecum",
      country: "Montecano",
      Events: "Fort Lauderiare",
      date: "02/04/23",
      lot: "",
      min_val: "205,253",
      max_val: "205,653",
      riserve: "",
      total: "",
      auction_currency: "US$",
    },
    {
      year: "1995",
      shape: "Convertible",
      auctioneer: "Artcurial",
      country: "France",
      Events: "",
      date: "14/03/23",
      lot: "",
      min_val: "202,433",
      max_val: "200,453",
      riserve: "",
      total: "",
      auction_currency: "EUR",
    },
    {
      year: "1987",
      shape: "Coupe",
      auctioneer: "Broad Arrow",
      country: "USA",
      Events: "",
      date: "",
      lot: "",
      min_val: "202,433",
      max_val: "25,453",
      riserve: "",
      total: "",
      auction_currency: "EUR",
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

      <Table>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black '>
              Year
            </TableHead>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black '>
              Shape
            </TableHead>
            <TableHead className='font-semibold bg-red-300 lg:text-sm text-black  w-[150px]'>
              Auctioneer
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Country
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Event
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Date
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Lot
            </TableHead>
            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Min val
            </TableHead>

            <TableHead className='font-semibold bg-green-300 lg:text-sm text-black '>
              Max val
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-300'>
              Reserve
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-yellow-200'>
              Auction currency
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => (
            <TableRow key={data.shape}>
              <TableCell className='font-medium'>{data.year}</TableCell>
              <TableCell className='font-medium underline text-blue-500'><Link href='/'>{data.shape}</Link></TableCell>
              <TableCell className='font-medium'>{data.auctioneer}</TableCell>
              <TableCell className='font-medium'>
                {data.country}
             
              </TableCell>
              <TableCell className='font-medium'>{data.Events}</TableCell>
              <TableCell className='font-medium'>{data.date}</TableCell>
              <TableCell className='font-medium'>{data.lot}</TableCell>
              <TableCell className='font-medium'>{data.min_val}</TableCell>
              <TableCell className='font-medium'>{data.max_val}</TableCell>
              <TableCell className=' font-semibold'>
                {data.auction_currency}
              </TableCell>
              <TableCell className='font-medium bg-yellow-200'>
                {data.total}
              </TableCell>
              <TableCell className='cursor-pointer ' onClick={() => {setFill(true)}}>
              <Image
                src='/images/hollowheart.svg'
                alt='heart'
                width='50'
                height='50'
              />
            </TableCell>
            </TableRow>
          ))}

          <TableRow className='bg-yellow-200 font-semibold'>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>Totals</TableCell>
            <TableCell>5</TableCell>

            <TableCell>42</TableCell>

            <TableCell>42</TableCell>
            <TableCell>5</TableCell>
            <TableCell>22</TableCell>
            <TableCell>655,582</TableCell>
            <TableCell>25</TableCell>
            <TableCell>0</TableCell>
            <TableCell className='bg-yellow-500'>130</TableCell>
            
          </TableRow>
        </TableBody>
      </Table>

      <div className='pt-12'></div>
    </div>
  );
}
