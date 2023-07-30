
'use client'
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
import {  newPassword } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {inter} from '@/app/fonts'
type Input = z.infer<typeof newPassword>;

import React, { useState } from "react";

export default function NewPassword() {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<Input>({
    resolver: zodResolver(newPassword),
    defaultValues: {
      password: "",
    },
  });

  async function postData(url = "", data = {}) {
    const response = await fetch(url, {
        method: "POST",
        headers: {
            "Content-Type": "application/json"
        },
        body: JSON.stringify(data)
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
const handleSubmit =
 () => {

 }  

 console.log(form.watch())
 return (
    <div className={inter.className}>
      <Card className='md:w-[590px]  w-screen rounded-r-[60px] relative'>
        <CardHeader className='items-center'>
          <CardTitle className="font-[600] py-2 text-4xl md:text-4xl pt-24 ">Enter a new password?</CardTitle>
          
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='px-12 space-y-7 justify-start items-center flex flex-col'>
            
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-'>password</FormLabel>
                    <FormControl>
                      <Input className='md:w-[440px] w-fill  placeholder:font-medium py-6 text-lg border-gray-700' placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-'>Repeat password</FormLabel>
                    <FormControl>
                      <Input className='md:w-[440px] w-fill  placeholder:font-medium py-6 text-lg border-gray-700' placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
             
            
              <div className='flex justify-center items-center w-full'>
                <Button className='md:w-[445px] w-full  text-md md:text-lg py-2  tracking-wide ' variant='blackWide' type='submit'>
                  Save
                </Button>
              </div>
              <div className="pb-24"></div>
              
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

