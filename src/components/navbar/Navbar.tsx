import React from 'react'
import Logo from '../Logo'
import { Button } from '../ui/button'
import Link from 'next/link'

interface Navbar{
  transparent : boolean
  bg?: string
  attributes: boolean
  logobg?: string

}

export default function navbar({transparent, bg, attributes, logobg} : Navbar) {
  return (
    <>
        
<nav className={`fixed w-full z-20 top-0 left-0  ${transparent ? 'bg-transparent' : `${bg}`}` }>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  
      <Link href='/' className='flex items-center'>
      <Logo width={120} height={140} backgroundColor={logobg}/>
      </Link>
 
  
   
  
  
  {
    attributes && (
      <div className="flex  gap-20">
  <div className="items-center justify-between hidden w-full md:flex md:w-auto" >
    <ul className="flex flex-col p-4 md:p-0 mt-4 font-medium border border-gray-100 rounded-lg  md:flex-row md:space-x-8 md:mt-0 md:border-0 ">
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white transition-all duration-300 hover:text-primary hover:font-semibold  rounded  md:p-0 " aria-current="page">Home</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded   md:p-0  dark:text-white transition-all duration-300 hover:font-semibold  hover:text-primary  dark:border-gray-700">Features</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded   md:p-0  dark:text-white transition-all duration-300 hover:font-semibold  hover:text-primary  dark:border-gray-700">Pricing</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded   md:p-0  dark:text-white transition-all duration-300 hover:font-semibold  hover:text-primary  dark:border-gray-700">About us</a>
      </li>
      <li>
        <a href="#" className="block py-2 pl-3 pr-4 text-white rounded   md:p-0  dark:text-white transition-all duration-300 hover:font-semibold  hover:text-primary  dark:border-gray-700">Contact </a>
      </li>
    </ul>
  </div>

      <Link href='/auth/signin'><Button>Sign up</Button></Link>
  </div>
    )
  }

  </div>
  
</nav>

    </>
  )
}
