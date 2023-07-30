import React from "react";
import { useAtom } from "jotai";
import { privacyPolicy } from "@/app/atoms/atoms";
import Image from "next/image";
import {ubuntu} from '@/app/fonts'
export default function PrivacyPolicy() {
  const [, deactivate] = useAtom(privacyPolicy);
  return (
    <div className={ubuntu.className}>
        <div className='h-screen bg-black/40 w-screen  flex justify-center relative overflow-y-scroll scroll-hidden'>
      <div
        className='absolute bg-white pb-12 top-[20%] h-[contain-content] scroll-hidden scroll-smooth overflow-y-scroll w-full max-w-2xl p-5 rounded-t-xl rounded-b-xl  max-h-full'
        >
        <div className='flex justify-end'
        onClick={() => {
            deactivate((prev) => (prev = false));
          }}
        >
            <button className="hover:scale-[.9] cursor-pointer transition-all duration-300 mx-2 mt-2">
            <Image
            src='/images/x.svg'
            alt='cancel '
            width='20'
            height='20'
            />
            </button>
        </div>
        <div className=''>
          <h2 className='font-semibold tracking-wide text-xl pb-2'>Privacy policy</h2>
        </div>

        <div className="flex flex-col gap-2">
        <div className='flex flex-col '>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        </div>

        <div className="pt-4"></div>
        <div className=''>
          <h2 className='font-semibold text-xl tracking-wide pb-2'>Terms & conditions</h2>
        </div>

        <div className="flex flex-col gap-2">
        <div className='flex flex-col '>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        <div className='flex flex-col '>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        <div className='flex flex-col'>
          <h3 className='font-[500] text-gray-600 text-sm'>Titolo</h3>
          <p className='text-xs font-[400]'>
            Lorem ipsum dolor sit, amet consectetur adipisicing elit. Ad cumque
            id impedit earum quod, reprehenderit quidem quibusdam tempora
            labore, ipsa temporibus libero, voluptatem maxime a sunt explicabo
            enim deleniti porro! Esse, sequi unde officia aliquam eius, commodi
            eveniet quo quis sapiente.
          </p>
        </div>
        </div>

      </div>
    </div>
    </div>
  );
}
