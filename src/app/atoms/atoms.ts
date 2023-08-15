import {atom} from 'jotai'


const privacyPolicy = atom(false)
const completeProfileModal = atom(true)
const deleteImage = atom(false)
const selectionAreaModal = atom(false)
const alertUpgradePlan = atom(true)
const chatBubbleModal = atom(false)
const currencyChangeModal = atom(false)
export {
    privacyPolicy,
    completeProfileModal,
    deleteImage,
    selectionAreaModal,
    alertUpgradePlan,
    chatBubbleModal,
    currencyChangeModal
}

