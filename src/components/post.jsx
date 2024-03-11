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

    return (
        <div className="flex flex-col w-full border-black rounded-md overflow-hidden">
            <div className="h-[56px] w-full flex flex-row p-2 bg-[#61892F]">
                <img src={profilePic} width={'40px'} height={'40px'} alt="pp" className='rounded-[50%] object-cover' />
                <p className='flex-1 self-center'>{username}</p>
                <span>{time}</span>
            </div>
            <p className="font-bold">{title}</p>
            <p>{body}</p>
            <div className="flex gap-3">
                <span>{upVotes}</span>
                <span>{downVotes}</span>
                <span>NoOfcomments</span>
                <span>{label}</span>
            </div>
        </div>
    )
}

export default Post