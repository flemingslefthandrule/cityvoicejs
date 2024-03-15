

const Option = (props) => {
    const opt = "Option " + props.index;
    return (
        <>
            <input type="text" name={opt} placeholder={opt} />
        </>
    )
}

export default Option