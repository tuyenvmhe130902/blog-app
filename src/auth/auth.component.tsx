import {FC, Fragment, useState} from "react";
import { useForm} from "react-hook-form";
import {LoginApi, RegisterApi} from "../api/loginApi";
import { useNavigate } from 'react-router-dom';
import {getAllUsers} from "../api/user.api";


const AuthComponent: FC<any> = () => {
    const [email, setEmail] = useState("")
    const [passWord, setPassWord] = useState("")
    const [isRegister, setIsRegister] = useState(false)
    const [message, setMessage] = useState(" ")
    const navigate = useNavigate();
    const {
        register,
        handleSubmit
    } = useForm({
        mode: "all",
        defaultValues:  {
            email: '',
            password: '',
        },
    })
    const onsubmit = (data: any) => {
        if (data) {
            if(isRegister){
                RegisterApi(data)
                setIsRegister(false)
            }
            else {
                const fetchData = async () => {
                    try {
                        const result: any = await LoginApi(data);
                        if(result.status === 401){
                            navigate('/')
                            setMessage("username or password is error")
                        }
                        else {
                            navigate('/users')
                        }
                    }
                    catch (error: any) {
                        console.log(error, "error")
                    }

                }
                fetchData().then()
            }
        }
    }

    return (
        <Fragment>
            <div className="container">
                <div style={{
                    fontSize: '25px',
                    paddingBottom: '10px'
                }}>
                    {isRegister ? "Register" : "Login"}
                </div>
                    <form onSubmit={handleSubmit(onsubmit)}>
                        <div className="form_input">
                            <input
                                {...register("email")}
                                value={email}
                                defaultValue="test"
                                onChange={(event) => setEmail(event.target.value)}
                            />

                            <input
                                {...register("password")}
                                value={passWord}
                                defaultValue="test"
                                onChange={(event) => setPassWord(event.target.value)}
                            />
                        </div>
                        <div style={{paddingBottom : "10px", height:"20px", color:"red"}}>{isRegister ? "" : message}</div>
                        <div style={{display: "flex", justifyContent: "center", alignItems: "center"}}>
                            <div className="btn-login">
                                <input type="submit" value={isRegister ? "Register" : "Login"}/>
                            </div>
                            <div style={{
                                textDecoration: "underline",
                                color: "blue"
                            }}
                            onClick={() => {
                                setIsRegister(true)
                                setMessage("")
                                setEmail("")
                                setPassWord("")
                            }}
                            >{isRegister ? "" : "Register"}</div>
                        </div>
                    </form>
            </div>
        </Fragment>
    )
}

export default AuthComponent;