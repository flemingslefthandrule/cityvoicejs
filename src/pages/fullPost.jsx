import { useParams } from "react-router-dom";
import LeftHome from "../components/leftHome";
import RightHome from "../components/rightHome";
import { useEffect, useState } from "react";
import axios from "../axios/axios";
import Dummy from '../assets/Dummy.png'
import Post from "../components/post";


const FullPost = () => {

    const params = useParams();
    const postId = params.postid;
    const [postData, setPostData] = useState({postid: postId});
    const [profilePic, setProfilePic] = useState(Dummy)

    useEffect(() => {
        axios.get('/post/'+postId+'/')
        .then((resp) => {
            setPostData(prev => ({
                ...prev,
                ...resp.data
            }));
        })
    },[]);

    
    return (
        <div className='h-[100vh] w-[100vw] flex'>
            <LeftHome />
            <div className="middle h-[100vh] w-[60%] p-2 flex flex-col bg-gray-900 overflow-auto rounded-3xl">
                <Post postData={postData} username={postData.postid.split('-')[0]} profilePic={profilePic}/>
            </div>
            <RightHome />
        </div>
    );
}

export default FullPost;
