import { atom } from "recoil";

export const compaction = atom<string>({
    default: "",
    key:"compaction"
})