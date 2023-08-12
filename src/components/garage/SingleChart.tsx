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
import { useState } from "react";
import { Progress } from "../ui/progress";
import checkType from "@/app/hooks/CheckType";
const dataPlaceholder = [
  {
    brand: "Porsche",
    country: "United State",
    activities: "1900-1949",
    family_nr: "15",
    date_requested: "06-02-22",
    deadline_update: "Expired",
    db_precene: "123,7",
    nr_request: "5",
    other: "",

    nr_updates: "100",
    total: "1,250",
  },
  {
    brand: "Mercedes Benz",
    country: "Germany",
    activities: "1990-1946",
    family_nr: "36",
    date_requested: "06-02-22",
    deadline_update: 100,
    db_precene: "123,7",
    nr_request: "5",
    other: "",

    nr_updates: "10",
    total: "",
  },
  {
    brand: "Jaguar",
    country: "Italy",
    activities: "1990-1949",
    family_nr: "26",
    date_requested: "06-02-23",
    deadline_update: 30,
    db_precene: "123,7",
    nr_request: "5",
    other: "",

    nr_updates: "15",
    total: "",
  },
  {
    brand: "Chevrolet",
    country: "United States",
    activities: "1990-19948",
    family_nr: "44",
    date_requested: "06-02-23",
    deadline_update: 40,
    db_precene: "123,7",
    nr_request: "5",
    other: "",

    nr_updates: "100",
    total: "",
  },
];

export function SingleChart() {
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

        <div className='order-1 sm:order-2'>
          <h2 className='text-3xl font-semibold text-black'>Single chart</h2>
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
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "yestarday" ? "blue" : "blackWide"}>
          Brand
        </Button>
        <Button
          onClick={() => {
            setPeriod("week");
          }}
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "week" ? "blue" : "blackWide"}>
          Family
        </Button>
        <Button
          onClick={() => {
            setPeriod("month");
          }}
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "month" ? "blue" : "blackWide"}>
          Country
        </Button>
        <Button
          onClick={() => {
            setPeriod("quartar");
          }}
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "quartar" ? "blue" : "blackWide"}>
          Auction
        </Button>
        <Button
          onClick={() => {
            setPeriod("year");
          }}
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "year" ? "blue" : "blackWide"}>
          Auction house
        </Button>
        <Button
          onClick={() => {
            setPeriod("all");
          }}
          className='lg:px-16 sm:px-10 rounded-sm whitespace-nowrap'
          variant={period === "all" ? "blue" : "blackWide"}>
          Index
        </Button>
      </div>

      <div className='mt-2 mb-3 border-black border-2'></div>
      <Table>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='bg-red-200'>
              <button className='text-black font-semibold '>Brand</button>
            </TableHead>
            <TableHead className='bg-red-200'>
              <button className='text-black font-semibold '>Country</button>
            </TableHead>
            <TableHead className='bg-red-200'>
              <button className='text-black font-semibold  '>Activities</button>
            </TableHead>
            <TableHead className='bg-red-200'>
              <button className='text-black font-semibold  '>Family nr</button>
            </TableHead>
            <TableHead className='bg-green-200 '>
              <button className='text-black font-semibold '>
                Date requested
              </button>
            </TableHead>
            <TableHead className='bg-green-200 '>
              <button className='text-black font-semibold '>
                Deadline update
              </button>
            </TableHead>
            <TableHead className='bg-green-200 '>
              <button className='text-black font-semibold '>
                Db prescence
              </button>
            </TableHead>
            <TableHead className='bg-blue-200'>
              <button className='text-black font-semibold  '>
                Nr. request
              </button>
            </TableHead>
            <TableHead className='bg-blue-200'>
              <button className='text-black font-semibold  '>
                Nr. updates
              </button>
            </TableHead>

            <TableHead className='bg-gray-300'>
              <button className='text-black font-semibold  '>Other</button>
            </TableHead>
            <TableHead className='bg-yellow-200'>
              <button className='text-black font-semibold bg-yellow-200 '>
                Totals
              </button>
            </TableHead>
            <TableHead className='bg-transparent select-none'>
              <button className='text-black font-semibold text-transparent '>
                Totals
              </button>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => (
            <TableRow key={data.brand} className='relative'>
              <TableCell className='font-medium'>{data.brand}</TableCell>
              <TableCell className='font-medium'>{data.country}</TableCell>
              <TableCell className='font-medium'>{data.activities}</TableCell>
              <TableCell className='font-medium'>{data.family_nr}</TableCell>
              <TableCell className='font-medium'>
                {data.date_requested}
              </TableCell>
              <TableCell
                className={`font-medium ${
                  data.deadline_update === "Expired" ? "text-red-500" : ""
                }`}>
                {checkType(data.deadline_update)
                  ? <div className="relative"><Progress value={data.deadline_update as number} className='w-[100%] bg-transparent rounded-none h-6'/>
                  <span className="text-medium absolute top-[2px] ml-[2px] text-white">{data.deadline_update}</span>
                  </div>

                  :  data.deadline_update}
              </TableCell>
              <TableCell className='font-medium'>{data.db_precene}</TableCell>
              <TableCell className='font-medium'>{data.nr_request}</TableCell>
              <TableCell className='font-medium'>{data.nr_updates}</TableCell>
              <TableCell className='font-medium'>{data.other}</TableCell>
              <TableCell className='font-medium bg-yellow-200'>
                {data.total}
              </TableCell>
              <TableCell className=''>
                <UpdateVehicle />
              </TableCell>
            </TableRow>
          ))}

          <TableRow className='bg-yellow-300 font-semibold relative'>
            <TableCell className=''>Total</TableCell>
            <TableCell>9</TableCell>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>

            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell>1454,65</TableCell>

            <TableCell>2,223,445</TableCell>
            <TableCell>180,675</TableCell>
            <TableCell>50</TableCell>
            <TableCell>107,399</TableCell>
            <TableCell className=''>
              <UpdateVehicle />
            </TableCell>
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}

function UpdateVehicle() {
  const [upgrade, setupgrade] = useState(false);
  return (
    <div className='cursor-pointer '>
      <Image
        onClick={() => {
          setupgrade(!upgrade);
        }}
        src='/images/toogleupgradevehicle.svg'
        width='30'
        height='30'
        alt='upgrade vehicle'
      />

      {upgrade && (
        <div className='absolute  z-50 bg-gray-100 shadow-sm flex gap-2 p-2 items-center right-[4rem] top-[1rem] rounded-md'>
          <Image
            src='/images/upgradevehicle.svg'
            width='20'
            height='20'
            alt='upgrade vehicle'
          />
          <span className='text-black font-medium text-xs flex gap-1'>
            <span>Upgrade</span> vehicle
          </span>
        </div>
      )}
    </div>
  );
}
