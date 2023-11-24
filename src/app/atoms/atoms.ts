'use client'
import {atom} from 'jotai'


const privacyPolicy = atom(false)
const completeProfileModal = atom(false)
const deleteImage = atom(false)
const selectionAreaModal = atom(false)
const alertUpgradePlan = atom(true)
const chatBubbleModal = atom(false)
const currencyChangeModal = atom(false)
const infoAreaModal = atom(false)
const maisonAuctionEventsArea = atom('Maison & Auction Events')

const forgottedPassword = atom(false)
const newPasswordAtom = atom(true)

const currentUserAtom = atom({} || null)

  
//
const HiddenSideNavPage = atom('data')
export {
    privacyPolicy,
    completeProfileModal,
    deleteImage,
    selectionAreaModal,
    alertUpgradePlan,
    chatBubbleModal,
    currencyChangeModal,
    infoAreaModal,
    HiddenSideNavPage,
    maisonAuctionEventsArea,
    currentUserAtom,
    forgottedPassword,
    newPasswordAtom
    
}

