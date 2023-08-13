import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { Button } from "../ui/button";
import { inter } from "@/app/fonts";
import { Collapse } from "react-collapse";
import {
  Table,
  TableBody,
  TableCaption,
  TableCell,
  TableHead,
  TableHeader,
  TableRow,
} from "@/components/ui/table";

export default function AuctionVehicleDetails() {
  const [collasped, setCollasped] = useState(false);
  const [save, setSaved] = useState(false)

  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
   
  ];
 

  return (
    <div className={`${inter.className} pb-10`}>
      <div className='grid xl:grid-cols-2 2xl:grid-cols-3 gap-10  place-items-center relative xl:place-items-start'>
        <div className='flex  flex-col gap-7   max-w-[1000px] col-span-2'>
          <div className=' flex  justify-center  '>
            <button className='absolute flex gap-2 rounded-sm py-3 bg-white px-4 shadow-lg top-0 right-0'>
              <svg
                width='24'
                height='24'
                viewBox='0 0 24 24'
                fill='none'
                xmlns='http://www.w3.org/2000/svg'>
                <g clip-path='url(#clip0_103_569900)'>
                  <rect width='24' height='24' fill='white' />
                  <path
                    d='M11.9998 4.12207L10.9243 3.01657C8.39984 0.421573 3.77084 1.31707 2.09984 4.57957C1.31534 6.11407 1.13834 8.32957 2.57084 11.1571C3.95084 13.8796 6.82184 17.1406 11.9998 20.6926C17.1778 17.1406 20.0473 13.8796 21.4288 11.1571C22.8613 8.32807 22.6858 6.11407 21.8998 4.57957C20.2288 1.31707 15.5998 0.420073 13.0753 3.01507L11.9998 4.12207ZM11.9998 22.5001C-10.9997 7.30207 4.91834 -4.55993 11.7358 1.71457C11.8258 1.79707 11.9143 1.88257 11.9998 1.97107C12.0845 1.88265 12.1725 1.79759 12.2638 1.71607C19.0798 -4.56293 34.9993 7.30057 11.9998 22.5001Z'
                    fill='#D80027'
                  />
                </g>
                <defs>
                  <clipPath id='clip0_103_569900'>
                    <rect width='24' height='24' fill='white' />
                  </clipPath>
                </defs>
              </svg>
              <span className="font-medium text-black">Save</span>
            </button>
            <div>
              <div className='flex gap-5'>
                <Image
                  src='/images/flagenglandplaceholder.svg'
                  alt='country flag'
                  width='50'
                  height='50'
                />
                <h1 className='text-lg lg:text-xl font-bold text-black'>
                  Jaguar 207 Daimier Super Eight
                </h1>
              </div>

              <div className='flex gap-4 justify-between items-center pb-4 pt-2'>
                <h2 className='text-lg lg:text-xl font-bold text-black'>
                  $1,682,500 USD
                </h2>
                <button className='bg-[#ffc107] hover:bg-[#ffc107]/80 py-[6px] px-12 uppercase font-medium rounded-sm'>
                  Sold
                </button>
              </div>

              <ImageGallery
                items={images}
                showPlayButton={false}
                renderLeftNav={(onClick, disabled) => (
                  <LeftNav onClick={onClick} disabled={disabled} />
                )}
                renderRightNav={(onClick, disabled) => (
                  <RightNav onClick={onClick} disabled={disabled} />
                )}
              />
            </div>
          </div>

          <div className='bg-white       shadow-md px-5 pb-6  rounded-md'>
            <div className=''>
              <h4 className='font-bold text-lg pt-4'>Description</h4>
            </div>
            <div className='pt-2'>
              <div className=''>
                <p className='text-black text-sm font-[400] pb-5'>
                  Lorem ipsum dolor sit amet consectetur. Velit tempor ut id
                  eget quis adipiscing. In id sed nunc magna dolor at sed ante
                  neque. Felis adipiscing non ullamcorper auctor suspendisse
                  tellus. Nulla pulvinar viverra suspendisse dui. Neque semper
                  feugiat rhoncus morbi massa feugiat nunc erat scelerisque. In
                  potenti fermentum ac non. In aliquam purus arcu nisl mi
                  volutpat diam fermentum quisque. Morbi elementum id sapien
                  quam dignissim viverra. Vitae tristique diam odio massa
                  tristique at urna elit. Aliquam ipsum blandit amet egestas
                  felis nunc urna sit est.
                  <br />
                  <br />
                  Risus amet blandit amet orci penatibus enim auctor nunc
                  ligula. In at sed tempor diam vel nec vitae a. Lectus libero
                  tincidunt ultrices justo vitae. Est eu imperdiet sodales elit
                  magna. Tincidunt eget condimentum convallis arcu neque rutrum
                  nec tempor. Scelerisque enim enim pretium duis in at.
                </p>

                <Collapse isOpened={collasped}>
                  <p className='text-black text-sm font-[400]  pb-5'>
                    Risus amet blandit amet orci penatibus enim auctor nunc
                    ligula. In at sed tempor diam vel nec vitae a. Lectus libero
                    tincidunt ultrices justo vitae. Est eu imperdiet sodales
                    elit magna. Tincidunt eget condimentum convallis arcu neque
                    rutrum nec tempor. Scelerisque enim enim pretium duis in at.
                  </p>
                </Collapse>
              </div>
              <button
                className='text-[#0D6EFD] font-medium text-sm flex gap-2 items-center'
                onClick={() => {
                  setCollasped(!collasped);
                }}>
                <span className='hover:underline'>View full description</span>
                <Image
                  src='/images/chevronbluedown.svg'
                  alt='view more'
                  width='15'
                  height='18'
                />
              </button>
            </div>
          </div>

          <div className='bg-white   shadow-md pb-7  w-full rounded-md px-5'>
            <div className=''>
              <h4 className='font-bold text-lg pt-5'>Event information</h4>
            </div>

            <div className='flex justify-between items-center pt-3'>
              <p className='text-black text-sm font-[400]'>
                Event data: <span className='font-medium'>12/04/2023</span>
              </p>
              <p className='text-black text-sm'>
                Lot num: <span className='font-medium'>246</span>
              </p>
            </div>

            <div className='flex flex-col gap-4 pt-4'>
              <div className='flex gap-2'>
                <Image
                  src='/images/usflag.svg'
                  height='21'
                  width='41'
                  alt='country flag'
                />
                <h3 className='font-semibold text-lg'>RM | Sotheby</h3>
              </div>

              <div className='flex gap-2'>
                <Image
                  src='/images/germanyflag.svg'
                  height='21'
                  width='41'
                  alt='country flag'
                />
                <div className='flex flex-col'>
                  <h3 className='font-semibold text-lg'>Techo Classica</h3>
                  <p className='text-gray-600 font-[400]'>
                    Gruga Hall, Norbertstrabe 2, 45131, Essen (DEU)
                  </p>
                </div>
              </div>
            </div>
          </div>

          <div className='bg-white  shadow-md pb-7 rounded-md w-full px-5 '>
            <div className=''>
              <h4 className='font-bold text-lg pt-5'>Market data</h4>
            </div>

            <div className=''>
              <div className='flex space-between flex-none items-center  sm:space-x-5 space-x-2'>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm text-base font-semibold select-none text-transparent'>
                  hello
                </h4>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm sm:text-base font-semibold text-center text-sm'>
                  Currency
                </h4>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm sm:text-base font-semibold text-center text-sm'>
                  Min eval.
                </h4>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm sm:text-base font-semibold text-center text-sm'>
                  Max eval
                </h4>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm sm:text-base font-semibold text-center text-sm'>
                  High bid
                </h4>
                <h4 className='flex-1 mx-auto my-[10px] rounded-sm sm:text-base font-semibold text-center text-sm'>
                  Sold
                </h4>
              </div>
              <div className='flex space-between flex-none items-center sm:space-x-4 space-x-1 font-medium'>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm font-semibold text-sm sm:text-base'>
                  Original
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  EUR
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  15,000
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  20,000
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  - - -
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  29,900
                </h5>
              </div>

              <div className='flex space-between flex-none items-center sm:space-x-4 space-x-1  font-medium'>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm font-semibold text-sm sm:text-base'>
                  Choosen
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  EUR
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  15,000
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  20,000
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  - - -
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  29,900
                </h5>
              </div>

              <div className='pt-6'></div>

              <div className='flex space-between flex-none items-center sm:space-x-4 space-x-1  font-medium'>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm font-semibold text-sm sm:text-base'>
                  Last 12 mo
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  EUR
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-green-100 '>
                  {" "}
                  <Image
                    src='/images/arrowupgreen.svg'
                    alt='percentage'
                    width='20'
                    height='20'
                    className='scale-[1.31]'
                  />
                  <span className=''>13,000</span>
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-green-100 '>
                  {" "}
                  <Image
                    src='/images/arrowupgreen.svg'
                    alt='percentage'
                    width='20'
                    height='20'
                    className='scale-[1.31]'
                  />
                  <span className=''>21,000</span>
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                  - - -
                </h5>
                <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-green-100 '>
                  {" "}
                  <Image
                    src='/images/arrowupgreen.svg'
                    alt='percentage'
                    width='20'
                    height='20'
                    className='scale-[1.31]'
                  />
                  <span className=''>21,000</span>
                </h5>
              </div>
            </div>

            <div className='flex space-between flex-none items-center space-x-4 font-medium'>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm font-semibold text-sm sm:text-base'>
                Last 5 ys
              </h5>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                EUR
              </h5>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-red-100 '>
                {" "}
                <Image
                  src='/images/arrowupred.svg'
                  alt='percentage'
                  width='20'
                  height='20'
                  className='scale-[1.31] rotate-180'
                />
                <span className=''>13,000</span>
              </h5>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-red-100 '>
                {" "}
                <Image
                  src='/images/arrowupred.svg'
                  alt='percentage'
                  width='20'
                  height='20'
                  className='scale-[1.31] rotate-180'
                />
                <span className=''>21,000</span>
              </h5>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm  px-1 sm:px-3 text-sm text-center py-2 shadow-lg '>
                - - -
              </h5>
              <h5 className='flex-1 mx-auto my-[10px] rounded-sm sm:px-4 px-2 text-sm text-center py-2 flex items-center justify-around shadow-lg bg-red-100 '>
                {" "}
                <Image
                  src='/images/arrowupred.svg'
                  alt='percentage'
                  width='20'
                  height='20'
                  className='scale-[1.31] rotate-180'
                />
                <span className=''>21,000</span>
              </h5>
            </div>
          </div>
        </div>

        <div className='2xl:mt-24    w-full col-span-2  2xl:col-span-1 '>
          <div className='bg-white shadow-md px-4  rounded-lg pb-4'>
            <h3 className='font-semibold pt-4 pb-3'>Technical data</h3>
            <p className='flex justify-between text-gray-600'>
              <span className='font-semibold'>Brand</span>{" "}
              <span className='font-medium'>Jaguar</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Family</span>{" "}
              <span className='font-medium'>XJ</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Model</span>{" "}
              <span className='font-medium'>XJ350</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Series</span>{" "}
              <span className='font-medium'>VII</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Stage</span>{" "}
              <span className='font-medium'>X350</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Version</span>{" "}
              <span className='font-medium'>Super eight</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Year</span>{" "}
              <span className='font-medium'>207</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Plate</span>{" "}
              <span className='font-medium'>AX 345 JH</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Period</span>{" "}
              <span className='font-medium'>Contemporary</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Chasiss</span>{" "}
              <span className='font-medium'>X350</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Engine</span>{" "}
              <span className='font-medium'>-</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Transmission</span>{" "}
              <span className='font-medium'>-</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />

            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>KM</span>{" "}
              <span className='font-medium'>150.000 KM</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />
            <p className='flex justify-between items-center text-gray-600 pt-3'>
              <span className='font-semibold'>Interior color</span>{" "}
              <span className='font-medium flex items-center gap-2'>
                <span className='bg-[#FFE5D0] rounded-full p-3'></span>{" "}
                <span>Cream</span>
              </span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />
            <p className='flex justify-between items-center text-gray-600 pt-3'>
              <span className='font-semibold'>Exterior color</span>{" "}
              <span className='font-medium flex items-center gap-2'>
                <span className='bg-[#084298] rounded-full p-3'></span>{" "}
                <span>Blue</span>
              </span>
            </p>

            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />
            <p className='flex justify-between text-gray-600 pt-3'>
              <span className='font-semibold'>Body</span>{" "}
              <span className='font-medium'>Sedan</span>
            </p>
            <div className='border-[.8px] border-gray-300 mt-2 rounded-sm' />
          </div>
          <Button variant='blackWide' className='w-full mt-4'>
            Report Error
          </Button>
        </div>
      </div>
    </div>
  );
}

function LeftNav({ onClick, disabled }: any) {
  return (
    <div
      onClick={onClick}
      className='bg-black/50 max-w-[50px] flex justify-center p-3  cursor-pointer  rounded-full  absolute left-0 ml-4 scale-hover top-1/2 z-50'>
      <Image src='/images/leftarrow.svg' alt='left' width='20' height='20' />
    </div>
  );
}

function RightNav({ onClick, disabled }: any) {
  return (
    <div
      onClick={onClick}
      className='bg-black/50 max-w-[50px] flex justify-center p-3  rounded-full cursor-pointer  scale-hover absolute mr-4 top-1/2 right-0 z-50'>
      <Image src='/images/rightarrow.svg' alt='left' width='20' height='20' />
    </div>
  );
}
