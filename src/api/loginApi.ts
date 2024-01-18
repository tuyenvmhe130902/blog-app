import axios from "axios";
export const LoginApi = async (data: any) => {
    return  axios({
        method: "post",
        url: "http://localhost:8080/auth/login",
        data: data,
        headers: {"Access-Control-Allow-Origin": "*"}
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
        url: "http://localhost:8080/auth/register",
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

