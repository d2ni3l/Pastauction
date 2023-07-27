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

type Input = z.infer<typeof registerSchema>;
export default function SigninCard() {
  const form = useForm<Input>({
    resolver: zodResolver(registerSchema),
    defaultValues: {
      email: "",
      name: "",
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
          <CardTitle>Create an account</CardTitle>
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
                name='name'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Name</FormLabel>
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
                    <FormControl>
                      <Input placeholder='Enter your password' {...field} />
                    </FormControl>
                    <FormDescription className='flex justify-between items-center gap-3'>
                      <span>
                        <input type='checkbox' name='' id='' />
                      </span>
                      <span>
                        By creating an account, you agree to the{" "}
                        <span className='underline text-black cursor-pointer'>
                          Terms of use and privacy policy
                        </span>
                        .
                      </span>
                    </FormDescription>
                    <FormMessage />
                  </FormItem>
                )}
              />
              <div className='flex justify-center items-center'>
                <Button className='px-16' variant='blackWide' type='submit'>
                  Submit
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </>
  );
}
