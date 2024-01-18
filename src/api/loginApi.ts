import axios from "axios";
export const LoginApi = async (data: any) => {
    return  axios({
        method: "post",
        url: "https://dull-cyan-drill-fez.cyclic.app/auth/login",
        data: data,
    })
        .then(function (response) {
            //handle success
            return response
        })
        .catch(function (error) {
            //handle error
            return error.response
        });
}

export const RegisterApi = (data: any) => {
    axios({
        method: "post",
        url: "https://dull-cyan-drill-fez.cyclic.app/auth/register",
        data: data,
    })
        .then(function (response) {
            //handle success
            console.log(response);
        })
        .catch(function (response) {
            //handle error
            console.log(response);
        });
}

