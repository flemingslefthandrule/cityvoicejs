import React, { useContext, useEffect, useState } from 'react'
import { Link, useNavigate } from 'react-router-dom';
import axios from '../axios/axios';
import { AuthContext } from '../axios/authProvider';

const Signup = () => {

    const { auth, setAuth } = useContext(AuthContext);
    const navigate = useNavigate();
    useEffect(() => {
        if (auth.refreshToken !== null && auth.refreshToken !== undefined) {
          navigate("/");
        }
    }, [auth]);


    const handleSubmit = async (e) => {
        e.preventDefault();
        const userName = e.target[0].value;
        const mobileNum = e.target[1].value;
        const isExpert = e.target[2].value;
        const password = e.target[3].value;
        const userData = {
            'username' : userName,
            'phone' : mobileNum,
            'is_expert' : isExpert,
            'password' : password
        }
        console.log(userData);
        await axios.post(apiurl+'/user/register/', userData)
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
        <div className="signup p-20 bg-[#474B4F] flex flex-col space-y-5 max-w-fit m-auto border-solid border-2 rounded-lg border-[#86C232]">
            <h2 className='text-[1.6em] text-[#61892F]'>Sign Up</h2>
            <form onSubmit={handleSubmit} className="flex flex-col space-y-5">
                <input className='p-2 border-b-2 border-b-[#86C232] focus:outline-none' type="text" name="userName" placeholder='Enter username' />
                <input className='p-2 border-b-2 border-b-[#86C232] focus:outline-none' type="number" name="mobileNum" placeholder='Enter Mobile Number' />
                <dir className="flex gap-2">
                    <label htmlFor="isExpert">Are you a govt official</label>
                    <input type="checkbox" name="isExpert" id="isExpert"/>
                </dir>
                <input className='p-2 border-b-2 border-b-[#86C232] focus:outline-none' type="password" name="password" placeholder='Set password' />
                <button className='rounded-md border border-transparent py-2 px-4 text-base font-semibold font-inherit bg-[#1a1a1a] cursor-pointer transition-border-color duration-250 overflow-hidden text-[#86C232] focus:outline-none focus-visible:ring-4 focus-visible:ring-auto focus-visible:ring-[#86C232] hover:border-[#86C232]'>Sign Up</button>
            </form>
            <span>already have an account ? <Link className='font-medium text-[#646cff] no-underline hover:text-[#535bf2]' to="/login">Log In</Link></span>
        </div>
    );
}

export default Signup