
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
import {inter} from '@/app/fonts'
import { useRouter } from "next/navigation";

type Input = z.infer<typeof forgotPasswordSchema>;

import React, { useState } from "react";
import Image from "next/image";

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
const router = useRouter()
const handleSubmit = () => {
  router.push('/auth/newpassword')

 }  

 console.log(form.watch())
 return (
    <div className={inter.className}>
      <Card className='md:w-[590px]  w-screen rounded-r-[60px] relative'>
        <Link href='/auth/login' className="absolute left-0 mt-10 ml-12  cursor-pointer">
          <Image
          src='/images/arrow-left.svg'
          alt='go back'
          width='35'
          height='35'

/>
        </Link>
        <CardHeader className='items-center'>
          <CardTitle className="font-[500] py-2 text-xl md:text-4xl pt-24 ">Forgot your password?</CardTitle>
          <CardDescription className='text-gray-600 text-sm ml-12  text-left pt-2 pb-3 font-medium'>
            We help you to recover it. Fill in your email and we will send you the instrutions to restore it.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='px-12 space-y-7 justify-start items-center flex flex-col'>
            
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>Email</FormLabel>
                    <FormControl>
                      <Input className='md:w-[440px] w-fill  placeholder:font-medium py-6 text-lg border-gray-700' placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
             
            
              <div className='flex justify-center items-center w-full'>
                <Button className='md:w-[445px] w-full  text-md md:text-lg py-2  tracking-wide ' variant='blackWide' type='submit'>
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

