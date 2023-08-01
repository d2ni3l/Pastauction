"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";
import {montserrat} from '@/app/fonts'
import CompleteProfile from "@/components/auth/CompleteProfile";

export default function page() {
  return (
    <div className={montserrat.className}>
      
      <div className="w-screen h-screen completeprofile-bg flex items-center justify-start">
      <Navbar
        bg='bg-white'
        transparent={false}
        attributes={false}
        logobg='black'
      />

      <div className="pt-3">
      <CompleteProfile/>
      </div>
      </div>
    </div>
  );
}