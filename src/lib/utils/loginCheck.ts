import { getUserInfo } from "../api/user";
import { getCookie, removeCookie } from "./cookie";

export const loginCheck = async () => {
    const cookie = getCookie("CAE_accessToken");
    const response = await getUserInfo();
    // console.log(cookie, userInfo);

    if (!response) { 
        removeCookie("CAE_accessToken");
        return {loginState : false, data:[]}
    }
    if (cookie && response.success === true) {

        return {loginState:true, data:response.data};
    }
    else
        return {loginState:false, data:[]};
}
