import Image from "next/image";
import React from "react";
import { ScrollArea } from "@/components/ui/scroll-area";
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
export default function Maison() {
  const dataPlaceholder = [
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
    {
      year: "1959",
      brand: "Porsche Diesel",
      model: "Junior 108 K",
      reserve: "",
      high_bid: "",
      val_min: "20,000",
      val_max: "30,000",
      change: "EUR",
      sales: "10,195",
      photo: "/images/auctioneventsphotoplaceholder.svg",
      lot: "197",
    },
  ];
  const dataPlaceholder2 = [
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "United States",
      country_flag: "/images/usflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "United States",
      country_flag: "/images/usflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },
    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "United States",
      country_flag: "/images/usflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },


    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },

    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "United States",
      country_flag: "/images/usflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },


    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },


    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "United States",
      country_flag: "/images/usflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },



    {
      date: "12/04/2019",
      auction_event: "Tecno classica",
      city: "Essen",
      country: "Germany",
      country_flag: "/images/germanyflag.svg",
      nr_vehicle_offered: "221",
      nr_vehicle_sold: "221",
      sold: "84.36%",
      totals_sales: "18,581,306",
      avg_sales: "104,81,306",
      top_sold: "2,25,800",
    },

  ];
  return (
    <div>
      <div className='flex gap-10'>
        <div className='bg-white   shadow-md pb-7  w-full rounded-md px-5'>
          <div className=''>
            <h4 className='font-bold text-lg pt-5'>Event information</h4>
          </div>

          <div className='flex  items-center pt-3'>
            <p className='text-black text-sm font-[400]'>
              Event data: <span className='font-medium'>12/04/2023</span>
            </p>
          </div>

          <div className='flex flex-col gap-4 pt-4'>
            <div className='flex gap-2'>
              <Image
                src='/images/usflag.svg'
                height='21'
                width='41'
                alt='country flag'
              />
              <h3 className='font-semibold text-lg'>RM | Sotheby</h3>
            </div>

            <div className='flex gap-2'>
              <Image
                src='/images/germanyflag.svg'
                height='21'
                width='41'
                alt='country flag'
              />
              <div className='flex flex-col'>
                <div className='flex gap-4 font-medium '>
                  <h3 className='font-semibold text-lg'>Techo Classica</h3>{" "}
                  <span className='text-blue-500 underline cursor-pointer'>
                    Vehicles
                  </span>{" "}
                  <span className='text-blue-500 underline cursor-pointer'>
                    Events
                  </span>
                </div>
                <p className='text-gray-600 font-[400]'>
                  Gruga Hall, Norbertstrabe 2, 45131, Essen (DEU)
                </p>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white px-5 w-full shadow-md'>
          <ScrollArea className='bg-red-400 '>hello</ScrollArea>
        </div>
      </div>

      <div className='pt-5' />
      <Filters />

      <div className='bg-white p-5 mt-10 shadow-md'>
        <Table>
          <TableHeader>
            <TableRow className=' border-black'>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                Year
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Brand
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Model
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Reserve
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                High Bid
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Val min
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Val max
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Change
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Sales
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Photo
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Lot
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dataPlaceholder.map((data, i) => {
              return (
                <TableRow
                  key={data.brand}
                  className={`${i % 2 === 1 ? "bg-[#dee2e6]" : "bg-white"}`}>
                  <TableCell className='font-medium border-[2px] border-[#ced4da]'>
                    {data.year}
                  </TableCell>
                  <TableCell className='font-medium border-[2px] border-[#ced4da]'>
                    {data.brand}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.model}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.reserve}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.high_bid}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.val_min}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.val_max}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.change}
                  </TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.sales}
                  </TableCell>
                  <TableCell
                    className='font-medium text-black border-[2px] border-[#ced4da]  background-img'
                    style={{
                      backgroundImage: `url(${data.photo})`,
                    }}></TableCell>
                  <TableCell className='font-medium text-black border-[2px] border-[#ced4da]'>
                    {data.lot}
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

      <div className='bg-white shadow-md mt-10 p-5'>
        <Table>
          <TableHeader>
            <TableRow className=' border-black'>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]'>
                Date
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Auction event
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                City
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Country
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da] '>
                Nr vehicle offered
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Nr vehicle sold
              </TableHead>

              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                % Sold
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Total sales
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Avg sales
              </TableHead>
              <TableHead className='font-semibold lg:text-sm text-black bg-[#cfe2ff] border-[2px] border-[#ced4da]  '>
                Top sold
              </TableHead>
            </TableRow>
          </TableHeader>

          <TableBody>
            {dataPlaceholder2.map((data, i) => {
              return (
                <TableRow
                  key={data.sold}
                  className={`${i % 2 === 1 ? "bg-[#dee2e6]" : "bg-white"}`}>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.date}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-blue-500 underline'>
                    {data.auction_event}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.city}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500 flex justify-between items-center gap-8'>
                    <span>{data.country}</span>
                    <span>
                      <Image
                        src={data.country_flag}
                        alt='country flag'
                        width='40'
                        height='40'
                      />
                    </span>
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.nr_vehicle_offered}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.nr_vehicle_sold}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.sold}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.totals_sales}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.avg_sales}
                  </TableCell>
                  <TableCell className='font-medium  border-[2px] border-[#ced4da] text-gray-500'>
                    {data.top_sold}
                  </TableCell>
                </TableRow>
              );
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
      <div className='grid sm:grid-cols-4 md:grid-cols-5 lg:grid-cols-7 grid-cols-2 justify-center place-items-center gap-5 bg-white px-5 py-5 shadow-lg rounded-sm mb-5'>
        <Popover open={openArea} onOpenChange={setOpenArea}>
          <PopoverTrigger asChild>
            <Button
              variant='blackWide'
              role='combobox'
              aria-expanded={openArea}
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
              className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
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
    </>
  );
};
