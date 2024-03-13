import { useContext, useDebugValue } from "react"
import { AuthContext } from "./authProvider"

const useAuth=()=>{
    const {Auth} = useContext(AuthContext)
    useDebugValue(Auth,Auth => Auth.user? "Logged In":"Error in Log In")
    return useContext(useAuth)
}
export default useAuth