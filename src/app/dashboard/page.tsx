"use client";

import { DashbordSidebar } from "@/components/dashboard/DashbordSidebar";
import DashboardNavbar from "@/components/dashboard/DashboardNavbar";
import React, { useState } from "react";
import DashboardIntro from "@/components/dashboard/DashboardIntro";
import UpgradePlan from "@/components/dashboard/UpgradePlan";
import WalletInterface from "@/components/dashboard/WalletInterface";
import DashboardFooter, { DashboardFooterProps } from "@/components/dashboard/DashboardFooter";
import { useAtom } from "jotai";
import { completeProfileModal, currentUserAtom, newPasswordAtom, resettedPasswordAtom } from "../atoms/atoms";
import { selectionAreaModal } from "../atoms/atoms";
import CompleteProfileModal from "@/components/dashboard/CompleteProfileModal";
import { inter } from "../fonts";
import DashboardSelectionArea from "@/components/dashboard/DashboardSelectionArea";
import NewpasswordModal from "@/components/NewPasswordModal";
import PasswordResettedModal from "@/components/auth/PasswordResettedModal";
import { useQuery } from "@tanstack/react-query";
import axios from "axios";

export default function page() {

  const [completeprofileModal, setCompleteProfileModal] = useAtom(completeProfileModal);
  const [selectionAreamodal, ] = useAtom(selectionAreaModal);
  const [mobileSidebar, setMobileSideBar] = useState(false);
  const [user,] = useAtom(currentUserAtom)
  const [newPassword,] = useAtom(newPasswordAtom)
  const [resettedPassword,] = useAtom(resettedPasswordAtom)

  const [garage, setGarage] = useState({ items : [], 
    total: 0,
    page: 0,
    size: 0,
    pages: 0})

 

  const { refetch: fetchInitial } = useQuery({
    queryKey: ["getGarage"],

    queryFn: async () => {
      const { data } = await axios.get(
        `https://pastauction.com/api/v1/garage_set/query?page=1&size=50`,
        {
          headers: {
            Authorization: `Bearer ${localStorage.getItem("accessToken")}`,
          },
        }
      );
      return data;
    },
    enabled: true,

    onSuccess: (data) => {
      setGarage(data)
    },
  });
  

  return (
    <>
    {completeprofileModal && (
        <div className={inter.className}>
          <CompleteProfileModal />
        </div>
      )}

      { newPassword && (
        <div className={inter.className}>
          <NewpasswordModal/>

        </div>
      )}
      {  resettedPassword && (

        <div className={inter.className}>
          <PasswordResettedModal/>

        </div>
      )

      }

 {
       selectionAreamodal && (
        <div className={inter.className}>
          <DashboardSelectionArea />
        </div>) 
      } 
    <div className='bg-[#f8f9fa] overflow-x-hidden w-screen h-screen'>
      <DashboardNavbar
      page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />
      <DashbordSidebar
      page='home'
        mobileSidebar={mobileSidebar}
        setMobileSidebar={setMobileSideBar}
      />

      <div className="xl:flex xl:justify-center ">
      <div className='max-w-7xl xl:-ml-[3rem] xl:grow'>
        <div className='lg:ml-[16rem] '>
          <DashboardIntro />
        </div>

        <div className='lg:ml-[16rem]   flex flex-col xl:flex-row  lg:justify-around  justify-center items-center  xl:space-x-5'>
          <div className=' w-full'>
            <UpgradePlan />
          </div>
          <div className='w-full'>
            <WalletInterface />
          </div>
        </div>

        <div className='lg:ml-[16rem]  pb-12 '>
          <DashboardFooter garageItems={garage} />
        </div>
      </div>
      </div>
      
      

     
    </div>
  </>
  );
}
