'use client'
import {atom} from 'jotai'


const privacyPolicy = atom(false)
const completeProfileModal = atom(false)
const deleteImageAtom = atom(false)
const selectionAreaModal = atom(false)
const alertUpgradePlan = atom(true)
const chatBubbleModal = atom(false)
const currencyChangeModal = atom(false)
const infoAreaModal = atom(false)
const maisonAuctionEventsArea = atom('Maison & Auction Events')
const HiddenSideNavPage = atom('data')


// auth
const forgottedPassword = atom(false) 
const newPasswordAtom = atom(false)
const resettedPasswordAtom = atom(false)
let user : any = {}
const currentUserAtom = atom(user || null)
let accessToken : any = {}
const accessTokenAtom = atom(accessToken)
const confirmIdentityAtom = atom(false)


  
//
export {
    privacyPolicy,
    completeProfileModal,
    deleteImageAtom,
    selectionAreaModal,
    alertUpgradePlan,
    chatBubbleModal,
    currencyChangeModal,
    infoAreaModal,
    HiddenSideNavPage,
    maisonAuctionEventsArea,
    currentUserAtom,
    forgottedPassword,
    newPasswordAtom,
    resettedPasswordAtom,
    accessTokenAtom,
    confirmIdentityAtom
    
}

