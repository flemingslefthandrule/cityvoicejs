import { useEffect, useState } from "react"
import CreatePost from "./createPost"
import LocalFeed from "../pages/localFeed";
import Following from "../pages/following";
import GlobalFeed from "../pages/globalFeed";


const MiddleHome = (props) => {

    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 bg-gray-700">
            {isCreating ? (
                <CreatePost setIsCreating={setIsCreating} />
            ) : (
                <input className="rounded-[100px] p-2" onFocus={() => { setIsCreating(true) }} type="text" placeholder="Create a post or a poll" />
            )}
        </div>
    )
}

export default MiddleHome