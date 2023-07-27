"use client";

import React from "react";
import Navbar from "@/components/navbar/Navbar";

import SigninCard from "@/components/auth/SigninCard";
import LoginCard from "@/components/auth/LoginCard";

export default function page() {
  return (
    <div className='w-screen h-screen sign-background flex items-center justify-start'>
      <Navbar
        bg='bg-white'
        transparent={false}
        attributes={false}
        logobg='black'
      />
      <SigninCard/>
    </div>
  );
}
