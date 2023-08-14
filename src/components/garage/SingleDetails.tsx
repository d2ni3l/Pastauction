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
import React from "react";

const dataPlaceholder = [
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
  {
    imageSrc: "/images/singledetailsplaceholder.svg",
    year: "1986",
    brand: "Porsche",
    model: "911-11",
    maison: "",
    view: "View",
  },
];

const brands = [
  {
    value: "Porsche",
    label: "Porsche",
  },
  {
    value: "Mercedes Benz",
    label: "Mercedes Benz",
  },
  {
    value: 'Fiat',
    label : 'Fiat'
  }
];

const familys = [
  {
    value: "XXX family",
    label: "XXX family",
  },
  {
    value: "YYY family",
    label: "YYY family",
  },
  {
    value: 'ZZZ family',
    label : 'ZZZ family'
  }
];

const types = [
  {
    value: "Suv",
    label: "Suv",
  },
  {
    value: "Sedan",
    label: "Sedan",
  },
  {
    value: 'Coupe',
    label : 'Coupe'
  }
];

const orders = [
  {
    value: "Sales price",
    label: "Sales price",
  },
  {
    value: "Year",
    label: "Year",
  },
  {
    value: 'Maison',
    label : 'Maison'
  }
];

const ages = [
  {
    value: "1989",
    label: "1989",
  },
  {
    value: "2007",
    label: "2007",
  },
  {
    value: '2013',
    label : '2013'
  }
];

