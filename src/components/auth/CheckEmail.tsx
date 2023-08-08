
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
import {  checkEmail } from "../../app/validators/auth";
import { z } from "zod";
import {useRouter} from 'next/navigation'
import { zodResolver } from "@hookform/resolvers/zod";
import {inter} from '@/app/fonts'
type Input = z.infer<typeof checkEmail>;

import React, { useState } from "react";
import Image from "next/image";

export default function ForgotPassword() {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<Input>({
    resolver: zodResolver(checkEmail),
    defaultValues: {
      code: "",
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

const handleSubmit = (e : any) => {
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
          <CardTitle className="font-[500] py-2 text-3xl md:text-4xl pt-24 ">Check your email</CardTitle>
          <CardDescription className='text-gray-600 text-sm ml-12  text-left pt-2 pb-3 font-medium'>
            For security reasons we have sent an access code to your email adress ca*******@gmail.com
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(handleSubmit)} className='px-12 space-y-7 justify-start items-center flex flex-col'>
            
              <FormField
                control={form.control}
                name='code'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>Enter the 6 digit-code</FormLabel>
                    <FormControl>
                      <Input className='md:w-[440px] w-fill  placeholder:font-medium py-6 text-lg border-gray-700' placeholder='Enter the code' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='w-full sm:flex-row flex-col gap-2 pb-2'>
                <span className="text-gray-600">
                Did you not receive the code?{" "}
                </span>
                <span className='underline text-blue-500'>Resend code</span>
              </div>
             
            
              <div className='flex justify-center items-center w-full'>
                <Button  className='md:w-[445px] w-full  text-md md:text-lg py-2  tracking-wide ' variant='blackWide' type='submit'>
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

