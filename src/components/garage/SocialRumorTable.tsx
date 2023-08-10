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
    online_magazine: "21",
    blog: "223",
    twitter: "250",
    youtube: "140",
    facebook: "10",
    instagram: "325",
    titok: "100",
    total: "1,250",
    view: "View",
  },
  {
    year: "1999",
    brand: "Mercedes Benz",
    model: "SI-I-300",
    online_magazine: "44",
    blog: "244",
    twitter: "246",
    youtube: "233",
    facebook: "200",
    instagram: "100",
    titok: "10",
    total: "",
    view: "View",
  },
  {
    year: "1876",
    brand: "Jaguar",
    model: "E type III",
    online_magazine: "55",
    blog: "249",
    twitter: "244",
    youtube: "66",
    facebook: "15",
    instagram: "233",
    titok: "15",
    total: "",
    view: "View",
  },
  {
    year: "1995",
    brand: "Chevrolet",
    model: "Corvette C7",
    online_magazine: "67",
    blog: "0",
    twitter: "244",
    youtube: "0",
    facebook: "100",
    instagram: "150",
    titok: "100",
    total: "",
    view: "View",
  },
  {
    year: "1987",
    brand: "Fiat",
    model: "500 Jolly",
    online_magazine: "78",
    blog: "0",
    twitter: "0",
    youtube: "24",
    facebook: "0",
    instagram: "100",
    titok: "150",
    total: "",
    view: "View",
  },
];
export default function SocialRumorTable() {
  const [period, setPeriod] =useState('month')
  return (
    <div className='overflow-auto pb-12'>
      <div className='flex sm:flex-row flex-col  py-5 items-center'>

        <div className='flex gap-7 '>
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
                <span className='flex gap-2'><span>Same</span> <span>year</span></span>
              </label>
            </div>
          </div>
        </div>

        <div className='flex justify-center w-full'>
          <h2 className='text-3xl font-semibold text-black '>
            Socia media rumors
          </h2>
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
            <TableHead className='font-semibold lg:text-sm text-transparent select-none bg-red-400'>
              View
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-400'>
              Year
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-400 w-[150px]'>
              Brand
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-400 '>
              Modal
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              online magazines
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Blog
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Twitter
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Youtube
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Facebook
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Instagram
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Tik tok
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-yellow-400'>
              Total
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => (
            <TableRow key={data.brand}>
              <TableCell className='font- underline text-blue-500 font-semibold'>
                {data.view}
              </TableCell>
              <TableCell className='font-medium'>{data.year}</TableCell>
              <TableCell className='font-medium'>{data.brand}</TableCell>
              <TableCell className='font-medium'>{data.model}</TableCell>
              <TableCell className='font-medium'>
                {data.online_magazine}
              </TableCell>
              <TableCell className='font-medium'>{data.blog}</TableCell>
              <TableCell className='font-medium'>{data.twitter}</TableCell>
              <TableCell className='font-medium'>{data.youtube}</TableCell>
              <TableCell className='font-medium'>{data.facebook}</TableCell>
              <TableCell className='font-medium'>{data.instagram}</TableCell>
              <TableCell className='font-medium'>{data.titok}</TableCell>
              <TableCell className='font-medium bg-yellow-400'>
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
            <TableCell className=''>Total</TableCell>
            <TableCell>5</TableCell>

            <TableCell>265</TableCell>

            <TableCell>716</TableCell>
            <TableCell>984</TableCell>
            <TableCell>463</TableCell>
            <TableCell>325</TableCell>
            <TableCell>908</TableCell>
            <TableCell>375</TableCell>
            <TableCell className='bg-yellow-500'>1,250</TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
