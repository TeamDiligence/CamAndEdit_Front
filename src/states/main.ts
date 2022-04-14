import { atom, selector } from "recoil";
import { roomInfoType } from "../types/roomInfo";
import { userInfoType } from "../types/userInfo";






export const userInfoAtom = atom<userInfoType>({
    default: {
        nickName: ""
    },
    key:"atom/userInfo"
})


export const roomInfoAtom = atom<roomInfoType>({
    default: {
        roomId:"",
        roomName: ""
    },
    key:"atom/roomInfo"
})
