"use client";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import { inter } from "@/app/fonts";
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { confirmIdentitySchema } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Input = z.infer<typeof confirmIdentitySchema>;

import React, { useState } from "react";
import Image from "next/image";

export default function ConfirmIdentity() {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<Input>({
    resolver: zodResolver(confirmIdentitySchema),
    defaultValues: {
      password: "",
    },
  });

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
      method: "POST",
      headers: {
        "Content-Type": "application/json",
      },
      body: JSON.stringify(data),
    });

    return await response.json();
  }
  //   const onSubmit = (data: Input) => {

  //     postData("https://pastauction.com/api/v1/login", data)
  //     .then((response) => {
  //         console.log(response);
  //     })
  //     .catch((error) => {
  //         console.error("Error:", error);
  //     });

  //   };
  const handleSubmit = () => {};

  const cancelledInput = ''
  return (
    <div className={inter.className}>
      <Card className='md:w-[590px] w-screen rounded-r-[60px] flex flex-col md:items-start items-center pb-20'>
        <CardHeader className=''>
          <CardTitle className='font-[500]  py-1 text-3xl md:text-4xl pt-12 px-12 '>
            Confirm your email
          </CardTitle>
          <CardDescription className='text-gray-600  md:text-base text-left pt-1 pb-6 px-12 font-medium'>
            Check your email and verify your account
          </CardDescription>
        </CardHeader>
        <CardContent>
          {/* <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='px-12  justify-start items-start flex flex-col'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-sm font-medium'>
                      Enter the 6 digit-code
                    </FormLabel>
                    <div className='flex relative items-center'>
                      <FormControl>
                        <Input
                          className={`${
                            showPassword ? "" : "hide-password"
                          } md:w-[440px] placeholder:font-medium  placeholder:text-black/80 py-6 text-lg shadow-lg border-gray-700`}
                          placeholder='XXXXXX'
                          
                           
                          {...field}
                        />
                      </FormControl>

                      <button
                        type='button'
                        className='absolute right-6 '
                        onClick={() => {
                          setShowPassword(!showPassword);
                        }}>
                        <Image
                          src='/images/cancel-text.svg'
                          alt='hise password'
                          width='18'
                          height='18'
                        />
                      </button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <span className="pt-7"></span>
             

              <div className='flex justify-center items-center w-full'>
                <Button
                  className='md:w-[440px] w-full text-md md:text-lg py-2 '
                  variant='blackWide'
                  type='submit'>
                  Get started
                </Button>
              </div>
              <div className='pb-32'></div>
            </form>
          </Form> */}

<div className='w-full sm:flex-row flex-col  justify-between pb-2'>
                <span className="text-gray-600">
                Did you not receive the email?{" "}
                </span>
                <span className='underline text-blue-500'>Resend email</span>
              </div>

          <Button
                  className='md:w-[440px] w-full text-md md:text-lg py-2 '
                  variant='blackWide'
                  type='submit'>
                  Get started
                </Button>
        </CardContent>
      </Card>
    </div>
  );
}
