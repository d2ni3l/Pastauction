"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import { inter } from "@/app/fonts";
import PasswordChangedModal from "@/components/auth/PasswordChangedModal";
export default function page() {
  return (
    <div className={inter.className}>
      <div className='w-screen h-screen sign-background flex items-center justify-start'>
        <Navbar
          bg='bg-white'
          transparent={false}
          attributes={false}
          logobg='black'
        />

        <div className='pt-3'></div>
        <PasswordChangedModal />
      </div>
    </div>
  );
}
