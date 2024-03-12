

const ListOfUsers = (props) => {

    const list = props.list;

    const tagUser = (username) => {
        props.setTag(username);
        props.setSearchResults([]);
    }

    return (
        <div className="w-full rounded">
            {list && list.map((user, index) => (
                <div key={index} onClick={()=>{tagUser(user.name)}} className="flex gap-2 p-2 border-2 border-slate-700 m-2 text-slate-700 hover:bg-slate-700 hover:text-slate-300 cursor-pointer">
                    {user.name ?(
                    <>
                        <img src={user.photo} alt="" className="w-[1.5em] rounded-[50%]"/>
                        {user.name}
                    </> 
                    ):(
                        <>
                            {user.err}
                        </> 
                    )}
                </div>
            ))}
        </div>
    )
}

export default ListOfUsers