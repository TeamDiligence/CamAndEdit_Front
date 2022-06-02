import axios from "axios";
import { getCookie } from "../utils/cookie";



export const getUserInfo = async () => {
    const accessToken = getCookie('CAE_accessToken')
    // console.log(accessToken);
    const response = await axios({
        method: "GET",
        url: "/user",
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.data)
    .catch(e => {
        const {data}  = e.response;
        console.log(data);
        return ;
    });
    return response;
}

export const createWorkSpace = async (name:string) => {
    const accessToken = getCookie('CAE_accessToken')
    const response = await axios({
        method: "POST",
        url: "/workspace",
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: {
            name: name
        }
    })
        .then(res => {
            const { data } = res;
            return data;
        })
        .catch(e => {
            const { data } = e.response;
            return data;
        });
    return response;
}