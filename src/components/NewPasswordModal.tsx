import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "./ui/button";
import { useAtom } from "jotai";
import { newPasswordAtom } from "@/app/atoms/atoms";
export default function NewpasswordModal() {
  const [modal, setModal] = useAtom(newPasswordAtom);
  return (
    <div
      id='staticModal'
      data-modal-backdrop='static'
      aria-hidden='true'
      className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-sm bg-white rounded-lg shadow p-10'>
          <div className='flex justify-end'>
            <Image
              src='/images/x.svg'
              onClick={() => {
                setModal((prev) => (prev = false));
               
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
                src='/images/person-profile.svg'
                alt='password saved'
                width='60'
                height='60'
              />
            </div>

            <div className='flex flex-col gap-3 pt-4 items-center'>
              <h2 className='font-semibold text-lg text-black text-center'>
                Finish reseting your password
              </h2>
              <p className='text-sm text-gray-600 text-center tracking-wide'>
              You are logging in with a temporary password, please reset it within 15 minutes or it will expire.
              </p>
            </div>

            <div className='pt-8 flex gap-3'>
              {" "}
              <Button
                onClick={() => {
                  setModal((prev) => (prev = false));
                }}
                variant='blackWide'
                className='px-9 bg-gray-200 hover:bg-gray-300'>
                <span className='text-sm text-black'>Cancel</span>{" "}
              </Button>
              <Link href='/auth/newpassword'>
                <Button variant='blackWide' className=''>
                  <span className='text-sm'>Reset Password</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
