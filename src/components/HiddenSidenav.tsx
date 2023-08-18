import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "./ui/button";
import { HiddenSideNavPage } from "@/app/atoms/atoms";
import { useAtom } from "jotai";
interface HiddenSideNavProps {
  page: string;
}
export default function HiddenSidenav({}) {
  const [page, setPage] = useAtom(HiddenSideNavPage);
  return (
    <aside className='fixed top-0 left-0 z-40 w-[106px]  h-screen transition-transform -translate-x-full lg:translate-x-0'>
      <div className='h-full px-3 py-4 overflow-y-auto bg-[#212529] rounded-r-lg scroll-hidden'>
        <div className='flex  flex-col items-center  justify-between  '>

          <div className='mt-9'>
            <Link href='/'>
              <Image
                src='/logowithoutwords.svg'
                alt='logo'
                className=''
                width={30}
                height={30}
              />
            </Link>
          </div>

          <ul className='space-y-4 font-medium flex flex-col mx-4 mt-14'>
            <Link href='/dashboard/'>
              <Button
                variant={page === "home" ? "blue" : "transparent"}
                className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
                <span className=''>
                  <Image
                    src='/images/dashboard-home.svg'
                    alt='home page'
                    width={20}
                    height={20}
                  />
                </span>
              </Button>
            </Link>

            <Button
              variant={page === "datas" ? "blue" : "transparent"}
              className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
              <span className=''>
                <Image
                  src='/images/dashboard-data.svg'
                  alt='data page'
                  width={20}
                  height={20}
                />
              </span>
            </Button>
            <Link href='/garage/garageservices'>
              <Button
                variant={page === "garage" ? "blue" : "transparent"}
                className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
                <span className=''>
                  <Image
                    src='/images/dashboard-garage.svg'
                    alt='home page'
                    width={20}
                    height={20}
                  />
                </span>
              </Button>
            </Link>

            
            <Button
              variant={page === "charts" ? "blue" : "transparent"}
              className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
              <span className=''>
                <Image
                  src='/images/dashboard-charts.svg'
                  alt='home page'
                  width={20}
                  height={20}
                />
              </span>
            </Button>

            <Button
              variant={page === "locate" ? "blue" : "transparent"}
              className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
              <span className=''>
                <Image
                  src='/images/dashboard-locate.svg'
                  alt='home page'
                  width={20}
                  height={20}
                />
              </span>
            </Button>

            <Button
              variant={page === "wallet" ? "blue" : "transparent"}
              className='flex justify-start gap-2 py-6 px-3 hover:bg-blue-50/10'>
              <span className=''>
                <Image
                  src='/images/dashboard-wallet.svg'
                  alt='home page'
                  width={20}
                  height={20}
                />
              </span>
            </Button>
          </ul>


          <div className="mt-16">
          <Button variant='blue' className='px-3 gap-2 hover:bg-blue-700'>
                <span className='py-4'>
                  <Image
                    src='/images/logout.svg'
                    alt='Log out'
                    width={22}
                    height={22}
                  />
                </span>
              </Button>
          </div>


        </div>
      </div>
    </aside>
  );
}
