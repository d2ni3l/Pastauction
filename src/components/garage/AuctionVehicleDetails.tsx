import React from 'react'
import "react-image-gallery/styles/css/image-gallery.css";
import ImageGallery from "react-image-gallery";
import Image from 'next/image';
export default function AuctionVehicleDetails() {

//flagenglandplaceholder
  const images = [
    {
      original: "https://picsum.photos/id/1018/1000/600/",
      thumbnail: "https://picsum.photos/id/1018/250/150/",
    },
    {
      original: "https://picsum.photos/id/1015/1000/600/",
      thumbnail: "https://picsum.photos/id/1015/250/150/",
    },
    {
      original: "https://picsum.photos/id/1019/1000/600/",
      thumbnail: "https://picsum.photos/id/1019/250/150/",
    },
  ]
    
  return (
    <div>
        <div className="">
<div className="relative">
<ImageGallery items={images} showPlayButton={false} renderLeftNav={(onClick, disabled) => (<LeftNav onClick={onClick} disabled={disabled}/>)} renderRightNav={(onClick, disabled) => (<RightNav onClick={onClick} disabled={disabled}/>)}   />

</div>
           
        </div>
    </div>
  )
}


function LeftNav({onClick, disabled} : any){
  return(
    <div onClick={onClick} className="bg-black/50 max-w-[50px] flex justify-center p-3  cursor-pointer  rounded-full  absolute left-0 ml-4 scale-hover top-1/2 z-50">
      <Image
    src='/images/leftarrow.svg'
    alt='left'
    width='25'
    height='25'
    />
    </div>
  )
}

function RightNav({onClick, disabled} : any){
  return(
    <div onClick={onClick} className="bg-black/50 max-w-[50px] flex justify-center p-3  rounded-full cursor-pointer  scale-hover absolute mr-4 top-1/2 right-0 z-50">
    <Image
  src='/images/rightarrow.svg'
  alt='left'
  width='25'
  height='25'
  />
  </div>
  )
}