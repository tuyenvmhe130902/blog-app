import axios from "axios";
export const LoginApi = async (data: any) => {

    return axios({
        method: "post",
        url: "http://localhost:8080/auth/login",
        data: data,
    })
        .then(function (response) {
            //handle success
            return response.data
        })
        .catch(function (error) {
            //handle error
            console.log(error, "1111111111111111")
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

