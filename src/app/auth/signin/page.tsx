"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import {inter} from '@/app/fonts'

import { useAtom } from 'jotai'
import { privacyPolicy } from '@/app/atoms/atoms'
    
import SigninCard from "@/components/auth/SigninCard";
import PrivacyPolicy from "@/components/PrivacyPolicy";

export default function page() {
  const [activate, setActivate] = useAtom(privacyPolicy)
    console.log(activate)
  return (
    <div className={inter.className}>
      <div className='w-screen sm:bg-black  h-screen sign-background flex items-center justify-start '>
      <Navbar
        bg='bg-white'
        transparent={false}
        attributes={false}
        logobg='black'
      />
      <div className="pt-16">
      <SigninCard/>
      </div>

      <div className="absolute overflow-y-hidden w-screen   ">
      {
        activate && (
          <PrivacyPolicy/>
        )
      }
      </div>
    </div>
    </div>
  );
}
