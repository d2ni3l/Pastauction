import React from 'react'
import {Button} from '@/components/ui/button'
import Image from 'next/image'
interface DashboardNavbar{
    page : string
}

export default function DashboardNavbar({page} : DashboardNavbar) {
  return (
    <div className='max-w-[1500px]'>
        <nav className="  w-full bg-transparent border-b-[3px] border-gray-400 py-5 flex justify-between ml-[12rem]">
        <div className="mx-12">
        <h1 className="text-neutral-800 text-[40px] font-semibold leading-[48px]">Home</h1>

        </div>

        <div className="mr-[15rem] flex items-center gap-5 ">
            <Button className="w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full">
                <Image
                src='/images/chat-bubble.svg'
                alt='chat bubble'
                width='30'
                height='30'
                />
            </Button>
            <Button className="w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full">
                <Image
                src='/images/report.svg'
                alt='chat bubble'
                width='30'
                height='30'
                />
            </Button>
            <Button className="w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full">
                <Image
                src='/images/bookmark-heart.svg'
                alt='chat bubble'
                width='23'
                height='23'
                />
            </Button>

            

<Button className="w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full">
<Image
                src='/images/moneyacc.svg'
                alt='chat bubble'
                width='24'
                height='24'
                />
                
            </Button>
            
            <Button className="w-12 h-12 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full">
                <Image
                src='/images/bell.svg'
                alt='chat bubble'
                width='24'
                height='24'
                />
            </Button>

           
                <div>
                <Image
                src='/images/avatar.png'
                alt='chat bubble'
                width='40'
                height='40'
                className=''
                />
                </div>
            
        </div>
        </nav>

 
        
    </div>
  )
}
