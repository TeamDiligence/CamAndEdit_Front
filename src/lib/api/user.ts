import axios from "axios";
import { getCookie } from "../utils/cookie";



export const getUserInfo = async () => {
    const accessToken = getCookie('CAE_accessToken')
    const response = await axios({
        method: "GET",
        url: "/user",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.data)
    .catch(e => console.log(e));
    return response;
}