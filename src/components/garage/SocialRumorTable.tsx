import React from 'react'
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


export default function SocialRumorTable() {
  return (
    <div className="overflow-auto pb-12">

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

         <div className="flex gap-4 relative ml-2">
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
          <h2 className='text-3xl font-semibold text-black'>Garage view</h2>
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
      <Table>
        <TableHeader>
          <TableRow className='border-t-[1px] border-b-[2px] border-black'>
            <TableHead className='font-semibold lg:text-sm text-black bg-red-400'>
              Photo
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
            <TableHead className='font-semibold lg:text-sm text-black bg-red-400'>
              Status
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-yellow-400'>
              Purchase
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-yellow-400'>
              Date
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Avg 36 mo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Avg 24 mo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-green-400'>
              Avg 6 mo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-blue-400'>
              %
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-blue-400'>
              Result
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {[1, 2, 3, 4, 5, 6, 7, 8, 9, 10].map((row) => {
            return (
              <TableRow key={row}>
            <TableCell>
              <Link href='/dashboard/garage/garageviewdetails'>
              <button className='focus:border-2 focus:border-black scale-hover'>
              <Image
              src='/images/garageviewimageplaceholder.svg'
              alt='Vehicle data'
              height='60'
              width='62'
              className='rounded-[1px] cursor-pointer  '
              />
              </button>
              </Link>
            </TableCell>

            <TableCell>
              <button className='text-black font-semibold'>
              1986
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold'>
              Porsche
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              911-11
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              5 concours
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              47,751
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              06-2002
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              23,004
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              55,786
              </button>
            </TableCell>
            <TableCell>
              <button className='text-black font-semibold '>
              43,777
              </button>
            </TableCell>

            <TableCell className='bg-green-400'>
              <button className='text-black font-semibold '>
              325%
              </button>
            </TableCell>
            <TableCell className='bg-green-400'>
              <button className='text-black font-semibold '>
              13,444
              </button>
            </TableCell>
          </TableRow>
            )
          })}

     
          <TableRow className='bg-yellow-300 font-semibold'>
            <TableCell className=''>
              <span className="select-none text-transparent">Total</span>
            </TableCell>
            <TableCell className=''>
              <span className="select-none text-transparent">Total</span>
            </TableCell>
            <TableCell className=''>
              Total
            </TableCell>
            <TableCell>
              9
            </TableCell>
            <TableCell className=''>
              <span className="select-none text-transparent">Total</span>
            </TableCell>
            <TableCell>
              1454,65
            </TableCell>
            <TableCell className=''>
              <span className="select-none text-transparent">Total</span>
            </TableCell>
            <TableCell>
              2,454,544
            </TableCell>
            <TableCell>
              2,223,445
            </TableCell>
            <TableCell>
              180,675
            </TableCell>
            <TableCell>
             50
            </TableCell>
            <TableCell>
             107,399
            </TableCell>
           
          </TableRow>
       

          
          
        </TableBody>
      </Table>
    </div>
  )
}
