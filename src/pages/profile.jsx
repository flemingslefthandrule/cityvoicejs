import { useNavigate, useParams } from "react-router-dom";
import { useState, useEffect, useContext } from "react";
import dummyImage from '../assets/Dummy.png';
import Post from "../components/post";
import axios from "../axios/axios";
import PostPreview from "../components/postPreview";
import { AuthContext } from "../axios/authProvider";
import AuthAxios from "../axios/Auth_axios";

const Profile = () => {
    const cat = AuthAxios();
    const csrftoken = window.CSRF_TOKEN;
    const [profilePic, setProfilePic] = useState(dummyImage);
    const [username, setUserName] = useState("");
    const [isExpert, setIsExpert] = useState(false);
    const [dept, setDept] = useState("GVMC");
    const [following, setFollowing] = useState([]);
    const [followers, setFollowers] = useState([]);
    const [posts, setPosts] = useState([]);
    const params = useParams();
    const myUserName = localStorage.getItem("username");
    const [isFollowing, setIsFollowing] = useState(false);
    const [buttonText, setButtonText] = useState("");
    const navigate = useNavigate();
    const [isPosts, setIsPosts] = useState(true);
    const [taggedPosts, setTaggedPosts] = useState([]);
    const {auth, setAuth} = useContext(AuthContext);

    useEffect(() => {
        axios.get('/user/' + params.username + '/')
            .then((resp) => {
                setUserName(resp.data.username)
                setIsExpert(resp.data.is_expert);
                setFollowing(resp.data.following);
                setFollowers(resp.data.followers);
                for (let i = 0; i < resp.data.followers.length; i++) {
                    if (resp.data.followers[i].username == myUserName) {
                        setIsFollowing(true);
                        break;
                    }
                }
            })
            .catch((error) => {
                console.log(error.message);
            });
        axios.get('/user/' + params.username + '/posts/')
            .then((resp) => {
                setPosts(resp.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
        axios.get('/user/' + params.username + '/tagged/')
            .then((resp) => {

                setTaggedPosts(resp.data);
            })
            .catch((error) => {
                console.log(error.message);
            });
    }, [params.username, isPosts]);

    useEffect(() => {
        if (isFollowing) {
            setButtonText("Unfollow");
        }
        else {
            setButtonText("Follow");
        }
    }, [isFollowing])

    const handleFollow = async () => {

        if (isFollowing) {
            cat.post('/user/' + username + '/unfollow/')
                .then((resp) => {
                    console.log(resp.data);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }
        else {
            cat.post('/user/' + username + '/follow/')
                .then((resp) => {
                    console.log(resp.data);
                    window.location.reload();
                })
                .catch((error) => {
                    console.log(error.message);
                })
        }
    }

    const handleLogout = () => {
        setAuth(null);
        window.location.reload();
    }

    return (
        <div className="h-[100vh] w-[60vw] bg-[#474B4F] flex flex-col space-y-2 m-auto border-solid border-2 rounded-lg border-[#86C232] overflow-auto">
            <div className="flex gap-3 border-b-solid border-b-gray-100 border-b-2 p-2">
                <img className="rounded-full object-cover h-[100px] w-[100px]" src={profilePic} alt="pp" />
                <div className="flex flex-col w-[85%]">
                    <div className="flex justify-between">
                        <p>{username}</p>
                        {!(myUserName == username) && <button onClick={handleFollow}>{buttonText}</button>}
                        {(myUserName == username) && <button onClick={handleLogout}>Log Out</button>}
                    </div>
                    {isExpert && <p>{dept}</p>}
                    <div className="flex gap-3">
                        <span>Followers {followers.length}</span>
                        <span>Following {following.length}</span>
                    </div>
                </div>
            </div>
            <div className="flex p-2">
                <div onClick={() => { setIsPosts(true) }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
                <div onClick={() => { setIsPosts(false) }} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Tagged Posts</div>
            </div>
            <div className="flex flex-col p-2">
                {isPosts ? 
                    <>
                        {posts && posts.map((eachPost, index) => (
                            <Post key={index} postData={eachPost} username={username} profilePic={profilePic} />
                        ))}
                    </>
                :
                    <>
                        {taggedPosts && taggedPosts.map((eachPost, index) => (
                            <PostPreview key={index} photo = {dummyImage} author = {eachPost.postid.split('-')[0]} title = {eachPost.title} body = {eachPost.body} />
                        ))}
                    </>
                }
            </div>
        </div>
    );
}

export default Profile;
