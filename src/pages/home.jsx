import React from 'react'
import { Link, useNavigate } from 'react-router-dom';
import RightHome from '../components/rightHome';
import MiddleHome from '../components/middleHome';
import LeftHome from '../components/leftHome';

const Home = () => {

    const myUserName = localStorage.getItem("username");
    
    return (
        <div className='h-[100vh] w-[100vw] flex'>
            <LeftHome />
            <MiddleHome />
            <RightHome />
        </div>
    )
}

export default Home