'use client'

import React, { useState } from "react";
import { Button } from "@/components/ui/button";
import Image from "next/image";
import ChatBubble from "./ChatBubble";
import {chatBubbleModal} from "@/app/atoms/atoms";
import {useAtom} from 'jotai'
import { currencyChangeModal } from "@/app/atoms/atoms";
import CurrencyChange from "./CurrencyChange";
import {infoAreaModal} from '@/app/atoms/atoms'
import InfoArea from "./InfoArea";
import { useRouter } from "next/navigation";
import Link from "next/link";
import { selectionAreaModal } from "@/app/atoms/atoms";
import DashboardSelectionArea from "./DashboardSelectionArea";


interface DashboardNavbar {
  mobileSidebar : boolean;
  page: string;
  setMobileSidebar : (value: boolean) => void
  position? : boolean
}

export default function DashboardNavbar({ setMobileSidebar, mobileSidebar, page, position }: DashboardNavbar) {
    const [chatBubble, setChatBubble] = useAtom(chatBubbleModal)
    const [selectionAreamodal, setselectionAreamodal] = useAtom(selectionAreaModal);

    const [currencyModal, setCurrencyModal] = useAtom(currencyChangeModal)
    const [infoArea,setInfoArea] = useAtom(infoAreaModal)
    const router = useRouter()

  return (
    <>
    {
      chatBubble && (
        <ChatBubble setChatBubble={setChatBubble}/>
      )
    }
    {
      currencyModal && (
        <CurrencyChange setCurrencyModal={setCurrencyModal}/>
      )
    }

    {
      infoArea && (
        <InfoArea/>
      )
    }
    {
      selectionAreamodal && (
        <DashboardSelectionArea/>
      )
    }

{mobileSidebar && (
        <div className='w-screen fixed top-0 left-0 z-[1000] md:hidden  h-screen bg-black/70 backdrop-blur-sm overflow-y-hidden'>
          <div className='flex flex-col'>
            <div className='flex justify-between mx-14 items-center'>
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
                onClick={() => {
                  setMobileSidebar(false);
                }}
              />
            </div>

            <div className='border-t border-white'></div>

            <div className='text-xl tracking-wide font-semibold text-white mt-5 flex justify-center'>
              <span>Pages</span>
            </div>

            <div className='flex flex-wrap gap-4 pt-7 justify-center'>
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

              <Link href='datas'>
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
              </Link>

              <Link href='/garage/garageservices'>
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
                  <span className='font-light tracking-wide py-3'>Garage</span>
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

            <div className='border-t border-white mt-10 mb-5'></div>

            <div className='text-xl tracking-wider font-semibold text-white mt-3 mb-7 flex justify-center'>
              <span>Utils</span>
            </div>

            <div className='bg-gray-200 p-6 mx-5 rounded-lg'>
              <div className='flex flex-wrap gap-6  justify-center'>
                <Button
                  onClick={() => {
                    setMobileSidebar(false);
                    setChatBubble(true);
                  }}
                  className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
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

                <Button
                  onClick={() => {
                    setMobileSidebar(false);
                    setCurrencyModal(true);
                  }}
                  className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
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

                <div onClick={() => {
                  setMobileSidebar(false);
                  setselectionAreamodal(true);
                }}>
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

            <div className='border-t border-white mt-14 '></div>
          </div>
        </div>
      )}
    
      <nav className={`w-full bg-[#F8F9FA] border-b-[3px] border-gray-400 sm:py-5 py-3 flex items-center justify-between  ${position ? '' : 'lg:ml-[12rem]'}`}>
        <div className='sm:mx-12 mx-5'>
          <h1 className='text-neutral-800 capitalize text-sm sm:text-lg md:text-xl lg:text-3xl xl:ml-10 xl:text-4xl  font-semibold '>
            {page}
          </h1>
        </div>


        <button onClick={() => {setMobileSidebar(true)}}  className='sm:mx-12 mx-5 md:hidden '>
          <Image
          src='/images/hamburgermenu.svg'
          alt='hamburger menu'
          width='50'
          height='50'
          />
        </button>

   

        <div className={`${position ? "lg:mr-[4rem]" : "lg:mr-[15rem]"}  mx-5 md:flex items-center gap-5 hidden`}>
          <Button onClick={() => {setChatBubble(true)}} className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
              src='/images/chat-bubble.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button onClick={() => {router.push('/dashboard/suggestionarea')}} className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
            priority
              src='/images/report.svg'
              alt='chat bubble'
              width='30'
              height='30'
            />
          </Button>
          <Button  className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bookmark-heart.svg'
              alt='chat bubble'
              width='23'
              height='23'
            />
          </Button>

          <Button onClick={() => {setCurrencyModal(true)}} className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/moneyacc.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <Button onClick={() => {setInfoArea(true)}} className='w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
            <Image
              src='/images/bell.svg'
              alt='chat bubble'
              width='24'
              height='24'
            />
          </Button>

          <div onClick={() => {setselectionAreamodal(true)}} className='cursor-pointer scale-hover'>
            <Image
              src='/images/avatar.png'
              alt='chat bubble'
              width='40'
              height='40'
            />
          </div>
        </div>
      </nav>
    </>
  );
}

