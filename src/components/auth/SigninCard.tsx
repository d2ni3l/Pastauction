'use client'

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
import { registerSchema } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import { completeProfileModal, currentUserAtom, privacyPolicy, selectionAreaModal } from "@/app/atoms/atoms";
type Input = z.infer<typeof registerSchema>;
import { useAtom } from "jotai";
import axios from "axios";
import { useRouter } from "next/navigation";
import { useEffect, useState } from "react";
import { useMutation } from "@tanstack/react-query";
export default function SigninCard() {
  const [invalid, setInvalid] = useState(false)
  const [modal, setModal] = useAtom(privacyPolicy);
  const [loading, setLoading] = useState(false)
  const [selectionAreamodal, setselectionAreamodal] = useAtom(selectionAreaModal);
  const [, setCompleteProfileModal] = useAtom(completeProfileModal)
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom)

  


  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      first_name: "",
      email: "",
      password: "",
      user_category: 19,
      gender: "",
      surname: "",
      country: "",
      nickname: "",
      vat: "",
      address: "",
      city: "",
      phone: "",
      birthdate: "2023-09-01",
    },
  });


  
  const router = useRouter();

const { mutate, data, error, isLoading } = useMutation({
  mutationFn:  (data: Input) => {
     return axios.post('https://pastauction.com/api/v1/sign_up', data)
  },
 
})

  const onSubmit = (signInData: Input) => {  
    mutate(signInData)
  };

  useEffect(() => {
    if (error) {
      setInvalid(true);
    }
    if (data?.data) {
      localStorage.setItem('user', JSON.stringify(data.data))
      router.push("/dashboard");
      setCompleteProfileModal(true)
      setCurrentUser(JSON.parse(localStorage.getItem('user')!))
      
    }

    setLoading(isLoading)

    
  }, [error, data, isLoading])


  

 


  

  

  return (
    <>
      <Card className='md:w-[450px] rounded-r-[60px] w-full '>
        <CardHeader className='items-center'>
          <CardTitle className='font-medium '>Create an account</CardTitle>
          <CardDescription>
            Start your journey with PastAuction!
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
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
              <FormField
                control={form.control}
                name='first_name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name *</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your name' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='email'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='py-0'>Email *</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your email' {...field} />
                    </FormControl>

                    <FormMessage />
                  </FormItem>
                )}
              />
              <FormField
                control={form.control}
                name='user_category'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel className='py-0'>User user_category</FormLabel>
                    <FormControl>
                      <Input placeholder='user category' {...field} />
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
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your password' {...field} />
                    </FormControl>

                    {invalid && (
                      <FormDescription className='text-red-500 text-sm'>
                        User already registred try logging in
                      </FormDescription>
                    )}
                    <FormDescription className='flex justify-between items-center gap-3'>
                      <span>
                        <input type='checkbox' name='' id='' />
                      </span>
                      <span
                        onClick={() => {
                          setModal((prev) => (prev = true));
                        }}>
                        By creating an account, you agree to the{" "}
                        <span className='underline text-black cursor-pointer font-medium'>
                          Terms of use and privacy policy
                        </span>
                        .
                      </span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
          
              <div className='flex justify-center items-center pt-5 focus:scale-[.95] transition-all '>
                <Button className='px-32 flex gap-2' variant='blackWide' type='submit'>
                  Get Started {loading && <Image  src='/images/loadingspinner.svg' alt='loading spinner' width='15' height='15' />}
                </Button>
              </div>
              {/* <div className='text-xs flex justify-center py-2 gap-2'>
                <span className='text-gray-600'>Have an account?</span>
                <Link
                  href='/auth/login'
                  className='underline text-blue-400 cursor-pointer'>
                  Sign In
                </Link>
              </div> */}
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
