import {atom} from 'jotai'


const privacyPolicy = atom(false)
const completeProfileModal = atom(true)
const deleteImage = atom(false)
const selectionAreaModal = atom(false)
const alertUpgradePlan = atom(true)
export {
    privacyPolicy,
    completeProfileModal,
    deleteImage,
    selectionAreaModal,
    alertUpgradePlan
}

