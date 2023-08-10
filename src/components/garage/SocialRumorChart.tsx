import React, { useState } from "react";
import { Button } from "../ui/button";
import Image from "next/image";
import { inter } from "@/app/fonts";
import {
  Chart as ChartJS,
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title,
} from "chart.js";
import { Pie } from "react-chartjs-2";
import { Bar } from "react-chartjs-2";
import { faker } from "@faker-js/faker";
import { Progress } from "../ui/progress";
ChartJS.register(
  ArcElement,
  Tooltip,
  Legend,
  CategoryScale,
  LinearScale,
  BarElement,
  Title
);

export const options = {
  indexAxis: "y" as const,
  elements: {
    bar: {
      borderWidth: 2,
    },
  },
  responsive: true,
  maintainAspectRatio: false,
  plugins: {
    legend: {
      position: "bottom" as const,
    },
  },
};

const ageRangeData = [
  {
    ageRange: "18-25",
    progress: 5,
  },
  {
    ageRange: "25-35",
    progress: 40,
  },
  {
    ageRange: "35-44",
    progress: 35,
  },
  {
    ageRange: "45-54",
    progress: 10,
  },
  {
    ageRange: "55-64",
    progress: 5,
  },
  {
    ageRange: "+65",
    progress: 5,
  },
];

const countriesData = [
  {
    country: "United States",
    progress: 20,
  },
  {
    country: "Italy",
    progress: 50,
  },
  {
    country: "United Kingdom",
    progress: 100,
  },
];

