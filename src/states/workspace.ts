import { atom } from "recoil";

export const inviteModalStateAtom = atom<boolean>({
    key: "atom/inviteModalState",
    default:false,
})

export const meetingRoomStateAtom = atom<boolean>({
    key: "atom/meetingRoomState",
    default : false,
})
export const camListStateAtom = atom<boolean>({
    key: "atom/camListState",
    default : false,
})
