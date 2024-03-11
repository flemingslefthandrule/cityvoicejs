import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = ()=> {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div className='h-[100vh] w-[60vw]'>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home