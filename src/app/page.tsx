'use client'
import { useAtom } from 'jotai'

import Header from '../components/Header'
import { signInAtom } from './jotai/auth'
export default function Home() {
  const [signInInfo] = useAtom(signInAtom)
  console.log(signInInfo)
  return (
   <main className=' h-screen'>
    <Header/>

   
   

  
   </main>
  )
}
