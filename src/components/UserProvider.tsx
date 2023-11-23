'use client'

import React, { ReactElement, useEffect } from 'react'
import {useAtom} from 'jotai'
import { currentUserAtom } from '@/app/atoms/atoms'
export default function UserProvider({children}: {children : ReactElement}) {

    const [currentUser, setCurrentUser] = useAtom(currentUserAtom)

    useEffect(() => {
   
        setCurrentUser(window.localStorage.getItem('user'))
    }, [currentUser])
  return (
    <>{children}</>
  )
}
