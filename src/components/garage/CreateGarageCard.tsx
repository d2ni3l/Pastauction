import React, { useState } from "react";
import { garageSchema } from "@/app/validators/garage";
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
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
  FormDescription,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import { Textarea } from "../ui/textarea";

type Input = z.infer<typeof garageSchema>;
export default function CreateGarageCard() {
  const form = useForm<Input>({
    resolver: zodResolver(garageSchema),
    defaultValues: {
      vehicle_desc: "",
      garage_image: "",
      country: "",
      vehicle_capacity: "",
    },
  });

  const [filebase64, setFileBase64] = useState<string>("");

  function convertFile(files: FileList | null) {
    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      console.log("This file upload is of type:", fileType);
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }
  console.log(form.watch());
  const onSubmit = () => {};

  return (
    <>
      <div className=''>
        <div className='pb-10 pt-10 max-w-4xl mx-3 '>
          <div className='flex justify-center  '>
            <div className='flex flex-col justify-center mx-2 lg:mx-0 rounded-md bg-white    items-center w-[448px] h-[727px]'>
              <div className='pb-12'>
                <div className=' flex flex-col items-center gap-4 pt-6'>
                  <h3 className='font-semibold text-xl '>Content</h3>
                  <p className='text-sm'>Upload a photo of your garage</p>
                </div>

                <div className='pt-5 flex justify-center'>
                  {filebase64 ? (
                    <div className='relative'>
                      <Image
                        src={filebase64}
                        alt='garage pic'
                        height='130'
                        width='130'
                        className='rounded-full w-[130px] h-[130px]'
                      />

                      <Image
                        src='/images/deleteimage.svg'
                        alt='delete image'
                        width='25'
                        height='25'
                        onClick={() => {
                          setFileBase64("");
                        }}
                        className='absolute -bottom-[1px]  cursor-pointer  -right-[1px] '
                      />
                    </div>
                  ) : (
                    <>
                      <label htmlFor='file'>
                        <div className='flex  bg-gray-100 w-[130px] h-[130px] rounded-full cursor-pointer hover:scale-[.9] transition-all duration-300 shadow-lg items-center justify-center gap-2'>
                          <Image
                            src='/images/uploadimg.svg'
                            alt='select garage image'
                            height='20'
                            width='20'
                          />
                          <span className='text-xs text-blue-500 font-medium'>
                            Upload photo
                          </span>
                        </div>
                      </label>
                      <input
                        type='file'
                        name=''
                        onChange={(e) => convertFile(e.target.files)}
                        className='hidden'
                        id='file'
                      />
                    </>
                  )}
                </div>

                <Form {...form}>
                  <form
                    onSubmit={form.handleSubmit(onSubmit)}
                    className=' pt-12 space-y-3 '>
                    <FormField
                      control={form.control}
                      name='garage_name'
                      render={({ field }) => (
                        <FormItem className='space-y-0'>
                          <FormLabel className='text-xs'>Name garage</FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Name garage'
                              className='w-[300px] placeholder:text-xs placeholder:font-light'
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='country'
                      render={({ field }) => (
                        <FormItem className='space-y-0'>
                          <FormLabel className='text-xs'>Country</FormLabel>
                          <Select
                            onValueChange={field.onChange}
                            defaultValue={field.value}>
                            <FormControl>
                              <SelectTrigger className='h-9'>
                                <SelectValue />
                              </SelectTrigger>
                            </FormControl>

                            <SelectContent>
                              <SelectItem value='m@example.com'>
                                Italy
                              </SelectItem>
                              <SelectItem value='m@google.com'>
                                Nigeria
                              </SelectItem>
                              <SelectItem value='m@support.com'>
                                Sweden
                              </SelectItem>
                            </SelectContent>
                          </Select>
                        </FormItem>
                      )}
                    />

                    <FormField
                      control={form.control}
                      name='vehicle_capacity'
                      render={({ field }) => (
                        <FormItem className='space-y-0'>
                          <FormLabel className='text-xs'>
                            Vehicle capacity
                          </FormLabel>
                          <FormControl>
                            <Input
                              placeholder='Vehicle capacity'
                              className='placeholder:text-xs placeholder:font-light'
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <FormField
                      control={form.control}
                      name='vehicle_desc'
                      render={({ field }) => (
                        <FormItem className='space-y-0'>
                          <FormLabel className='text-xs'>
                            Additional description
                          </FormLabel>
                          <FormControl>
                            <Textarea
                              placeholder='Write here'
                              className='placeholder:text-xs placeholder:font-light '
                              {...field}
                            />
                          </FormControl>
                        </FormItem>
                      )}
                    />
                    <div className='pt-1'></div>
                    <Button
                      type='submit'
                      variant='blackWide'
                      className='w-full'>
                      Continue
                    </Button>
                  </form>
                </Form>
              </div>
            </div>

            <Image
              src='/images/creategarageimg.svg'
              alt='photo'
              width='2'
              height='2'
              className=' min-h-[100%] object-fill image  hidden lg:block  w-[448px] h-[727px]'
            />
          </div>
        </div>
      </div>
    </>
  );
}
