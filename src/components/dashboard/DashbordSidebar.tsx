import React from "react";
import { inter } from "@/app/fonts";
import Image from "next/image";
import { Button } from "../ui/button";

interface DashboardSidebar {
  mobileSidebar: boolean;
  setMobileSidebar: (value: boolean) => void;
}

export const DashbordSidebar = ({
  mobileSidebar,
  setMobileSidebar,
}: DashboardSidebar) => {
  return (
    <div className={inter.className}>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-52  h-screen transition-transform -translate-x-full lg:translate-x-0'
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

      
        <div className={` p-16 fixed top-0 bg-[#212529] flex flex-col  rounded-l-lg sm:hidden  right-0 h-screen w-[300px] transition-all duration-500 ease ${
            !mobileSidebar && "translate-x-[200rem] bg-purple-700"
          }`}>
          <div className='flex relative justify-between'>
            <button
              className='text-2xl text-white font-extrabold relative -top-12 left-0'
              onClick={() => {
                setTimeout(() => {
                  setMobileSidebar(!mobileSidebar);
                }, 500);
              }}>
              <Image
                src='/images/x-white.svg'
                alt='logo'
                className=''
                width={30}
                height={30}
              />
            </button>

            <div className='relative -top-12 left-10'>
              <Image
                src='/iconwhitelogo.svg'
                alt='logo'
                className=''
                width={280}
                height={280}
              />
            </div>
          </div>

          <div className='flex  flex-col  justify-between i gap-24'>
            <div>
              <ul className='space-y-4 font-medium flex flex-col mx-4 pt-2'>
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

            <div className='mr-[15rem] md:flex items-center gap-5 hidden'>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/chat-bubble.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/report.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bookmark-heart.svg'
              alt='chat bubble'
              width='23'
              height='23'
            />
          </Button>

          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/moneyacc.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bell.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <div>
            <Image
              src='/images/avatar.png'
              alt='chat bubble'
              width='40'
              height='40'
              className=''
            />
          </div>
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
      
    </div>
  );
};
