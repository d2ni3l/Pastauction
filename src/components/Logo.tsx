import React from 'react'
import Image from 'next/image'
interface LogoProps{
    width: number,
    height: number,
    backgroundColor: string | undefined

}

export default function Logo({width, height, backgroundColor} : LogoProps) {
  if(backgroundColor === 'white' || undefined){
  return(
    <Image src='/logo.svg' alt='logo' width={width} height={height}/>
  ) 
  }
 
  if (backgroundColor === 'black') {
    return(
      <Image src='/logo-black.svg' alt='logo' width={width} height={height}/>

    )
  }

 
}
