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
  const onSubmit = (data: Input) => {
    

    postData("https://pastauction.com/api/v1/login", data)
    .then((response) => {
        console.log(response);
    })
    .catch((error) => {
        console.error("Error:", error);
    });


  
  };
  return (
    <>
      <Card className='w-[470px] rounded-r-[60px] '>
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
                name='name'
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
                name='password'
                render={({ field }) => (
                  <FormItem>
                    <FormLabel>Password *</FormLabel>
                    <FormControl>
                      <Input placeholder='Enter your password' {...field} />
                    </FormControl>
                    <FormDescription className='flex justify-between items-center gap-3'>
                      <span>
                        <input type='checkbox' name='' id='' />
                      </span>
                      <span>
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
              <div className='flex justify-center items-center pt-5'>
                <Button className='px-32' variant='blackWide' type='submit'>
                  Get Started
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
