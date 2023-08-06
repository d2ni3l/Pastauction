import useFileConverter from "@/app/hooks/FileConverter";
import Image from "next/image";
import Link from "next/link";
import React from "react";
import { Button } from "../ui/button";

export default function AddServiceBookPhoto() {
  const [serviceBookImage1, convertFile1] = useFileConverter();
  const [serviceBookImage2, convertFile2] = useFileConverter();
  const [serviceBookImage3, convertFile3] = useFileConverter();
  const [serviceBookImage4, convertFile4] = useFileConverter();
  const [serviceBookImage5, convertFile5] = useFileConverter();
  const [serviceBookImage6, convertFile6] = useFileConverter();

  return (
    <div className=' mx-4'>
      <h2 className='font-semibold text-lg pb-6'>Service book</h2>
      <div className='flex flex-col gap-16 '>
        <div className='grid grid-row-2 sm:grid-cols-6 grid-cols-3 gap-5 grid-flow-row'>
          {serviceBookImage1 ? (
            <label
              htmlFor='servicebookimage1'
              style={{
                backgroundImage: `url(${serviceBookImage1})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 py-16 px-12'>
              <input
                type='file'
                id='servicebookimage1'
                onChange={(e) => convertFile1(e.target.files)}
                className='hidden'
              />
            </label>
          ) : (
            <label
              htmlFor='servicebookimage1'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 py-16 px-12'>
              <input
                type='file'
                id='servicebookimage1'
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

          {serviceBookImage2 ? (
            <label
              htmlFor='servicebookimage2'
              style={{
                backgroundImage: `url(${serviceBookImage2})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage2'
                onChange={(e) => convertFile2(e.target.files)}
                className='hidden'
              />
            </label>
          ) : (
            <label
              htmlFor='servicebookimage2'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage2'
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
          {serviceBookImage3 ? (
            <label
              htmlFor='servicebookimage3'
              style={{
                backgroundImage: `url(${serviceBookImage3})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage3'
                onChange={(e) => convertFile3(e.target.files)}
                className='hidden'
              />
            </label>
          ) : (
            <label
              htmlFor='servicebookimage3'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage3'
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

          {serviceBookImage4 ? (
            <label
              htmlFor='servicebookimage4'
              style={{
                backgroundImage: `url(${serviceBookImage4})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage4'
                onChange={(e) => convertFile4(e.target.files)}
                className='hidden'
              />
            </label>
          ) : (
            <label
              htmlFor='servicebookimage4'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage4'
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

          {serviceBookImage5 ? (
            <label
              htmlFor='servicebookimage5'
              style={{
                backgroundImage: `url(${serviceBookImage5})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage5'
                onChange={(e) => convertFile5(e.target.files)}
                className='hidden'
              />
            </label>
          ) : (
            <label
              htmlFor='servicebookimage5'
              className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='servicebookimage5'
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
          {serviceBookImage6 ? (
            <label
              htmlFor='registration6'
              style={{
                backgroundImage: `url(${serviceBookImage6})`,
              }}
              className=' background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <input
                type='file'
                id='registration6'
                onChange={(e) => convertFile6(e.target.files)}
                className='hidden'
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
