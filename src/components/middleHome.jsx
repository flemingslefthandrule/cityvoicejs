import { useEffect, useState } from "react"
import CreatePost from "./createPost"
import LocalFeed from "./localFeed";
import Following from "./following";
import GlobalFeed from "./globalFeed";


const MiddleHome = (props) => {

    const [isCreating, setIsCreating] = useState(false);
    const [feed, setFeed] = useState('following');
    const [isPosts, setIsPosts] = useState(true);

    useEffect(()=>{
        setFeed(props.whichFeed)
    },[props])

    return (
        <div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
            <div className="flex">
            <div onClick={() => {setIsPosts(true)}} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Posts</div>
            <div onClick={() => {setIsPosts(false)}} className='w-full p-2 text-center border-gray-100 border-solid rounded-md border-2 cursor-pointer'>Poles</div>
            </div>
            {isCreating ? (
                <CreatePost setIsCreating={setIsCreating} />
            ) : (
                <input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post" />
            )}
            {(feed=="following") && <Following isPosts={isPosts}/>}
            {(feed=="localFeed") && <LocalFeed isPosts={isPosts}/>}
            {(feed=="globalFeed") && <GlobalFeed isPosts={isPosts}/>}
        </div>
    )
}

export default MiddleHome