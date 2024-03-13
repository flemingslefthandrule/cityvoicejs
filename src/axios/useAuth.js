import { useContext, useDebugValue } from "react"
import { AuthContext } from "./authProvider"

const useAuth=()=>{
    const {auth} = useContext(AuthContext)
    useDebugValue(auth,auth => auth.user? "Logged In":"Error in Log In")
    return useContext(useAuth)
}
export default useAuth