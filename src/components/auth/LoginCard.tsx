import Image from "next/image";
import { Button } from "@/components/ui/button";
import {
  Card,
  CardContent,
  CardDescription,
  CardFooter,
  CardHeader,
  CardTitle,
} from "@/components/ui/card";
import { Input } from "@/components/ui/input";
import Link from "next/link";
import {
  Form,
  FormControl,
  FormDescription,
  FormField,
  FormItem,
  FormLabel,
  FormMessage,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { loginSchema } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";

type Input = z.infer<typeof loginSchema>;

import React, { useState } from "react";

export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(true);

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",

      password: "",
    },
  });

  console.log(form.watch());
  const onSubmit = (data: Input) => {
    console.log(data);
  };
  return (
    <>
      <Card className='w-[380px] rounded-r-[60px]'>
        <CardHeader className='items-center'>
          <CardTitle>Sign In </CardTitle>
          <CardDescription>
            Start your journey with Pastauction!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              <div className='flex justify-center items-center gap-4'>
                <button className='flex justify-center items-center bg-white hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9 '>
                  <Image
                    src='/images/google-logo.svg'
                    alt='google signin'
                    width={20}
                    height={20}
                  />
                </button>
                <button className='flex justify-center items-center bg-black hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9'>
                  <Image
                    src='/images/apple-logo.svg'
                    alt='google signin'
                    width={20}
                    height={20}
                  />
                </button>
                <button className='flex justify-center items-center bg-blue-700 hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9'>
                  <Image
                    src='/images/facebook-logo.svg'
                    alt='google signin'
                    width={20}
                    height={20}
                  />
                </button>
              </div>

              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Email</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password</FormLabel>
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
                    <FormDescription className='flex justify-between gap-3 pt-2 pb-4'>
                      <span className='flex gap-1'>
                        <input type='checkbox' name='' id='' />
                        <span className='text-black'>Remember me</span>
                      </span>
                      <span className='underline text-blue-500'>
                        Forgot password
                      </span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex justify-center items-center'>
                <Button className='px-16' variant='blackWide' type='submit'>
                  Sign In
                </Button>
              </div>
              <div className='text-xs flex justify-center py-5 gap-2'>
                <span className='text-gray-600'>Don't an account?</span>
                <Link
                  href='/auth/signin'
                  className='underline text-blue-400 cursor-pointer'>
                  Sign Up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}