export default function SocialRumorChart() {
  const [period, setPeriod] = useState("month");

  const data2: any = {
    labels: ["Jan", "Feb", "Mar", "Apr", "Mai", "Jun"],

    datasets: [
      {
        label: ["Positive "],
        data: [250, 525, 250, 270, 390, 70],
        backgroundColor: "#0d6efd",
        borderWidth: 1,
      },
      {
        label: ["Neutral "],
        data: [280, 500, 200, 250, 450, 700],
        borderWidth: 2,
        backgroundColor: "gray",
      },
      {
        label: ["Negative "],
        data: [100, 270, 350, 350, 290, 50],
        borderWidth: 2,
        backgroundColor: "red",
      },
    ],
  };

  const data = {
    datasets: [
      {
        label: "% number of people",
        data: [25, 85],
        backgroundColor: ["#0d6efd", "#dee2e6"],
        borderWidth: 1,
      },
    ],
  };
  return (
    <div className={`${inter.className} `}>
      <div className='mt-2 mb-3 border-black border-2'></div>

      <div className='grid sm:grid-cols-6 grid-cols-3 grid-flow-row gap-4'>
        <Button
          onClick={() => {
            setPeriod("yestarday");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "yestarday" ? "blue" : "blackWide"}>
          Yesterday
        </Button>
        <Button
          onClick={() => {
            setPeriod("week");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "week" ? "blue" : "blackWide"}>
          Week
        </Button>
        <Button
          onClick={() => {
            setPeriod("month");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "month" ? "blue" : "blackWide"}>
          Month
        </Button>
        <Button
          onClick={() => {
            setPeriod("quartar");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "quartar" ? "blue" : "blackWide"}>
          Quarter
        </Button>
        <Button
          onClick={() => {
            setPeriod("year");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "year" ? "blue" : "blackWide"}>
          Year
        </Button>
        <Button
          onClick={() => {
            setPeriod("all");
          }}
          className='lg:px-16 sm:px-10 rounded-sm'
          variant={period === "all" ? "blue" : "blackWide"}>
          All
        </Button>
      </div>

      <div className='mt-2 mb-3 border-black border-2'></div>

      <div className='bg-white  shadow-lg px-5 rounded-lg'>
        <h2 className='text-gray-500 text-xl tracking-tight font-semibold pt-6'>
          Number of comments by social media
        </h2>
        <div className=' border border-gray-300 mt-5 mb-2'></div>
        <div className='grid grid-cols-2 place-items-center min-[500px]:grid-cols-3 md:grid-cols-4 gap-1 xl:grid-cols-7'>
          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/facebooklogoblue.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>
              Facebook
            </span>
            <span className='text-black font-semibold text-sm py-1'>1235</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-green-100 rounded-sm font-medium text-green-400 text-xs mb-3'>
              <Image
                src='/images/arrowupgreen.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.8%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/twittericon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>Twitter</span>
            <span className='text-black font-semibold text-sm py-1'>134</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-green-100 rounded-sm font-medium text-green-400 text-xs mb-3'>
              <Image
                src='/images/arrowupgreen.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.8%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/youtubeicon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>Youtube</span>
            <span className='text-black font-semibold text-sm py-1'>1355</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-red-100 rounded-sm font-medium text-red-400 text-xs mb-3'>
              <Image
                src='/images/arrowupred.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.9%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/ticktokicon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>Tiktok</span>
            <span className='text-black font-semibold text-sm py-1'>500</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-red-100 rounded-sm font-medium text-red-400 text-xs mb-3'>
              <Image
                src='/images/arrowupred.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.9%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/instagramicon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>
              Instagram
            </span>
            <span className='text-black font-semibold text-sm py-1'>1355</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-green-100 rounded-sm font-medium text-green-400 text-xs mb-3'>
              <Image
                src='/images/arrowupgreen.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.5%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/blogicon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>Blog</span>
            <span className='text-black font-semibold text-sm py-1'>1355</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-red-100 rounded-sm font-medium text-red-400 text-xs mb-3'>
              <Image
                src='/images/arrowupred.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.9%</span>
            </span>
          </div>

          <div className='flex shadow-md flex-col w-[120px] bg-[#fdfdfd] scale-hover mt-5 mb-5 items-center justify-center rounded-md border-[1.2px] border-gray-200 '>
            <Image
              src='/images/magazinesicon.svg'
              alt='social media icon'
              width='40'
              height='40'
              className='pt-2'
            />
            <span className='text-black font-medium text-sm pt-2'>
              Magazines
            </span>
            <span className='text-black font-semibold text-sm py-1'>1355</span>
            <span className='shadow-md flex gap-1 px-5 py-[2px] bg-red-100 rounded-sm font-medium text-red-400 text-xs mb-3'>
              <Image
                src='/images/arrowupred.svg'
                alt='percentage'
                width='12'
                height='10'
              />{" "}
              <span>0.9%</span>
            </span>
          </div>
        </div>
      </div>

      <div className='grid grid-cols-1 xl:grid-cols-2 gap-10 mt-10 pb-24'>
        <div className='bg-white grow  shadow-lg max-h-[600px] sm:max-h-[500px]   p-6 px-7 pb-10 rounded-md'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl text-gray-600 font-semibold'>Genre</h3>
            <p className='text-4xl font-semibold text-black'>2.000</p>
            <p className=' text-black'>Number of people</p>
          </div>
          <div className=' border-[1.5px] border-gray-300 mt-5 mb-2'></div>

          <div className=' gap-6 flex sm:flex-row min-[1900px]:justify-center  flex-col  items-center font-semibold text-black'>
            <div className='w-[300px]'>
              <Pie data={data} />
            </div>
            <div className='flex-col flex gap-2 2xl:-mt-20 pb-2'>
              <div className='flex gap-2 items-center'>
                <span className='bg-[#0d6efd] h-4 w-9  gap-2 '></span>
                <span className='text-black font-normal flex gap-2'>
                  Men <span className='font-semibold'> 25%</span>
                </span>
              </div>
              <div className='flex gap-2 items-center'>
                <span className='bg-[#dee2e6] h-4 w-9  gap-2 '></span>
                <span className='text-black font-normal flex gap-2'>
                  Women <span className='font-semibold'> 85%</span>
                </span>
              </div>
            </div>
          </div>
        </div>

        <div className='bg-white grow shadow-lg  p-6 px-7 pb-10 rounded-md'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl text-gray-600 font-semibold'>
              Total comments
            </h3>
            <p className='text-4xl font-semibold text-black'>5.987,37</p>
            <p className=' text-black'>Number of comments per month</p>
          </div>
          <div className=' border-[1.5px] border-gray-300 mt-5 mb-2'></div>

          <div className=' gap-6 flex flex-col  items-center font-semibold text-black'>
            <div className='w-[300px] h-[250px] min-[600px]:w-[500px] min-[600px]:h-[500px]  '>
              <Bar options={options} data={data2} className='w-full h-full' />
            </div>
          </div>
        </div>

        <div className='bg-white  p-6 px-7 grow shadow-lg xl:-mt-[12.5rem] pb-10 rounded-md'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl text-gray-600 font-semibold'>Age range</h3>
            <p className=' text-black pt1 pb-2'>Number of people</p>
            <div className='flex gap-2'>
              <Button className='' variant='blackWide'>
                All
              </Button>
              <Button className='' variant='blackWide'>
                Men
              </Button>
              <Button className='' variant='blackWide'>
                Women
              </Button>
            </div>
          </div>
          <div className=' border-[1.5px] border-gray-300 mt-5 mb-2'></div>

          <div className='pt-7 pb-5 '>
            {ageRangeData.map((data) => {
              return (
                <div>
                  <p className='text-gray-500 text-sm py-3'>{data.ageRange}</p>
                  <div className='flex gap-10 sm:gap-28 items-center'>
                    <Progress value={data.progress} className='w-[60%]' />
                    <span className='text-black font-semibold'>
                      {data.progress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>

        <div className='bg-white  p-6 px-7 grow max-h-[600px] xl:-mt-[.3rem]  shadow-lg  pb-10 rounded-md'>
          <div className='flex flex-col gap-1'>
            <h3 className='text-2xl text-gray-600 font-semibold'>
              Main locations
            </h3>
            <p className=' text-black pt1 pb-2'>Countries</p>
          </div>
          <div className=' border-[1.5px] border-gray-300 mt-5 mb-2'></div>

          <div className='pt-7 pb-5 '>
            {countriesData.map((data) => {
              return (
                <div>
                  <p className='text-gray-500 text-sm py-3'>{data.country}</p>
                  <div className='flex gap-10 md:gap-28 items-center'>
                    <Progress value={data.progress} className='w-[60%]' />
                    <span className='text-black font-semibold'>
                      {data.progress}%
                    </span>
                  </div>
                </div>
              );
            })}
          </div>
        </div>
      </div>
    </div>
  );
}
