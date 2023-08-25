import React from "react";
import Link from "next/link";
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
import Image from "next/image";
import { maisonAuctionEventsArea } from "@/app/atoms/atoms";
import { useAtom } from "jotai";
export default function MaisonAuctionEvents() {
  const [area, setArea ]= useAtom(maisonAuctionEventsArea)

  const dataPlaceholder = [
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
    {
      maison: "Rm Sothebys",
      auction_event: "The Saragga collection",
      auction_country: "Portugal",
      auction_city: "Alcàcer Do Sal",
      date: "21/09/19",
      nr_vehicles: "123",
      nr_vehicleas: "124",
      sold: "100%",
      total_sales: "10,195,425",
      avg_sales: "82,189",
      top_sold: "19,50,899",
    },
  ];

  return (
    <div className='overflow-auto'>
      <Filters />

      <div className='bg-white p-5 mt-10 '>
        <Table className=''>
          <TableHeader>
            <TableRow className=' border-black'>
              <TableHead  className='font-semibold lg:text-sm text-black bg-[#cfe2ff] cursor-pointer border-[2px] border-[#ced4da]'>
                Maison
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Auction events
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Auction Country
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Auction City
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Date
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Nr vehicles
              </TableHead>
             
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                % sold
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Total sales €
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Avg sales €
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Top sold €
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dataPlaceholder.map((data, i) => {
              return <TableRow key={data.maison} className={`${i % 2 === 1 ? "bg-[#dee2e6]" : "bg-white"}`}>
                <TableCell className='font-medium border-[2px] border-[#ced4da] text-blue-500 underline cursor-pointer' onClick={() => {setArea('Maison')}}>{data.maison}</TableCell>
                <TableCell className='font-medium border-[2px] border-[#ced4da] text-blue-500 underline cursor-pointer' onClick={() => {setArea('Maison')}}>{data.auction_event}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.auction_country}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.auction_city}</TableCell>
                <TableCell className='font-medium  border-[2px] border-[#ced4da] text-blue-500 underline cursor-pointer' onClick={() => {setArea('Auction Events')}}>{data.date}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.nr_vehicles}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.sold}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.total_sales}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.avg_sales}</TableCell>
                <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>{data.top_sold}</TableCell>
              </TableRow>;
            })}
          </TableBody>
        </Table>
      </div>
    </div> 
  );
}

