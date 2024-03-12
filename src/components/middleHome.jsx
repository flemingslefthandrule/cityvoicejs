import CreatePost from "./createPost"
import NavBtn from "./navBtn"


const MiddleHome = () => {

    return (
        <div className="w-[60%] h-[100%] flex flex-col border-x-2 border-x-solid border-x-gray-100">
            <div className="flex">
                <NavBtn btnName = "Post" />
                <NavBtn btnName = "Pole" />
            </div>
            <CreatePost />
        </div>
    )
}

export default MiddleHome