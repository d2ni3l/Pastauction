import React from 'react'
import Image from 'next/image'
interface LogoProps{
    width: number,
    height: number
}

export default function Logo({width, height} : LogoProps) {
  return (
    <Image
    src='/logo.svg'
    alt='logo'
    width={width}
    height={height}

    />
  )
}
