import { useParams } from "react-router-dom";
import axios from "axios";
import { useState, useEffect } from "react";
import dummyImage from '../assets/Dummy.png';
import Post from "../components/post";

const Profile = () => {
    const [profilePic, setProfilePic] = useState(dummyImage);
    const [username, setUserName] = useState("");
    const [isExpert, setIsExpert] = useState(false);
    const [dept, setDept] = useState("GVMC");
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [posts, setPosts] = useState([]);
    const apiurl = 'http://127.0.0.1:8000';
    const access = localStorage.getItem("access_token");
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
        axios.get(apiurl+'/user/'+params.username+'/posts')
        .then((resp) => {
            setPosts(resp.data);
        })
        .catch((error) => {
            console.log(error.message);
        });
    }, [params.username]);

    return (
        <div className="p-2 h-[100vh] w-[60vw] bg-[#474B4F] flex flex-col space-y-2 m-auto border-solid border-2 rounded-lg border-[#86C232]">
            <div className="flex gap-3">
                <img className="rounded-full object-cover h-[100px] w-[100px]" src={profilePic} alt="pp" />
                <div className="flex flex-col">
                    <div className="flex justify-between w-[600px]">
                        <p>{username}</p>
                        <button>Follow</button>
                    </div>
                    {isExpert && <p>{dept}</p>}
                    <div className="flex gap-3">
                        <span>Followers {followers.length}</span>
                        <span>Following {following.length}</span>
                    </div>
                </div>
            </div>
            <div className="flex flex-col">
                {posts.map((eachPost, index) => (
                    <Post key={index} postData={eachPost} username={username} profilePic={profilePic}/>
				))}
            </div>
        </div>
    );
}

export default Profile;
