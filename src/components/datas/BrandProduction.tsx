import Image from "next/image";
import React from "react";
import { Check, ChevronDown } from "lucide-react";
import { cn } from "@/lib/utils";
import { Button } from "@/components/ui/button";
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command";
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover";
import {
  Table,
  TableBody,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "../ui/table";
import truncateString from "@/app/hooks/useTruncate";

const orders = [
  {
    value: "Auction event",
    label: "Auction event",
  },
  {
    value: "Maison",
    label: "Maison",
  },
];
const dataPlaceholder = [
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
  {
    family: "240",
    nr_vehicle: "116",
    from: "1967",
    to: "1987",
    years: "2",
    production: "7,246",
    source: "https://it.wikipedia.org/wiki/Pagina_principale", //24
    model: "240",
    serie: "I",
    stage: "1",
    avg: "306,000",
    avg2: "680,000",
  },
];
const alf = [
  "A",
  "B",
  "C",
  "D",
  "E",
  "F",
  "G",
  "H",
  "I",
  "J",
  "K",
  "L",
  "M",
  "N",
  "O",
  "P",
  "Q",
  "R",
  "S",
  "T",
  "U",
  "V",
  "W",
  "X",
  "Y",
  "Z",
];

export default function BrandProduction() {
  const [openOrder, setOpenOrder] = React.useState(false);
  const [valueOrder, setValueOrder] = React.useState("");
  const [firstletter, setFirstletter] = React.useState(null);

  const fetchData = () => {
    fetch("https://reqbin.com/echo/get/json", {
      headers: { Authentication: "Bearer {token}" },
    })
      .then((resp) => resp.json())
      .then((json) => console.log(JSON.stringify(json)));
  };

  return (
    <div className='overflow-auto '>
      <div className='flex gap-5  flex-col xl:flex-row '>
        <div className='flex gap-2'>
          <Image
            src='/images/flagenglandplaceholder.svg'
            alt='flag'
            width='100'
            height='50'
          />
          <Image
            src='/images/jaguarlogo.svg'
            alt='brand logo'
            width='100'
            height='50'
          />
        </div>

        <div className='bg-white px-5  '>
          <div className='flex  gap-10 justify-center pt-3'>
            <h3 className='text-2xl font-semibold'>Brands</h3>

            <div className='gap-1 grid sm:grid-cols-9  md:grid-cols-12 2xl:flex'>
              {alf.map((data) => {
                return (
                  <button className='border-2 font-medium rounded-sm border-black scale-hover  text-black px-2 py-[1px]'>
                    {data}
                  </button>
                );
              })}
            </div>
          </div>
        </div>
      </div>

      <div className=' pt-12'>
        <Popover open={openOrder} onOpenChange={setOpenOrder}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openOrder}
              className='w-[140px] justify-between shadow-lg border-gray-400 border-[1.4px] bg-white text-black hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueOrder ? valueOrder : "Order by"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[200px] p-0'>
            <Command>
              <CommandInput placeholder='Search order...' />
              <CommandEmpty>No order found.</CommandEmpty>
              <CommandGroup>
                {orders.map((order) => (
                  <CommandItem
                    key={order.value}
                    onSelect={(currentValue) => {
                      setValueOrder(
                        currentValue === valueOrder ? "" : currentValue
                      );
                      setOpenOrder(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueOrder === order.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {order.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className='bg-white p-5 mt-10 shadow-md '>
        <Table>
          <TableHeader>
            <TableRow className=' border-black'>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                Family
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Nr vehicles
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                From
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                To
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Years
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Production
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Source
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Model
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Series
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Stage
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Avg
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Avg
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dataPlaceholder.map((data, i) => {
              return (
                <TableRow
                  key={data.family}
                  className={`${i % 2 === 1 ? "bg-[#dee2e6]" : "bg-white"} `}>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.family}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.nr_vehicle}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.from}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.to}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.years}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.production}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {truncateString(data.source, 20)}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.model}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.serie}
                  </TableCell>
                  <TableCell className='font-medium text-gray-500  border-[2px] border-[#ced4da]'>
                    {data.stage}
                  </TableCell>
                  <TableCell className='font-medium text-gray-650   border-[2px] border-[#ced4da]'>
                    {data.avg}
                  </TableCell>
                  <TableCell className='font-medium text-gray-650   border-[2px] border-[#ced4da]'>
                    {data.avg2}
                  </TableCell>
                </TableRow>
              );
            })}
          </TableBody>
        </Table>
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
          <TableHeader>
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
            <TableHead className='font-semibold lg:text-sm   border-[2px] border-[#ced4da] bg-green-200 text-green-500'>
              [-37,25%]
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
              25,515,000
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
              32,125,000
            </TableHead>
            <TableHead className='font-semibold lg:text-sm  border-[2px] border-[#ced4da] bg-red-200 text-red-500'>
              [-14,22%]
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
              18,581,306
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
              211
            </TableHead>
          </TableHeader>
        </Table>
      </div>
    </div>
  );
}
