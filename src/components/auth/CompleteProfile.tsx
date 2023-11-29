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
  FormField,
  FormItem,
  FormMessage,
  FormLabel,
} from "@/components/ui/form";
import { useForm } from "react-hook-form";
import { completeProfile } from "../../app/validators/auth";
import { z } from "zod";
import { zodResolver } from "@hookform/resolvers/zod";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";

import React, { useEffect, useState } from "react";
import { useRouter } from "next/navigation";
import { useAtom } from "jotai";
import {
  accessTokenAtom,
  currentUserAtom,
  deleteImage,
} from "@/app/atoms/atoms";
import { completeProfileModal } from "@/app/atoms/atoms";
import { useMutation } from "@tanstack/react-query";
import axios from "axios";

export default function CompleteProfile() {
  const [filebase64, setFileBase64] = useState<string>("");
  const [deleteImageModal, setDeleteImageModal] = useAtom(deleteImage);
  const [currentUser, setCurrentUser] = useAtom(currentUserAtom);
  const [, setModal] = useAtom(completeProfileModal);
  const [accessToken] = useAtom(accessTokenAtom);
  const [completedProfile, setCompletedProfile] = useState(false);
  const [fileInput, setFileInput] = useState<any>("");
  // validate image

  type Input = z.infer<typeof completeProfile>;

  const form = useForm<Input>({
    resolver: zodResolver(completeProfile),
    defaultValues: {
      password: "",
      user_category: 19,
      gender: "",
      first_name: "",
      surname: "",
      address: "",
      city: "",
      country: "",
      birthdate: "2023-09-01",
      phone: "",
      vat: "",
      nickname: "",
      currency: "",
    },
  });

  const router = useRouter();

  const onSubmit = (data: Input) => {
    mutate(data);
  };

  function convertFile(files: FileList | null) {
    setFileInput(files?.[0]);

    if (files) {
      const fileRef = files[0] || "";
      const fileType: string = fileRef.type || "";
      const reader = new FileReader();
      reader.readAsBinaryString(fileRef);
      reader.onload = (ev: any) => {
        // convert it to base64
        setFileBase64(`data:${fileType};base64,${btoa(ev.target.result)}`);
      };
    }
  }

  const { mutate, data, error, isLoading } = useMutation({
    mutationFn: (data: Input) => {
      return axios.put(
        `https://pastauction.com/api/v1/user_info_update`,
        data,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
    },
  });

  useEffect(() => {
    if (data?.data) {
      localStorage.setItem("user", JSON.stringify(data?.data));
      setCurrentUser(JSON.parse(localStorage.getItem("user")!));
      setCompletedProfile(true);
    }
  }, [data]);

  const handlePostImage = () => {
    const formData = new FormData();
    console.log(fileInput)
    
    formData.append('file', new File([fileInput], fileInput.name))


   
     

     axios.post(
            `https://pastauction.com/api/v1/profile_image/`,
            formData,
            {
              headers: {
                Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
                "Content-Type": "multipart/form-data",
              },
            }
          ).then((res) => console.log(res)).catch((err) => console.log(err))
  };



  // const {
  //   mutate: getImage,
  //   data: imageData,
  //   error: imageError,
  // } = useMutation({
  //   mutationFn: (formData: FormData) => {
  //     return axios.post(
  //       `https://pastauction.com/api/v1/profile_image/`,
  //       formData,
  //       {
  //         headers: {
  //           Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
  //           "Content-Type": "multipart/form-data",
  //         },
  //       }
  //     );
  //   },
  // });



  return (
    <div className='w-full'>
      {deleteImageModal && (
        <DeleteImageModal
          setDeleteImageModal={setDeleteImageModal}
          setFileBase64={setFileBase64}
        />
      )}

      {completedProfile && (
        <CompletedProfileModal setCompletedProfile={setCompletedProfile} />
      )}

      <Card className='md:w-[450px] rounded-r-[60px] w-full'>
        <CardHeader className='items-start'>
          <CardTitle className='font-medium  md:text-2xl text-left text-xl'>
            Personal information
          </CardTitle>
          <CardDescription className='text-xs'>
            Complete the data with your personal information.
          </CardDescription>
        </CardHeader>
        <CardContent>
          <Form {...form}>
            <form onSubmit={form.handleSubmit(onSubmit)} className='space-y-2'>
              <div className='flex justify-center items-center '>
                {!filebase64 && (
                  <>
                    <label htmlFor='file'>
                      <div className='flex flex-col bg-gray-100 w-24 h-20 cursor-pointer hover:scale-[.9] transition-all duration-300 shadow-lg items-center rounded-lg justify-center gap-3'>
                        <Image
                          src='/images/selecfile-plus.svg'
                          alt='select file'
                          height='15'
                          width='15'
                        />
                        <span className='text-xs text-gray-600 font-medium'>
                          Upload
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
                {filebase64 && (
                  <div className='relative'>
                    <Image
                      src={filebase64}
                      alt='profile picture'
                      className='w-24 h-20 rounded-md'
                      width='96'
                      height='80'
                    />

                    <Image
                      src='/images/deleteimage.svg'
                      alt='delete image'
                      width='25'
                      height='25'
                      onClick={() => {
                        setDeleteImageModal((prev) => (prev = true));
                      }}
                      className='absolute -bottom-2 cursor-pointer  -right-1 '
                    />
                  </div>
                )}
              </div>

              <button
                className='bg-red-400 p-4 rounded-md'
                type='button'
                onClick={handlePostImage}>
                post image
              </button>
              <div className='flex justify-center items-center pt-1 pb-1'>
                <span className='text-gray-600 font-medium text-xs'>
                  Select your image profile
                </span>
              </div>
              <div className='flex flex-col gap-3'>
                <FormField
                  control={form.control}
                  name='gender'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='placeholder:text-xs placeholder:text-gray-600 h-9 '
                          placeholder='Mr/Mrs'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='first_name'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='placeholder:text-xs placeholder:text-gray-600 h-9'
                          placeholder='First name'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='surname'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='placeholder:text-xs placeholder:text-gray-600 h-9'
                          placeholder='Surname'
                          {...field}
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='birthdate'
                  render={({ field }) => (
                    <FormItem>
                      <FormControl>
                        <Input
                          className='placeholder:text-xs placeholder:text-gray-600 h-9'
                          onFocus={(e) => (e.target.type = "date")}
                          placeholder='Date'
                          {...field}
                          type='text'
                        />
                      </FormControl>
                      <FormMessage />
                    </FormItem>
                  )}
                />

                <FormField
                  control={form.control}
                  name='country'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <FormLabel className='py-0 my-0 text-xs text-gray-600'>
                        Country
                      </FormLabel>
                      <Select
                        onValueChange={field.onChange}
                        defaultValue={field.value}>
                        <FormControl>
                          <SelectTrigger className='h-9'>
                            <SelectValue />
                          </SelectTrigger>
                        </FormControl>

                        <SelectContent>
                          <SelectItem value='m@example.com'>Italy</SelectItem>
                          <SelectItem value='m@google.com'>Nigeria</SelectItem>
                          <SelectItem value='m@support.com'>Sweden</SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
                <FormField
                  control={form.control}
                  name='city'
                  render={({ field }) => (
                    <FormItem className='space-y-0'>
                      <FormLabel className='py-0 my-0 text-xs text-gray-600'>
                        City
                      </FormLabel>
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
                            m@example.com
                          </SelectItem>
                          <SelectItem value='m@google.com'>
                            m@google.com
                          </SelectItem>
                          <SelectItem value='m@support.com'>
                            m@support.com
                          </SelectItem>
                        </SelectContent>
                      </Select>
                    </FormItem>
                  )}
                />
              </div>

              <div className='flex justify-center items-center'>
                <Button
                  className='px-32 mt-3'
                  variant='blackWide'
                  type='submit'>
                  Complete
                </Button>
              </div>
            </form>
          </Form>
        </CardContent>
      </Card>
    </div>
  );
}

interface DeleteImageModal {
  setDeleteImageModal: (arg0: boolean) => void;
  setFileBase64: (arg0: string) => void;
}

const DeleteImageModal = ({
  setFileBase64,
  setDeleteImageModal,
}: DeleteImageModal) => {
  return (
    <div className='fixed bg-black/50 top-0 left-0 right-0  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full z-50'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-sm bg-white rounded-lg shadow p-10'>
          <div className='flex justify-end'>
            <Image
              src='/images/x.svg'
              onClick={() => {
                setDeleteImageModal(false);
              }}
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image
                src='/images/delete-image.svg'
                alt='password saved'
                width='60'
                height='60'
              />
            </div>

            <div className='flex flex-col gap-3 pt-4 items-center'>
              <h2 className='font-semibold text-lg text-black'>Delete image</h2>
              <p className='text-xs text-gray-600 text-center tracking-wide'>
                Are you sure you want to delete your photo? This action can't be
                undone.
              </p>
            </div>

            <div className='pt-8 flex gap-3'>
              <Button
                onClick={() => {
                  setDeleteImageModal(false);
                }}
                variant='blackWide'
                className='px-9 bg-gray-200 hover:bg-gray-300'>
                <span className='text-sm text-black'>Cancel</span>
              </Button>

              <Button
                onClick={() => {
                  setFileBase64("");
                  setDeleteImageModal(false);
                }}
                variant='blackWide'
                className='px-10'>
                <span className='text-sm'>Delete</span>
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};

interface CompletedProfileProps {
  setCompletedProfile: (arg0: boolean) => void;
}

const CompletedProfileModal = ({
  setCompletedProfile,
}: CompletedProfileProps) => {
  const router = useRouter();
  return (
    <div className='fixed bg-black/50 top-0 left-0 right-0  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full z-50'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-sm bg-white rounded-lg shadow p-10'>
          <div className='flex justify-end'>
            <Image
              src='/images/x.svg'
              onClick={() => {
                setCompletedProfile(false);
              }}
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image
                src='/images/savedcheckedmark.svg'
                alt='password saved'
                width='60'
                height='60'
              />
            </div>

            <div className='flex flex-col gap-3 pt-4 items-center'>
              <h2 className='font-semibold text-lg text-black'>
                Profile Completed
              </h2>
              <p className='text-xs text-gray-600 text-center tracking-wide'>
                You have completed the data with your personal info.
              </p>
            </div>

            <div className='pt-8 flex gap-3'>
              <Link href='/dashboard'>
                <Button variant='blackWide' className='px-10'>
                  <span className='text-sm'>Go to dashboard</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
};
