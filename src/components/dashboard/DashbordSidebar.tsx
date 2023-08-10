import React from "react";
import { inter } from "@/app/fonts";
import Image from "next/image";
import { Button } from "../ui/button";
import Link from "next/link";

interface DashboardSidebar {
  mobileSidebar: boolean;
  page: string;
  setMobileSidebar: (value: boolean) => void;
}
export const DashbordSidebar = ({
  mobileSidebar,
  setMobileSidebar,
  page,
}: DashboardSidebar) => {

  return (
    <div className={inter.className}>
      <aside
        id='default-sidebar'
        className='fixed top-0 left-0 z-40 w-52  h-screen transition-transform -translate-x-full lg:translate-x-0'
        aria-label='Sidebar'>
        <div className='h-full px-3 py-4 overflow-y-auto bg-[#212529] rounded-r-lg'>
          <div className='flex  flex-col  justify-between  gap-24'>
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
                <Link href='/dashboard/'>
                  <Button
                    variant={page === "home" ? "blue" : "transparent"}
                    className='flex justify-start gap-2 '>
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
                </Link>

                <Button
                  variant={page === "datas" ? "blue" : "transparent"}
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

                <Link href='/dashboard/garage'>
                  <Button
                    variant={page === "garage" ? "blue" : "transparent"}
                    className='flex justify-start gap-2 '>
                    <span className='py-3'>
                      <Image
                        src='/images/dashboard-charts.svg'
                        alt='home page'
                        width={16}
                        height={16}
                      />
                    </span>
                    <span className='font-light tracking-wide py-3'>
                      Garage
                    </span>
                  </Button>
                </Link>

                <Button
                  variant={page === "charts" ? "blue" : "transparent"}
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
                  variant={page === "locate" ? "blue" : "transparent"}
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
                  variant={page === "wallet" ? "blue" : "transparent"}
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

      {
        mobileSidebar &&
        <div className="w-screen fixed top-0 left-0 z-[1000] md:hidden  h-screen bg-black/80 backdrop-blur-sm overflow-y-hidden">
          <div className="flex flex-col">
            <div className="flex justify-between mx-14 items-center">
            <Image
            src='/iconwhitelogo.svg'
            width='150'
            height='50'
            alt='logo'
            />

            <Image
            src='/images/cancelx.svg'
            width='30'
            height='30'
            alt='close menu'
            className='fill-white'
            onClick={() => {setMobileSidebar(false)}}
            />
            </div>

            <div className="border-t border-white"></div>

            <div className="text-xl tracking-wide font-semibold text-white mt-5 flex justify-center">
              <span>Pages</span>
            </div>

            <div className="flex flex-wrap gap-4 pt-7 justify-center">
          
                <Link href='/dashboard/'>
                  <Button
                    variant={page === "home" ? "blue" : "transparent"}
                    className='flex justify-start gap-2  border border-white'>
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
                </Link>

                <Button
                  variant={page === "datas" ? "blue" : "transparent"}
                  className='flex justify-start gap-2  border border-white '>
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

                <Link href='/dashboard/garage'>
                  <Button
                    variant={page === "garage" ? "blue" : "transparent"}
                    className='flex justify-start gap-2  border border-white '>
                    <span className='py-3'>
                      <Image
                        src='/images/dashboard-charts.svg'
                        alt='home page'
                        width={16}
                        height={16}
                      />
                    </span>
                    <span className='font-light tracking-wide py-3'>
                      Garage
                    </span>
                  </Button>
                </Link>

                <Button
                  variant={page === "charts" ? "blue" : "transparent"}
                  className='flex justify-start gap-2  border border-white '>
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
                  variant={page === "locate" ? "blue" : "transparent"}
                  className='flex justify-start gap-2  border border-white '>
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
                  variant={page === "wallet" ? "blue" : "transparent"}
                  className='flex justify-start gap-2  border border-white '>
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
              

            </div>

            <div className="border-t border-white mt-10 mb-5"></div>

            <div className="text-xl tracking-wider font-semibold text-white mt-3 mb-7 flex justify-center">
              <span>Utils</span>
            </div>


            <div className="bg-gray-200 p-6 mx-5 rounded-lg">
            <div className='flex flex-wrap gap-6  justify-center'>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
              src='/images/chat-bubble.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
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
            </div>

            <div className="border-t border-white mt-14 "></div>


          </div>
        </div>
      }
    </div>
  );
};
