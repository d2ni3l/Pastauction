import Image from "next/image";
import React from "react";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import * as ProgressPrimitive from "@radix-ui/react-progress";
import { ProgressRed } from "../ui/progressRed";
import { cn } from "@/lib/utils";
import Link from "next/link";
import { inter } from "@/app/fonts";
export default function ModelVehicles() {
  return (
    <div className={`${inter.className} pb-5`}>
      <div className='flex gap-5 lg:gap-10 flex-col lg:flex-row'>
        <div className='flex  gap-2 items-center'>
          <Image
            src='/images/flagenglandplaceholder.svg'
            alt='flag'
            width='100'
            height='50'
          />
          <Link href='/datas/brandproduction'>
            <Image
              src='/images/jaguarlogo.svg'
              alt='brand logo'
              width='100'
              height='50'
            />
          </Link>
        </div>

        <div className='flex flex-col gap-5 sm:flex-row  items-center xl:gap-[100px] w-full'>
          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>family</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                E TYPE
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>model</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                E TYPE SERIES III
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-2 items-center'>
            <div className='flex gap-4 items-center '>
              <p className='text-sm text-gray-500 italic'>from</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                1969
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>
                <span className='select-none text-transparent'>pa</span>to
              </p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                1970
              </button>
            </div>
          </div>

          <div className='flex flex-col gap-2'>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>yrs product</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                2
              </button>
            </div>
            <div className='flex gap-4 items-center'>
              <p className='text-sm text-gray-500 italic'>nr products</p>
              <button className='border-[1.6px] border-black rounded-sm text-left cursor-default font-medium py-[2px] w-[180px] px-2'>
                18,809
              </button>
            </div>
          </div>
        </div>
      </div>

      <div className='pt-10'></div>

      <div className='space-y-5'>
        <CardModel />
        <CardModel />
        <CardModel />
      </div>

      <div className='mt-5  bg-white p-5 shadow-md '>
        <h3 className='text-lg font-semibold mb-4'>Data</h3>
        <Table>
          <TableHeader>
            <TableRow>
              <TableHead className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableHead>
              <TableHead className='font-semibold lg:text-sm   border-[2px] border-[#ced4da] bg-red-200 text-red-500'>
                [-37,25%]
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                25,515,000
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                32,125,000
              </TableHead>
              <TableHead className='font-semibold lg:text-sm  border-[2px] border-[#ced4da] bg-red-200 text-red-500'>
                [-72,5%]
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                18,581,306
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                211
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            <TableRow>
              <TableCell className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-transparent bg-transparent select-none border-[2px] border-[#ced4da]'>
                hello
              </TableCell>
              <TableCell className='font-semibold lg:text-sm   border-[2px] border-[#ced4da] bg-green-200 text-green-500'>
                [-37,25%]
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                25,515,000
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                32,125,000
              </TableCell>
              <TableCell className='font-semibold lg:text-sm  border-[2px] border-[#ced4da] bg-red-200 text-red-500'>
                [-14,22%]
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                18,581,306
              </TableCell>
              <TableCell className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                211
              </TableCell>
            </TableRow>
          </TableBody>
        </Table>
      </div>
    </div>
  );
}

const CardModel = () => {
  const [hide, setHide] = React.useState(false);
  return (
    <div className={`bg-white  shadow-md px-3 py-4 `}>
      <div className='flex flex-col lg:flex-row lg:justify-between'>
        <div className='flex flex-col lg:flex-row gap-2 xl:gap-3'>
          <div>
            {" "}
            <Image
              src='/images/modelVehicleplaceholder.svg'
              alt='car image'
              width={hide ? "200" : "300"}
              height={hide ? "150" : "200"}
            />
          </div>

          <div>
            {!hide && (
              <div className='gap-5 flex xl:items-center pt-2'>
                <h2 className='font-bold text-lg sm:text-xl'>
                  Rolls Royce Motors Cars
                </h2>
                <h2 className='font-medium'>1984</h2>
              </div>
            )}

            {!hide && (
              <div className='pt-5 flex gap-2 items-center xl:gap-[120px]'>
                <p className='font-semibold text-sm sm:text-base'>CAMARGUE</p>
                <p className='font-medium  text-sm'>Retractable Hardtop</p>
              </div>
            )}

            <div className='pt-5 flex gap-5 items-center'>
              {hide && <h2 className='font-medium'>1984</h2>}

              <div className='flex gap-3'>
                <p className=' text-gray-600 text-sm italic'>chassis n.</p>
                <p className='text-black text-sm font-medium'>
                  SCAYJ42A0ECX07948
                </p>
              </div>

              {!hide && (
                <div>
                  <p className='text-gray-600 text-sm italic'>Engine n.</p>
                </div>
              )}
            </div>

            <div className='border border-gray-300 mt-5 mb-5 max-w-[450px]'></div>

            <div className='grid grid-cols-2 sm:grid-cols-3 gap-5 items-center'>
              <p className='text-sm font-semibold sm:text-base'>
                Gooding & Company
              </p>
              <p className='flex text-gray-500 gap-2'>
                <span className='italic'>Scottdale</span>
                <span className='text-black'>2010</span>
              </p>
              <p className='flex text-gray-500 gap-2'>
                <span className='italic'>Lot n.</span>
                <span className='text-black font-medium'>55</span>
              </p>
            </div>
          </div>
        </div>

        <div className='flex flex-col lg:mr-10'>
          <div className='border-gray-300 border lg:hidden mt-6'></div>

          <div className='grid-cols-3 grid pt-5 lg:pt-2 gap-2 lg:gap-[50px]'>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 sm:text-sm '>EUR min</p>
              <p className='font-semibold text-black lg:pt-5 lg:pb-5 py-2'>
                63.060
              </p>
              {!hide && (
                <div className='relative '>
                  <Progress
                    value={93}
                    className='w-[100%] lg:w-[140%] h-[30px] rounded-sm '
                  />{" "}
                  <span className='absolute top-[15%] right-0 font-medium'>
                    93%
                  </span>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 sm:text-sm '>EUR max</p>
              <p className='font-semibold text-black lg:pt-5 lg:pb-5 py-2'>
                77.060
              </p>
              {!hide && (
                <div className='relative'>
                  <Progress
                    value={69}
                    className='w-[100%] lg:w-[140%] h-[30px] rounded-sm '
                  />{" "}
                  <span className='absolute top-[15%] right-0 font-medium'>
                    69%
                  </span>
                </div>
              )}
            </div>
            <div className='flex flex-col gap-2'>
              <p className='text-gray-500 sm:text-sm '>EUR sale</p>
              <p className='font-semibold text-black lg:pt-5 lg:pb-5 py-2'>
                24.060
              </p>
              {!hide && (
                <div className='relative'>
                  <ProgressRed
                    value={35}
                    className='w-[100%] lg:w-[140%] h-[30px] rounded-sm '
                  />{" "}
                  <span className='absolute top-[15%] right-0 font-medium'>
                    35%
                  </span>
                </div>
              )}
            </div>
          </div>

          <div className={`flex gap-4 justify-end pt-3 ${!hide && 'lg:pt-12'}`}>
            <Image
              className='cursor-pointer scale-hover'
              src='/images/dash-circle-fill.svg'
              width='30'
              height='30'
              alt='dash'
              onClick={() => {
                setHide(!hide);
              }}
            />
            <Image
              className='cursor-pointer scale-hover'
              src='/images/info-circle-fill.svg'
              width='30'
              height='30'
              alt='dash'
            />
          </div>
        </div>
      </div>
    </div>
  );
};

const Progress = React.forwardRef<
  React.ElementRef<typeof ProgressPrimitive.Root>,
  React.ComponentPropsWithoutRef<typeof ProgressPrimitive.Root>
>(({ className, value, ...props }, ref) => (
  <ProgressPrimitive.Root
    ref={ref}
    className={cn(
      "relative h-4 w-full overflow-hidden rounded-full bg-secondary",
      className
    )}
    {...props}>
    <ProgressPrimitive.Indicator
      className='h-full w-full flex-1 bg-[#ffedb5] transition-all'
      style={{ transform: `translateX(-${100 - (value || 0)}%)` }}
    />
  </ProgressPrimitive.Root>
));
Progress.displayName = ProgressPrimitive.Root.displayName;
