import axios from 'axios';
import { getCookie } from "../utils/cookie";



export const sendMail = async ({id,email}:{id:number, email:string}) => {
    const accessToken = getCookie('CAE_accessToken')
    const response = await axios({
        method: "POST",
        url: `/workSpace/${id}/invite`,
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: {
            email:`${email}`
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