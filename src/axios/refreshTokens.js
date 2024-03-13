import axios from "./axios"
import useAuth from "./useAuth"

//end point =/user/token/refresh/ 
// response.data.refresh

const RefreshToken = () => {
    const { setAuth } = useAuth()
    const refresh = async () => {
        const response = await axios.get("/user/token/refresh/", {
            withCredentials: true
        })
        setAuth(previous => {
            return { ...previous, accessToken: response.data.access }
        })
        return response.data.access
    }
    return refresh
}

export default RefreshToken