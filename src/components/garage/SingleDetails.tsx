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

const dataPlaceholder = [
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    status: "5 concours",
    view: "View",
  },
];

export function SingleDetails() {
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
          </div>
        </div>

        <div className='order-1 sm:order-2'>
          <h2 className='text-3xl font-semibold text-black'>Single details</h2>
        </div>

        <div className='flex gap-8 pt-5 order-3 sm:order-3'>
          <div className='flex gap-2 items-center'>
            <Checkbox id='terms' value='Owned' />
            <label
              htmlFor='terms'
              className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
              Owned
            </label>
          </div>
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
            <TableHead className='font-semibold lg:text-sm text-black '>
              Photo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Year
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  w-[150px]'>
              Brand
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  '>
              Model
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Status
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Purchase</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Date</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Avg 36 mo</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Avg 24 mo</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Avg 6 mo</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> %</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black select-none  '>
              <span className='text-transparent'> Result</span>
            </TableHead>
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => {
            return (
              <TableRow key={data.brand}>
                <TableCell>
                  <Link href='/dashboard/garage/garageviewdetails'>
                    <button className='focus:border-2 focus:border-black scale-hover'>
                      <Image
                        src={data.imageSrc}
                        alt='Vehicle data'
                        height='48'
                        width='48'
                        className='rounded-[1px] cursor-pointer  '
                      />
                    </button>
                  </Link>
                </TableCell>

                <TableCell className='font-medium'>{data.year}</TableCell>
                <TableCell className='font-medium'>{data.brand}</TableCell>
                <TableCell className='font-medium'>{data.model}</TableCell>
                <TableCell className='font-medium'>{data.status}</TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> i</span>
                </TableCell>
                <TableCell className='text-blue-400 underline font-semibold cursor-pointer'>
                  {data.view}
                </TableCell>
              </TableRow>
            );
          })}

          <TableRow className='bg-yellow-300 font-semibold'>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            <TableCell className=''>
              <span className='select-none text-transparent'>Total</span>
            </TableCell>
            
            <TableCell className=''>Total</TableCell>
            <TableCell>10</TableCell>
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
            
          </TableRow>
        </TableBody>
      </Table>
    </div>
  );
}
