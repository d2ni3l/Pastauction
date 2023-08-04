import React from "react";
import { vehiclesDetailsSchema } from "@/app/validators/garage";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Checkbox } from "../ui/checkbox";
type Input = z.infer<typeof vehiclesDetailsSchema>;

export default function AddVehicleDetails() {
  const form = useForm<Input>({
    resolver: zodResolver(vehiclesDetailsSchema),
    defaultValues: {
      mileage: "",
      miles: "",
      original_miles: "",
      locate: "",
      plate_numb: "",
      vin: "",
      permits: "",
    },
  });

  const onSubmit = () => {
    console.log("hello i was submitted ");
  };
  return (
    <div className='flex justify-center pb-20'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className=''>
          <div className='flex flex-col gap-8 pt-7'>
            <div className='flex flex-col lg:flex-row gap-10'>
              <FormField
                control={form.control}
                name='mileage'
                render={({ field }) => (
                  <FormItem className='space-y-1'>
                    <FormLabel className='font-semibold text-sm'>
                      Mileage
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder='Mileage'
                        className='lg:w-[400px] bg-white placeholder:text-xs placeholder:font-light'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='mileage'
                render={({ field }) => (
                  <FormItem className='space-y-1'>
                    <FormLabel className='font-semibold text-sm text-transparent select-none'>
                      Mileage
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder='Mileage'
                        className='lg:w-[400px] bg-white placeholder:text-xs placeholder:font-light'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <div className=''>
              <h3 className='font-semibold text-sm'>Original miles</h3>

              <div className='flex gap-7 pt-5'>
                <div className='flex gap-2 items-center'>
                  <Checkbox id='terms' value='Yes' />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Yes
                  </label>
                </div>

                <div className='flex gap-2 items-center'>
                  <Checkbox id='terms' value='Unknow' />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Unknow
                  </label>
                </div>
              </div>
            </div>

            <div className='flex flex-col lg:flex-row gap-10'>
              <FormField
                control={form.control}
                name='locate'
                render={({ field }) => (
                  <FormItem className='space-y-1'>
                    <FormLabel className='font-semibold text-sm'>
                      Locate
                    </FormLabel>
                    <Select
                      onValueChange={field.onChange}
                      defaultValue={field.value}>
                      <FormControl>
                        <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                          <SelectValue />
                        </SelectTrigger>
                      </FormControl>

                      <SelectContent>
                        <SelectItem value='m@example.com'>Nigeria</SelectItem>
                        <SelectItem value='m@google.com'>20</SelectItem>
                        <SelectItem value='m@support.com'>40</SelectItem>
                      </SelectContent>
                    </Select>
                  </FormItem>
                )}
              />

              <FormField
                control={form.control}
                name='vin'
                render={({ field }) => (
                  <FormItem className='space-y-1'>
                    <FormLabel className='font-semibold text-sm'>
                      Plate Numb
                    </FormLabel>

                    <FormControl>
                      <Input
                        placeholder='plate numb'
                        className='lg:w-[400px] bg-white placeholder:text-xs placeholder:font-light'
                        {...field}
                      />
                    </FormControl>
                  </FormItem>
                )}
              />
            </div>

            <FormField
              control={form.control}
              name='vin'
              render={({ field }) => (
                <FormItem className='space-y-1'>
                  <FormLabel className='font-semibold text-sm'>Vin</FormLabel>
                  <FormDescription className='text-xs'>
                    If you know it, add your VIN or Chassis Number below.
                  </FormDescription>

                  <FormControl>
                    <Input
                      placeholder='WZATR1002348857'
                      className='lg:w-[400px] bg-white placeholder:text-xs placeholder:font-light'
                      {...field}
                    />
                  </FormControl>
                </FormItem>
              )}
            />

            <div className=''>
              <h3 className='font-semibold text-sm'>Permits</h3>

              <div className='flex gap-7 pt-5'>
                <div className='flex gap-2 items-center'>
                  <Checkbox
                    id='terms'
                    value='Allow displaying information about my vehicle'
                  />
                  <label
                    htmlFor='terms'
                    className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                    Allow displaying information about my vehicle
                  </label>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-20'></div>
          <div className='flex justify-between items-center gap-2'>
            <Link href='/dashboard/garage/addvehicledetails'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold bg-white hover:bg-black text-black hover:text-white border-black border'>
                Cancel
              </Button>
            </Link>

            <Link href='/dashboard/garage/addvehiclephoto'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold'>
                Continue
              </Button>
            </Link>
          </div>
        </form>
      </Form>
    </div>
  );
}
