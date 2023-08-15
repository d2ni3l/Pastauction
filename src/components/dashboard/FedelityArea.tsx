import React from "react";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";
export default function FedelityArea() {
  const approvedModify = [
    {
      period: "Week",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Month",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Year",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Global",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
  ];
  const rejectedModify = [
    {
      period: "Week",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Month",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Year",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
    {
      period: "Global",
      vehicle_classified: "",
      vehicle_update: "",
      color_update: "",
      notes: "",
      points: "",
    },
  ];

  const totalData = [
    {
      totals: "Points",
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
    {
      totals: "Global",
      jan: "",
      feb: "",
      mar: "",
      apr: "",
      may: "",
      jun: "",
      jul: "",
      aug: "",
      sep: "",
      oct: "",
      nov: "",
      dec: "",
    },
  ];
  return (
    <div className='w-full pb-12'>
      <div className='flex justify-center'>
        <h2 className='text-3xl font-semibold text-black'>Fedelity area</h2>
      </div>
      <div className='mt-2 mb-3 border-black border-2'></div>

      <div className='pt-7'></div>

      <div className='flex justify-start py-3'>
        <h6 className='text-gray-600 text-sm font-semibold '>
          Approved modify
        </h6>
      </div>

      <Table className='overflow-x-auto'>
        <TableHeader className=' border-black border-none'>
          <TableRow className='border-none'>
            <TableHead className='select-none text-transparent bg-[#dee2e6] border-[2.5px] border-gray-[#dee2e6]'>
              lorem lorem.
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Vehicle classified
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Vehicle update
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Color update
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Notes
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Points
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {approvedModify.map((data) => (
            <TableRow key={data.period} className='border-none'>
              <TableCell className='font-medium bg-[#fae8b1] border-[2.5px] border-gray-[#dee2e6]'>
                {data.period}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.vehicle_classified}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.vehicle_update}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.color_update}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.notes}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='pt-7'></div>

      <div className='flex justify-start py-3'>
        <h6 className='text-gray-600 text-sm font-semibold '>
          Rejected modify
        </h6>
      </div>

      <Table className='overflow-x-auto'>
        <TableHeader className=' border-black border-none'>
          <TableRow className='border-none'>
            <TableHead className='select-none text-transparent bg-[#dee2e6] border-[2.5px] border-gray-[#dee2e6]'>
              lorem lorem.
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Vehicle classified
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Vehicle update
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Color update
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Notes
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] border-gray-[#dee2e6]'>
              Points
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {rejectedModify.map((data) => (
            <TableRow key={data.period} className='border-none'>
              <TableCell className='font-medium bg-[#fae8b1] border-[2.5px] border-gray-[#dee2e6]'>
                {data.period}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.vehicle_classified}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.vehicle_update}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.color_update}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.notes}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.points}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>

      <div className='pt-7'></div>

      <div className='flex justify-start py-3'>
        <h6 className='text-gray-600 text-sm font-semibold '>Totals</h6>
      </div>

      <Table className='overflow-x-auto'>
        <TableHeader className=' border-black border-none'>
          <TableRow className='border-none'>
            <TableHead className='bg-[#dee2e6] font-semibold text-black border-[2.5px]  border-gray-[#dee2e6]'>
              Total
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Jan
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Feb
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Mar
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Apr
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              May
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Jun
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Jul
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Aug
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Sep
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Oct
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Nov
            </TableHead>
            <TableHead className='bg-[#cecece] font-semibold text-black border-[2.5px] uppercase border-gray-[#dee2e6]'>
              Dec
            </TableHead>
          </TableRow>
        </TableHeader>
        <TableBody>
          {totalData.map((data) => (
            <TableRow key={data.totals} className='border-none'>
              <TableCell className='font-medium bg-[#fae8b1] border-[2.5px] border-gray-[#dee2e6]'>
                {data.totals}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.jun}
              </TableCell>
              <TableCell className='border-[2.5px] border-gray-[#dee2e6]'>
                {data.feb}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.mar}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.apr}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.may}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.jun}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.jul}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.aug}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.sep}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.oct}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.nov}
              </TableCell>
              <TableCell className='text-right border-[2.5px] border-gray-[#dee2e6]'>
                {data.dec}
              </TableCell>
            </TableRow>
          ))}
        </TableBody>
      </Table>
    </div>
  );
}
