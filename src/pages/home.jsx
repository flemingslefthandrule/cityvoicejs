import React from 'react'
import { useNavigate } from 'react-router-dom';

const Home = () => {
    const navigate = useNavigate();

    const handleLogout = ()=> {
        localStorage.clear();
        window.location.reload();
    }
    return (
        <div>
            <h1>home</h1>
            <button onClick={handleLogout}>Logout</button>
        </div>
    )
}

export default Home