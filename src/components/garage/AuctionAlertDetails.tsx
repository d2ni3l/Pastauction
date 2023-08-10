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
export default function AuctionAlertDetails() {
  const [deleteVehicle, setDeleteVehicle] = useState(false);
  const [period, setPeriod] = useState("month");
  const [fill, setFill] = useState(false);
  const [savedAuction, setSavedAuction] = useState<SavedAuction | null>(null);


  interface SavedAuction {
    shape: string;
    year: string;
    auctioneer: string;
    country: string;
    event: string;
    date: string;
    min_val: string;
    max_val: string;
    riserve: string;
    total: string;
    auction_currency: string;
    id: number;
  }
  const dataPlaceholder = [
    {
      id: 1,
      year: "1986",
      shape: "Replica Coupè",
      auctioneer: "RM Sotheby",
      country: "USA",
      event: "Fourt Lauderiare",
      date: "05/03/23",
      lot: "2103",
      min_val: "207,443",
      max_val: "25",
      riserve: "",
      total: "120",
      auction_currency: "US$",
    },
    {
      id: 2,

      year: "1999",
      shape: "Convertible",
      auctioneer: "Bonhams",
      country: "USA",
      event: "Les grandes...",
      date: "05/03/23",
      lot: "",
      min_val: "20,453",
      max_val: "208,453",
      riserve: "",
      total: "10",
      auction_currency: "EUR",
    },
    {
      id: 3,

      year: "1876",
      shape: "Convertible",
      auctioneer: "Mecum",
      country: "Montecano",
      event: "Fort Lauderiare",
      date: "02/04/23",
      lot: "",
      min_val: "205,253",
      max_val: "205,653",
      riserve: "",
      total: "",
      auction_currency: "US$",
    },
    {
      id: 4,

      year: "1995",
      shape: "Convertible",
      auctioneer: "Artcurial",
      country: "France",
      event: "",
      date: "14/03/23",
      lot: "",
      min_val: "202,433",
      max_val: "200,453",
      riserve: "",
      total: "",
      auction_currency: "EUR",
    },
    {
      id: 5,
      year: "1987",
      shape: "Coupe",
      auctioneer: "Broad Arrow",
      country: "USA",
      event: "",
      date: "",
      lot: "",
      min_val: "202,433",
      max_val: "25,453",
      riserve: "",
      total: "",
      auction_currency: "EUR",
    },
  ];

  const getData = (i: number) => {
    setSavedAuction(dataPlaceholder[i]);
  };
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
            <TableHead className='selec-none text-transparent'>
              Auction currency
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data, i) => {
            return (
              <TableRow key={i}>
                <TableCell className='font-medium'>{data.year}</TableCell>
                <TableCell className='font-medium underline text-blue-500'>
                  <Link href='/'>{data.shape}</Link>
                </TableCell>
                <TableCell className='font-medium'>{data.auctioneer}</TableCell>
                <TableCell className='font-medium'>{data.country}</TableCell>
                <TableCell className='font-medium'>{data.event}</TableCell>
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
                <TableCell
                  onClick={() => {
                    getData(i);
                  }}
                  className='cursor-pointer '>
                  <ImageComp />
                </TableCell>
              </TableRow>
            );
          })}

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

      <div className='pt-24'></div>
      {savedAuction && (
        <div className=' absolute bottom-0 bg-[#f6f6f6] rounded-t-lg flex px-6 py-3 items-center border gap-5 border-gray-300'>
          <p className='font-medium pt-2'>
            {savedAuction?.year} - {savedAuction?.shape} -{" "}
            {savedAuction?.auctioneer} - {savedAuction?.country} -{" "}
            {savedAuction?.event} <br /> - {savedAuction?.date}
          </p>
          <button className='py-2 -mt-  text-sm px-3 border-blue-500 border text-blue-500 scale-hover rounded-sm font-medium'>
            Saved vehicles
          </button>
          <Image src='/images/x.svg'  alt='cancel' width='10' className='float-right cursor-pointer -mt-10 ml-3' onClick={() => {setSavedAuction(null)}} height='10'/>

        </div>
      )}
    </div>
  );
}

// interface ImageProp {
//   fill: boolean;
//   setFill: Dispatch<React.SetStateAction<boolean>>;
// }

const ImageComp = () => {
  const [fill, setFill] = useState(false);
  return (
    <Image
      onClick={() => {
        setFill(!fill);
      }}
      src={fill ? "/images/filledheart.svg" : "/images/hollowheart.svg"}
      alt='like'
      height='25'
      width='25'
    />
  );
};
