import useFileConverter from "@/app/hooks/FileConverter";
import Image from "next/image";
import React, { useEffect, useState } from "react";
import { Button } from "../ui/button";

export default function AddVehiclePhoto() {
  const [deleteModal, setDeleteModal] = useState(false);
  const [image1, convertFile1] = useFileConverter();
  const [image2, convertFile2] = useFileConverter();
  const [image3, convertFile3] = useFileConverter();
  const [image4, convertFile4] = useFileConverter();
  const [image5, convertFile5] = useFileConverter();
  const [image6, convertFile6] = useFileConverter();
  const [image7, convertFile7] = useFileConverter();
  const [image8, convertFile8] = useFileConverter();
  const [image9, convertFile9] = useFileConverter();
  const [image10, convertFile10] = useFileConverter();
  const [image11, convertFile11] = useFileConverter();
  const [image12, convertFile12] = useFileConverter();
  const [image13, convertFile13] = useFileConverter();
  const [image14, convertFile14] = useFileConverter();

  const [img1, setImg1] = useState<string | null>();
  const [img2, setImg2] = useState<string | null>();
  const [img3, setImg3] = useState<string | null>();
  const [img4, setImg4] = useState<string | null>();
  const [img5, setImg5] = useState<string | null>();
  const [img6, setImg6] = useState<string | null>();
  const [img7, setImg7] = useState<string | null>();
  const [img8, setImg8] = useState<string | null>();
  const [img9, setImg9] = useState<string | null>();
  const [img10, setImg10] = useState<string | null>();
  const [img11, setImg11] = useState<string | null>();
  const [img12, setImg12] = useState<string | null>();
  const [img13, setImg13] = useState<string | null>();
  const [img14, setImg14] = useState<string | null>();

  const [addPhotos, setAddPhotos] = useState(false);

  useEffect(() => {
    setImg1(image1);
  }, [image1]);

  useEffect(() => {
    setImg2(image2);
  }, [image2]);

  useEffect(() => {
    setImg3(image3);
  }, [image3]);

  useEffect(() => {
    setImg3(image3);
  }, [image3]);

  useEffect(() => {
    setImg4(image4);
  }, [image4]);

  useEffect(() => {
    setImg5(image5);
  }, [image5]);

  useEffect(() => {
    setImg6(image6);
  }, [image6]);

  useEffect(() => {
    setImg7(image7);
  }, [image7]);

  useEffect(() => {
    setImg8(image8);
  }, [image8]);

  useEffect(() => {
    setImg10(image10);
  }, [image10]);

  useEffect(() => {
    setImg11(image11);
  }, [image11]);

  useEffect(() => {
    setImg12(image12);
  }, [image12]);

  useEffect(() => {
    setImg9(image9);
  }, [image9]);

  useEffect(() => {
    setImg13(image13);
  }, [image13]);

  useEffect(() => {
    setImg14(image14);
  }, [image14]);

  return (
    <div className=' mx-4'>
      <div className='flex flex-col gap-16 '>
        <div className='grid grid-row-2 sm:grid-cols-6 grid-cols-3 gap-5 grid-flow-row'>
          {img1 ? (
            <div
              style={{
                backgroundImage: `url(${img1})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2 sm:col-span-2 sm:row-span-2 py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg1("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img2 ? (
            <div
              style={{
                backgroundImage: `url(${img2})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg2("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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
          {img3 ? (
            <div
              style={{
                backgroundImage: `url(${img3})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg3("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img4 ? (
            <div
              style={{
                backgroundImage: `url(${img4})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg4("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img5 ? (
            <div
              style={{
                backgroundImage: `url(${img5})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg5("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img6 ? (
            <div
              style={{
                backgroundImage: `url(${img6})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg6("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img7 ? (
            <div
              style={{
                backgroundImage: `url(${img7})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg7("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img8 ? (
            <div
              style={{
                backgroundImage: `url(${img8})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg8("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {img9 ? (
            <div
              style={{
                backgroundImage: `url(${img9})`,
              }}
              className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
              <Image
                src='/images/deletevehiclecard.svg'
                alt='delete image'
                width='20'
                height='20'
                onClick={() => {
                  setImg9("");
                }}
                className='absolute top-5 right-5 cursor-pointer z-10 '
              />
            </div>
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

          {addPhotos && (
            <>
              {img10 ? (
                <div
                  style={{
                    backgroundImage: `url(${img10})`,
                  }}
                  className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <Image
                    src='/images/deletevehiclecard.svg'
                    alt='delete image'
                    width='20'
                    height='20'
                    onClick={() => {
                      setImg10("");
                    }}
                    className='absolute top-5 right-5 cursor-pointer z-10 '
                  />
                </div>
              ) : (
                <label
                  htmlFor='vehicle10'
                  className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <input
                    type='file'
                    id='vehicle10'
                    onChange={(e) => convertFile10(e.target.files)}
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
              {img11 ? (
                <div
                  style={{
                    backgroundImage: `url(${img11})`,
                  }}
                  className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <Image
                    src='/images/deletevehiclecard.svg'
                    alt='delete image'
                    width='20'
                    height='20'
                    onClick={() => {
                      setImg11("");
                    }}
                    className='absolute top-5 right-5 cursor-pointer z-10 '
                  />
                </div>
              ) : (
                <label
                  htmlFor='vehicle11'
                  className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <input
                    type='file'
                    id='vehicle11'
                    onChange={(e) => convertFile11(e.target.files)}
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
              {img12 ? (
                <div
                  style={{
                    backgroundImage: `url(${img12})`,
                  }}
                  className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <Image
                    src='/images/deletevehiclecard.svg'
                    alt='delete image'
                    width='20'
                    height='20'
                    onClick={() => {
                      setImg12("");
                    }}
                    className='absolute top-5 right-5 cursor-pointer z-10 '
                  />
                </div>
              ) : (
                <label
                  htmlFor='vehicle12'
                  className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <input
                    type='file'
                    id='vehicle12'
                    onChange={(e) => convertFile12(e.target.files)}
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

              {img13 ? (
                <div
                  style={{
                    backgroundImage: `url(${img13})`,
                  }}
                  className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <Image
                    src='/images/deletevehiclecard.svg'
                    alt='delete image'
                    width='20'
                    height='20'
                    onClick={() => {
                      setImg13("");
                    }}
                    className='absolute top-5 right-5 cursor-pointer z-10 '
                  />
                </div>
              ) : (
                <label
                  htmlFor='vehicle13'
                  className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <input
                    type='file'
                    id='vehicle13'
                    onChange={(e) => convertFile13(e.target.files)}
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
              {img14 ? (
                <div
                  style={{
                    backgroundImage: `url(${img14})`,
                  }}
                  className='relative background-img bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <Image
                    src='/images/deletevehiclecard.svg'
                    alt='delete image'
                    width='20'
                    height='20'
                    onClick={() => {
                      setImg14("");
                    }}
                    className='absolute top-5 right-5 cursor-pointer z-10 '
                  />
                </div>
              ) : (
                <label
                  htmlFor='vehicle14'
                  className='bg-white shadow-sm rounded-lg hover:scale-[.95] cursor-pointer transition-all duration-500 flex justify-center items-center gap-2  py-16 px-12'>
                  <input
                    type='file'
                    id='vehicle14'
                    onChange={(e) => convertFile14(e.target.files)}
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
            </>
          )}
        </div>
      </div>
      <div
        className='pt-9 flex justify-end gap-3 items-center mx-10'
        onClick={() => {
          setAddPhotos(!addPhotos);
        }}>
        <Image
          src='/images/uploadimg.svg'
          width='25'
          height='25'
          alt='upload photos of vehicle'
        />
        <h2 className='text-blue-600 text-sm cursor-pointer'>
          Add {addPhotos ? "less" : "more"} photos
        </h2>
      </div>
    </div>
  );
}
