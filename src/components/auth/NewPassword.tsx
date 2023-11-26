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

import React, { useEffect, useState } from "react";
import Image from "next/image";
import { useRouter } from "next/navigation";

import { useMutation } from "@tanstack/react-query";
import axios from "axios";
import { currentUserAtom, newPasswordAtom, resettedPasswordAtom } from "@/app/atoms/atoms";
import { useAtom } from "jotai";

export default function NewPassword() {
const [currentUser, setCurrentUser] = useAtom(currentUserAtom)
const [resettedPassword, setResettedPassword] = useAtom(resettedPasswordAtom)
  const [showPassword, setShowPassword] = useState(true);
  const [invalid, setInvalid] = useState(false)
  const [, setNewPassword] = useAtom(newPasswordAtom)



  const form = useForm<Input>({
    resolver: zodResolver(newPassword),
    defaultValues: {
      password: "",
      user_category: 19,
      gender: '',
      first_name: '',
      surname: '',
      address: '',
      city: '',
      country: '',
      birthdate: '2023-09-01',
      phone: '',
      vat: '',
      nickname: '',
      currency: '',
    },
  });

  
  const  router = useRouter()

  const onSubmit = (data: Input) => {

mutate(data)    
    
   

  };



  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (data : Input) => {
      return axios.put(`https://pastauction.com/api/v1/user_info_update`, data,  {
        headers: {
          Authorization: `Bearer ${localStorage.getItem('accessToken')}`,  

        },
      }
      );
    },
  });



  useEffect(() => {
   if(data){
    setResettedPassword(true)
    router.push('/dashboard')
    localStorage.setItem('user', JSON.stringify(data.data))
    setCurrentUser(JSON.parse(localStorage.getItem('user')!))
    setNewPassword(false)

    

   }

   if (error){
    setInvalid(true)
   }
  }, [data, error])


 
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
          {invalid && (
            <CardDescription className='text-red-600 font-medium'>
              Internal server error! Pls try again.
          </CardDescription>
          )}
          
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form
              onSubmit={form.handleSubmit(onSubmit)}
              className='px-12 space-y-7 justify-start items-center flex flex-col'>
              <FormField
                control={form.control}
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>
                      Password
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
                name='password'
                render={({ field }) => (
                  <FormItem className='w-full'>
                    <FormLabel className='md:text-base text-base font-medium'>
                      Repeated Password
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
                  type='submit'
                  
                  >
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
