import React, { useState, useEffect } from "react";
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from "next/image";
import { Button } from "../ui/button";
import { inter } from "@/app/fonts";
import { Collapse } from "react-collapse";
export default function AuctionVehicleDetails() {
  const [collasped, setCollasped] = useState(false);
 
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
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ];

  return (
    <div className={`${inter.className} `}>
      <div className='grid  grid-cols-1  xl:grid-cols-3 xl:grid-rows-3 gap-7 place-items-center xl:place-items-start'>

        <div className=' flex  justify-center xl:col-span-2 '>
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

        <div className='xl:mt-24   w-full xl:w-[357px] xl:row-span-2'>
          <div className='bg-white shadow-md px-4 rounded-lg pb-4'>
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

        <div className='bg-white  max-w-[1000px]  xl:col-span-2  shadow-md px-5 pb-6 mb-10 rounded-md'>
          <div className=''>
            <h4 className='font-bold text-lg pt-4'>Description</h4>
          </div>
          <div className='pt-2'>
            <div className=''>
              <p className='text-black text-sm font-[400] pb-5'>
                Lorem ipsum dolor sit amet consectetur. Velit tempor ut id eget
                quis adipiscing. In id sed nunc magna dolor at sed ante neque.
                Felis adipiscing non ullamcorper auctor suspendisse tellus.
                Nulla pulvinar viverra suspendisse dui. Neque semper feugiat
                rhoncus morbi massa feugiat nunc erat scelerisque. In potenti
                fermentum ac non. In aliquam purus arcu nisl mi volutpat diam
                fermentum quisque. Morbi elementum id sapien quam dignissim
                viverra. Vitae tristique diam odio massa tristique at urna elit.
                Aliquam ipsum blandit amet egestas felis nunc urna sit est.
                <br />
                <br />
                Risus amet blandit amet orci penatibus enim auctor nunc ligula.
                In at sed tempor diam vel nec vitae a. Lectus libero tincidunt
                ultrices justo vitae. Est eu imperdiet sodales elit magna.
                Tincidunt eget condimentum convallis arcu neque rutrum nec
                tempor. Scelerisque enim enim pretium duis in at.
              </p>
              
                <Collapse  isOpened={collasped}>
                <p className='text-black text-sm font-[400]  pb-5'>
                Risus amet blandit amet orci penatibus enim auctor nunc ligula.
                In at sed tempor diam vel nec vitae a. Lectus libero tincidunt
                ultrices justo vitae. Est eu imperdiet sodales elit magna.
                Tincidunt eget condimentum convallis arcu neque rutrum nec
                tempor. Scelerisque enim enim pretium duis in at.
                </p>
                </Collapse>
              
            </div>
            <button
            className='text-[#0D6EFD] font-medium text-sm flex gap-2 items-center'
              onClick={() => {
                setCollasped(!collasped);
              }}>
              <span className="hover:underline">View full description</span><Image src='/images/chevronbluedown.svg' alt='view more' width='15' height='18'/>
            </button>
          </div>
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