export function SingleDetails() {
  const [openOrder, setOpenOrder] = React.useState(false);
  const [valueOrder, setValueOrder] = React.useState("");
  
  const [openBrand, setOpenBrand] = React.useState(false);
  const [valueBrand, setValueBrand] = React.useState("");

  const [openFamily, setOpenFamily] = React.useState(false);
  const [valueFamily, setValueFamily] = React.useState("");

  const [openType, setOpenType] = React.useState(false);
  const [valueType, setValueType] = React.useState("");

  const [openAge, setOpenAge] = React.useState(false);
  const [valueAge, setValueAge] = React.useState("");

  return (
    <div className='overflow-auto pb-12'>
      <div className="grid sm:grid-cols-4 grid-cols-2 justify-center place-items-center gap-5 bg-white px-5 py-5 shadow-lg rounded-sm mb-5">
        <Popover open={openBrand} onOpenChange={setOpenBrand}>
        <PopoverTrigger asChild>
          <Button
            variant='blackWide'
            role='combobox'
            aria-expanded={openBrand}
            className='w-full  justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
            <span className='capitalize  '>{valueBrand ? valueBrand : "Brand"}</span>
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search brands...' />
            <CommandEmpty>No brand found.</CommandEmpty>
            <CommandGroup>
              {brands.map((brand) => (
                <CommandItem
                  key={brand.value}
                  onSelect={(currentValue) => {
                    setValueBrand(currentValue === valueBrand ? "" : currentValue);
                    setOpenBrand(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      valueBrand === brand.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {brand.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover> 
      
       <Popover open={openFamily} onOpenChange={setOpenFamily}>
        <PopoverTrigger asChild>
          <Button
            variant='blackWide'
            role='combobox'
            aria-expanded={openFamily}
            className='w-full justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
            <span className='capitalize  '>{valueFamily ? valueFamily : "Family"}</span>
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search family...' />
            <CommandEmpty>No family found.</CommandEmpty>
            <CommandGroup>
              {familys.map((family) => (
                <CommandItem
                  key={family.value}
                  onSelect={(currentValue) => {
                    setValueFamily(currentValue === valueFamily ? "" : currentValue);
                    setOpenFamily(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      valueFamily === family.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {family.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>  

      <Popover open={openType} onOpenChange={setOpenType}>
        <PopoverTrigger asChild>
          <Button
            variant='blackWide'
            role='combobox'
            aria-expanded={openType}
            className='w-full justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
            <span className='capitalize  '>{valueType ? valueType : "Type"}</span>
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search type...' />
            <CommandEmpty>No type found.</CommandEmpty>
            <CommandGroup>
              {types.map((type) => (
                <CommandItem
                  key={type.value}
                  onSelect={(currentValue) => {
                    setValueType(currentValue === valueType ? "" : currentValue);
                    setOpenType(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      valueType === type.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {type.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>  

       <Popover open={openAge} onOpenChange={setOpenAge}>
        <PopoverTrigger asChild>
          <Button
            variant='blackWide'
            role='combobox'
            aria-expanded={openAge}
            className='w-full justify-between border-gray-400 border-[1.4px] bg-white text-gray-600 font-medium hover:bg-white hover:text-black '>
            <span className='capitalize  '>{valueAge ? valueAge : "age"}</span>
            <ChevronDown size={20} />
          </Button>
        </PopoverTrigger>
        <PopoverContent className='w-[200px] p-0'>
          <Command>
            <CommandInput placeholder='Search age...' />
            <CommandEmpty>No age found.</CommandEmpty>
            <CommandGroup>
              {ages.map((age) => (
                <CommandItem
                  key={age.value}
                  onSelect={(currentValue) => {
                    setValueType(currentValue === valueAge ? "" : currentValue);
                    setOpenType(false);
                  }}>
                  <Check
                    className={cn(
                      "mr-2 h-4 w-4",
                      valueAge === age.value ? "opacity-100" : "opacity-0"
                    )}
                  />
                  {age.label}
                </CommandItem>
              ))}
            </CommandGroup>
          </Command>
        </PopoverContent>
      </Popover>  
      </div>

      
      <Popover open={openOrder} onOpenChange={setOpenOrder}>
        <PopoverTrigger asChild>
          <Button
            variant='blackWide'
            role='combobox'
            aria-expanded={openOrder}
            className='w-[140px] justify-between shadow-lg border-gray-400 border-[1.4px] bg-white text-black hover:bg-white hover:text-black '>
            <span className='capitalize  '>{valueOrder ? valueOrder : "Order by"}</span>
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
                    setValueOrder(currentValue === valueOrder ? "" : currentValue);
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
     
      <div className='flex justify-center'>
       

        <div className='order-1 sm:order-2'>
          <h2 className='text-3xl font-semibold text-black pb-2'>Single details</h2>
        </div>

        
      </div>
      
      <Table>
        <TableHeader >
          <TableRow className='border-t-[3px] !border-b-[3px] border-black'>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Photo
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Year
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black'>
              Brand
            </TableHead>
            <TableHead className='select-none'>
              <span className="text-transparent">j</span>

            </TableHead>
           
            <TableHead className='font-semibold lg:text-sm text-black  w-[50px]'>
              Model
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black '>
              Maison
            </TableHead>
            <TableHead className='select-none'>
              <span className="text-transparent">j</span>

            </TableHead>
            <TableHead className='select-none'>
              <span className="text-transparent">j</span>

            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  '>
              <span className=''> Val min</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  '>
              <span className=''> Val max</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  '>
              <span className=''> Sales</span>
            </TableHead>
            <TableHead className='font-semibold lg:text-sm text-black  '>
              <span className=''> Country</span>
            </TableHead>
           
          </TableRow>
        </TableHeader>

        <TableBody>
          {dataPlaceholder.map((data) => {
            return (
              <TableRow key={data.brand}>
                <TableCell>
                  <Link href='/garage/garageviewdetails'>
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
                <TableCell className='select-none'><span className="text-transparent">3</span></TableCell>
               
                <TableCell className='font-medium'>{data.model}</TableCell>
                <TableCell className='font-medium'>{data.maison}</TableCell>
                <TableCell className='select-none'><span className="text-transparent">3</span></TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
                </TableCell>
                <TableCell className='font-semibold lg:text-sm text-black select-none  '>
                  <span className='text-transparent'> </span>
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
