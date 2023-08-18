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
interface DashboardNavbar {
  mobileSidebar : boolean;
  page: string;
  setMobileSidebar : (value: boolean) => void
  position? : boolean
}

export default function DashboardNavbar({ setMobileSidebar, mobileSidebar, page, position }: DashboardNavbar) {
    const [chatBubble, setChatBubble] = useAtom(chatBubbleModal)
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
    
      <nav className={`w-full bg-[#F8F9FA] border-b-[3px] border-gray-400 sm:py-5 py-3 flex items-center justify-between  ${position ? '' : 'lg:ml-[12rem]'}`}>
        <div className='sm:mx-12 mx-5'>
          <h1 className='text-neutral-800 capitalize text-sm sm:text-lg md:text-xl lg:text-3xl  font-semibold '>
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
      </nav>
    </>
  );
}

