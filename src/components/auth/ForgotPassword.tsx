
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
import { forgotPasswordSchema } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Input = z.infer<typeof forgotPasswordSchema>;

import React, { useState } from "react";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<Input>({
    resolver: zodResolver(forgotPasswordSchema),
    defaultValues: {
      email: "",
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
    <div className=''>
      <Card className='md:w-[590px] w-[370px] rounded-r-[60px] '>
        <CardHeader className='items-center'>
          <CardTitle className="font-semibold py-2 text-lg md:text-4xl pt-24 ">Forgot your password?</CardTitle>
          <CardDescription className='text-gray-600 text-sm md:text-base text-left pt-2 font-medium'>
            We help you to recover it. Fill in your email and we will send you the instrutions to restore it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='px-12 space-y-7 justify-start items-start flex flex-col'>
            
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='md:text-base text-sm font-medium'>Email</FormLabel>
                    <FormControl>
                      <Input className='md:w-[340px] placeholder:font-medium py-6 text-lg' placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
             
            
              <div className='flex justify-center items-center'>
                <Button className='md:px-32 px-[4.8rem] text-md md:text-lg py-2 mr-4' variant='blackWide' type='submit'>
                  Continue
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

