import { useEffect, useState } from "react"


const Following = (props) => {
    const [isPosts, setIsPosts] = useState(true)

    useEffect(() => {
        setIsPosts(props.isPosts)
    }, [props])

    return (
        <div>
            Following
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
                        polls
                        {/* {taggedPosts && taggedPosts.map((eachPost, index) => (
                            <PostPreview key={index} photo={dummyImage} author={eachPost.postid.split('-')[0]} title={eachPost.title} body={eachPost.body} />
                        ))} */}
                    </>
                }
            </div>
        </div>
    )
}

export default Following