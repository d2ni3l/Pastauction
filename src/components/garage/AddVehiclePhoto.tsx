import useFileConverter from "@/app/hooks/FileConverter";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function AddVehiclePhoto() {
  const [deletemodal, setDeleteModal] = useState(false)
  const [image1, convertFile1] = useFileConverter();
  const [image2, convertFile2] = useFileConverter();
  const [image3, convertFile3] = useFileConverter();
  const [image4, convertFile4] = useFileConverter();
  const [image5, convertFile5] = useFileConverter();
  const [image6, convertFile6] = useFileConverter();
  const [image7, convertFile7] = useFileConverter();
  const [image8, convertFile8] = useFileConverter();
  const [image9, convertFile9] = useFileConverter();

  return (
    <div className=' mx-4'>
      <div className='flex flex-col gap-16 '>
        <div className='grid grid-row-2 sm:grid-cols-6 grid-cols-3 gap-5 grid-flow-row'>
          {image1 ? (
            <label
              htmlFor='vehicle1'
              style={{
                backgroundImage: `url(${image1})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 sm:col-span-2 sm:row-span-2 py-16 px-12'>
              <input
                type='file'
                id='vehicle1'
                onChange={(e) => convertFile1(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle1'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 sm:col-span-2 sm:row-span-2 py-16 px-12'>
              <input
                type='file'
                id='vehicle1'
                onChange={(e) => convertFile1(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image2 ? (
            <label
              htmlFor='vehicle2'
              style={{
                backgroundImage: `url(${image2})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle2'
                onChange={(e) => convertFile2(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle2'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle2'
                onChange={(e) => convertFile2(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}
          {image3 ? (
            <label
              htmlFor='vehicle3'
              style={{
                backgroundImage: `url(${image3})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle3'
                onChange={(e) => convertFile3(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle3'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle3'
                onChange={(e) => convertFile3(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image4 ? (
            <label
              htmlFor='vehicle4'
              style={{
                backgroundImage: `url(${image4})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle4'
                onChange={(e) => convertFile4(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle4'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle4'
                onChange={(e) => convertFile4(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image5 ? (
            <label
              htmlFor='vehicle5'
              style={{
                backgroundImage: `url(${image5})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle5'
                onChange={(e) => convertFile5(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle5'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle5'
                onChange={(e) => convertFile5(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image6 ? (
            <label
              htmlFor='vehicle6'
              style={{
                backgroundImage: `url(${image6})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle6'
                onChange={(e) => convertFile6(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle6'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle6'
                onChange={(e) => convertFile6(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image7 ? (
            <label
              htmlFor='verelativehicle7'
              style={{
                backgroundImage: `url(${image7})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle7'
                onChange={(e) => convertFile7(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle7'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle7'
                onChange={(e) => convertFile7(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image8 ? (
            <label
              htmlFor='vehicle8'
              style={{
                backgroundImage: `url(${image8})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle8'
                onChange={(e) => convertFile8(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle8'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle8'
                onChange={(e) => convertFile8(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}

          {image9 ? (
            <label
              htmlFor='vehicle9'
              style={{
                backgroundImage: `url(${image9})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle9'
                onChange={(e) => convertFile9(e.target.files)}
                className='hidden'
              />
              <Image
              src='/images/deletevehiclecard.svg'
              alt='delete image'
              width='20'
              height='20'
              onClick={()=> {setDeleteModal(true)}}
              className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='vehicle9'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='vehicle9'
                onChange={(e) => convertFile9(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of vehicle'
              />
              <h2 className='text-blue-600 text-xs'>Upload photos</h2>
            </label>
          )}
        </div>
      </div>
      <div className='pt-9 flex justify-end gap-3 items-center mx-10'>
        <Image
          src='/images/uploadimg.svg'
          width='25'
          height='25'
          alt='upload photos of vehicle'
        />
        <h2 className='text-blue-600 text-sm'>Add more photos</h2>
      </div>
    </div>
  );
}





interface DeleteImageModal {
  setDeleteImageModal: (arg0: boolean) => void

}
const DeleteImageModal = ({setDeleteImageModal}: DeleteImageModal) => {

  return(
    <div className="fixed bg-black/50 top-0 left-0 right-0  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full z-50">
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-sm bg-white rounded-lg shadow p-10'>
          <div className='flex justify-end'>
            <Image
              src='/images/x.svg'
              onClick={() => { setDeleteImageModal(false)}}
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='flex flex-col items-center justify-center'>
            <div>
              <Image
                src='/images/delete-image.svg'
                alt='password saved'
                width='60'
                height='60'
              />
            </div>

            <div className='flex flex-col gap-3 pt-4 items-center'>
              <h2 className='font-semibold text-lg text-black'>Delete image</h2>
              <p className='text-xs text-gray-600 text-center tracking-wide'>
                Are you sure you want to delete your photo? This action can't be undone. 
              </p>
            </div>

            <div className='pt-8 flex gap-3'>
              
                <Button onClick={() => {setDeleteImageModal(false)}}  variant='blackWide' className='px-9 bg-gray-200 hover:bg-gray-300'>
                  <span className='text-sm text-black'>Cancel</span>
                </Button>

              <Button  onClick={() => {  setDeleteImageModal(false); }}  variant='blackWide' className='px-10'>
              
              <span className="text-sm">
                    Delete
                  </span>
                </Button>
            </div>
          </div>
        </div>
      </div>
    </div>

  )
}
