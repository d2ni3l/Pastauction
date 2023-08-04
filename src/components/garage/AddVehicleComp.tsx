import React, { useState } from "react";
import { addVehicleSchema } from "@/app/validators/garage";
import Image from "next/image";

import { Button } from "@/components/ui/button";

import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
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

type Input = z.infer<typeof addVehicleSchema>;

export default function AddVehicleComp() {
  const [clrSelected, setClrSelected] = useState("");
  const form = useForm<Input>({
    resolver: zodResolver(addVehicleSchema),
    defaultValues: {
      had_before: "",
      year: "",
      family: "",
      variant: "",
      vehicle_type: "",
      doors: "",
      transmission: "",
      power: "",
      driver_side: "",
      exterior_color: "",
      make: "",
      model: "",
      series: "",
      body: "",
      engine_capacity: "",
      interior_type: "",
      originality: "",
      status: "",
    },
  });
  const onSubmit = () => {
    console.log("hello");
  };
  return (
    <div className='pb-12'>
      <Form {...form}>
        <form onSubmit={form.handleSubmit(onSubmit)} className='sm:mx-5 mx-2'>
          {/* <FormField
                      control={form.control}
                      name=''
                      render={({ field }) => (
                        <FormItem className='space-y-0'>
                          <FormLabel className='text-xs'>Name garage</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Name garage'
                              className='w-[300px] placeholder:text-xs placeholder:font-light'
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    /> */}

          <div className=''>
            <div>
              <div className='flex flex-col gap-5'>
                <h2 className='font-semibold text-lg'>
                  Is this a vehicle you want, have or had?
                </h2>

                <div className='flex gap-7 flex-col sm:flex-row'>
                  <div className='flex   items-center space-x-2'>
                    <Checkbox id='terms' value='I have it' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      I have it
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' value='I want it' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      I want it
                    </label>
                  </div>
                  <div className='flex items-center space-x-2'>
                    <Checkbox id='terms' value='I want it' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      I had it
                    </label>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row gap-10'>
                <div className='flex flex-col gap-5 pt-7'>
                  <FormField
                    control={form.control}
                    name='had_before'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Year</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Family</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Variants</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Vehicle type</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Doors</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
                <div className='flex flex-col gap-5 pt-7'>
                  <FormField
                    control={form.control}
                    name='had_before'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Make</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Model</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Series</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                  <FormField
                    control={form.control}
                    name='family'
                    render={({ field }) => (
                      <FormItem className='space-y-1'>
                        <FormLabel className='text-sm'>Body</FormLabel>
                        <Select
                          onValueChange={field.onChange}
                          defaultValue={field.value}>
                          <FormControl>
                            <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                              <SelectValue />
                            </SelectTrigger>
                          </FormControl>

                          <SelectContent>
                            <SelectItem value='m@example.com'>Italy</SelectItem>
                            <SelectItem value='m@google.com'>
                              Nigeria
                            </SelectItem>
                            <SelectItem value='m@support.com'>
                              Sweden
                            </SelectItem>
                          </SelectContent>
                        </Select>
                      </FormItem>
                    )}
                  />
                </div>
              </div>

              <div className='pt-9'>
                <h3 className='font-semibold text-lg'>Transmission</h3>

                <div className='flex gap-7 pt-5'>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Manual' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Manual
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Automatic' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Automatic
                    </label>
                  </div>
                </div>
              </div>

              <div className='flex flex-col lg:flex-row gap-10 pt-9'>
                <FormField
                  control={form.control}
                  name='had_before'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel className='text-sm'>Power</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value='m@example.com'>Italy</SelectItem>
                          <SelectItem value='m@google.com'>Nigeria</SelectItem>
                          <SelectItem value='m@support.com'>Sweden</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='had_before'
                  render={({ field }) => (
                    <FormItem className='space-y-1'>
                      <FormLabel className='text-sm'>Engine capacity</FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='h-9 w-full lg:w-[400px] bg-white'>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value='m@example.com'>Italy</SelectItem>
                          <SelectItem value='m@google.com'>Nigeria</SelectItem>
                          <SelectItem value='m@support.com'>Sweden</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className='pt-9'>
                <h3 className='font-semibold text-lg'>Driver's Side</h3>

                <div className='flex flex-col sm:flex-row gap-7 pt-3'>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Left hand drive' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Left hand drive
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Left hand drive' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Left hand drive
                    </label>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Center' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Center
                    </label>
                  </div>
                </div>
              </div>

              <div className=' flex flex-col  gap-13 pt-12'>
                <div className='flex flex-col gap-2 '>
                  <h3 className='font-semibold text-lg'>Exterior color</h3>
                  <div className='flex gap-2 flex-wrap items-center'>
                    <div
                      onClick={() => {
                        setClrSelected("exterior1");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-red-600 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior1" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior2");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-yellow-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior2" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior3");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-gray-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior3" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior4");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-white border border-black hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior4" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior5");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-green-800 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior5" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior6");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-black hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior6" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior7");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-blue-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior7" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior8");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#770942] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior8" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior9");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-green-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior9" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior10");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#55b7cc] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior10" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior11");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#898989] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior11" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("exterior12");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#ffad61] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "exterior12" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>

                <div className='flex flex-col gap-2 pt-12'>
                  <h3 className='font-semibold text-lg'>Interior color</h3>
                  <div className='flex gap-2 flex-wrap items-center'>
                    <div
                      onClick={() => {
                        setClrSelected("interior1");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-red-600 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior1" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior2");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-yellow-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior2" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior3");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-gray-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior3" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior4");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-white border border-black hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior4" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior5");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-green-800 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior5" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior6");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-black hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior6" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior7");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-blue-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior7" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior8");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#770942] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior8" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior9");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-green-500 hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior9" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior10");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#55b7cc] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior10" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior11");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#898989] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior11" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                    <div
                      onClick={() => {
                        setClrSelected("interior12");
                      }}
                      className='rounded-lg h-10 w-10 justify-center flex items-center bg-[#ffad61] hover:scale-[.9] transition-all duration-300'>
                      {clrSelected === "interior12" && (
                        <div>
                          <Image
                            src='/images/whitecheck.svg'
                            alt='color selected'
                            width='20'
                            height='20'
                          />
                        </div>
                      )}
                    </div>
                  </div>
                </div>
              </div>

              <div className='pt-12'>
                <h3 className='font-semibold text-lg'>Interior type</h3>

                <div className='flex flex-wrap gap-7 pt-5'>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Leather' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Leather
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Cloth' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Cloth
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Vinyl' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Vinyl
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Alcantara' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Alcantara
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Wood' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Wood
                    </label>
                  </div>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Other' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Other
                    </label>
                  </div>
                </div>
              </div>
              <div className='pt-9'>
                <h3 className='font-semibold text-lg'>Originality</h3>
                <div className='flex flex-wrap gap-7 pt-5'>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Original & highly original' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Original & highly original
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Modifided' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Modifided
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Restore-Modified' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Restore-Modified
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='RestoMod & Custom' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      RestoMod & Custom
                    </label>
                  </div>
                </div>
              </div>

              <div className='pt-9'>
                <h3 className='font-semibold text-lg'>Status</h3>
                <div className='flex flex-wrap gap-7 pt-5'>
                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Concours' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Concours
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Conserved' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Conserved
                    </label>
                  </div>

                  <div className='flex gap-2 items-center'>
                    <Checkbox id='terms' value='Project' />
                    <label
                      htmlFor='terms'
                      className='text-sm font-medium leading-none peer-disabled:cursor-not-allowed peer-disabled:opacity-70'>
                      Project
                    </label>
                  </div>
                </div>
              </div>
            </div>
          </div>

          <div className='pt-20'></div>
          <div className='flex justify-between items-center gap-2'>
            <Link href='/dashboard/garage/'>
              <Button
                type='submit'
                variant='blackWide'
                className='sm:px-32 px-12 font-semibold bg-white hover:bg-black text-black hover:text-white border-black border'>
                Cancel
              </Button>
            </Link>

            <Link href='/dashboard/garage/addvehicledetails'>
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
