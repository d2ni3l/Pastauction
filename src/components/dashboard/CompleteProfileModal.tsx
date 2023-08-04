import Link from "next/link";
import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
import { useAtom } from "jotai";
import { completeProfileModal } from "@/app/atoms/atoms";
import { selectionAreaModal } from "@/app/atoms/atoms";
export default function CompleteProfileModal() {
  const [modal, setModal] = useAtom(completeProfileModal);
  const [selectedModal, setSelectedModal] = useAtom(selectionAreaModal);
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
                setSelectedModal(true);
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
              <h2 className='font-semibold text-lg text-black'>
                Finish completing your information
              </h2>
              <p className='text-sm text-gray-600 text-center tracking-wide'>
                Complete your account information to discover the benefit of
                Past Auction.
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
              <Link href='/auth/completeprofile'>
                <Button variant='blackWide' className=''>
                  <span className='text-sm'>Complete profile</span>
                </Button>
              </Link>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}
