import { useState } from "react"
import CreatePost from "./createPost"
import NavBtn from "./navBtn"


const MiddleHome = () => {

    const [isCreating, setIsCreating] = useState(false);

    return (
        <div className="p-2 w-[60%] h-[100%] flex flex-col space-y-2 border-x-2 border-x-solid border-x-gray-100">
            <div className="flex">
                <NavBtn btnName = "Post" />
                <NavBtn btnName = "Pole" />
            </div>
            {isCreating ? (
                <CreatePost setIsCreating = {setIsCreating}/>
            ):(
                <input className="rounded-[100px] p-2" onFocus={()=>{setIsCreating(true)}} type="text" placeholder="Create a post"/>
            )}
        </div>
    )
}

export default MiddleHome