const Filters = () => {
  const [openOrder, setOpenOrder] = React.useState(false);
  const [valueOrder, setValueOrder] = React.useState("");

  const [openArea, setOpenArea] = React.useState(false);
  const [valueArea, setValueArea] = React.useState("");

  const [openAuctionCountry, setOpenAuctionCountry] = React.useState(false);
  const [valueAuctionCountry, setValueAuctionCountry] = React.useState("");

  const [openAuctionCity, setOpenAuctionCity] = React.useState(false);
  const [valueAuctionCity, setValueAuctionCity] = React.useState("");

  const [openAuctionEvent, setOpenAuctionEvent] = React.useState(false);
  const [valueAuctionEvent, setValueAuctionEvent] = React.useState("");

  const [openMaison, setOpenMaison] = React.useState(false);
  const [valueMaison, setValueMaison] = React.useState("");

  const [openMaisonCountry, setOpenMaisonCountry] = React.useState(false);
  const [valueMaisonCountry, setValueMaisonCountry] = React.useState("");

  const [openAuctionYear, setOpenAuctionYear] = React.useState(false);
  const [valueAuctionYear, setValueAuctionYear] = React.useState("");
  const Areas = [
    {
      value: "Area",
      label: "Area",
    },
  ];
  const AuctionCountrys = [
    {
      value: "Auction Country",
      label: "Auction Country",
    },
  ];
  const AuctionCitys = [
    {
      value: "Auction City",
      label: "Auction City",
    },
  ];
  const Maisons = [
    {
      value: "Maison",
      label: "Maison",
    },
  ];
  const MaisonCountrys = [
    {
      value: "Maison Country",
      label: "Maison Country",
    },
  ];
  const AuctionEvents = [
    {
      value: "auction event",
      label: "auction events",
    },
  ];
  const AuctionYears = [
    {
      value: "auction year",
      label: "auction years",
    },
  ];
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

  return (
    <>
      <div className='grid grid-cols-2 sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7  justify-center place-items-center gap-5 bg-white px-5 py-5 shadow-lg rounded-sm mb-5'>
        <Popover open={openArea} onOpenChange={setOpenArea}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openArea}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueArea ? valueArea : "Area"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Areas...' />
              <CommandEmpty>No brand found.</CommandEmpty>
              <CommandGroup>
                {Areas.map((area) => (
                  <CommandItem
                    key={area.value}
                    onSelect={(currentValue) => {
                      setValueArea(
                        currentValue === valueArea ? "" : currentValue
                      );
                      setOpenArea(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueArea === area.value ? "opacity-100" : "opacity-0"
                      )}
                    />
                    {area.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openAuctionCountry} onOpenChange={setOpenAuctionCountry}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openAuctionCountry}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueAuctionCountry ? valueAuctionCountry : "Auction Country"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Auction Countrys...' />
              <CommandEmpty>No Auction Country found.</CommandEmpty>
              <CommandGroup>
                {AuctionCountrys.map((auctionCountry) => (
                  <CommandItem
                    key={auctionCountry.value}
                    onSelect={(currentValue) => {
                      setValueAuctionCountry(
                        currentValue === valueAuctionCountry ? "" : currentValue
                      );
                      setOpenAuctionCountry(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueAuctionCountry === auctionCountry.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {auctionCountry.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openAuctionCity} onOpenChange={setOpenAuctionCity}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openAuctionCity}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueAuctionCity ? valueAuctionCity : "Auction City"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Auction Citys...' />
              <CommandEmpty>No Auction City found.</CommandEmpty>
              <CommandGroup>
                {AuctionCitys.map((auctionCity) => (
                  <CommandItem
                    key={auctionCity.value}
                    onSelect={(currentValue) => {
                      setValueAuctionCity(
                        currentValue === valueAuctionCity ? "" : currentValue
                      );
                      setOpenAuctionCity(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueAuctionCity === auctionCity.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {auctionCity.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openAuctionEvent} onOpenChange={setOpenAuctionEvent}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openAuctionEvent}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueAuctionEvent ? valueAuctionEvent : "Auction Events"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Auction Eventss...' />
              <CommandEmpty>No Auction Events found.</CommandEmpty>
              <CommandGroup>
                {AuctionEvents.map((auctionEvent) => (
                  <CommandItem
                    key={auctionEvent.value}
                    onSelect={(currentValue) => {
                      setValueAuctionEvent(
                        currentValue === valueAuctionEvent ? "" : currentValue
                      );
                      setOpenAuctionEvent(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueAuctionEvent === auctionEvent.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {auctionEvent.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openMaison} onOpenChange={setOpenMaison}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openMaison}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueMaison ? valueMaison : "Maison"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Maisons...' />
              <CommandEmpty>No Maison found.</CommandEmpty>
              <CommandGroup>
                {Maisons.map((Maison) => (
                  <CommandItem
                    key={Maison.value}
                    onSelect={(currentValue) => {
                      setValueMaison(
                        currentValue === valueMaison ? "" : currentValue
                      );
                      setOpenMaison(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueMaison === Maison.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {Maison.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
        <Popover open={openMaisonCountry} onOpenChange={setOpenMaisonCountry}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openMaisonCountry}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueMaisonCountry ? valueMaisonCountry : "Maison Country"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Maison Countrys...' />
              <CommandEmpty>No Maison Country found.</CommandEmpty>
              <CommandGroup>
                {MaisonCountrys.map((MaisonCountry) => (
                  <CommandItem
                    key={MaisonCountry.value}
                    onSelect={(currentValue) => {
                      setValueMaisonCountry(
                        currentValue === valueMaisonCountry ? "" : currentValue
                      );
                      setOpenMaisonCountry(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueMaisonCountry === MaisonCountry.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {MaisonCountry.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>

        <Popover open={openAuctionYear} onOpenChange={setOpenAuctionYear}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openAuctionYear}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-sm text-gray-600 font-medium hover:bg-white hover:text-black '>
              <span className='capitalize  '>
                {valueAuctionYear ? valueAuctionYear : "Auction Year"}
              </span>
              <ChevronDown size={20} />
            </Button>
          </PopoverTrigger>
          <PopoverContent className='w-[150px] p-0'>
            <Command>
              <CommandInput placeholder='Search Auction Years...' />
              <CommandEmpty>No Auction Year found.</CommandEmpty>
              <CommandGroup>
                {AuctionYears.map((auctionYear) => (
                  <CommandItem
                    key={auctionYear.value}
                    onSelect={(currentValue) => {
                      setValueAuctionYear(
                        currentValue === valueAuctionYear ? "" : currentValue
                      );
                      setOpenAuctionYear(false);
                    }}>
                    <Check
                      className={cn(
                        "mr-2 h-4 w-4",
                        valueAuctionYear === auctionYear.value
                          ? "opacity-100"
                          : "opacity-0"
                      )}
                    />
                    {auctionYear.label}
                  </CommandItem>
                ))}
              </CommandGroup>
            </Command>
          </PopoverContent>
        </Popover>
      </div>

      <div className=''>
        <Popover open={openOrder} onOpenChange={setOpenOrder}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openOrder}
              className='w-[140px] justify-between shadow-lg border-gray-400 border-[1.4px] bg-white text-sm text-black hover:bg-white hover:text-black '>
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
    </>
  );
};
