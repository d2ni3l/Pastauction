'use client'

import React from 'react'
import {ReactNode} from 'react'
import {SessionProvider} from 'next-auth/react'
interface Props{
    children : ReactNode
}
export default function AuthProvider({children} : Props) {
  return (
    <SessionProvider>
     {children}
    </SessionProvider>
  )
}
