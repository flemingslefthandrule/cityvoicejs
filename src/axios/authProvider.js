import { createContext, useEffect, useState } from "react"

const AuthContext = createContext({})

export const  AuthProvider = ({children}) => {
    const [auth , setAuth] = useState({
        refreshToken : localStorage.getItem("refresh_token"),
        accessToken : localStorage.getItem("access_token"),
        username : localStorage.getItem("username")
    })
    useEffect(() => {
        localStorage.clear()
        localStorage.setItem("refresh_token",auth.refreshToken)
        localStorage.setItem("access_token",auth.accessToken)
        localStorage.setItem("username",auth.username)
    },[auth])
    return (
        <AuthContext.Provider value = {{auth,setAuth}}>
            {children}
        </AuthContext.Provider>
    )
}