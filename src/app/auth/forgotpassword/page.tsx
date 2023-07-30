import ForgotPassword from '@/components/auth/ForgotPassword'
import React from 'react'
import Navbar from '@/components/navbar/Navbar'

export default function page() {
  return (
    <div className='w-screen h-screen sign-background flex items-center justify-start'>
       <Navbar
        bg='bg-white'
        transparent={false}
        attributes={false}
        logobg='black'
      />

        <ForgotPassword/>
    </div>
  )
}
