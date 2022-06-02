import { getUserInfo } from "../api/user";
import { getCookie, removeCookie } from "./cookie";

export const loginCheck = async () => {
    const cookie = getCookie("CAE_accessToken");
    const response = await getUserInfo();

    if (!response) { 
        document.cookie = "CAE_accessToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
        return {loginState : false, data:[]}
    }
    if (cookie && response.success === true) {

        return {loginState:true, data:response.data};
    }
    else
        return {loginState:false, data:[]};
}


export const logout = async () => {
    await (async () => {
        removeCookie("CAE_accessToken")
        document.cookie = "CAE_accessToken=; expires=Thu, 01 Jan 1970 00:00:01 GMT;"
    })()
    await (async () => window.location.reload())()
}