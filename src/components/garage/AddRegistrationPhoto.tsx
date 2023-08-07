import useFileConverter from "@/app/hooks/FileConverter";
import Image from "next/image";
import React, { useState } from "react";
import { Button } from "../ui/button";

export default function AddRegistrationPhoto() {
  const [deletemodal, setDeleteModal] = useState(false);
  const [registrationImage1, convertFile1] = useFileConverter();
  const [registrationImage2, convertFile2] = useFileConverter();
  const [registrationImage3, convertFile3] = useFileConverter();
  const [registrationImage4, convertFile4] = useFileConverter();
  const [registrationImage5, convertFile5] = useFileConverter();
  const [registrationImage6, convertFile6] = useFileConverter();

  return (
    <div className=' mx-4'>
      <h2 className='font-semibold text-lg pb-6'>Registration certificate</h2>
      <div className='flex flex-col gap-16 '>
        <div className='grid grid-row-2 sm:grid-cols-6 grid-cols-3 gap-5 grid-flow-row'>
          {registrationImage1 ? (
            <label
              htmlFor='registration1'
              style={{
                backgroundImage: `url(${registrationImage1})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 py-16 px-12'>
              <input
                type='file'
                id='registration1'
                onChange={(e) => convertFile1(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration1'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 py-16 px-12'>
              <input
                type='file'
                id='registration1'
                onChange={(e) => convertFile1(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}

          {registrationImage2 ? (
            <label
              htmlFor='registration2'
              style={{
                backgroundImage: `url(${registrationImage2})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration2'
                onChange={(e) => convertFile2(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration2'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration2'
                onChange={(e) => convertFile2(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}
          {registrationImage3 ? (
            <label
              htmlFor='registration3'
              style={{
                backgroundImage: `url(${registrationImage3})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration3'
                onChange={(e) => convertFile3(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration3'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration3'
                onChange={(e) => convertFile3(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}

          {registrationImage4 ? (
            <label
              htmlFor='registration4'
              style={{
                backgroundImage: `url(${registrationImage4})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration4'
                onChange={(e) => convertFile4(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration4'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration4'
                onChange={(e) => convertFile4(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}

          {registrationImage5 ? (
            <label
              htmlFor='registration5'
              style={{
                backgroundImage: `url(${registrationImage5})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration5'
                onChange={(e) => convertFile5(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration5'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration5'
                onChange={(e) => convertFile5(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}
          {registrationImage6 ? (
            <label
              htmlFor='registration6'
              style={{
                backgroundImage: `url(${registrationImage6})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration6'
                onChange={(e) => convertFile6(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setDeleteModal(true);
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </label>
          ) : (
            <label
              htmlFor='registration6'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration6'
                onChange={(e) => convertFile6(e.target.files)}
                className='hidden'
              />
              <Image
                src='/images/uploadimg.svg'
                width='20'
                height='20'
                alt='upload photos of registration  document'
              />
              <h2 className='text-blue-600 text-xs'>Upload</h2>
            </label>
          )}
        </div>
      </div>
      <div className='pt-9 flex justify-end gap-3 items-center mx-10'>
        <Image
          src='/images/uploadimg.svg'
          width='25'
          height='25'
          alt='upload photos of registration  document'
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
