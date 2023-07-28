import React from "react";
import { inter } from "@/app/fonts";
import Image from "next/image";
import { Button } from "../ui/button";
export const DashbordSidebar = () => {
  return (
    <div className={inter.className}>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-52  h-screen transition-transform -translate-x-full sm:translate-x-0'
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-[#212529] rounded-r-lg'>
          <div className='flex  flex-col  justify-between i gap-24'>
            <div className='-mt-5'>
              <Image
                src='/iconwhitelogo.svg'
                alt='logo'
                className=''
                width={180}
                height={180}
              />
            </div>

            <div>
              <ul className='space-y-4 font-medium flex flex-col mx-4 -mt-12'>
                <Button variant='blue' className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-home.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Home</span>
                </Button>

                <Button
                  variant='transparent'
                  className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-data.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Datas</span>
                </Button>

                <Button
                  variant='transparent'
                  className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-charts.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Garage</span>
                </Button>

                <Button
                  variant='transparent'
                  className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-charts.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Charts</span>
                </Button>

                <Button
                  variant='transparent'
                  className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-locate.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Locate</span>
                </Button>

                <Button
                  variant='transparent'
                  className='flex justify-start gap-2 '>
                  <span className='py-3'>
                    <Image
                      src='/images/dashboard-wallet.svg'
                      alt='home page'
                      width={16}
                      height={16}
                    />
                  </span>
                  <span className='font-light tracking-wide py-3'>Wallet</span>
                </Button>
              </ul>
            </div>

            <div className='flex justify-center'>
              <Button variant='blue' className='px-6 gap-2 hover:bg-blue-700'>
                <span className='py-3'>
                  <Image
                    src='/images/logout.svg'
                    alt='home page'
                    width={16}
                    height={16}
                  />
                </span>
                <span className='font-light tracking-wide py-3'>Logout</span>
              </Button>
            </div>
          </div>
        </div>
      </aside>

      <div className='fixed   sm:hidden bottom-0 w-full bg-[#212529] rounded-t-md  '>
        <div className='flex mx-3 justify-center items-center py-4 gap-1'>
          <Button variant='blue' className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-home.svg'
              alt='home page'
              width='18'
              height='18'
            />

            <span className='text-xs'>Home</span>
          </Button>
          <Button
            variant='transparent'
            className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-data.svg'
              alt='home page'
              width='18'
              height='18'
            />
            <span className='text-xs'>Datas</span>
          </Button>

          <Button
            variant='transparent'
            className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-garage.svg'
              alt='home page'
              width='18'
              height='18'
            />

            <span className='text-xs'>Garage</span>
          </Button>

          <Button
            variant='transparent'
            className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-charts.svg'
              alt='home page'
              width='18'
              height='18'
            />

            <span className='text-xs'>Chart</span>
          </Button>

          <Button
            variant='transparent'
            className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-locate.svg'
              alt='home page'
              width='18'
              height='18'
            />

            <span className='text-xs'>Locate</span>
          </Button>
          <Button
            variant='transparent'
            className='flex flex-col justify-center gap-1'>
            <Image
              src='/images/dashboard-wallet.svg'
              alt='home page'
              width='18'
              height='18'
            />

            <span className='text-xs'>Wallet</span>
          </Button>
        </div>
      </div>
    </div>
  );
};
