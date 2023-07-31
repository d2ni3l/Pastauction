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
import {
  Form,
  FormControl,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { newPassword } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { inter } from "@/app/fonts";
type Input = z.infer<typeof newPassword>;

import React, { useState } from "react";
import Image from "next/image";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(true);
  const [match, setMatch] = useState(false);

  const form = useForm<Input>({
    resolver: zodResolver(newPassword),
    defaultValues: {
      password: "",
      confirm: "",
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

  const handleSubmit = (data: Input) => {
    console.log("im submiteed");
  };

  console.log(form.watch());
  return (
    <div className={inter.className}>
      <Card className='md:w-[590px]  w-screen rounded-r-[60px] relative'>
        <Link
          href='/auth/checkemail'
          className='absolute left-0 mt-10 ml-12  cursor-pointer'>
          <Image
            src='/images/arrow-left.svg'
            alt='go back'
            width='35'
            height='35'
          />
        </Link>
        <CardHeader className='items-center'>
          <CardTitle className='font-[500] py-2 text-xl md:text-4xl pt-24 '>
            Enter a new password
          </CardTitle>
          <CardDescription className='text-gray-600 text-sm ml-12  text-left pt-2 pb-3 font-medium'>
            We help you to recover it. Fill in your email and we will send you
            the instrutions to restore it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(handleSubmit)}
              className='px-12 space-y-7 justify-start items-center flex flex-col'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>
                      password
                    </FormLabel>
                    <div className='flex relative items-center'>
                      <FormControl>
                        <Input
                          className={`${showPassword ? "" : "hide-password"}`}
                          placeholder='password'
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
                          src='/images/password-eye.svg'
                          alt='hise password'
                          width='12'
                          height='12'
                        />
                      </button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='confirm'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>
                      Repeat password
                    </FormLabel>
                    <div className='flex relative items-center'>
                      <FormControl>
                        <Input
                          className={`${showPassword ? "" : "hide-password"}`}
                          placeholder='password'
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
                          src='/images/password-eye.svg'
                          alt='hise password'
                          width='12'
                          height='12'
                        />
                      </button>
                    </div>

                    <FormMessage />
                  </FormItem>
                )}
              />

              <div className='flex justify-center items-center w-full'>
                <Button
                  className='md:w-[445px] w-full  text-md md:text-lg py-2  tracking-wide '
                  variant='blackWide'
                  type='submit'>
                  Save
                </Button>
              </div>
              <div className='pb-24'></div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}