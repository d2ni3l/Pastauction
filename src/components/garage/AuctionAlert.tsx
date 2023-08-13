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
import { Checkbox } from "../ui/checkbox";
import Image from "next/image";
import Link from "next/link";
import { Button } from "../ui/button";

const dataPlaceholder = [
  {
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    usa: "5",
    uk: "5",
    europe: "5",
    oceania: "22",
    japan: "",
    online: "25",
    others: "100",
    total: "120",
    view: "View",
  },
  {
    year: "1999",
    brand: "7",
    model: "SI-I-300",
    usa: "44",
    uk: "15",
    europe: "",
    oceania: "",
    japan: "",
    online: "",
    others: "",
    total: "10",
    view: "View",
  },
  {
    year: "1876",
    brand: "Jaguar",
    model: "E type III",
    usa: "15",
    uk: "22",
    europe: "",
    oceania: "",
    japan: "",
    online: "",
    others: "",
    total: "",
    view: "View",
  },
  {
    year: "1995",
    brand: "Chevrolet",
    model: "Corvette C7",
    usa: "3",
    uk: "",
    europe: "",
    oceania: "",
    japan: "",
    online: "",
    others: "",
    total: "",
    view: "View",
  },
  {
    year: "1987",
    brand: "Fiat",
    model: "500 Jolly",
    usa: "2",
    uk: "",
    europe: "",
    oceania: "",
    japan: "",
    online: "",
    others: "",
    total: "",
    view: "View",
  },
];
export default function AuctionAlert() {
  const [period, setPeriod] = useState("month");
  return (
    <div className='overflow-auto pb-12'>
      <div className='flex sm:flex-row flex-col justify-between py-5 '>
        <div className='flex gap-7 pt-5 order-2 sm:order-1'>
          <div className='flex gap-4 items-center '>
            <Checkbox id='terms' value='Series' />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Series
            </label>
          </div>

          <div className='flex gap-4 relative ml-2'>
            <div className='flex gap-2 items-center'>
              <Checkbox id='terms' value='Same year' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Same year
              </label>
            </div>
            <div className='flex gap-2 items-center'>
              <Checkbox id='terms' value='Owned' />
              <label
                htmlFor='terms'
                className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                Owned
              </label>
            </div>
          </div>
        </div>

        <div className='order-1 sm:order-2'>
          <h2 className='text-3xl font-semibold text-black'>Auction Alerts</h2>
        </div>

        <div className='flex gap-8 pt-5 order-3 sm:order-3'>
          <div className='flex gap-2 items-center'>
            <Checkbox id='terms' value='Wish' />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Wish
            </label>
          </div>

          <div className='flex gap-2 items-center'>
            <Checkbox id='terms' value='All' />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              All
            </label>
          </div>
        </div>
      </div>
      <div className='mt-2 mb-3 border-black border-2'></div>

      <div className='grid sm:grid-cols-6 grid-cols-3 grid-flow-row gap-4'>
        <Button
          onClick={() => {
            setPeriod("yestarday");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "yestarday" ? "blue" : "blackWide"}>
          Yesterday
        </Button>
        <Button
          onClick={() => {
            setPeriod("week");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "week" ? "blue" : "blackWide"}>
          Week
        </Button>
        <Button
          onClick={() => {
            setPeriod("month");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "month" ? "blue" : "blackWide"}>
          Month
        </Button>
        <Button
          onClick={() => {
            setPeriod("quartar");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "quartar" ? "blue" : "blackWide"}>
          Quarter
        </Button>
        <Button
          onClick={() => {
            setPeriod("year");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "year" ? "blue" : "blackWide"}>
          Year
        </Button>
        <Button
          onClick={() => {
            setPeriod("all");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "all" ? "blue" : "blackWide"}>
          All
        </Button>
      </div>

      <div className='mt-2 mb-3 border-black border-2'></div>

      <Table>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='font-semibold lg:text-sm text-transparent select-none bg-red-200'>
              View
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-200'>
              Year
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-200 w-[150px]'>
              Brand
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-200 '>
              Modal
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              USA
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              UK
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              Europe
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              Oceania
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              Japan
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              Online
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-200'>
              Others
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-yellow-200'>
              Total
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => (
            <TableRow key={data.brand}>
              <TableCell className='font- underline text-blue-500 font-semibold'>
                <Link href='/garage/auctionalertdetails'>
                  {data.view}
                </Link>
              </TableCell>
              <TableCell className='font-medium'>{data.year}</TableCell>
              <TableCell className='font-medium'>{data.brand}</TableCell>
              <TableCell className='font-medium'>{data.model}</TableCell>
              <TableCell className='font-medium'>{data.usa}</TableCell>
              <TableCell className='font-medium'>{data.uk}</TableCell>
              <TableCell className='font-medium'>{data.europe}</TableCell>
              <TableCell className='font-medium'>{data.oceania}</TableCell>
              <TableCell className='font-medium'>{data.japan}</TableCell>
              <TableCell className='font-medium'>{data.online}</TableCell>
              <TableCell className='font-medium'>{data.others}</TableCell>
              <TableCell className='font-medium bg-yellow-200'>
                {data.total}
              </TableCell>
            </TableRow>
          ))}

          <TableRow className='bg-yellow-300 font-semibold'>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>Totals</TableCell>
            <TableCell>5</TableCell>

            <TableCell>32</TableCell>

            <TableCell>42</TableCell>
            <TableCell>5</TableCell>
            <TableCell>22</TableCell>
            <TableCell>15</TableCell>
            <TableCell>25</TableCell>
            <TableCell>100</TableCell>
            <TableCell className='bg-yellow-500'>130</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
