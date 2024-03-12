import { useState } from 'react'
import Dummy from '../assets/Dummy.png'
import { useNavigate } from 'react-router-dom';

const LeftHome = (props) => {

    const navigate = useNavigate();

    const [myProfilePic, setMyProfilePic] = useState(Dummy);
    const myUserName = localStorage.getItem('username');

    if(localStorage.getItem('photo')) {
        setMyProfilePic(localStorage.getItem('photo'))
    }

    const handleLogout = ()=> {
        localStorage.clear();
        window.location.reload();
    }


    return (
        <div className="w-[20%] h-[100%] flex flex-col p-2 items-center space-y-2">
            <p className="font-bold text-xl">City Voice</p>
            <div onClick={()=>{navigate('/profile/'+myUserName)}} className="flex gap-2 items-center p-2 border-gray-100 border-solid rounded-md border-2 cursor-pointer">
                <img className='rounded-full w-[50px] h-[50px]' src={myProfilePic} alt="pp" />
                <span className=''>{myUserName}</span>
            </div>
            <div onClick={() => {props.setFeed('following')}} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Following</div>
            <div onClick={() => {props.setFeed('localFeed')}} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Local Feed</div>
            <div onClick={() => {props.setFeed('globalFeed')}} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Global Feed</div>
            <div className='grow'></div>
            <button onClick={handleLogout} className=''>Log Out</button>
        </div>
    )
}

export default LeftHome