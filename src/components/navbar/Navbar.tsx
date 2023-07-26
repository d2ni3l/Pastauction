import React from 'react'
import Logo from '../Logo'
import { Button } from '../ui/button'

interface Navbar{
  transparent : boolean
}

export default function navbar({transparent} : Navbar) {
  return (
    <>
        
<nav className={`fixed w-full z-20 top-0 left-0  ${transparent ? 'bg-transparent' : 'bg-gray-900'}` }>
  <div className="max-w-screen-xl flex flex-wrap items-center justify-between mx-auto p-4">
  <a href="https://flowbite.com/" className="flex items-center">
      <Logo width={120} height={100}/>
  </a>
  
   
  
  
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

      <Button>Sign up</Button>
  </div>
  </div>
</nav>

    </>
  )
}
