import { useState } from "react"
import toast from "react-hot-toast"
import axios from "axios"
import { useAuthContext } from "../context/AuthContext"


export const useLogout = () => {
    const [isLoading, setIsLoading] = useState(false)
    const {authUser, setAuthUser} = useAuthContext()

    const logout = async () => {
        setIsLoading(true)
        try{
            const res = await axios.post("/api/auth/logout")
            const data = res.data
            if(data.message){
                localStorage.removeItem("whisper-wire-user")
                setAuthUser(null)
            }
            if(data.error){
                toast.error(data.error)
                throw new Error(data.error)
            }
        }catch(e){
            toast.error(e.message)
        }finally{
            setIsLoading(false)
        }
    }

    return {isLoading, logout}
}