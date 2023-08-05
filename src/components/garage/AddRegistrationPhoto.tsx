import useFileConverter from "@/app/hooks/FileConverter";
import Image from "next/image";
import React from "react";

export default function AddRegistrationPhoto() {
  const [registrationImage1, convertFile1] = useFileConverter();
  const [registrationImage2, convertFile2] = useFileConverter();
  const [registrationImage3, convertFile3] = useFileConverter();
  const [registrationImage4, convertFile4] = useFileConverter();
  const [registrationImage5, convertFile5] = useFileConverter();
  const [registrationImage6, convertFile6] = useFileConverter();


  return (
    <div className=' mx-4'>
        <h2 className="font-semibold text-lg pb-6">Registration certificate</h2>
      <div className='flex flex-col gap-16 '>
        <div className='grid grid-row-2 sm:grid-cols-6 grid-cols-4 gap-5 grid-flow-row'>
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
