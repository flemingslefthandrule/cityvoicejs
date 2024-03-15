import { useState } from "react";
import Dummy from '../assets/Dummy.png'


const Post = (props) => {
    const postData = props.postData;
    const profilePic = props.profilePic;
    const username = props.username;
    const time = postData.created_at;
    const title = postData.title;
    const body = postData.body;
    const upVotes = postData.upvotes;
    const downVotes = postData.downvotes;
    const label = postData.label.name;

    const handleUpvote = () => {
        
    }

    const handleDownvote = () => {
        
    }

    return (
        <div className="flex flex-col w-full bg-gray-700 rounded-md overflow-hidden p-2 my-2">
            <div className="h-[56px] w-full flex gap-2 p-2 bg-gray-600">
                <img src={profilePic} width={'40px'} height={'40px'} alt="pp" className='rounded-[50%] object-cover' />
                <p className='flex-1 self-center'>{username}</p>
                <span className="self-center">{time}</span>
            </div>
            <p className="font-bold text-3xl">{title}</p>
            <p className="text-lg">{body}</p>
            <div className="flex gap-3">
                <button onClick={handleUpvote}>^</button>
                <span>{upVotes}</span>
                <button onClick={handleDownvote}>v</button>
                <span>{downVotes}</span>
                <span>NoOfcomments</span>
                {label && <span>{label}</span>}
            </div>
        </div>
    )
}

export default Post