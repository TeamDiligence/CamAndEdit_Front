import { atom, selector } from "recoil";
import { roomInfoType } from "../types/roomInfo";
import { userInfoType } from "../types/userInfo";


export const userAtom = atom<string>({
    default: "익명",
    key:"atom/user"
})


export const userInfoAtom = atom<userInfoType[]>({
    default:[],
    key:"atom/userInfo"
})


export const roomInfoAtom = atom<roomInfoType>({
    default: {
        roomId:"",
        roomName: ""
    },
    key:"atom/roomInfo"
})
