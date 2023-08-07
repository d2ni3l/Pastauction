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

const invoices = [
  {
    invoice: "INV001",
    paymentStatus: "Paid",
    totalAmount: "$250.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV002",
    paymentStatus: "Pending",
    totalAmount: "$150.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV003",
    paymentStatus: "Unpaid",
    totalAmount: "$350.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV004",
    paymentStatus: "Paid",
    totalAmount: "$450.00",
    paymentMethod: "Credit Card",
  },
  {
    invoice: "INV005",
    paymentStatus: "Paid",
    totalAmount: "$550.00",
    paymentMethod: "PayPal",
  },
  {
    invoice: "INV006",
    paymentStatus: "Pending",
    totalAmount: "$200.00",
    paymentMethod: "Bank Transfer",
  },
  {
    invoice: "INV007",
    paymentStatus: "Unpaid",
    totalAmount: "$300.00",
    paymentMethod: "Credit Card",
  },
];

export function GarageView() {
  return (
    <div>
      <div className='flex justify-between py-5 '>
        <div className='flex gap-7 pt-5 '>

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

        <div className=''>
          <h2 className='text-3xl font-semibold text-black'>Garage view</h2>
        </div>

        <div className='flex gap-8 pt-5'>
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
          {invoices.map((invoice) => (
            <TableRow key={invoice.invoice}>
              <TableCell className='font-medium'>{invoice.invoice}</TableCell>
              <TableCell>{invoice.paymentStatus}</TableCell>
              <TableCell>{invoice.paymentMethod}</TableCell>
              <TableCell className=''>{invoice.totalAmount}</TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
