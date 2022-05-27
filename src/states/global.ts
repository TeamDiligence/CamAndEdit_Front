import { atom } from "recoil";

export const isLoginedAtom = atom<boolean>({
    key: "atom/isLogined",
    default:false,
})

