import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import ReactStars from "react-rating-star-with-type";
import { infoAreaModal } from "@/app/atoms/atoms";
import { useAtom } from "jotai";

export default function InfoArea() {
  const [starRating, setRating] = useState<number>(4);
  const [, setInfoArea] = useAtom(infoAreaModal);

  return (
    <div>
      <div
        id='staticModal'
        data-modal-backdrop='static'
        aria-hidden='true'
        className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-scroll scroll-hidden md:inset-0  h-full'>
        <div className='relative w-full  h-full flex justify-center items-center overflow-y-scroll scroll-hidden'>
          <div className='relative max-w-sm  sm:max-w-4xl md:w-[600px] mt-[500px] lg:mt-[50px]  bg-white rounded-lg shadow px-10 py-5'>
            <div className='flex justify-between w-full items-center'>
              <Button className='scale-hover' variant='transparent'>
                <Image
                  priority
                  src='/images/infoarea.svg'
                  alt='info area'
                  width='30'
                  height='30'
                />
              </Button>
              <Image
                src='/images/x.svg'
                onClick={() => {
                  setInfoArea((prev) => (prev = false));
                }}
                alt='password saved'
                width='15'
                height='15'
                className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
              />
            </div>

            <div className='pt-5'></div>

            <div className='flex justify-center'>
              <h3 className='text-lg font-semibold'>Info area</h3>
            </div>

            <div className='pt-5'></div>

            <div className='rounded-sm border flex-col flex sm:flex-row sm:justify-start justify-center border-gray-400 sm:p-2 p-4 px-4  gap-5'>
              <Image
                src='/images/infoareaimage.svg'
                alt='image'
                width='150'
                height='150'
                className='  w-full sm:w-auto'
              />

              <div className='flex flex-col gap-2 '>
                <h5 className='font-semibold text-center'>Delete image</h5>
                <p className='text-sm text-gray-500 text-center tracking-wide'>
                  Are you sure you want to delete your photo? This action cannot
                  be undone. Are you sure you want to delete your photo? This
                  action cannot be undone. Are you sure you want to delete your
                  photo? This action cannot be undone. Are you sure you want to
                  delete your photo? This action{" "}
                </p>
              </div>
            </div>

            <div className='justify-end flex gap-1 pt-4'>
              <ReactStars
                onChange={(val) => {
                  setRating(val);
                }}
                value={starRating}
                classNames='space-x-1'
                isEdit={true}
                activeColors={[
                  "red",
                  "orange",
                  "#FFCE00",
                  "#FFCE00",
                  "#FFE70F",
                ]}
                size={18}
              />

              <span className='text-sm'>
                <span className='font-semibold'>{starRating}</span>/
                <span className='text-gray-500'>5</span>
              </span>
            </div>
            <div className='justify-end flex mx-6 pt-3'>
              <button
                className='border py-1 px-4 border-gray-300 scale-hover rounded-sm flex gap-2 items-center'
                onClick={() => {
                  setRating((prev) => (prev = 0));
                }}>
                <svg
                  width='16'
                  height='16'
                  viewBox='0 0 12 13'
                  fill='none'
                  xmlns='http://www.w3.org/2000/svg'>
                  <path
                    d='M4.77704 8.075L9.01454 3.8375C9.11454 3.7375 9.23338 3.6875 9.37104 3.6875C9.50871 3.6875 9.62738 3.7375 9.72704 3.8375C9.82704 3.9375 9.87704 4.05633 9.87704 4.194C9.87704 4.33167 9.82704 4.45033 9.72704 4.55L5.12704 9.15C5.02704 9.25 4.91038 9.3 4.77704 9.3C4.64371 9.3 4.52704 9.25 4.42704 9.15L2.27704 7C2.17704 6.9 2.12904 6.78117 2.13304 6.6435C2.13704 6.50583 2.18921 6.38717 2.28954 6.2875C2.38954 6.1875 2.50838 6.1375 2.64604 6.1375C2.78371 6.1375 2.90238 6.1875 3.00204 6.2875L4.77704 8.075Z'
                    fill='#BCBCBC'
                  />
                </svg>

                <span className='text-gray-400 text-xs'>Done</span>
              </button>
            </div>

            <div className='pt-5 pb-3 flex justify-start'>
              <Button className='w-8 h-8 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
                <Image
                  priority
                  src='/images/chat-bubble.svg'
                  alt='chat bubble'
                  width='20'
                  height='20'
                />
              </Button>
            </div>

            <Textarea
              placeholder='Type your message here.'
              className=' w-full h-48'
              id='message'
            />

            <div className='w-full pt-4 tracking-wide'>
              <Button variant='blackWide' className='w-full'>
                Report
              </Button>
            </div>
          </div>
        </div>
      </div>
    </div>
  );
}

///images/addvehicleplaceholder1.svg
