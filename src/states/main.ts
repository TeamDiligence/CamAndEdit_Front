import { atom, selector } from "recoil";
import { roomInfoType } from "../lib/types/roomInfo";
import { User } from "../lib/types/user";
import { userInfoType } from "../lib/types/userInfo";
import { WorkSpace } from "../lib/types/workSpace";


export const userAtom = atom<User>({
    default: undefined,
    key:"atom/user"
})

export const userWorkSpaceSelector = selector<any>({
    key: "selector/userWorkSpace",
    get: ({ get }) => {
        const user = get(userAtom);
        if (!user) return [];
        return user.workSpaceList;
    }
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



export const createWorkSpaceStateAtom = atom<boolean>({
    default: false,
    key:"atom/createWorkSpaceState"
})