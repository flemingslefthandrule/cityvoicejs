import { useEffect, useState } from "react";


const GlobalFeed = (props) => {

    const [isPosts, setIsPosts] = useState(true);

    useEffect(() => {
        setIsPosts(props.isPosts);
    }, [props]);

    return (
        <div>
            GlobalFeed
            <div className="flex flex-col p-2">
                {isPosts ?
                    <>
                        posts
                        {/* {posts && posts.map((eachPost, index) => (
                            <Post key={index} postData={eachPost} username={username} profilePic={profilePic} />
                        ))} */}
                    </>
                    :
                    <>
                        poles
                        {/* {taggedPosts && taggedPosts.map((eachPost, index) => (
                            <PostPreview key={index} photo={dummyImage} author={eachPost.postid.split('-')[0]} title={eachPost.title} body={eachPost.body} />
                        ))} */}
                    </>
                }
            </div>
        </div>
    )
}

export default GlobalFeed