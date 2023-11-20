"use client"

import * as React from "react"
import { Check, ChevronDown,} from "lucide-react"

import { cn } from "@/lib/utils"
import { Button } from "@/components/ui/button"
import {
  Command,
  CommandEmpty,
  CommandGroup,
  CommandInput,
  CommandItem,
} from "@/components/ui/command"
import {
  Popover,
  PopoverContent,
  PopoverTrigger,
} from "@/components/ui/popover"
import Link from "next/link"

const orders = [
  {
    value: "Older first",
    label: "Older first",
  },
  {
    value: "Newer first",
    label: "Newer first",
  },
  
]

export function Order_AddGarage() {
  const [open, setOpen] = React.useState(false)
  const [value, setValue] = React.useState("")
  return (
    <div className="flex bg-white  px-7 pt-7 pb-5 rounded-lg justify-between shadow-lg">
        <Popover open={open} onOpenChange={setOpen}>
      <PopoverTrigger asChild >
        <Button
          variant="blackWide"
          role="combobox"
          aria-expanded={open}
          className="w-[140px] justify-between   scale-hover"
        >
          <span className='capitalize '>{value ? value
            : "Order by"}</span>
          <ChevronDown size={20} />
         
        </Button>
      </PopoverTrigger>
      <PopoverContent className="w-[200px] p-0">
        <Command>
          <CommandInput placeholder="Search order..." />
          <CommandEmpty>No order found.</CommandEmpty>
          <CommandGroup>
            {orders.map((order) => (
              <CommandItem
                key={order.value}
                onSelect={(currentValue) => {
                  setValue(currentValue === value ? "" : currentValue)
                  setOpen(false)
                }}
              >
                <Check
                  className={cn(
                    "mr-2 h-4 w-4",
                    value === order.value ? "opacity-100" : "opacity-0"
                  )}
                />
                {order.label}
              </CommandItem>
            ))}
          </CommandGroup>
        </Command>
      </PopoverContent>
    </Popover>

    <Button variant='blackWide'>
          <Link href='/garage/creategarage' className="w-[120px]">
          Add garage
          </Link>
          </Button>

    </div>

  )
}
