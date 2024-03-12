import { Link, useNavigate } from 'react-router-dom';
import Dummy from '../assets/Dummy.png'
import { useState } from 'react';
import cat from '../axios'

const RightHome = () => {

    const navigate = useNavigate();
    const [searchName, setSearchName] = useState('');
    const [searchResults, setSearchResults] = useState([]);
    const apiurl = 'http://localhost:8000';

    const handleSearchChange = (e) => {
        setSearchName(e.target.value);
    }

    const handleSearch = (e) => {
        if(e.code=='Enter') {
            cat.get(apiurl+'/user/whois/'+searchName+'/')
            .then((resp) => {
                setSearchResults(resp.data);
            })
            .catch((err) => {
                console.log(err.message);
            })
        }
    }

    return (
        <div className="w-[20%] h-[100% p-2 items-center">
            <input className="rounded-[100px] p-2 w-full" type="text" name='search' id='search' placeholder='Search' onChange={handleSearchChange} onKeyDown={handleSearch} />
            <div className="w-full rounded">
                {searchResults && searchResults.map((user, index) => (
                    <div key={index} onClick={()=>{navigate("/profile/"+user.name)}} className="flex gap-2 p-2 border-2 border-slate-700 m-2 text-slate-700 hover:bg-slate-700 hover:text-slate-300 cursor-pointer">
                        {user.name ?(
                        <>
                            <img src={user.photo || Dummy} alt="" className="w-[1.5em] rounded-[50%]"/>
                            {user.name}
                        </> 
                        ):(
                            <>
                                {user.err}
                            </> 
                        )}
                    </div>
                ))}
                {searchResults && <Link>search for posts</Link>}
            </div>
        </div>
    )
}

export default RightHome