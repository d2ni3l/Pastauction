import Image from "next/image";
import React from "react";
import { Button } from "../ui/button";
// Import Swiper React components
import { Swiper, SwiperSlide } from "swiper/react";

// Import Swiper styles
import "swiper/css";
export default function VehicleCards() {
  const backgroundImages = [
    {
      url: "/images/vehicleplaceholder.svg",
    },
    {
      url: "/images/vehicleplaceholder2.svg",
    },
    {
      url: "/images/vehicleplaceholder3.svg",
    },
  ];

  return (
    <div>
      
      <div className='wrapper max-w-xs  overflow-hidden relative'>
        <Swiper
          spaceBetween={0}
          slidesPerView={1}
          speed={500}
          >
          <SwiperSlide>
            <div
              className='h-[200px] w-[320px]    rounded-t-lg'
              style={{
                backgroundImage: `url(${backgroundImages[0].url})`,
              }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-[200px] w-[320px]   rounded-t-lg '
              style={{
                backgroundImage: `url(${backgroundImages[1].url})`,
              }}></div>
          </SwiperSlide>
          <SwiperSlide>
            <div
              className='h-[200px] w-[320px]    rounded-t-lg '
              style={{
                backgroundImage: `url(${backgroundImages[2].url})`,
              }}></div>
          </SwiperSlide>
        </Swiper>
        <div className="flex absolute top-0 right-0  mt-4 mx-5 gap-2 z-10">
          <Image src='/images/editvehiclecard.svg' alt='edit vehicle' width='25' height='25'/>
          <Image src='/images/deletevehiclecard.svg' alt='edit vehicle' width='25' height='25'/>
        </div>

        <div className="absolute justify-center flex gap-2  left-0 right-0 z-10">
        {
          [1, 2, 3, 4].map(() => {
            return(
              <Image
              src='/images/imagecarosaul.svg'
              alt='vehicle image'
              width='8'
              height='8'
              className='-mt-10'

              />
            )
          })
        }
        </div>

        <div className='flex gap-3 flex-col px-7 rounded-b-lg bg-white'>
          <div>
            <h3 className='font-semibold text-lg pt-4'>Mercedes Benz</h3>
          </div>
          <div className='flex flex-col gap-2'>
            <p className='flex gap-2 text-sm text-gray-600'>
              <span>•</span> <span>657mi(TMU)</span>
              <span>•</span> <span>Manual</span>
              <span>•</span> <span>LHD</span>
            </p>
            <p className='flex gap-2 text-sm text-gray-600'>
              <span>•</span> <span>Restored-Modified</span>
            </p>
          </div>
          <div className='flex gap-2 pb-4'>
            <Image  src='/images/italy.svg' alt='image' width='15' height='15' />
            <h2 className='text-sm'>Italy</h2>
          </div>

          <Button
            className='text-black rounded-md border-black mb-6 scale-hover border-2 w-[163px]'
            variant='transparent'>
            Search spare parts
           
          </Button>
        </div>
      </div>
    </div>
  );
}
