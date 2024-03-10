import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import dummyImage from '../assets/Dummy.png';

const Profile = () => {
    const [profilePic, setProfilePic] = useState(dummyImage);
    const [username, setUserName] = useState("");
    const [isExpert, setIsExpert] = useState(false);
    const [dept, setDept] = useState("GVMC");
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const apiurl = 'http://127.0.0.1:8000';
    const access = localStorage.getItem("access");
    const params = useParams();

    useEffect(() => {
        axios.get(apiurl+'/user/'+params.username+'/')
        .then((resp) => {
            setUserName(resp.data.username)
            setIsExpert(resp.data.is_expert);
            setFollowing(resp.data.following);
            setFollowers(resp.data.followers);
        })
        .catch((error) => {
            console.log(error.message);
        });
        // axios.get(apiurl+'/user/'+params.username+'/posts/',{
        //     headers: {
        //         'Authorization': `JWT ${access}`,
        //     },
        // })
        // .then((resp) => {
        //     console.log(resp.data);
        // })
        // .catch((error) => {
        //     console.log(error.message);
        // });
    }, [params.username]);

    return (
        <div className="p-20 bg-[#474B4F] flex flex-col items-center space-y-5 max-w-fit m-auto border-solid border-2 rounded-lg border-[#86C232]">
            <img className="rounded-full object-cover h-[100px] w-[100px]" src={profilePic} alt="pp" />
            <p>{username}</p>
            {isExpert && <p>{dept}</p>}
            <div className="flex gap-3">
                <span>Followers {followers.length}</span>
                <span>Following {following.length}</span>
            </div>

        </div>
    );
}

export default Profile;
