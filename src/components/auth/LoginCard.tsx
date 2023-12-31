"use client";

import Image from "next/image";
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
import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { login } from "@/app/hooks/usePostData";
import { useAtom } from "jotai";
import { AxiosError } from "axios";
import {
  accessTokenAtom,
  confirmIdentityAtom,
  currentUserAtom,
  forgottedPassword,
  newPasswordAtom,
  selectionAreaModal,
} from "@/app/atoms/atoms";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

type Input = z.infer<typeof loginSchema>;
export default function LoginCard() {
  const [showPassword, setShowPassword] = useState(true);
  const [invalid, setInvalid] = useState(false);
  const [loading, setLoading] = useState(false);
  const [forgotPassword, setForgottedPassword] = useAtom(forgottedPassword);
  const [, setNewPassword] = useAtom(newPasswordAtom);
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [accessToken, setAccessToken] = useAtom(accessTokenAtom);
  const [confirmIdentity, setConfirmIdentity] = useAtom(confirmIdentityAtom)
  const [emailInvalid, setEmailInvalid] = useState(false)

  const form = useForm<Input>({
    resolver: zodResolver(loginSchema),
    defaultValues: {
      email: "",
      password: "",
    },
  });

  const { mutate, data, error, isLoading } = login();
  const router = useRouter();



  const onSubmit = (info: Input) => {
    mutate(info);
  };

  const { refetch: fetchInitial } = useQuery({
    queryKey: ["getUser"],

    queryFn: async () => {
      const { data } = await axios.get(
        `https://pastauction.com/api/v1/user_info`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return data;
    },
    enabled: false,

    onSuccess: (data) => {
      localStorage.setItem("user", JSON.stringify(data));
     
      setCurrentUser(JSON.parse(localStorage.getItem('user')!))
    },
  });

  useEffect(() => {
    if (error) {
      setInvalid(true);
    }
    if (data?.data?.access_token) {
      // login success

      fetchInitial();
      setAccessToken(
        localStorage.setItem("accessToken", data?.data?.access_token)
      );

     
      setConfirmIdentity(false)

      router.push('/dashboard')


      

      //
      if (forgotPassword) {
        setForgottedPassword(false);
        setNewPassword(true);
      }
    }
    setLoading(isLoading);


   
    
  }, [error, data, isLoading]);





  return (
    <div className='w-full'>
      <Card className='md:w-[450px] rounded-r-[60px] w-full'>
        <CardHeader className='items-center'>
          <CardTitle className='font-medium py-2 text-2xl md:text-4xl'>
            Sign In{" "}
          </CardTitle>
          <CardDescription className='text-[15px]'>
            {forgotPassword &&(
              <span className='text-center font-medium flex justify-center'>
                If mail exists...message has been sent! Check your email inbox
                and spam
              </span>
            )}
            {!confirmIdentity && !forgotPassword && ( <span>Welcome back! Login to your account</span> )}
            {confirmIdentity && (
              <span className='text-center font-medium flex justify-center'>
                Confirm your identity, click on the link we sent to your email address...
              </span>
            )}
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              {forgotPassword ? (
                ""
              ) : (
                <>
                  <div className='flex justify-center items-center gap-4'>
                    <button
                      type='button'
                      className='flex justify-center items-center bg-white hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9 '>
                      <Image
                        src='/images/google-logo.svg'
                        alt='google signin'
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      type='button'
                      className='flex justify-center items-center bg-black hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9'>
                      <Image
                        src='/images/apple-logo.svg'
                        alt='google signin'
                        width={20}
                        height={20}
                      />
                    </button>
                    <button
                      type='button'
                      className='flex justify-center items-center bg-blue-700 hover:scale-[.9] transition-all duration-300 shadow-xl rounded-lg py-4 px-9'>
                      <Image
                        src='/images/facebook-logo.svg'
                        alt='google signin'
                        width={20}
                        height={20}
                      />
                    </button>
                  </div>
                  <div className='flex justify-center items-center pt-2 pb-2'>
                    <span className='text-base font-medium'>Or</span>
                  </div>
                </>
              )}
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
                    {invalid && (
                      <FormDescription className='text-red-500 text-sm'>
                        Invalid Password or Email
                      </FormDescription>
                    )}

                    <FormDescription className='flex justify-between gap-3 pt-2 pb-4'>
                      <span className='flex gap-1'>
                        <input type='checkbox' name='' id='' />
                        <span className='text-black'>Remember me</span>
                      </span>
                      <Link
                        href='/auth/forgotpassword'
                        className='underline text-blue-500'>
                        Forgot password
                      </Link>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex justify-center items-center'>
                <Button
                  className='px-32 flex gap-2'
                  variant='blackWide'
                  type='submit'>
                  Sign In{" "}
                  {loading && (
                    <Image
                      src='/images/loadingspinner.svg'
                      alt='loading spinner'
                      width='15'
                      height='15'
                    />
                  )}
                </Button>
              </div>
              <div className='text-xs flex justify-center py-5 gap-1'>
                <span className='text-gray-600'>Don't have an account?</span>
                <Link
                  href='/auth/signin'
                  className='underline text-blue-400 cursor-pointer'>
                  Sign up
                </Link>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}
