import { atom } from "recoil";
import { User } from "../lib/types/user";
import { WorkSpace } from "../lib/types/workSpace";



export const workSpaceStateAtom = atom<WorkSpace>({
    key: "atom/workspace",
    default: undefined,
})

export const documentListAtom = atom<any>({
    key: "atom/documentList",
    default:{},
})

export const inviteModalStateAtom = atom<boolean>({
    key: "atom/inviteModalState",
    default:false,
})
export const memberListStateAtom = atom<{memberList:User[], inviteMember:string[]}>({
    key: "atom/memberListState",
    default:undefined,
})

export const meetingRoomStateAtom = atom<boolean>({
    key: "atom/meetingRoomState",
    default : false,
})
export const camListStateAtom = atom<boolean>({
    key: "atom/camListState",
    default : false,
})
