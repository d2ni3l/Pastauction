import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { ScrollArea } from "@/components/ui/scroll-area";
import { Separator } from "@/components/ui/separator";

interface CurrencyModal {
  setCurrencyModal: React.Dispatch<React.SetStateAction<boolean>>;
}

const dataCurrency = [
  {
    currency: "USD",
    currencyDesc: "$ - Dollaro (USA)",
    countryflag: "/images/usflag.svg",
  },
  {
    currency: "JPY",
    currencyDesc: "¥ - Yen (Japan)",
    countryflag: '/images/japanflag.svg'
  },
  {
    currency: "RUB",
    currencyDesc: "₽ - Rublo (Russia)",
    countryflag: '/images/russianflag.svg'
  },
  {
    currency: "RMB",
    currencyDesc: "¥ - Yuan Bi (China) ",
    countryflag: '/images/chinaflag.svg'
  },
  {
    currency: "CAN",
    currencyDesc: "$ - Dollaro (Canada)",
    countryflag: '/images/canadaflag.svg'
  },
  {
    currency: "AED",
    currencyDesc: " د.إ - Dirham (Emirates)",
    countryflag: '/images/aedflag.svg'
  },
  {
    currency: "CHF",
    currencyDesc: "Fr - Franco (Swiss)",
    countryflag: '/images/switzerlandflag.svg'
  },

  {
    currency: "GBP",
    currencyDesc: "£ - Sterlina (Great Britain)",
    countryflag: '/images/flagenglandplaceholder.svg'
  },
  {
    currency: "DKK",
    currencyDesc: "kr - Corona (Denmark)",
    countryflag: '/images/denmarkflag.svg'

  },
];

export default function CurrencyChange({ setCurrencyModal }: CurrencyModal) {
  const [currencyObj, setCurrencyObj] = useState<Currency>(dataCurrency[0]);

  interface Currency {
    currency: string;
    currencyDesc: string;
    countryflag?: string;
  }

  const handleSetCurrency = (number: number) => {
    setCurrencyObj(dataCurrency[number]);
  };
  return (
    <div
      id='staticModal'
      data-modal-backdrop='static'
      aria-hidden='true'
      className='fixed bg-black/50 top-0 left-0 right-0 z-50  p-4 overflow-x-hidden w-screen overflow-y-auto md:inset-0  h-full'>
      <div className='relative w-full  h-full flex justify-center items-center'>
        <div className='relative max-w-sm  sm:max-w-lg sm:w-[500px]  bg-white rounded-lg shadow px-10 py-5'>
          <div className='flex justify-between w-full'>
            <Button className='w-8 h-8 p-0 bg-black hover:bg-black/80 hover:scale-[.9] transition-all duration-300 rounded-full'>
              <Image
                priority
                src='/images/chat-bubble.svg'
                alt='chat bubble'
                width='20'
                height='20'
              />
            </Button>

            <h2 className='font-semibold text-xl mt-2'>Currency</h2>
            <Image
              src='/images/x.svg'
              onClick={() => {
                setCurrencyModal((prev) => (prev = false));
              }}
              alt='password saved'
              width='15'
              height='15'
              className='hover:scale-[.9] transition-all duration-300 cursor-pointer'
            />
          </div>

          <div className='pt-2'>
            <p className='text-gray-500 text-center'>
              You can change your currency preferences
            </p>
          </div>

          <div className='pt-5'></div>

          <div className='flex justify-center w-full'>
            <div className='flex justify-between  items-center grow bg-[#dee2e6] px-5   py-4'>
              <div className='flex items-center gap-2'>
                <span>
                  <Image
                    src={currencyObj.countryflag as string}
                    alt='country flag'
                    height='40'
                    width='40'
                  />
                </span>

                <span className=' text-gray-500 text-sm sm:text-base'>
                  {currencyObj.currency}
                </span>
              </div>

              <p className=' font-medium sm:mr-12 text-sm sm:text-base'>
                {currencyObj.currencyDesc}
              </p>
            </div>
          </div>

          <div className='flex justify-center pt-5'>
            <ScrollArea className='h-[250px] w-full rounded-md border'>
              <div className='p-4'>
                {dataCurrency.map((currency, i) => (
                  <React.Fragment>
                    <div
                      onClick={() => {
                        handleSetCurrency(i);
                      }}
                      className='text-sm border cursor-pointer hover:scale-[.98] transition-all duration-300'
                      key={currency.currency}>
                      <div className='flex justify-between  items-center grow bg-white px-2   py-2'>
                        <div className='flex items-center gap-2'>
                          <span>
                            <Image
                              src={currency.countryflag}
                              alt='country flag'
                              height='40'
                              width='40'
                              className='w-[30] h-[30] sm:w-[40] sm:h-[40]'
                            />
                          </span>

                          <span className=' text-gray-500 text-xs sm:text-base'>
                            {currency.currency}
                          </span>
                        </div>

                        <p className=' font-medium sm:mr-12 text-gray-500 text-xs sm:text-base'>
                          {currency.currencyDesc}
                        </p>
                      </div>
                    </div>
                    <Separator className='my-2' />
                  </React.Fragment>
                ))}
              </div>
            </ScrollArea>
          </div>

          <div className='justify-center flex pt-4 tracking-wide'>
            <Button variant='blackWide' className='px-10'>
              Done
            </Button>
          </div>
        </div>
      </div>
    </div>
  );
}
