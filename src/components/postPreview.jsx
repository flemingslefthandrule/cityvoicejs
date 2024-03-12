

const PostPreview = (props) => {

    return (
        <div className="flex flex-col p-2 space-y-2">
            <div className="flex gap-2 items-center">
                <img className="rounded-full w-[40px] h-[40px]" src={props.photo} alt="pp" />
                <p>{props.author}</p>
            </div>
            <p>{props.title}</p>
            <p>{props.body}</p>
        </div>
    )
}

export default PostPreview  