import React, { useContext, useEffect, useState } from "react";
import { Link, useNavigate } from 'react-router-dom';
import axios from "../../axios/axios";
import { AuthContext } from '../../axios/authProvider';
import Card from "../../ui/card"
import Button from "../../ui/button"
import { Auth, AuthLeft, AuthRight } from "./auth"

const Signup = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();

    const [username, setUsername] = useState("")
    const [password,setPassword] = useState("")
    const [mobile, setMobile] = useState("")
    const [isexpert, setIsexpert] = useState("false")

    useEffect(() => {
        if (auth !== null && auth.refreshToken !== null && auth.refreshToken !== undefined) {
            navigate("/");
        }
    }, [auth]);


    const handleSubmit = async () => {
        const userData = {
            'username': username,
            'phone': mobile,
            'is_expert': isexpert,
            'password': password
        }
        console.log(userData);
        await axios.post('/user/register/', userData)
            .then(function (response) {
                console.log(response);
                setAuth({
                    refreshToken: response.data.refresh,
                    accessToken: response.data.access,
                    username: response.data.username
                })
            })
            .catch(function (error) {
                console.log(error);
            });
    }
    return (
        <div className="bg-gray-900 w-screen h-screen">
            <Auth>
                <AuthLeft className="flex items-center justify-center">
                    Register your credentials here
                </AuthLeft>
                <AuthRight className="flex items-center justify-center">
                <Card className="bg-gray-800 w-full flex flex-col gap-2">
                    <p>Username</p>
                    <input type="text" placeholder="username" value={username} onChange={(event) => setUsername(event.target.value)} className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
                    <p>Password</p>
                    <input type="password" placeholder="password" value={password} onChange={(event) => setPassword(event.target.value)} className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
                    <p>Mobile</p>
                    <input type="text" placeholder="mobile" value={mobile} onChange={(event) => setMobile(event.target.value)} className="w-full rounded-lg bg-gray-700 py-2 px-4 placeholder-gray-500 focus:outline-none focus:ring" />
                    {/* todo : is expert */}
                    <Button onClick={handleSubmit} className="mt-2">Sign Up</Button>
                    <div className="p-2 flex items-center gap-2 text-gray-500">
                        <div className="h-0 grow border-t-[1px] border-gray-500"></div>
                        <p>or</p>
                        <div className="h-0 grow border-t-[1px] border-gray-500"></div>
                    </div>
                    <Button variant="secondary" onClick={()=>{navigate("/login")}}>Login</Button>
                </Card>
                </AuthRight>
            </Auth>
        </div>
    )
}

export default Signup