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



export const patchUserInfo = async ({ name, description, beforeUserData }: { name?: string, description?: string, beforeUserData: {name:string,description:string} }) => { 
    const accessToken = getCookie('CAE_accessToken')
    const data = {
        name: name ? name : beforeUserData.name,
        description : description ? description :beforeUserData.description
    }
    const response = await axios({
        method: "PATCH",
        url: "/user",
        headers: {
            Authorization: `Bearer ${accessToken}`
        },
        data: {
            "name": name,
            "description": description
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