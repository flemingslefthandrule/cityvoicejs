import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { AuthContext } from '../axios/authProvider';



const Login = () => {

    const { auth, setAuth } = useContext(AuthContext)
    const navigate = useNavigate();
    useEffect(() => {
        if (auth && auth.refreshToken !== null && auth.refreshToken !== undefined) {
          navigate("/");
        }
    }, [auth]);

    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const password = e.target[1].value;
        const userData = {
            'username': userName,
            'password': password
        }
        await axios.post('/user/login/', userData)
            .then(function (response) {
                console.log(response);
                setAuth({
                    refreshToken: response.data.refresh,
                    accessToken: response.data.access,
                    username: response.data.username
                })
                console.log(auth);
            })
            .catch(function (error) {
                console.log(error);
            });
    }

    return (
        <div className="signup p-20 bg-[#474B4F] flex flex-col space-y-5 max-w-fit m-auto border-solid border-2 rounded-lg border-[#86C232]">
            <h2 className='text-[1.6em] text-[#61892F]'>Log in</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <input className='p-2 border-b-2 border-b-[#86C232] focus:outline-none' type="text" name="userName" placeholder='Enter username' />
                <input className='p-2 border-b-2 border-b-[#86C232] focus:outline-none' type="password" name="password" placeholder='Set password' />
                <button className='rounded-md border border-transparent py-2 px-4 text-base font-semibold font-inherit bg-[#1a1a1a] cursor-pointer transition-border-color duration-250 overflow-hidden text-[#86C232] focus:outline-none focus-visible:ring-4 focus-visible:ring-auto focus-visible:ring-[#86C232] hover:border-[#86C232]'>Login</button>
            </form>
            <span>don't have an account ? <Link className='font-medium text-[#646cff] no-underline hover:text-[#535bf2]' to="/signup">Sign Up</Link></span>
        </div>
    );
}

export default Login