import { atom } from "recoil";
import { RedirectInfo } from "../lib/types/global";

export const isLoginedAtom = atom<boolean>({
    key: "atom/isLogined",
    default:false,
})


export const redirectAtom = atom<RedirectInfo>({
    key: "atom/RedirectInfo",
    default:{isRediret:false,email:"",workSpaceId:""},
})

export const workSpaceLoadErrorAtom = atom<boolean>({
    key: "atom/workSpaceLoadError",
    default:false,
})