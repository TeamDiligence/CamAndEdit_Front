import { getUserInfo } from "../api/user";
import { getCookie } from "./cookie";

export const loginCheck = async () => {
    const cookie = getCookie("CAE_accessToken");
    const userInfo = await getUserInfo();
    // console.log(cookie, userInfo);

    if (!userInfo) { 
        return false
    }

    if (cookie && userInfo.success === true) {
        return true;
    }
    else
        return false;
}
