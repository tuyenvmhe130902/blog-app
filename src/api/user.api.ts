import axios from "axios";

export const getAllUsers = async (query: any) => {
    return await axios({
        method: 'GET',
        url: `http://10.1.38.64:8080/users`,
        params: query,
    }).catch(function (error) {
        console.log(error)
    })
}