import axios from 'axios';
import { getCookie } from "../utils/cookie";

export const getWorkSpaceInfo = async (id:string) => {
    const accessToken = getCookie('CAE_accessToken')
    const response = await axios({
        method: "GET",
        url: `/workspace/${id}`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        }
    })
    .then(res => res.data)
    .catch(e => {
        const {data}  = e.response;
        return data;
    });
    return response;
}

export const getMemberList = async (id: number | string) => {
    const accessToken = getCookie('CAE_accessToken')
    const response = await axios({
        method: "GET",
        url: `/workspace/${id}/users`,
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