import Link from "next/link";
import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { Textarea } from "../ui/textarea";
import {
  Select,
  SelectContent,
  SelectItem,
  SelectTrigger,
  SelectValue,
} from "@/components/ui/select";
import ReactStars from "react-rating-star-with-type";
interface ChatBubble{
    setChatBubble: React.Dispatch<React.SetStateAction<boolean>>
}

export default function ChatBubble({setChatBubble}:ChatBubble) {
  const [starRating, setRating] = useState<number>(4);
  return (
    <div
      id='staticModal'
      data-modal-backdrop='static'
      aria-hidden='true'
      className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-4xl md:w-[500px] lg:w-[550px] bg-white rounded-lg shadow px-10 py-5'>
          <div className='flex justify-between w-full'>
            <Button className='w-8 h-8 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
              <Image
                priority
                src='/images/chat-bubble.svg'
                alt='chat bubble'
                width='20'
                height='20'
              />
            </Button>
            <Image
              src='/images/x.svg'
                onClick={() => {
                  setChatBubble((prev) => (prev = false));
                  
                }}
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='pt-5'></div>

          <div className='flex justify-center'>
            <Select>
              <SelectTrigger className=' relative w-[250px] focus:ring-[#ed99a1]'>
                <SelectValue placeholder='Please select' />
                <Image
                  className='absolute right-3'
                  src='/images/errorselect.svg'
                  alt='error'
                  width='15'
                  height='15'
                  sizes='30'
                />
              </SelectTrigger>
              <SelectContent>
                <SelectItem value='suggested improvement'>
                  suggested improvement
                </SelectItem>
                <SelectItem value='blacking error'>blocking error</SelectItem>
                <SelectItem value='lack of information'>
                  lack of information
                </SelectItem>
                <SelectItem value='well done'>well done</SelectItem>
                <SelectItem value='must'>must</SelectItem>
              </SelectContent>
            </Select>
          </div>

          <div className='pt-5'></div>

          <Textarea
            placeholder='Type your message here.'
            className=' w-full h-48'
            id='message'
          />

          <div className='justify-end flex gap-1 pt-2'>
            <ReactStars
              onChange={(val) => {
                setRating(val);
              }}
              value={starRating}
              classNames='space-x-1'
              isEdit={true}
              activeColors={["red", "orange", "#FFCE00", "#FFCE00", "#FFE70F"]}
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
                setRating((prev) => prev = 0);
              }}
              >
              <svg
                width='16'
                height='16'
                viewBox='0 0 16 16'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <path
                  d='M11.5312 7.00051H15.4632C15.5107 7.00053 15.5572 7.01408 15.5973 7.03958C15.6373 7.06508 15.6693 7.10147 15.6895 7.14449C15.7096 7.18751 15.7171 7.23538 15.711 7.28249C15.7049 7.3296 15.6856 7.37401 15.6552 7.41051L13.6892 9.77051C13.6657 9.79865 13.6363 9.82128 13.6032 9.83682C13.57 9.85235 13.5338 9.8604 13.4972 9.8604C13.4605 9.8604 13.4243 9.85235 13.3912 9.83682C13.358 9.82128 13.3286 9.79865 13.3052 9.77051L11.3392 7.41051C11.3088 7.37401 11.2894 7.3296 11.2833 7.28249C11.2772 7.23538 11.2847 7.18751 11.3048 7.14449C11.325 7.10147 11.357 7.06508 11.3971 7.03958C11.4371 7.01408 11.4837 7.00053 11.5312 7.00051ZM0.531156 9.00051H4.46316C4.51066 9.00049 4.55718 8.98694 4.59726 8.96144C4.63734 8.93595 4.66932 8.89956 4.68947 8.85654C4.70961 8.81352 4.71709 8.76565 4.71101 8.71853C4.70493 8.67142 4.68556 8.62701 4.65516 8.59051L2.68916 6.23051C2.66569 6.20238 2.63633 6.17974 2.60316 6.16421C2.56998 6.14868 2.53379 6.14062 2.49716 6.14062C2.46052 6.14062 2.42434 6.14868 2.39116 6.16421C2.35798 6.17974 2.32862 6.20238 2.30516 6.23051L0.339156 8.59051C0.308754 8.62701 0.28938 8.67142 0.283304 8.71853C0.277227 8.76565 0.2847 8.81352 0.304846 8.85654C0.324992 8.89956 0.356977 8.93595 0.397058 8.96144C0.437138 8.98694 0.483653 9.00049 0.531156 9.00051Z'
                  fill='#BCBCBC'
                />
                <path
                  fill-rule='evenodd'
                  clip-rule='evenodd'
                  d='M8.00294 2.99779C6.45094 2.99779 5.06294 3.70479 4.14594 4.81579C4.10499 4.86886 4.05379 4.91316 3.99538 4.94605C3.93697 4.97894 3.87254 4.99975 3.80593 5.00724C3.73931 5.01473 3.67187 5.00874 3.60762 4.98965C3.54336 4.97055 3.48361 4.93873 3.4319 4.89607C3.38019 4.85342 3.33758 4.8008 3.30661 4.74135C3.27565 4.68189 3.25695 4.61682 3.25164 4.55C3.24632 4.48318 3.2545 4.41597 3.27568 4.35237C3.29686 4.28877 3.33062 4.23008 3.37494 4.17979C4.10713 3.29332 5.07853 2.6358 6.1736 2.28545C7.26867 1.93509 8.44134 1.90664 9.55211 2.20348C10.6629 2.50032 11.665 3.10995 12.4393 3.95988C13.2137 4.8098 13.7276 5.86424 13.9199 6.99779H12.9029C12.6721 5.8686 12.0583 4.85378 11.1655 4.12494C10.2726 3.39609 9.15549 2.99793 8.00294 2.99779ZM3.10294 8.99779C3.29225 9.92241 3.73929 10.7746 4.39241 11.4559C5.04554 12.1372 5.8781 12.6199 6.7939 12.8481C7.7097 13.0763 8.67138 13.0407 9.56783 12.7455C10.4643 12.4503 11.2589 11.9075 11.8599 11.1798C11.9009 11.1267 11.9521 11.0824 12.0105 11.0495C12.0689 11.0166 12.1333 10.9958 12.1999 10.9883C12.2666 10.9809 12.334 10.9868 12.3983 11.0059C12.4625 11.025 12.5223 11.0569 12.574 11.0995C12.6257 11.1422 12.6683 11.1948 12.6993 11.2542C12.7302 11.3137 12.7489 11.3788 12.7542 11.4456C12.7596 11.5124 12.7514 11.5796 12.7302 11.6432C12.709 11.7068 12.6753 11.7655 12.6309 11.8158C11.8987 12.7023 10.9273 13.3598 9.83227 13.7101C8.7372 14.0605 7.56454 14.0889 6.45376 13.7921C5.34299 13.4953 4.34084 12.8856 3.56653 12.0357C2.79221 11.1858 2.27831 10.1313 2.08594 8.99779H3.10294Z'
                  fill='#BCBCBC'
                />
              </svg>

              <span className='text-gray-400 text-xs'>Reset</span>
            </button>
          </div>

          <div
            
            className='w-full pt-4 tracking-wide'>
            <Button variant='blackWide' className='w-full'>
              Report
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
