'use client'
import { useAtom } from 'jotai'
import { countAtom } from './jotai/auth'
import Header from '../components/Header'
import {signIn} from 'next-auth/react'
export default function Home() {
  const [count, setCount] = useAtom(countAtom)
  return (
   <main className=' h-screen'>
    <Header/>

    <h1>
      {count}
    </h1>
    <button onClick={() => {
      setCount(prev => prev + 2)
    }}> add 2</button>

  
   </main>
  )
}
