import { useEffect, useState } from "react"
import CreatePost from "./createPost"
import LocalFeed from "./localFeed";
import Following from "./following";
import GlobalFeed from "./globalFeed";


const MiddleHome = (props) => {

    const [isCreating, setIsCreating] = useState(false);
    const [feed, setFeed] = useState('following');

    useEffect(()=>{
        setFeed(props.whichFeed)
    },[props])

    return (
        <div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 bg-gray-700">
            {isCreating ? (
                <CreatePost setIsCreating={setIsCreating} />
            ) : (
                <input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
            )}
            {(feed=="following") && <Following />}
            {(feed=="localFeed") && <LocalFeed />}
            {(feed=="globalFeed") && <GlobalFeed />}
        </div>
    )
}

export default MiddleHome