import Image from "next/image";
import React, { useEffect } from "react";
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
import { useQuery } from "@tanstack/react-query";
import axios from "axios";
import {
  Tooltip,
  TooltipContent,
  TooltipProvider,
  TooltipTrigger,
} from "@/components/ui/tooltip";
import { ScrollArea } from "@/components/ui/scroll-area";

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
  const [firstletter, setFirstletter] = React.useState<string>("");
  const [secondletters, setSecondletters] = React.useState<
    Array<{ left_1: string }>
  >([]);
  const [secondletter, setSecondletter] = React.useState<string>("");
  const [brandName, setBrandName] = React.useState<Array<{ name: string }>>([]);
  const [firstletterBrandName, setFirstLetterBrandName] =
    React.useState<Array<{ name: string }>>();
  const [activatedLetter, setActivatedLetter] = React.useState<string>("");

  const {} = useQuery({
    queryKey: ["secondletters", [firstletter]],

    queryFn: async () => {
      const { data } = await axios.get(
        `https://pastauction.com/api/v1/filter/bidwatcher_brand/name_left_2/?search=name_left_1%3A${firstletter}&page=1&size=50`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmM2YxMTUxMi1kZDhlLTQ4ZGEtYTQ3NS1mMWY4NGViNGI1ZDUiLCJleHAiOjE2OTI4Mjc2MDJ9.40Cc8Rzjl9UQJR3-2mK02HPireOnGPzS2MK3uW9U3kg`,
          },
        }
      );
      return data;
    },

    enabled: !!firstletter,

    onSuccess: (data) => {
      setSecondletters((prev) => (prev = data.items));
    },
  });

  const {} = useQuery({
    queryKey: ["firstletterbrandname", [firstletter]],
    queryFn: async () => {
      console.log(firstletter, "im runing");
      const { data } = await axios.get(
        `https://pastauction.com/api/v1/filter/bidwatcher_brand/name/?search=name_left_1%3A${firstletter}&page=1&size=50`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmM2YxMTUxMi1kZDhlLTQ4ZGEtYTQ3NS1mMWY4NGViNGI1ZDUiLCJleHAiOjE2OTI4Mjc2MDJ9.40Cc8Rzjl9UQJR3-2mK02HPireOnGPzS2MK3uW9U3kg`,
          },
        }
      );
      return data;
    },

    enabled: !!firstletter,

    onSuccess: (data) => {
      setFirstLetterBrandName(data.items);
    },
  });



  const {} = useQuery({
    queryKey: ["secondlettersbrandname", [secondletter]],

    queryFn: async () => {
      const { data } = await axios.get(
        `https://pastauction.com/api/v1/filter/bidwatcher_brand/name/?search=name_left_2%3A${secondletter}&page=1&size=50`,
        {
          headers: {
            Authorization: `Bearer eyJhbGciOiJIUzI1NiIsInR5cCI6IkpXVCJ9.eyJzdWIiOiJmM2YxMTUxMi1kZDhlLTQ4ZGEtYTQ3NS1mMWY4NGViNGI1ZDUiLCJleHAiOjE2OTI4Mjc2MDJ9.40Cc8Rzjl9UQJR3-2mK02HPireOnGPzS2MK3uW9U3kg`,
          },
        }
      );
      return data;
    },

    enabled: !!secondletter,

    onSuccess: (data) => {
      setBrandName(data.items);
    },
  });

  return (
    <div className='overflow-auto '>
      <div className='flex gap-5  flex-col xl:flex-row '>
        <div className='flex gap-2 items-start'>
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

        <div className='bg-white shadow-md px-5  xl:w-[1200px] py-2 pb-5'>
          <div className='flex  gap-10 justify-center pt-3'>
            <h3 className='text-2xl font-semibold'>Brands</h3>

            <div className='flex flex-col gap-2'>
              <div className='gap-1 grid grid-cols-4 sm:grid-cols-9  md:grid-cols-12 2xl:flex'>
                {alf.map((data, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setFirstletter((prev) => (prev = alf[i]));
                        setActivatedLetter("first letter");
                      }}
                      className={`border-[1.5px] font-medium rounded-sm border-black scale-hover  text-black px-2 py-[1px] ${
                        firstletter === alf[i] && "bg-black text-white"
                      }`}>
                      {data}
                    </button>
                  );
                })}
              </div>

              <div className=' gap-1 grid grid-cols-4 sm:grid-cols-9  md:grid-cols-12 2xl:flex 2xl:flex-wrap'>
                {secondletters.map((data, i) => {
                  return (
                    <button
                      key={i}
                      onClick={() => {
                        setSecondletter(secondletters[i].left_1);
                        setActivatedLetter("second letter");
                      }}
                      className={`border-[1.5px] font-medium rounded-sm border-black scale-hover  text-black px-2 py-[1px] ${
                        data?.left_1 === secondletter && "bg-black text-white"
                      }`}>
                      {data?.left_1}
                    </button>
                  );
                })}
              </div>

              <ScrollArea className='max-h-[170px] '>
                {activatedLetter === "first letter" ? (
                  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-3 justify-between'>
                    {firstletterBrandName?.map((data, i) => {
                      return (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <p
                                key={i}
                                className={`font-medium lg:whitespace-nowrap hover:text-black text-[15px]   ${
                                  i === 0
                                    ? "font-semibold"
                                    : "text-gray-500 cursor-pointer"
                                }`}>
                                {truncateString(data.name, 15)}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{data.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                ) : (
                  <div className='grid grid-cols-2 sm:grid-cols-3 lg:grid-cols-5 gap-2 pt-3 justify-between'>
                    {brandName.map((data, i) => {
                      return (
                        <TooltipProvider>
                          <Tooltip>
                            <TooltipTrigger asChild>
                              <p
                                key={i}
                                className={`font-medium lg:whitespace-nowrap hover:text-black text-[15px]   
                          ${
                            i === 0
                              ? "font-semibold"
                              : "text-gray-500 cursor-pointer"
                          }`}>
                                {truncateString(data.name, 15)}
                              </p>
                            </TooltipTrigger>
                            <TooltipContent>
                              <p>{data.name}</p>
                            </TooltipContent>
                          </Tooltip>
                        </TooltipProvider>
                      );
                    })}
                  </div>
                )}
              </ScrollArea>
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
                  key={i}
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
